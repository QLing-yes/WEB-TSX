import { raw, ConstructorEl, h } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";

const { href } = new URL('./', import.meta.url)

const template = raw`
<link rel="stylesheet" href="${href}Nav.css" />
<div class="nav">
    <div class="L">
        <div class="logo"></div>
    </div>
    <div class="C"></div>
    <div class="R">
        <div class="input">
            <div class="icon"></div>
            <input type="text" placeholder="音乐/视频/电台/用户">
        </div>
        <div class="but">创作者中心</div>
        <div class="but login">登录</div>
    </div>
</div>
`

const navbutAttr = [
    {
        txt: "发现音乐",
        tag: false,
        current: true
    },
    {
        txt: "我的音乐",
        tag: false,
        current: false
    },
    {
        txt: "关注",
        tag: false,
        current: false
    },
    {
        txt: "商城",
        tag: false,
        current: false
    },
    {
        txt: "音乐人",
        tag: false,
        current: false
    },
    {
        txt: "下载客户端",
        tag: true,
        current: false
    },
]

const ElClass = ConstructorEl({ template }, HTMLElement)
// export default ElClass;
//添加生命周期
export default class extends ElClass implements cycleEl {
    constructor() {
        super();
        const ElC = this._shadow.querySelector(".C")
        for (let item of navbutAttr) {
            let { txt, current, tag } = item
            ElC.appendChild(this.ElnavBut(txt, current, tag))
        }
    }
    ElnavBut(txt: string, current = false, tag = false) {
        const el = h(raw`<el-nav-but class="nav_but" txt="${txt || ''}" }"></el-nav-but>`).childNodes[0] as HTMLElement
        !current || el.setAttribute('current', 'true')
        !tag || el.setAttribute('tag', 'true')
        el.onclick = () => {
            this._shadow.querySelector(".C").childNodes.forEach((e) => {
                (e as HTMLElement).setAttribute('current', '')
            })
            el.setAttribute('current', 'true')
        }
        return el
    }

    static get observedAttributes() { return ['']; }
    connectedCallback() { };
    disconnectedCallback() { };
    adoptedCallback() { };
    attributeChangedCallback(name: any, oldV: any, newV: any) { };
}
