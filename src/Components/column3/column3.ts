import { raw, ConstructorEl, h } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";

const { href } = new URL('./', import.meta.url)

const template = raw`
<link rel="stylesheet" href="${href}column3.css" />
<div class="column3">
    <el-head class="head" _title="榜单"></el-head>
    
</div>
`

const ElClass = ConstructorEl({ template }, HTMLElement)
//添加生命周期
export default class extends ElClass implements cycleEl {
    num = 0;
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
