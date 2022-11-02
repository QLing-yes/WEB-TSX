import { raw, ConstructorEl, h } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";

const { href, origin } = new URL('./', import.meta.url)
const img = origin+'/WEB-TSX/image/';
console.log(href);
console.log(img+'1.jpg');


const template = raw`
<link rel="stylesheet" href="${href}focus.css" />
<div class="Focus">
    <div class="nextL"></div>
    <div class="swiper">
        <!-- //通过动态插槽和动态css变量实现 -->
        <el-swiper id="elswiper" current="0">
            <img class="item" src="${img}1.jpg">
            <img class="item" src="${img}2.jpg">
            <img class="item" src="${img}3.jpg">
            <img class="item" src="${img}4.jpg">
            <img class="item" src="${img}5.jpg">
            <img class="item" src="${img}6.jpg">
        </el-swiper>
        <div class="radio"></div>
    </div>
    <div class="download"></div>
    <div class="nextR"></div>
</div>
`
const ElClass = ConstructorEl({ template }, HTMLElement)

export default class extends ElClass implements cycleEl {
    num = 0;

    constructor() {
        super();
        const swiper = this._shadow.querySelector("#elswiper");
        const radio = this._shadow.querySelector(".radio");
        const nextR = this._shadow.querySelector(".nextR") as HTMLElement;
        const nextL = this._shadow.querySelector(".nextL") as HTMLElement;
        for (let i = 0; i < swiper.children.length; i++) {
            radio.appendChild(this.Elradio(i))
        }
        nextL.onclick = () => {
            if (this.num < 0) {
                this.current.call(this, ++this.num)
            };
        }
        nextR.onclick = () => {
            if (this.num > (swiper.children.length - 1) * -1) {
                this.current.call(this, --this.num)
            }
        }
        this.radioRGB()
        let lr = true;
        setInterval(() => {
            if (this.num == (swiper.children.length - 1) * -1) lr = true;
            else if (this.num == 0) lr = false;
            if (lr) this.current.call(this, ++this.num);
            else this.current.call(this, --this.num);
        }, 4000)
    }
    Elradio(i: number) {
        const el = document.createElement("span");
        el.setAttribute("num", i + '')
        el.onclick = () => {
            this.num = i * -1;
            this.current(i * -1 + '')
            el.setAttribute('l', 'true')
        }
        return el;
    }
    radioRGB() {
        const radio = this._shadow.querySelectorAll(".radio > span");
        let i = -0;
        radio.forEach(e => {
            if (i == this.num) e.setAttribute('l', 'true');
            else e.setAttribute('l', '');
            i--;
        })
    }
    current(item: string) {
        const el = this._shadow.querySelector("#elswiper");
        el.setAttribute("current", item);
        this.radioRGB()
    }
    static get observedAttributes() { return ['']; }
    connectedCallback() { };
    disconnectedCallback() { };
    adoptedCallback() { };
    attributeChangedCallback(name: any, oldV: any, newV: any) { };
}
