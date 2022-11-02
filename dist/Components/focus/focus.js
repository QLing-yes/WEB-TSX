import { raw, ConstructorEl } from "../../tools/Components.js";
const { href, origin } = new URL('./', import.meta.url);
const img = origin + '/demo/image/';
console.log(href);
const template = raw `
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
`;
const ElClass = ConstructorEl({ template }, HTMLElement);
export default class extends ElClass {
    constructor() {
        super();
        this.num = 0;
        const swiper = this._shadow.querySelector("#elswiper");
        const radio = this._shadow.querySelector(".radio");
        const nextR = this._shadow.querySelector(".nextR");
        const nextL = this._shadow.querySelector(".nextL");
        for (let i = 0; i < swiper.children.length; i++) {
            radio.appendChild(this.Elradio(i));
        }
        nextL.onclick = () => {
            if (this.num < 0) {
                this.current.call(this, ++this.num);
            }
            ;
        };
        nextR.onclick = () => {
            if (this.num > (swiper.children.length - 1) * -1) {
                this.current.call(this, --this.num);
            }
        };
        this.radioRGB();
        let lr = true;
        setInterval(() => {
            if (this.num == (swiper.children.length - 1) * -1)
                lr = true;
            else if (this.num == 0)
                lr = false;
            if (lr)
                this.current.call(this, ++this.num);
            else
                this.current.call(this, --this.num);
        }, 4000);
    }
    Elradio(i) {
        const el = document.createElement("span");
        el.setAttribute("num", i + '');
        el.onclick = () => {
            this.num = i * -1;
            this.current(i * -1 + '');
            el.setAttribute('l', 'true');
        };
        return el;
    }
    radioRGB() {
        const radio = this._shadow.querySelectorAll(".radio > span");
        let i = -0;
        radio.forEach(e => {
            if (i == this.num)
                e.setAttribute('l', 'true');
            else
                e.setAttribute('l', '');
            i--;
        });
    }
    current(item) {
        const el = this._shadow.querySelector("#elswiper");
        el.setAttribute("current", item);
        this.radioRGB();
    }
    static get observedAttributes() { return ['']; }
    connectedCallback() { }
    ;
    disconnectedCallback() { }
    ;
    adoptedCallback() { }
    ;
    attributeChangedCallback(name, oldV, newV) { }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50cy9mb2N1cy9mb2N1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBSyxNQUFNLDJCQUEyQixDQUFDO0FBSWxFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDdkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFDLGNBQWMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQTsrQkFDVyxJQUFJOzs7Ozs7cUNBTUUsR0FBRztxQ0FDSCxHQUFHO3FDQUNILEdBQUc7cUNBQ0gsR0FBRztxQ0FDSCxHQUFHO3FDQUNILEdBQUc7Ozs7Ozs7Q0FPdkMsQ0FBQTtBQUNELE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0FBRXhELE1BQU0sQ0FBQyxPQUFPLE1BQU8sU0FBUSxPQUFPO0lBR2hDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFIWixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBSUosTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFnQixDQUFDO1FBQ2xFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBZ0Is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