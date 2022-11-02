import { raw, ConstructorEl, h } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";

const { href } = new URL('./', import.meta.url)

const template = raw`
<link rel="stylesheet" href="${href}Tab.css" />
<div class="Tab"></div>
`
const ElClass = ConstructorEl({ template }, HTMLElement)

const TabList = ['推荐', '排行榜', '歌单', '主播电台', '歌手', '新碟上架']

export default class extends ElClass implements cycleEl {
    constructor() {
        super();
        const tab = this._shadow.querySelector(".Tab")
        TabList.forEach((v, i) => {
            tab.appendChild(this.but('but' + i, v))
        })
    }
    but(id: string, txt: string) {
        return h(raw`
        <input ${id == "but0"  ? 'checked' : ''} id="${id}" name="but" type="radio">
        <label for="${id}">${txt}</label>
        `)
    }

    static get observedAttributes() { return ['']; }
    connectedCallback() { };
    disconnectedCallback() { };
    adoptedCallback() { };
    attributeChangedCallback(name: any, oldV: any, newV: any) { };
}
