import { raw, ConstructorEl } from "../../tools/Components.js";
const { href, origin } = new URL('./', import.meta.url);
const img = origin + '/WEB-TSX/image/';
const template = raw `
<link rel="stylesheet" href="${href}card2.css" />
<div class="card2">
    <div class="imgBox">
        <img src="${img}/card/1.jpg">
        <div>
            <div class="icon1"></div>
            <span>999万</span>
            <div class="icon2"></div>
        </div>
    </div>
    <span id="txt"></span>
</div>
`;
const ElClass = ConstructorEl({ template }, HTMLElement);
//添加生命周期
export default class extends ElClass {
    constructor() {
        super();
    }
    static get observedAttributes() { return ['txt']; }
    connectedCallback() { }
    ;
    disconnectedCallback() { }
    ;
    adoptedCallback() { }
    ;
    attributeChangedCallback(name, oldV, newV) {
        if (name == 'txt') {
            const txt = this._shadow.querySelector('#txt');
            txt.innerHTML = newV;
        }
    }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50cy9jYXJkMi9jYXJkMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBSyxNQUFNLDJCQUEyQixDQUFDO0FBSWxFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDdkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFHLGlCQUFpQixDQUFBO0FBQ3RDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQTsrQkFDVyxJQUFJOzs7b0JBR2YsR0FBRzs7Ozs7Ozs7O0NBU3RCLENBQUE7QUFFRCxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUN4RCxRQUFRO0FBQ1IsTUFBTSxDQUFDLE9BQU8sTUFBTyxTQUFRLE9BQU87SUFDaEM7UUFDSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxNQUFNLEtBQUssa0JBQWtCLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxpQkFBaUIsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUN4QixvQkFBb0IsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUMzQixlQUFlLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDdEIsd0JBQXdCLENBQUMsSUFBUyxFQUFFLElBQVMsRUFBRSxJQUFTO1FBQ3BELElBQUksSUFBSSxJQUFJLEtBQUssRUFBRTtZQUNmLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUFBLENBQUM7Q0FDTCJ9