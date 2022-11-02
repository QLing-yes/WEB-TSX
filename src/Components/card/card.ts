import { raw, ConstructorEl, h } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { ref } from "../../tools/tools.js";

const { href, origin } = new URL('./', import.meta.url)
const image = origin + '/WEB-TSX/image/'

const template = raw`
<link rel="stylesheet" href="${href}card.css" />
<div class="card"></div>
`
const ElClass = ConstructorEl({ template }, HTMLElement)

export default class extends ElClass implements cycleEl {
    props = ref({
        img: '',
        t1: '',
        t2: ''
    }, this.card.bind(this))

    constructor() {
        super();
    }

    card() {
        const { img, t1, t2 } = this.props
        const card = this._shadow.querySelector('.card')
        card.innerHTML = raw`
            <img class="img" src="${img}">
            <div class="txt">
                <span>${t1}</span>
                <span>${t2}</span>
            </div>
        `
    }

    static get observedAttributes() { return ['img', 't1', 't2']; }
    connectedCallback() { };
    disconnectedCallback() { };
    adoptedCallback() { };
    attributeChangedCallback(name: any, oldV: any, newV: any) {
        if (this.props.hasOwnProperty(name)) {
            Reflect.set(this.props, name, newV)
        }
    };
}
