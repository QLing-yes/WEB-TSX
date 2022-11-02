import { raw, ConstructorEl } from "../../tools/Components.js";
const { href } = new URL('./', import.meta.url);
const template = raw `
<link rel="stylesheet" href="${href}column3.css" />
<div class="column3">
    <el-head class="head" _title="榜单"></el-head>
    
</div>
`;
const ElClass = ConstructorEl({ template }, HTMLElement);
//添加生命周期
export default class extends ElClass {
    constructor() {
        super();
        this.num = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uMy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL2NvbHVtbjMvY29sdW1uMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBSyxNQUFNLDJCQUEyQixDQUFDO0FBSWxFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUUvQyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUE7K0JBQ1csSUFBSTs7Ozs7Q0FLbEMsQ0FBQTtBQUVELE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0FBQ3hELFFBQVE7QUFDUixNQUFNLENBQUMsT0FBTyxNQUFPLFNBQVEsT0FBTztJQUVoQztRQUNJLEtBQUssRUFBRSxDQUFDO1FBRlosUUFBRyxHQUFHLENBQUMsQ0FBQztJQUdSLENBQUM7SUFFRCxNQUFNLEtBQUssa0JBQWtCLEtBQUssT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxpQkFBaUIsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUN4QixvQkFBb0IsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUMzQixlQUFlLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDdEIsd0JBQXdCLENBQUMsSUFBUyxFQUFFLElBQVMsRUFBRSxJQUFTO0lBQ3hELENBQUM7SUFBQSxDQUFDO0NBQ0wifQ==