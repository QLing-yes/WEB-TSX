# WEB-TSX
- 原生web类似TSX写法
- VSCode插件推荐"lit-html"(模板语法高亮和提示)
```typescript
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
function Script(Shadow: ShadowRoot) {
  const idNum = Shadow.querySelector("#num");
  const title = Shadow.querySelector(".title");

  const content = ref({ num: 0 }, numEl);
  function numEl() {
    idNum.innerHTML = raw`<span>${content.num}</span>`
  }
  content.num++
  title.addEventListener('click', () => { content.num++ })
}

const ElClass = ConstructorEl({
  template,
  callback: Script
}, HTMLElement)
// export default ElClass;
//添加生命周期
export default class extends ElClass implements cycleEl {
  connectedCallback() { };
  disconnectedCallback() { };
  adoptedCallback() { };
  attributeChangedCallback(name: any, oldV: any, newV: any) { };
}

```
