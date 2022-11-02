import { raw, ConstructorEl, h } from "../../tools/Components.js";
const { href } = new URL('./', import.meta.url);
const template = raw `
<link rel="stylesheet" href="${href}Nav.css" />
<div class="nav">
    <div class="L">
        <div class="logo"></div>
    </div>
    <div class="C"></div>
    <div class="R">
        <div class="input">
            <div class="icon"></div>
            <input type="text" placeholder="音乐/视频/电台/用户">
        </div>
        <div class="but">创作者中心</div>
        <div class="but login">登录</div>
    </div>
</div>
`;
const navbutAttr = [
    {
        txt: "发现音乐",
        tag: false,
        current: true
    },
    {
        txt: "我的音乐",
        tag: false,
        current: false
    },
    {
        txt: "关注",
        tag: false,
        current: false
    },
    {
        txt: "商城",
        tag: false,
        current: false
    },
    {
        txt: "音乐人",
        tag: false,
        current: false
    },
    {
        txt: "下载客户端",
        tag: true,
        current: false
    },
];
const ElClass = ConstructorEl({ template }, HTMLElement);
// export default ElClass;
//添加生命周期
export default class extends ElClass {
    constructor() {
        super();
        const ElC = this._shadow.querySelector(".C");
        for (let item of navbutAttr) {
            let { txt, current, tag } = item;
            ElC.appendChild(this.ElnavBut(txt, current, tag));
        }
    }
    ElnavBut(txt, current = false, tag = false) {
        const el = h(raw `<el-nav-but class="nav_but" txt="${txt || ''}" }"></el-nav-but>`).childNodes[0];
        !current || el.setAttribute('current', 'true');
        !tag || el.setAttribute('tag', 'true');
        el.onclick = () => {
            this._shadow.querySelector(".C").childNodes.forEach((e) => {
                e.setAttribute('current', '');
            });
            el.setAttribute('current', 'true');
        };
        return el;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudHMvTmF2L05hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlsRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFFL0MsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFBOytCQUNXLElBQUk7Ozs7Ozs7Ozs7Ozs7OztDQWVsQyxDQUFBO0FBRUQsTUFBTSxVQUFVLEdBQUc7SUFDZjtRQUNJLEdBQUcsRUFBRSxNQUFNO1FBQ1gsR0FBRyxFQUFFLEtBQUs7UUFDVixPQUFPLEVBQUUsSUFBSTtLQUNoQjtJQUNEO1FBQ0ksR0FBRyxFQUFFLE1BQU07UUFDWCxHQUFHLEVBQUUsS0FBSztRQUNWLE9BQU8sRUFBRSxLQUFLO0tBQ2pCO0lBQ0Q7UUFDSSxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxLQUFLO1FBQ1YsT0FBTyxFQUFFLEtBQUs7S0FDakI7SUFDRDtRQUNJLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEtBQUs7UUFDVixPQUFPLEVBQUUsS0FBSztLQUNqQjtJQUNEO1FBQ0ksR0FBRyxFQUFFLEtBQUs7UUFDVixHQUFHLEVBQUUsS0FBSztRQUNWLE9BQU8sRUFBRSxLQUFLO0tBQ2pCO0lBQ0Q7UUFDSSxHQUFHLEVBQUUsT0FBTztRQUNaLEdBQUcsRUFBRSxJQUFJO1FBQ1QsT0FBTyxFQUFFLEtBQUs7S0FDakI7Q0FDSixDQUFBO0FBRUQsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUE7QUFDeEQsMEJBQTBCO0FBQzFCLFFBQVE7QUFDUixNQUFNLENBQUMsT0FBTyxNQUFPLFNBQVEsT0FBTztJQUNoQztRQUNJLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUMsS0FBSyxJQUFJLElBQUksSUFBSSxVQUFVLEVBQUU7WUFDekIsSUFBSSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFBO1lBQ2hDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDcEQ7SUFDTCxDQUFDO0lBQ0QsUUFBUSxDQUFDLEdBQVcsRUFBRSxPQUFPLEdBQUcsS0FBSyxFQUFFLEdBQUcsR0FBRyxLQUFLO1FBQzlDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUEsb0NBQW9DLEdBQUcsSUFBSSxFQUFFLG9CQUFvQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBZ0IsQ0FBQTtRQUMvRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUM5QyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUN0QyxFQUFFLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDckQsQ0FBaUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQ2xELENBQUMsQ0FBQyxDQUFBO1lBQ0YsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDdEMsQ0FBQyxDQUFBO1FBQ0QsT0FBTyxFQUFFLENBQUE7SUFDYixDQUFDO0lBRUQsTUFBTSxLQUFLLGtCQUFrQixLQUFLLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsaUJBQWlCLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDeEIsb0JBQW9CLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDM0IsZUFBZSxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ3RCLHdCQUF3QixDQUFDLElBQVMsRUFBRSxJQUFTLEVBQUUsSUFBUyxJQUFJLENBQUM7SUFBQSxDQUFDO0NBQ2pFIn0=