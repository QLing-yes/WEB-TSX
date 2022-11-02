export const raw = String.raw;
/** 字符串模板转Node元素
 * @param strEl html模板
 */
export function h(strEl) {
    const template = document.createElement("template");
    template.innerHTML = strEl;
    return template.content.cloneNode(true);
}
/** 添加css文件(直接模板里link标签也行的) */
export function style(el, href) {
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', href);
    el.appendChild(linkElem);
}
/** 创建简单元素类(建议implements cycleEl生命周期) */
export function ConstructorEl({ callback, styleUrl, template }, extend) {
    const ConstructorElement = class extends (extend || HTMLElement) {
        constructor() {
            super();
            const el = h(template);
            this._shadow = this.attachShadow({ mode: 'open' });
            if (styleUrl)
                style(this.shadowRoot, styleUrl);
            this.shadowRoot.appendChild(el);
            callback === null || callback === void 0 ? void 0 : callback(this.shadowRoot);
        }
        /** 查询shadow父级直接子节" */
        _queryHostSub(CSSselector) {
            const { host } = this._shadow;
            return host.querySelectorAll(`${host.localName} > ${CSSselector}`);
        }
    };
    return ConstructorElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9Db21wb25lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0FBRTlCOztHQUVHO0FBQ0gsTUFBTSxVQUFVLENBQUMsQ0FBQyxLQUFhO0lBQzdCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBQ0QsOEJBQThCO0FBQzlCLE1BQU0sVUFBVSxLQUFLLENBQUMsRUFBYyxFQUFFLElBQVk7SUFDaEQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFRCx3Q0FBd0M7QUFDeEMsTUFBTSxVQUFVLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFpQixFQUFFLE1BQWlDO0lBQzlHLE1BQU0sa0JBQWtCLEdBQUcsS0FBTSxTQUFRLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQztRQUU5RDtZQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRW5ELElBQUksUUFBUTtnQkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVoQyxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFDRCxzQkFBc0I7UUFDdEIsYUFBYSxDQUFDLFdBQW9CO1lBQ2hDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzlCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsTUFBTSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7S0FDRixDQUFBO0lBQ0QsT0FBTyxrQkFBa0IsQ0FBQztBQUM1QixDQUFDIn0=