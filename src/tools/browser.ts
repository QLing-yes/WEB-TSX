/** 全屏/退出 */
export function Fullscreen(El?: HTMLElement) {
    const l = document.fullscreenElement
    if (l) document.exitFullscreen()
    else (El || document.body).requestFullscreen()
    return !l
}
type tween = keyof typeof Bezier.tween
/** 贝塞尔 */
export class Bezier {
    static readonly tween = {
        // t:百分比0-1; a:多阶贝塞尔参数;
        1: (t: number, ...a: number[]) => a[0] + (a[1] - a[0]) * t,
        2: (t: number, ...a: number[]) => ((1 - t) * (1 - t)) * a[0] + 2 * t * (1 - t) * a[1] + t * t * a[2],
        3: (t: number, ...a: number[]) => a[0] * (1 - t) * (1 - t) * (1 - t) + 3 * a[1] * t * (1 - t) * (1 - t) + 3 * a[2] * t * t * (1 - t) + a[3] * t * t * t,
    }
    /**
     * 双值坐标
     * @param callback 回调入参计算后的贝塞尔值
     * @param duration 持续时间
     * @param x 多阶贝塞尔x参数
     * @param y 多阶贝塞尔y参数
     */
    static AnimaXY(callback: (x: number, y: number) => void, duration: number, x: number[], y: number[]) {
        const xi = x.length, yi = y.length;
        if (!(xi == yi && xi > 1 && xi < 5)) {
            console.error('Bezier.Anima函数的参数3或4的数组长度需在2-4范围');
            return;
        }
        const tween = this.tween[xi - 1 as tween];
        CountAnimaFrame((t) => {
            callback(tween(t, ...x), tween(t, ...y))
        }, duration)
    }
    /**
     * 单值 (同AnimaXY函数)
     * @param callback 回调入参计算后的贝塞尔值
     * @param duration 持续时间
     * @param a 多阶贝塞尔参数
     */
    static Anima(callback: (v: number) => void, duration: number, a: number[]) {
        const i = a.length;
        if (!(i >= 2)) {
            console.error('Bezier.Anima函数的参数3的数组长度需在2-3范围');
            return;
        }
        const tween = this.tween[i - 1 as tween];
        CountAnimaFrame((t) => {
            callback(tween(t, ...a))
        }, duration)
    }
}
/** 定时器 - 基于requestAnimationFrame
 * @param callback 回调
 * @param n ms
 * @param repeat 是否循环
 * @returns 立即停止函数stop
 */
export function $Timing(callback: Function, n: number, repeat?: boolean) {
    let endTime = Date.now() + n
    let id: number | null;
    let down
    function stop() { id && cancelAnimationFrame(id) }
    function foo() {
        down = (endTime - Date.now()) / 1000
        if (down <= 0) {
            if (!repeat) {
                stop()
                callback()
                return
            } else endTime = Date.now() + n
            callback()
        }
        id = requestAnimationFrame(foo)
    }
    queueMicrotask(foo)
    // foo()
    return stop
}
/** 持续执行器 - 基于requestAnimationFrame
 * @param duration ms
 * @param callback 回调入参百分比
 * @returns 立即停止函数stop
 */
export function CountAnimaFrame(callback: (e: number) => void, duration: number) {
    const endTime = Date.now() + duration;
    let id: number | null;
    function stop() { id && cancelAnimationFrame(id) }
    function foo() {
        const now = endTime - Date.now();
        callback((duration - now) / duration)
        if (now <= 0) {
            stop()
            return;
        }
        id = requestAnimationFrame(foo)
    }
    queueMicrotask(foo)
    // foo()
    return stop;
}
//-----------------------------滚动---------------------

/** 使用滚轮或拖拽进行滚动内容 */
export function catchScroll(el: HTMLElement, to?: 'top' | 'left', destroy?: (e: Function) => void) {
    let startX: number, startY: number;
    let options = { passive: false };
    el.addEventListener('wheel', wheel, options);
    el.addEventListener('mousedown', drag, options);
    destroy?.(Destroy);
    //拖拽
    function drag(e: MouseEvent) {
        if (e.button <= 1) {
            e.preventDefault();
            startX = e.offsetX;
            startY = e.offsetY;
            el.addEventListener('mousemove', move);
            el.addEventListener('mouseup', stop);
            el.addEventListener('mouseleave', stop);
        }
    }
    function move(e: MouseEvent) {
        el.scrollTo({ top: el.scrollTop - (e.offsetY - startY), left: el.scrollLeft - (e.offsetX - startX) });
    }
    function wheel(e: WheelEvent) {
        e.preventDefault();
        if (to == 'top') el.scrollTo({ top: el.scrollTop + e.deltaY });
        else if (to == 'left') el.scrollTo({ left: el.scrollLeft + e.deltaY });
        else el.scrollTo({ top: el.scrollTop + e.deltaY, left: el.scrollLeft + e.deltaY });
    }
    //释放资源
    function stop() {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseup', stop);
        el.removeEventListener('mouseleave', stop);
    }
    function Destroy() {
        el.removeEventListener('wheel', wheel);
        el.removeEventListener('mousedown', drag);
    }
}
//-----------------------------文件----------------------
/** 拖动上传文件 */
export function getDragFiles(el: HTMLElement) {
    const options = { passive: false };
    function Cancel(e: Event) {
        e.stopPropagation()
        e.preventDefault()
    }
    function dragenter(e: DragEvent) {
        Cancel(e)
    }
    function dragover(e: DragEvent) {
        Cancel(e)
    }
    function drop(e: DragEvent) {
        Cancel(e)
        console.log(e.dataTransfer?.files)
        console.log(e.dataTransfer?.items)
    }

    el.addEventListener('dragenter', dragenter, options)
    el.addEventListener('dragover', dragover, options)
    el.addEventListener('drop', drop, options)
}
function Record<T extends Record<string, keyof FileReader>>(o: T) {
    return o
}
type files = HTMLInputElement['files']
type result = FileReader['result'][]
const ReadAs = Record({
    Buffer: 'readAsArrayBuffer',
    Binary: 'readAsBinaryString',
    Base64: 'readAsDataURL',
    Text: 'readAsText',
})
export type ev = { files: File[] | null; result: result | null }
/** 转换input选择的文件
 * @param El input文件类型元素
 * @param readAs 到数据类型
 * @param cb result[]值等于null表示转换失败
 */
export function getFile(
    El: HTMLInputElement,
    readAs: keyof typeof ReadAs,
    cb: (ev: ev) => void,
) {
    El.addEventListener('change', change, false)
    function change(e: Event) {
        const el = e.target as HTMLInputElement
        const result: result = []
        if (!el.files) {
            cb({ files: null, result: null })
            return
        }
        
        const files = Array.from(el.files)
        let n = 0
        for (let i = 0; i < files.length; i++) {
            const Reader = new FileReader()
            Reader.onerror = (e) => {
                result[i] = null
            }
            Reader.onload = (e) => {
                if (e.target) result[i] = e.target.result
                else result[i] = null
            }
            Reader.onloadend = (e) => {
                ++n
                if (n == files.length) cb({ files, result })
            }
            Reader[ReadAs[readAs]](files[i])
        }
    }
}