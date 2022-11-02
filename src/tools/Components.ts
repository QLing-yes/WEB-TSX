export const raw = String.raw;

/** 字符串模板转Node元素
 * @param strEl html模板
 */
export function h(strEl: string) {
  const template = document.createElement("template");
  template.innerHTML = strEl;
  return template.content.cloneNode(true);
}
/** 添加css文件(直接模板里link标签也行的) */
export function style(el: ShadowRoot, href: string) {
  const linkElem = document.createElement('link');
  linkElem.setAttribute('rel', 'stylesheet');
  linkElem.setAttribute('href', href);
  el.appendChild(linkElem);
}

/** 创建简单元素类(建议implements cycleEl生命周期) */
export function ConstructorEl({ callback, styleUrl, template }: ConstructorEl, extend?: CustomElementConstructor) {
  const ConstructorElement = class extends (extend || HTMLElement) {
    public _shadow: ShadowRoot
    constructor() {
      super();
      const el = h(template);
      this._shadow = this.attachShadow({ mode: 'open' });

      if (styleUrl) style(this.shadowRoot, styleUrl);
      this.shadowRoot.appendChild(el);

      callback?.(this.shadowRoot);
    }
    /** 查询shadow父级直接子节" */
    _queryHostSub(CSSselector?: string) {
      const { host } = this._shadow;
      return host.querySelectorAll(`${host.localName} > ${CSSselector}`);
    }
  }
  return ConstructorElement;
}

export type ConstructorEl = {
  /** 模板组件字符串 */
  template: string
  /** css地址 */
  styleUrl?: string
  /** 创建时回调 */
  callback?: (ShadowRoot: ShadowRoot) => void
}
/** 组件生命周期 (class implements interface) */
export interface cycleEl {
  /** 首次被插入文档 DOM 时 */
  connectedCallback: () => void
  /** 文档从 DOM 中删除时 */
  disconnectedCallback: () => void
  /** 移动到新的文档时 */
  adoptedCallback: () => void
  /** 增加、删除、修改自身属性时 */
  attributeChangedCallback: (name: any, oldValue: any, newValue: any) => void
}