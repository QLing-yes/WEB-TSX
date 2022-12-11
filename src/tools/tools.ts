
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
export function ref<T extends object, K extends keyof T>(obj: T, callback: (o: T, k: K) => void, deep = false) {
    if (deep) {
        function subProxy(o: T, k: K) {
            const l = Reflect.get(o, k);
            if (l instanceof Object && Object.getPrototypeOf(l).isProxy != Proxy) {
                Reflect.set(o, k, new Proxy(l as object, Handler));
            }
        }
        const Handler: ProxyHandler<T> = {
            getPrototypeOf(proto) {
                Object.getPrototypeOf(proto).isProxy = Proxy;
                return proto;
            },
            get(o, k) {
                subProxy(o, k as K);
                return Reflect.get(o, k);
            },
            set(o, k, v) {
                Reflect.set(o, k, v);
                subProxy(o, k as K);
                callback(o, k as K);
                return true;
            }
        }
        return new Proxy<T>(obj, Handler);
    } else {
        return new Proxy(obj, {
            getPrototypeOf(proto) {
                Object.getPrototypeOf(proto).isProxy = Proxy;
                return proto;
            },
            get: (o, k) => Reflect.get(o, k),
            set(o, k, v) {
                Reflect.set(o, k, v);
                callback(o, k as K);
                return true;
            }
        })
    }
}