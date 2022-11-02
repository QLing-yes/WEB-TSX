import { raw, ConstructorEl } from "../../tools/Components.js";
import type { cycleEl } from "../../tools/Components.js";
import { isType, ref } from "../../tools/tools.js";
const { href } = new URL('./', import.meta.url)

const template = raw`
<link rel="stylesheet" href="${href}Nav-but.css" />
<div class="but"></div>
`
const ElClass = ConstructorEl({ template }, HTMLElement)

export default class extends ElClass implements cycleEl {
    props = {
        txt: ref({ value: '' }, this.ElTxt.bind(this)),
        tag: ref({ value: false }, this.Elname.bind(this)),
        current: ref({ value: false }, this.Elname.bind(this)),
    }
    ElTxt() {
        const but = this._shadow.querySelector(".but")
        but.innerHTML = raw`<span>${this.props.txt.value}</span>`
    }
    Elname() {
        const but = this._shadow.querySelector(".but")
        const { tag, current } = this.props;
        but.setAttribute("class", `but${tag.value ? ' tag' : ''}${current.value ? ' current' : ''}`);
    }
    //生命周期
    connectedCallback() { };
    disconnectedCallback() { };
    adoptedCallback() { };
    static get observedAttributes() { return ['txt', 'tag', 'current']; }
    attributeChangedCallback(name: any, oldV: any, newV: any) {
        
        if (name == "txt") this.props.txt.value = newV;
        else if (name == "tag") this.props.tag.value = newV;
        else if (name == "current") this.props.current.value = newV;
    };
}

