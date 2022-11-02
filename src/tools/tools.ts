/** 类型判断 */
export function isType(obj: any) {
    if (obj !== obj) return 'NaN';
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
/** 响应式
 * @param obj 目标对象
 * @param callback 响应回调
 * @param deep 深响应(默认false)
 */
export function ref<T extends object>(obj: T, callback: (v: T) => void, deep = false) {
    if (deep) {
        const Handler: ProxyHandler<T> = {
            getPrototypeOf(proto) {
                return { proto, isProxy: true }
            },
            get: (o, k) => {
                subProxy(o, k)
                return Reflect.get(o, k)
            },
            set(o, k, v) {
                Reflect.set(o, k, v)
                subProxy(o, k)
                callback(o)
                return true;
            }
        }
        function subProxy<T extends object>(o: T, k: string | symbol) {
            let l = Reflect.get(o, k)
            if ((typeof l) == 'object' && Object.getPrototypeOf(l).isProxy != true) {
                Reflect.set(o, k, new Proxy(l, Handler))
            }
        }
        return new Proxy<T>(obj, Handler)
    } else {
        type k = keyof T;
        return new Proxy(obj, {
            getPrototypeOf(proto) {
                return { proto, isProxy: true }
            },
            get: (o, k) => Reflect.get(o, k),
            set(o, k, v) {
                Reflect.set(o, k, v)
                callback(obj)
                return true;
            }
        })
    }
}