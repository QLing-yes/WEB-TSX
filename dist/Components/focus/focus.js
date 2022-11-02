import { raw, ConstructorEl } from "../../tools/Components.js";
const { href, origin } = new URL('./', import.meta.url);
const img = origin + '/WEB-TSX/image/';
console.log(href);
console.log(img + '1.jpg');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50cy9mb2N1cy9mb2N1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBSyxNQUFNLDJCQUEyQixDQUFDO0FBSWxFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDdkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFDLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUMsT0FBTyxDQUFDLENBQUM7QUFHekIsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFBOytCQUNXLElBQUk7Ozs7OztxQ0FNRSxHQUFHO3FDQUNILEdBQUc7cUNBQ0gsR0FBRztxQ0FDSCxHQUFHO3FDQUNILEdBQUc7cUNBQ0gsR0FBRzs7Ozs7OztDQU92QyxDQUFBO0FBQ0QsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUE7QUFFeEQsTUFBTSxDQUFDLE9BQU8sTUFBTyxTQUFRLE9BQU87SUFHaEM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUhaLFFBQUcsR0FBRyxDQUFDLENBQUM7UUFJSixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQWdCLENBQUM7UUFDbEUsTUFB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