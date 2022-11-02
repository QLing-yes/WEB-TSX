import { raw, ConstructorEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";
const { href } = new URL('./', import.meta.url);
const template = raw `
  <link rel="stylesheet" href="${href}demo.css" />
  <span class="title">
    <slot name="title"></slot>
  </span>
  <div id="num"></div>
`;
function Script(Shadow) {
    const idNum = Shadow.querySelector("#num");
    const title = Shadow.querySelector(".title");
    const content = ref({ num: 0 }, numEl);
    numEl();
    function numEl() {
        idNum.innerHTML = raw `<span>${content.num}</span>`;
    }
    title.addEventListener('click', () => { content.num++; });
}
const ElClass = ConstructorEl({
    template,
    callback: Script
}, HTMLElement);
// export default ElClass;
//添加生命周期
export default class extends ElClass {
    static get observedAttributes() { return ['myprop']; }
    connectedCallback() { }
    ;
    disconnectedCallback() { }
    ;
    adoptedCallback() { }
    ;
    attributeChangedCallback(name, oldV, newV) {
        console.log(name, oldV, newV);
    }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL2RlbW8vZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFFL0MsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFBO2lDQUNhLElBQUk7Ozs7O0NBS3BDLENBQUE7QUFDRCxTQUFTLE1BQU0sQ0FBQyxNQUFrQjtJQUNoQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFN0MsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLEtBQUssRUFBRSxDQUFBO0lBQ1AsU0FBUyxLQUFLO1FBQ1osS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUEsU0FBUyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUE7SUFDcEQsQ0FBQztJQUNELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDMUQsQ0FBQztBQUVELE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQztJQUM1QixRQUFRO0lBQ1IsUUFBUSxFQUFFLE1BQU07Q0FDakIsRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUNmLDBCQUEwQjtBQUMxQixRQUFRO0FBQ1IsTUFBTSxDQUFDLE9BQU8sTUFBTyxTQUFRLE9BQU87SUFDbEMsTUFBTSxLQUFLLGtCQUFrQixLQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsaUJBQWlCLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDeEIsb0JBQW9CLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDM0IsZUFBZSxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ3RCLHdCQUF3QixDQUFDLElBQVMsRUFBRSxJQUFTLEVBQUUsSUFBUztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7Q0FDSCJ9