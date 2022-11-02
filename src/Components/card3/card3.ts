import { raw, ConstructorEl, h } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";

const { href, origin } = new URL('./', import.meta.url)
const img = origin + '/demo/image/'
const template = raw`
<link rel="stylesheet" href="${href}card3.css" />
<div class="Album">
    <img src="${img}/card/2.jpg">
</div>
<div class="txt">
    <span>启示录</span>
    <span>G.E.M.邓紫棋</span>
</div>
`

const ElClass = ConstructorEl({ template }, HTMLElement)
//添加生命周期
export default class extends ElClass implements cycleEl {
    constructor() {
        super();
    }

    static get observedAttributes() { return ['']; }
    connectedCallback() { };
    disconnectedCallback() { };
    adoptedCallback() { };
    attributeChangedCallback(name: any, oldV: any, newV: any) {
    };
}
