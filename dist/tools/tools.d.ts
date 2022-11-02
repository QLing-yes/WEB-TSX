/** 类型判断 */
export declare function isType(obj: any): any;
/** 响应式
 * @param obj 目标对象
 * @param callback 响应回调
 * @param deep 深响应(默认false)
 */
export declare function ref<T extends object>(obj: T, callback: (v: T) => void, deep?: boolean): T;
