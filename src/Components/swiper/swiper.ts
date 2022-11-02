import { raw, ConstructorEl, h } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";

const { href } = new URL('./', import.meta.url)

const template = raw`
<link rel="stylesheet" href="${href}swiper.css" />
<div class="swiper">
    <!-- 组件内直接嵌套元素即可 -->
</div>
`
const ElClass = ConstructorEl({ template }, HTMLElement)
//通过动态插槽和动态css变量实现
export default class extends ElClass implements cycleEl {
    current = ref({ n: 0 }, this.setCurrent.bind(this));
    constructor() {
        super();
        const swiper = this._shadow.querySelector(".swiper") as HTMLElement
        const slot = this._queryHostSub("*:not([no='true'])");

        let i = 0;
        for (let d of slot) {
            swiper.appendChild(this.addItem(i))
            d.setAttribute("slot", 'i' + i);
            ++i;
        }
    }
    setCurrent() {
        const swiper = this._shadow.querySelector(".swiper") as HTMLElement
        swiper.style.setProperty("--current", this.current.n + '')
    }
    addItem(i: number) {
        let style = `style="--n:${i};"`
        return h(raw`
        <div class="item" ${style}>
            <slot name="i${i}"></slot>
        </div>
        `)
    }
    //生命周期
    static get observedAttributes() { return ['current']; }
    connectedCallback() { };
    disconnectedCallback() { };
    adoptedCallback() { };
    attributeChangedCallback(name: any, oldV: any, newV: any) {
        if (name == 'current') this.current.n = newV;
    };
}
