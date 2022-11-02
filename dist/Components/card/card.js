import { raw, ConstructorEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";
const { href, origin } = new URL('./', import.meta.url);
const image = origin + '/WEB-TSX/image/';
const template = raw `
<link rel="stylesheet" href="${href}card.css" />
<div class="card"></div>
`;
const ElClass = ConstructorEl({ template }, HTMLElement);
export default class extends ElClass {
    constructor() {
        super();
        this.props = ref({
            img: '',
            t1: '',
            t2: ''
        }, this.card.bind(this));
    }
    card() {
        const { img, t1, t2 } = this.props;
        const card = this._shadow.querySelector('.card');
        card.innerHTML = raw `
            <img class="img" src="${img}">
            <div class="txt">
                <span>${t1}</span>
                <span>${t2}</span>
            </div>
        `;
    }
    static get observedAttributes() { return ['img', 't1', 't2']; }
    connectedCallback() { }
    ;
    disconnectedCallback() { }
    ;
    adoptedCallback() { }
    ;
    attributeChangedCallback(name, oldV, newV) {
        if (this.props.hasOwnProperty(name)) {
            Reflect.set(this.props, name, newV);
        }
    }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL2NhcmQvY2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBSyxNQUFNLDJCQUEyQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3ZELE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQTtBQUV4QyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUE7K0JBQ1csSUFBSTs7Q0FFbEMsQ0FBQTtBQUNELE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0FBRXhELE1BQU0sQ0FBQyxPQUFPLE1BQU8sU0FBUSxPQUFPO0lBT2hDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFQWixVQUFLLEdBQUcsR0FBRyxDQUFDO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUUsRUFBRSxFQUFFO1NBQ1QsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBSXhCLENBQUM7SUFFRCxJQUFJO1FBQ0EsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQTtvQ0FDUSxHQUFHOzt3QkFFZixFQUFFO3dCQUNGLEVBQUU7O1NBRWpCLENBQUE7SUFDTCxDQUFDO0lBRUQsTUFBTSxLQUFLLGtCQUFrQixLQUFLLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxpQkFBaUIsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUN4QixvQkFBb0IsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUMzQixlQUFlLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDdEIsd0JBQXdCLENBQUMsSUFBUyxFQUFFLElBQVMsRUFBRSxJQUFTO1FBQ3BELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUN0QztJQUNMLENBQUM7SUFBQSxDQUFDO0NBQ0wifQ==