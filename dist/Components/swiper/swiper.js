import { raw, ConstructorEl, h } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";
const { href } = new URL('./', import.meta.url);
const template = raw `
<link rel="stylesheet" href="${href}swiper.css" />
<div class="swiper">
    <!-- 组件内直接嵌套元素即可 -->
</div>
`;
const ElClass = ConstructorEl({ template }, HTMLElement);
//通过动态插槽和动态css变量实现
export default class extends ElClass {
    constructor() {
        super();
        this.current = ref({ n: 0 }, this.setCurrent.bind(this));
        const swiper = this._shadow.querySelector(".swiper");
        const slot = this._queryHostSub("*:not([no='true'])");
        let i = 0;
        for (let d of slot) {
            swiper.appendChild(this.addItem(i));
            d.setAttribute("slot", 'i' + i);
            ++i;
        }
    }
    setCurrent() {
        const swiper = this._shadow.querySelector(".swiper");
        swiper.style.setProperty("--current", this.current.n + '');
    }
    addItem(i) {
        let style = `style="--n:${i};"`;
        return h(raw `
        <div class="item" ${style}>
            <slot name="i${i}"></slot>
        </div>
        `);
    }
    //生命周期
    static get observedAttributes() { return ['current']; }
    connectedCallback() { }
    ;
    disconnectedCallback() { }
    ;
    adoptedCallback() { }
    ;
    attributeChangedCallback(name, oldV, newV) {
        if (name == 'current')
            this.current.n = newV;
    }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudHMvc3dpcGVyL3N3aXBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBRS9DLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQTsrQkFDVyxJQUFJOzs7O0NBSWxDLENBQUE7QUFDRCxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUN4RCxrQkFBa0I7QUFDbEIsTUFBTSxDQUFDLE9BQU8sTUFBTyxTQUFRLE9BQU87SUFFaEM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUZaLFlBQU8sR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUdoRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQWdCLENBQUE7UUFDbkUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ25DLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoQyxFQUFFLENBQUMsQ0FBQztTQUNQO0lBQ0wsQ0FBQztJQUNELFVBQVU7UUFDTixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQWdCLENBQUE7UUFDbkUsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0lBQzlELENBQUM7SUFDRCxPQUFPLENBQUMsQ0FBUztRQUNiLElBQUksS0FBSyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUE7UUFDL0IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFBOzRCQUNRLEtBQUs7MkJBQ04sQ0FBQzs7U0FFbkIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELE1BQU07SUFDTixNQUFNLEtBQUssa0JBQWtCLEtBQUssT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxpQkFBaUIsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUN4QixvQkFBb0IsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUMzQixlQUFlLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDdEIsd0JBQXdCLENBQUMsSUFBUyxFQUFFLElBQVMsRUFBRSxJQUFTO1FBQ3BELElBQUksSUFBSSxJQUFJLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDakQsQ0FBQztJQUFBLENBQUM7Q0FDTCJ9