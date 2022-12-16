# WEB-TSX
- webComponents类似TSX写法
- TSX写法，单文件组件，响应式状态
- VSCode插件推荐"lit-html"(模板语法高亮和提示)
- demo:  https://qling-yes.github.io/WEB-TSX/

![image](https://user-images.githubusercontent.com/78684352/200495371-87aa4313-ce31-4fd3-8ba0-196e52e9fdec.png)

```typescript
//demo.ts
import { raw, ConstructorEl } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";

const { href } = new URL('./', import.meta.url)

const template = raw`
  <link rel="stylesheet" href="${href}demo.css" />
  <span class="title">
    <slot name="title"></slot>
  </span>
  <div id="num"></div>
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
    const idNum = Shadow.querySelector("#num");
    const title = Shadow.querySelector(".title");
    //ref可创建深(浅)对象代理
    const content = ref({ num: 0 }, numEl);
    numEl()
    function numEl() {
      idNum.innerHTML = raw`<span>${content.num}</span>`
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
```
