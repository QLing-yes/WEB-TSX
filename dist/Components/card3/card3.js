import { raw, ConstructorEl } from "../../tools/Components.js";
const { href, origin } = new URL('./', import.meta.url);
const img = origin + '/image/';
const template = raw `
<link rel="stylesheet" href="${href}card3.css" />
<div class="Album">
    <img src="${img}/card/2.jpg">
</div>
<div class="txt">
    <span>启示录</span>
    <span>G.E.M.邓紫棋</span>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZDMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50cy9jYXJkMy9jYXJkMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBSyxNQUFNLDJCQUEyQixDQUFDO0FBSWxFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDdkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQTtBQUM5QixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUE7K0JBQ1csSUFBSTs7Z0JBRW5CLEdBQUc7Ozs7OztDQU1sQixDQUFBO0FBRUQsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUE7QUFDeEQsUUFBUTtBQUNSLE1BQU0sQ0FBQyxPQUFPLE1BQU8sU0FBUSxPQUFPO0lBQ2hDO1FBQ0ksS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsTUFBTSxLQUFLLGtCQUFrQixLQUFLLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsaUJBQWlCLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDeEIsb0JBQW9CLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDM0IsZUFBZSxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ3RCLHdCQUF3QixDQUFDLElBQVMsRUFBRSxJQUFTLEVBQUUsSUFBUztJQUN4RCxDQUFDO0lBQUEsQ0FBQztDQUNMIn0=