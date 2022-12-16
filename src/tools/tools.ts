
/** 类型判断 */
export function isType(obj: any) {
    if (obj !== obj) return 'NaN';
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
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
