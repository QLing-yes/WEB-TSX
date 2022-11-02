import { raw, ConstructorEl, h } from "../tools/Components.js";
import type { cycleEl } from "../tools/Components.js";
import { ref } from "../tools/tools.js";

const { href } = new URL('./', import.meta.url)

const template = h(raw`
<link rel="stylesheet" href="${href}CardLogin.css" />
<div class="CardLogin">
    <span>
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
    </span>
    <div class="but">用户登录</div>
</div>
` )
export default template;