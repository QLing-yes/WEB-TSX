import { raw, ConstructorEl } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import ref from "../../tools/ref.js";

const { href } = new URL('./', import.meta.url)

const template = raw`
  <link rel="stylesheet" href="${href}demo.css" />
  <span class="title">
    <slot name="title"></slot>
  </span>
  <div id="num">
    <span></span>
  </div>
`

const ElClass = ConstructorEl({
  template,
  // callback: (Shadow: ShadowRoot)=> {}
}, HTMLElement)
// export default ElClass;
export default class extends ElClass implements cycleEl {
  constructor() {
    super();
    const Shadow = this._shadow;
    const idNum = Shadow.querySelector("#num > span");
    const title = Shadow.querySelector(".title");
    //ref可创建深(浅)对象代理
    const content = ref({ num: 0 }, numEl);
    numEl()
    function numEl() {
      idNum.textContent = `${content.num}`
    }
    title.addEventListener('click', () => { content.num++ })
    // 查询当前组件的父级下元素节点
    // this._queryHostSub(CSSselector?: string)
  }
  //生命周期
  static get observedAttributes() { return ['myprop']; }
  connectedCallback() { };
  disconnectedCallback() { };
  adoptedCallback() { };
  attributeChangedCallback(name: any, oldV: any, newV: any) {
    console.log(name, oldV, newV);
  };
}
