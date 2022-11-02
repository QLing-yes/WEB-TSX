import { raw, ConstructorEl, h } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";

const { href } = new URL('./', import.meta.url)
let txt = '我想和你唱特辑15万'

const template = raw`
<link rel="stylesheet" href="${href}column1.css" />
<div class="column1">
    <el-head class="head" _title="热门推荐">
        <span class="option">华语</span>
        <span class="option">流行</span>
        <span class="option">摇滚</span>
        <span class="option">民谣</span>
        <span class="option">电子</span>
    </el-head>
    ${raw`<div class="col">
        <el-card2 txt="${txt}"></el-card2>
        <el-card2 txt="${txt}"></el-card2>
        <el-card2 txt="${txt}"></el-card2>
        <el-card2 txt="${txt}"></el-card2>
    </div>`.repeat(2)}
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
