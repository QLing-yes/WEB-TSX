import { raw, ConstructorEl } from "../../tools/Components.js";
const { href, origin } = new URL('./', import.meta.url);
const img = origin + '/WEB-TSX/image/';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZDMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50cy9jYXJkMy9jYXJkMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBSyxNQUFNLDJCQUEyQixDQUFDO0FBSWxFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDdkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFHLGlCQUFpQixDQUFBO0FBQ3RDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQTsrQkFDVyxJQUFJOztnQkFFbkIsR0FBRzs7Ozs7O0NBTWxCLENBQUE7QUFFRCxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUN4RCxRQUFRO0FBQ1IsTUFBTSxDQUFDLE9BQU8sTUFBTyxTQUFRLE9BQU87SUFDaEM7UUFDSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxNQUFNLEtBQUssa0JBQWtCLEtBQUssT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxpQkFBaUIsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUN4QixvQkFBb0IsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUMzQixlQUFlLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDdEIsd0JBQXdCLENBQUMsSUFBUyxFQUFFLElBQVMsRUFBRSxJQUFTO0lBQ3hELENBQUM7SUFBQSxDQUFDO0NBQ0wifQ==