import { raw, ConstructorEl } from "../../tools/Components.js";
const { href } = new URL('./', import.meta.url);
const template = raw `
<link rel="stylesheet" href="${href}TakeTurns.css" />
<div class="TakeTurns">
    
</div>
`;
const ElClass = ConstructorEl({ template }, HTMLElement);
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
    attributeChangedCallback(name, oldV, newV) { }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFrZVR1cm5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudHMvcm90YXRpb24vVGFrZVR1cm5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFLLE1BQU0sMkJBQTJCLENBQUM7QUFJbEUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBRS9DLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQTsrQkFDVyxJQUFJOzs7O0NBSWxDLENBQUE7QUFDRCxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUV4RCxNQUFNLENBQUMsT0FBTyxNQUFPLFNBQVEsT0FBTztJQUNoQztRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELE1BQU0sS0FBSyxrQkFBa0IsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELGlCQUFpQixLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ3hCLG9CQUFvQixLQUFLLENBQUM7SUFBQSxDQUFDO0lBQzNCLGVBQWUsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUN0Qix3QkFBd0IsQ0FBQyxJQUFTLEVBQUUsSUFBUyxFQUFFLElBQVMsSUFBSSxDQUFDO0lBQUEsQ0FBQztDQUNqRSJ9