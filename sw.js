if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return c[s]||(e=new Promise((async e=>{if("document"in self){const c=document.createElement("script");c.src=s,document.head.appendChild(c),c.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!c[s])throw new Error(`Module ${s} didn’t register its module`);return c[s]}))},e=(e,c)=>{Promise.all(e.map(s)).then((s=>c(1===s.length?s[0]:s)))},c={require:Promise.resolve(e)};self.define=(e,r,i)=>{c[e]||(c[e]=Promise.resolve().then((()=>{let c={};const a={uri:location.origin+e.slice(1)};return Promise.all(r.map((e=>{switch(e){case"exports":return c;case"module":return a;default:return s(e)}}))).then((s=>{const e=i(...s);return c.default||(c.default=e),c}))})))}}define("./sw.js",["./workbox-db367478"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/css/accordion.css",revision:"191d0783885861711f1a6dc94ac6aacb"},{url:"assets/css/common.css",revision:"9b6e97bf1a8f3b7b77a9a2adcf7997f2"},{url:"assets/css/content.css",revision:"91a47b9b9678105b08dc2e35bf1659d6"},{url:"assets/css/index.css",revision:"47d4b71a96f044ef2b30d8e275fc3713"},{url:"assets/css/media.css",revision:"9bcc1c317c420fc95c5dd266f8e2683f"},{url:"assets/css/primary.css",revision:"2ac5d8ed8a4c511e0081cd3c609831e4"},{url:"assets/css/secondary.css",revision:"9c2f5e888bcc3803f7775cd6beb14bc5"},{url:"assets/img/avatar.png",revision:"a694a9dc424cd777fd69d9aecab11b3a"},{url:"assets/img/bone.png",revision:"207e55ca97346dae199e97d7ed27a18d"},{url:"assets/img/expander.svg",revision:"633cef086eeb30ffd7b6b2de76ef6e7c"},{url:"assets/img/social/email.png",revision:"96c08c02bc49cfcad7ba5e4b1d4bb1f8"},{url:"assets/img/social/facebook.png",revision:"474b5da11cc41d790563ef47f49a79c7"},{url:"assets/img/social/instagram.png",revision:"cb8e3584d0b825508c587ff6133cb68e"},{url:"assets/img/social/twitter.png",revision:"d55bd78cc42fd03858972f6b15c55676"},{url:"index.html",revision:"ab5ebb352eeb986a5c17164ba0b03e94"}],{})}));
//# sourceMappingURL=sw.js.map
