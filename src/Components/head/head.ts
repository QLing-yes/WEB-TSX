import { raw, ConstructorEl, h } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";

const { href } = new URL('./', import.meta.url)

const template = raw`
<link rel="stylesheet" href="${href}head.css" />
<div class="head">
    <div class="img"></div>
    <span class="title"></span>
    <div class="box">
        <slot></slot>
    </div>
    <span class="to">更多</span>
    <div class="icon"></div>
</div>
`

const ElClass = ConstructorEl({ template }, HTMLElement)
//添加生命周期
export default class extends ElClass implements cycleEl {
    constructor() {
        super();
    }

    static get observedAttributes() { return ['_title']; }
    connectedCallback() { };
    disconnectedCallback() { };
    adoptedCallback() { };
    attributeChangedCallback(name: any, oldV: any, newV: any) {
        if (name == '_title') {
            const title = this._shadow.querySelector('.title');
            title.innerHTML = newV;
        }
    };
}
