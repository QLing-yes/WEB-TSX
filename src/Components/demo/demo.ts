import { raw, ConstructorEl } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";

const { href } = new URL('./', import.meta.url)
let span = ''
for (let i = 0; i < 3; i++) { span += raw`<span>${i}</span>` }

const template = raw`
  ${span}
  <h1 class="h">
    <slot name="my-txt"></slot>
  </h1>
  <div>Demo</div>
  <link rel="stylesheet" href="${href}demo.css" />
  <style>
    div{
      color: rgb(43, 98, 226);
    }
  </style>
`

const ElClass = ConstructorEl({
  template,
  Callback: Script
}, HTMLElement)

function Script(Shadow: ShadowRoot) {
  console.log(Shadow);
}
// export default ElClass;
//添加生命周期
export default class extends ElClass implements cycleEl {
  connectedCallback() { };
  disconnectedCallback: () => void;
  adoptedCallback: () => void;
  attributeChangedCallback: (name: any, oldValue: any, newValue: any) => void;
}
