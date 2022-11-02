import { raw, ConstructorEl } from "../../tools/Components.js";
const { href } = new URL('./', import.meta.url);
const template = raw `
<link rel="stylesheet" href="${href}column2.css" />
<div class="column2">
    <el-head class="head" _title="新碟上架"></el-head>
    <div class="box">
        <div class="Next L"></div>
        <el-swiper class="swiper" current="0">
            ${raw `
            <div class="item">
                <el-card3></el-card3>
                <el-card3></el-card3>
                <el-card3></el-card3>
                <el-card3></el-card3>
                <el-card3></el-card3>
            </div>
            `.repeat(4)}
        </el-swiper>
        <div class="Next R"></div>
    </div>
</div>
`;
const ElClass = ConstructorEl({ template }, HTMLElement);
//添加生命周期
export default class extends ElClass {
    constructor() {
        super();
        this.num = 0;
        const swiper = this._shadow.querySelector(".swiper");
        const L = this._shadow.querySelector(".L");
        const R = this._shadow.querySelector(".R");
        L.onclick = () => {
            if (this.num < 0) {
                this.current.call(this, ++this.num);
            }
            ;
        };
        R.onclick = () => {
            if (this.num > (swiper.children.length - 1) * -1) {
                this.current.call(this, --this.num);
            }
        };
    }
    current(item) {
        const el = this._shadow.querySelector(".swiper");
        el.setAttribute("current", item);
    }
    static get observedAttributes() { return ['']; }
    connectedCallback() { }
    ;
    disconnectedCallback() { }
    ;
    adoptedCallback() { }
    ;
    attributeChangedCallback(name, oldV, newV) {
    }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL2NvbHVtbjIvY29sdW1uMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBSyxNQUFNLDJCQUEyQixDQUFDO0FBSWxFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUUvQyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUE7K0JBQ1csSUFBSTs7Ozs7O2NBTXJCLEdBQUcsQ0FBQTs7Ozs7Ozs7YUFRSixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ2Q7Ozs7O0NBS1AsQ0FBQTtBQUNELE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0FBQ3hELFFBQVE7QUFDUixNQUFNLENBQUMsT0FBTyxNQUFPLFNBQVEsT0FBTztJQUVoQztRQUNJLEtBQUssRUFBRSxDQUFDO1FBRlosUUFBRyxHQUFHLENBQUMsQ0FBQztRQUdKLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBZ0IsQ0FBQztRQUMxRCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQWdCLENBQUM7UUFDMUQsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDYixJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUN0QztZQUFBLENBQUM7UUFDTixDQUFDLENBQUE7UUFDRCxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDdEM7UUFDTCxDQUFDLENBQUE7SUFDTCxDQUFDO0lBQ0QsT0FBTyxDQUFDLElBQVk7UUFDaEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE1BQU0sS0FBSyxrQkFBa0IsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELGlCQUFpQixLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ3hCLG9CQUFvQixLQUFLLENBQUM7SUFBQSxDQUFDO0lBQzNCLGVBQWUsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUN0Qix3QkFBd0IsQ0FBQyxJQUFTLEVBQUUsSUFBUyxFQUFFLElBQVM7SUFDeEQsQ0FBQztJQUFBLENBQUM7Q0FDTCJ9