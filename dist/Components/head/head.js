import { raw, ConstructorEl } from "../../tools/Components.js";
const { href } = new URL('./', import.meta.url);
const template = raw `
<link rel="stylesheet" href="${href}head.css" />
<div class="head">
    <div class="img"></div>
    <span class="title"></span>
    <div class="box">
        <slot></slot>
    </div>
    <span class="to">更多</span>
    <div class="icon"></div>
</div>
`;
const ElClass = ConstructorEl({ template }, HTMLElement);
//添加生命周期
export default class extends ElClass {
    constructor() {
        super();
    }
    static get observedAttributes() { return ['_title']; }
    connectedCallback() { }
    ;
    disconnectedCallback() { }
    ;
    adoptedCallback() { }
    ;
    attributeChangedCallback(name, oldV, newV) {
        if (name == '_title') {
            const title = this._shadow.querySelector('.title');
            title.innerHTML = newV;
        }
    }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL2hlYWQvaGVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBSyxNQUFNLDJCQUEyQixDQUFDO0FBSWxFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUUvQyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUE7K0JBQ1csSUFBSTs7Ozs7Ozs7OztDQVVsQyxDQUFBO0FBRUQsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUE7QUFDeEQsUUFBUTtBQUNSLE1BQU0sQ0FBQyxPQUFPLE1BQU8sU0FBUSxPQUFPO0lBQ2hDO1FBQ0ksS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsTUFBTSxLQUFLLGtCQUFrQixLQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsaUJBQWlCLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDeEIsb0JBQW9CLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDM0IsZUFBZSxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ3RCLHdCQUF3QixDQUFDLElBQVMsRUFBRSxJQUFTLEVBQUUsSUFBUztRQUNwRCxJQUFJLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBQUEsQ0FBQztDQUNMIn0=