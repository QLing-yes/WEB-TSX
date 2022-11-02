import { raw, ConstructorEl, h } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";

const { href } = new URL('./', import.meta.url)

const template = raw`
<link rel="stylesheet" href="${href}column2.css" />
<div class="column2">
    <el-head class="head" _title="新碟上架"></el-head>
    <div class="box">
        <div class="Next L"></div>
        <el-swiper class="swiper" current="0">
            ${raw`
            <div class="item">
                <el-card3></el-card3>
                <el-card3></el-card3>
                <el-card3></el-card3>
                <el-card3></el-card3>
                <el-card3></el-card3>
            </div>
            `.repeat(4)
        }
        </el-swiper>
        <div class="Next R"></div>
    </div>
</div>
`
const ElClass = ConstructorEl({ template }, HTMLElement)
//添加生命周期
export default class extends ElClass implements cycleEl {
    num = 0;
    constructor() {
        super();
        const swiper = this._shadow.querySelector(".swiper");
        const L = this._shadow.querySelector(".L") as HTMLElement;
        const R = this._shadow.querySelector(".R") as HTMLElement;
        L.onclick = () => {
            if (this.num < 0) {
                this.current.call(this, ++this.num)
            };
        }
        R.onclick = () => {
            if (this.num > (swiper.children.length - 1) * -1) {
                this.current.call(this, --this.num)
            }
        }
    }
    current(item: string) {
        const el = this._shadow.querySelector(".swiper");
        el.setAttribute("current", item);
    }

    static get observedAttributes() { return ['']; }
    connectedCallback() { };
    disconnectedCallback() { };
    adoptedCallback() { };
    attributeChangedCallback(name: any, oldV: any, newV: any) {
    };
}
