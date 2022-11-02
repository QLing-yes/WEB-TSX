import { raw, ConstructorEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";
const { href, origin } = new URL('./', import.meta.url);
const image = origin + '/demo/image/';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL2NhcmQvY2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBSyxNQUFNLDJCQUEyQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3ZELE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxjQUFjLENBQUE7QUFFckMsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFBOytCQUNXLElBQUk7O0NBRWxDLENBQUE7QUFDRCxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUV4RCxNQUFNLENBQUMsT0FBTyxNQUFPLFNBQVEsT0FBTztJQU9oQztRQUNJLEtBQUssRUFBRSxDQUFDO1FBUFosVUFBSyxHQUFHLEdBQUcsQ0FBQztZQUNSLEdBQUcsRUFBRSxFQUFFO1lBQ1AsRUFBRSxFQUFFLEVBQUU7WUFDTixFQUFFLEVBQUUsRUFBRTtTQUNULEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUl4QixDQUFDO0lBRUQsSUFBSTtRQUNBLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDbEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUE7b0NBQ1EsR0FBRzs7d0JBRWYsRUFBRTt3QkFDRixFQUFFOztTQUVqQixDQUFBO0lBQ0wsQ0FBQztJQUVELE1BQU0sS0FBSyxrQkFBa0IsS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsaUJBQWlCLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDeEIsb0JBQW9CLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDM0IsZUFBZSxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ3RCLHdCQUF3QixDQUFDLElBQVMsRUFBRSxJQUFTLEVBQUUsSUFBUztRQUNwRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDdEM7SUFDTCxDQUFDO0lBQUEsQ0FBQztDQUNMIn0=