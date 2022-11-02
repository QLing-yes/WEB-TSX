import { raw, ConstructorEl, h } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";

const { href } = new URL('./', import.meta.url)
const image = origin + '/image/'

const template = raw`
<link rel="stylesheet" href="${href}musician.css" />
<div class="musician">
    <div class="head">
        <span>入住歌手</span>
        <span>查看全部 ></span>
    </div>
    <div class="but">申请成为网易音乐人</div>
    <div class="head">
        <span>热门主播</span>
        <span></span>
    </div>
</div>
`
const ElClass = ConstructorEl({ template }, HTMLElement)

const cardList1 = [
    {
        imgurl: image + '/portrait/1.jpg',
        t1: '陈楚生',
        t2: '合唱歌手'
    },
    {
        imgurl: image + '/portrait/1.jpg',
        t1: '陈楚生',
        t2: '合唱歌手'
    },
    {
        imgurl: image + '/portrait/1.jpg',
        t1: '陈楚生',
        t2: '合唱歌手'
    },
    {
        imgurl: image + '/portrait/1.jpg',
        t1: '陈楚生',
        t2: '合唱歌手'
    },
]
const cardList2 = [
    {
        imgurl: image + '/portrait/2.jpg',
        t1: '陈立',
        t2: '心理学家、美食家陈立教授'
    },
    {
        imgurl: image + '/portrait/2.jpg',
        t1: '陈立',
        t2: '心理学家、美食家陈立教授'
    },
    {
        imgurl: image + '/portrait/2.jpg',
        t1: '陈立',
        t2: '心理学家、美食家陈立教授'
    },
    {
        imgurl: image + '/portrait/2.jpg',
        t1: '陈立',
        t2: '心理学家、美食家陈立教授'
    },
    {
        imgurl: image + '/portrait/2.jpg',
        t1: '陈立',
        t2: '心理学家、美食家陈立教授'
    },
]

export default class extends ElClass implements cycleEl {
    constructor() {
        super();
        const musician = this._shadow.querySelector(".musician")
        const but = this._shadow.querySelector(".but")
        cardList1.forEach(v => {
            musician.insertBefore(this.card(v), but)
        })
        cardList2.forEach(v => {
            musician.appendChild(this.card(v,' nobj'))
        })
    }

    card(l: { imgurl: string, t1?: string, t2?: string }, key?: string) {
        return h(raw`<el-card class="card${key||''}" img="${l.imgurl || ''}" t1="${l.t1 || ''}" t2="${l.t2 || ''}"></el-card>`)
    }

    static get observedAttributes() { return ['']; }
    connectedCallback() { };
    disconnectedCallback() { };
    adoptedCallback() { };
    attributeChangedCallback(name: any, oldV: any, newV: any) { };
}
