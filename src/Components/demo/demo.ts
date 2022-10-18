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
  numEl()
  function numEl() {
    idNum.innerHTML = raw`<span>${content.num}</span>`
  }
  title.addEventListener('click', () => { content.num++ })
}

const ElClass = ConstructorEl({
  template,
  callback: Script
}, HTMLElement)
// export default ElClass;
//添加生命周期
export default class extends ElClass implements cycleEl {
  static get observedAttributes() { return ['myprop']; }
  connectedCallback() { };
  disconnectedCallback() { };
  adoptedCallback() { };
  attributeChangedCallback(name: any, oldV: any, newV: any) {
    console.log(name,oldV,newV);
  };
}
