import { raw, ConstructorEl, h } from "../../tools/Components.js";
const { href } = new URL('./', import.meta.url);
const image = origin + '/WEB-TSX/image/';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzaWNpYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50cy9tdXNpY2lhbi9tdXNpY2lhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlsRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDL0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHLGlCQUFpQixDQUFBO0FBRXhDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQTsrQkFDVyxJQUFJOzs7Ozs7Ozs7Ozs7Q0FZbEMsQ0FBQTtBQUNELE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFBO0FBRXhELE1BQU0sU0FBUyxHQUFHO0lBQ2Q7UUFDSSxNQUFNLEVBQUUsS0FBSyxHQUFHLGlCQUFpQjtRQUNqQyxFQUFFLEVBQUUsS0FBSztRQUNULEVBQUUsRUFBRSxNQUFNO0tBQ2I7SUFDRDtRQUNJLE1BQU0sRUFBRSxLQUFLLEdBQUcsaUJBQWlCO1FBQ2pDLEVBQUUsRUFBRSxLQUFLO1FBQ1QsRUFBRSxFQUFFLE1BQU07S0FDYjtJQUNEO1FBQ0ksTUFBTSxFQUFFLEtBQUssR0FBRyxpQkFBaUI7UUFDakMsRUFBRSxFQUFFLEtBQUs7UUFDVCxFQUFFLEVBQUUsTUFBTTtLQUNiO0lBQ0Q7UUFDSSxNQUFNLEVBQUUsS0FBSyxHQUFHLGlCQUFpQjtRQUNqQyxFQUFFLEVBQUUsS0FBSztRQUNULEVBQUUsRUFBRSxNQUFNO0tBQ2I7Q0FDSixDQUFBO0FBQ0QsTUFBTSxTQUFTLEdBQUc7SUFDZDtRQUNJLE1BQU0sRUFBRSxLQUFLLEdBQUcsaUJBQWlCO1FBQ2pDLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLGNBQWM7S0FDckI7SUFDRDtRQUNJLE1BQU0sRUFBRSxLQUFLLEdBQUcsaUJBQWlCO1FBQ2pDLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLGNBQWM7S0FDckI7SUFDRDtRQUNJLE1BQU0sRUFBRSxLQUFLLEdBQUcsaUJBQWlCO1FBQ2pDLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLGNBQWM7S0FDckI7SUFDRDtRQUNJLE1BQU0sRUFBRSxLQUFLLEdBQUcsaUJBQWlCO1FBQ2pDLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLGNBQWM7S0FDckI7SUFDRDtRQUNJLE1BQU0sRUFBRSxLQUFLLEdBQUcsaUJBQWlCO1FBQ2pDLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLGNBQWM7S0FDckI7Q0FDSixDQUFBO0FBRUQsTUFBTSxDQUFDLE9BQU8sTUFBTyxTQUFRLE9BQU87SUFDaEM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3hELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzlDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzVDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQixRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDOUMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsSUFBSSxDQUFDLENBQStDLEVBQUUsR0FBWTtRQUM5RCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUEsdUJBQXVCLEdBQUcsSUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFBO0lBQzNILENBQUM7SUFFRCxNQUFNLEtBQUssa0JBQWtCLEtBQUssT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxpQkFBaUIsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUN4QixvQkFBb0IsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUMzQixlQUFlLEtBQUssQ0FBQztJQUFBLENBQUM7SUFDdEIsd0JBQXdCLENBQUMsSUFBUyxFQUFFLElBQVMsRUFBRSxJQUFTLElBQUksQ0FBQztJQUFBLENBQUM7Q0FDakUifQ==