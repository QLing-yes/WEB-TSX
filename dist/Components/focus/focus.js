import { raw, ConstructorEl } from "../../tools/Components.js";
const { href, origin } = new URL('./', import.meta.url);
const img = origin + '/image/';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50cy9mb2N1cy9mb2N1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBSyxNQUFNLDJCQUEyQixDQUFDO0FBSWxFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDdkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFDLFNBQVMsQ0FBQztBQUM3QixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUE7K0JBQ1csSUFBSTs7Ozs7O3FDQU1FLEdBQUc7cUNBQ0gsR0FBRztxQ0FDSCxHQUFHO3FDQUNILEdBQUc7cUNBQ0gsR0FBRztxQ0FDSCxHQUFHOzs7Ozs7O0NBT3ZDLENBQUE7QUFDRCxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUV4RCxNQUFNLENBQUMsT0FBTyxNQUFPLFNBQVEsT0FBTztJQUdoQztRQUNJLEtBQUssRUFBRSxDQUFDO1FBSFosUUFBRyxHQUFHLENBQUMsQ0FBQztRQUlKLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBZ0IsQ0FBQztRQUNsRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQWdCLENBQUM7UUFDbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUs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