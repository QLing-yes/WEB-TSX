import { raw, ConstructorEl } from "../../tools/Components.js";
const { href } = new URL('./', import.meta.url);
let txt = '我想和你唱特辑15万';
const template = raw `
<link rel="stylesheet" href="${href}column1.css" />
<div class="column1">
    <el-head class="head" _title="热门推荐">
        <span class="option">华语</span>
        <span class="option">流行</span>
        <span class="option">摇滚</span>
        <span class="option">民谣</span>
        <span class="option">电子</span>
    </el-head>
    ${raw `<div class="col">
        <el-card2 txt="${txt}"></el-card2>
        <el-card2 txt="${txt}"></el-card2>
        <el-card2 txt="${txt}"></el-card2>
        <el-card2 txt="${txt}"></el-card2>
    </div>`.repeat(2)}
</div>
`;
const ElClass = ConstructorEl({ template }, HTMLElement);
//添加生命周期
export default class extends ElClass {
    constructor() {
        super();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL2NvbHVtbjEvY29sdW1uMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBSyxNQUFNLDJCQUEyQixDQUFDO0FBSWxFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMvQyxJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUE7QUFFdEIsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFBOytCQUNXLElBQUk7Ozs7Ozs7OztNQVM3QixHQUFHLENBQUE7eUJBQ2dCLEdBQUc7eUJBQ0gsR0FBRzt5QkFDSCxHQUFHO3lCQUNILEdBQUc7V0FDakIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztDQUVwQixDQUFBO0FBRUQsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUE7QUFDeEQsUUFBUTtBQUNSLE1BQU0sQ0FBQyxPQUFPLE1BQU8sU0FBUSxPQUFPO0lBQ2hDO1FBQ0ksS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsTUFBTSxLQUFLLGtCQUFrQixLQUFLLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsaUJBQWlCLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDeEIsb0JBQW9CLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDM0IsZUFBZSxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ3RCLHdCQUF3QixDQUFDLElBQVMsRUFBRSxJQUFTLEVBQUUsSUFBUztJQUN4RCxDQUFDO0lBQUEsQ0FBQztDQUNMIn0=