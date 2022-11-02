import { raw, ConstructorEl, h } from "../../tools/Components.js";
const { href } = new URL('./', import.meta.url);
const image = origin + '/image/';
const template = raw `
<link rel="stylesheet" href="${href}musician.css" />
<div class="musician">
    <div class="head">
        <span>入住歌手</span>
        <span>查看全部 ></span>
    </div>
    <div class="but">申请成为网易音乐人</div>
    <div class="head">
        <span>热门主播</span>
        <span></span>
    </div>
</div>
`;
const ElClass = ConstructorEl({ template }, HTMLElement);
const cardList1 = [
    {
        imgurl: image + '/portrait/1.jpg',
        t1: '陈楚生',
        t2: '合唱歌手'
    },
    {
        imgurl: image + '/portrait/1.jpg',
        t1: '陈楚生',
        t2: '合唱歌手'
    },
    {
        imgurl: image + '/portrait/1.jpg',
        t1: '陈楚生',
        t2: '合唱歌手'
    },
    {
        imgurl: image + '/portrait/1.jpg',
        t1: '陈楚生',
        t2: '合唱歌手'
    },
];
const cardList2 = [
    {
        imgurl: image + '/portrait/2.jpg',
        t1: '陈立',
        t2: '心理学家、美食家陈立教授'
    },
    {
        imgurl: image + '/portrait/2.jpg',
        t1: '陈立',
        t2: '心理学家、美食家陈立教授'
    },
    {
        imgurl: image + '/portrait/2.jpg',
        t1: '陈立',
        t2: '心理学家、美食家陈立教授'
    },
    {
        imgurl: image + '/portrait/2.jpg',
        t1: '陈立',
        t2: '心理学家、美食家陈立教授'
    },
    {
        imgurl: image + '/portrait/2.jpg',
        t1: '陈立',
        t2: '心理学家、美食家陈立教授'
    },
];
export default class extends ElClass {
    constructor() {
        super();
        const musician = this._shadow.querySelector(".musician");
        const but = this._shadow.querySelector(".but");
        cardList1.forEach(v => {
            musician.insertBefore(this.card(v), but);
        });
        cardList2.forEach(v => {
            musician.appendChild(this.card(v, ' nobj'));
        });
    }
    card(l, key) {
        return h(raw `<el-card class="card${key || ''}" img="${l.imgurl || ''}" t1="${l.t1 || ''}" t2="${l.t2 || ''}"></el-card>`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzaWNpYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50cy9tdXNpY2lhbi9tdXNpY2lhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlsRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDL0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQTtBQUVoQyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUE7K0JBQ1csSUFBSTs7Ozs7Ozs7Ozs7O0NBWWxDLENBQUE7QUFDRCxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQTtBQUV4RCxNQUFNLFNBQVMsR0FBRztJQUNkO1FBQ0ksTUFBTSxFQUFFLEtBQUssR0FBRyxpQkFBaUI7UUFDakMsRUFBRSxFQUFFLEtBQUs7UUFDVCxFQUFFLEVBQUUsTUFBTTtLQUNiO0lBQ0Q7UUFDSSxNQUFNLEVBQUUsS0FBSyxHQUFHLGlCQUFpQjtRQUNqQyxFQUFFLEVBQUUsS0FBSztRQUNULEVBQUUsRUFBRSxNQUFNO0tBQ2I7SUFDRDtRQUNJLE1BQU0sRUFBRSxLQUFLLEdBQUcsaUJBQWlCO1FBQ2pDLEVBQUUsRUFBRSxLQUFLO1FBQ1QsRUFBRSxFQUFFLE1BQU07S0FDYjtJQUNEO1FBQ0ksTUFBTSxFQUFFLEtBQUssR0FBRyxpQkFBaUI7UUFDakMsRUFBRSxFQUFFLEtBQUs7UUFDVCxFQUFFLEVBQUUsTUFBTTtLQUNiO0NBQ0osQ0FBQTtBQUNELE1BQU0sU0FBUyxHQUFHO0lBQ2Q7UUFDSSxNQUFNLEVBQUUsS0FBSyxHQUFHLGlCQUFpQjtRQUNqQyxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxjQUFjO0tBQ3JCO0lBQ0Q7UUFDSSxNQUFNLEVBQUUsS0FBSyxHQUFHLGlCQUFpQjtRQUNqQyxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxjQUFjO0tBQ3JCO0lBQ0Q7UUFDSSxNQUFNLEVBQUUsS0FBSyxHQUFHLGlCQUFpQjtRQUNqQyxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxjQUFjO0tBQ3JCO0lBQ0Q7UUFDSSxNQUFNLEVBQUUsS0FBSyxHQUFHLGlCQUFpQjtRQUNqQyxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxjQUFjO0tBQ3JCO0lBQ0Q7UUFDSSxNQUFNLEVBQUUsS0FBSyxHQUFHLGlCQUFpQjtRQUNqQyxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxjQUFjO0tBQ3JCO0NBQ0osQ0FBQTtBQUVELE1BQU0sQ0FBQyxPQUFPLE1BQU8sU0FBUSxPQUFPO0lBQ2hDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN4RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM5QyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM1QyxDQUFDLENBQUMsQ0FBQTtRQUNGLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBQzlDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELElBQUksQ0FBQyxDQUErQyxFQUFFLEdBQVk7UUFDOUQsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFBLHVCQUF1QixHQUFHLElBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQTtJQUMzSCxDQUFDO0lBRUQsTUFBTSxLQUFLLGtCQUFrQixLQUFLLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsaUJBQWlCLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDeEIsb0JBQW9CLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDM0IsZUFBZSxLQUFLLENBQUM7SUFBQSxDQUFDO0lBQ3RCLHdCQUF3QixDQUFDLElBQVMsRUFBRSxJQUFTLEVBQUUsSUFBUyxJQUFJLENBQUM7SUFBQSxDQUFDO0NBQ2pFIn0=