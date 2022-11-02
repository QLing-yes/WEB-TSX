import { raw, ConstructorEl, h } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";

const { href, origin } = new URL('./', import.meta.url)
const img = origin + '/WEB-TSX/image/'
const template = raw`
<link rel="stylesheet" href="${href}card2.css" />
<div class="card2">
    <div class="imgBox">
        <img src="${img}/card/1.jpg">
        <div>
            <div class="icon1"></div>
            <span>999万</span>
            <div class="icon2"></div>
        </div>
    </div>
    <span id="txt"></span>
</div>
`

const ElClass = ConstructorEl({ template }, HTMLElement)
//添加生命周期
export default class extends ElClass implements cycleEl {
    constructor() {
        super();
    }

    static get observedAttributes() { return ['txt']; }
    connectedCallback() { };
    disconnectedCallback() { };
    adoptedCallback() { };
    attributeChangedCallback(name: any, oldV: any, newV: any) {
        if (name == 'txt') {
            const txt = this._shadow.querySelector('#txt');
            txt.innerHTML = newV;
        }
    };
}
