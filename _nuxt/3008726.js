(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(t,e){!function(){var t={control:!1,transition:"0",itemsRaw:document.querySelectorAll("[data-menu]"),items:[],controller:document.querySelector("[data-menu-control]")};function e(){t.control=!t.control,setTimeout((function(){t.items.forEach((function(e){0==t.control&&e.Raw.setAttribute("style","transition: all ".concat(e.Time.Out," ").concat(e.CubicBezier.Out," ").concat(e.Delay.Out,";-webkit-transition: all ").concat(e.Time.Out," ").concat(e.CubicBezier.Out," ").concat(e.Delay.Out,";").concat(e.Style)),1==t.control&&e.Raw.setAttribute("style","transition: all ".concat(e.Time.In," ").concat(e.CubicBezier.In," ").concat(e.Delay.In,";-webkit-transition: all ").concat(e.Time.In," ").concat(e.CubicBezier.In," ").concat(e.Delay.In,";"))}))}),0)}t.controller.addEventListener("click",(function(t){e()})),window.addEventListener("load",(function(){document.querySelectorAll(".menu-background a").forEach((function(t){t.addEventListener("click",(function(){e()}))})),document.querySelectorAll(".menu a").forEach((function(n){n.addEventListener("click",(function(){1==t.control&&e()}))})),t.itemsRaw.forEach((function(e){var n={Time:{In:"",Out:""},CubicBezier:{In:"",Out:""},Style:"",Delay:{In:"",Out:""},Raw:e};e.dataset.menuTime?(n.Time.In=e.dataset.menuTime,n.Time.Out=e.dataset.menuTime):(e.dataset.menuTimeIn||e.dataset.menuTimeOut)&&(n.Time.In=e.dataset.menuTimeIn,n.Time.Out=e.dataset.menuTimeOut),e.dataset.menuCubicBezier?(n.CubicBezier.In=e.dataset.menuCubicBezier,n.CubicBezier.Out=e.dataset.menuCubicBezier):(e.dataset.menuCubicBezierIn||e.dataset.menuCubicBezierOut)&&(n.CubicBezier.In=e.dataset.menuCubicBezierIn,n.CubicBezier.Out=e.dataset.menuCubicBezierOut),e.dataset.menuDelay?(n.Delay.In=e.dataset.menuDelay,n.Delay.Out=e.dataset.menuDelay):(e.dataset.menuDelayIn||e.dataset.menuDelayOut)&&(n.Delay.In=e.dataset.menuDelayIn,n.Delay.Out=e.dataset.menuDelayOut),e.dataset.menuStyle&&(n.Style=e.dataset.menuStyle),t.items.push(n)})),t.items.forEach((function(t){t.Raw.setAttribute("style","".concat(t.Style,";"))}))})),console.log(t)}()},135:function(t,e,n){var content=n(195);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("6301aa89",content,!0,{sourceMap:!1})},154:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{loading:!1,className:"none"}},methods:{start:function(){var t=this;setTimeout((function(){t.loading=!0,t.className="start"}),800)},finish:function(){var t=this;setTimeout((function(){t.loading=!1,t.className="finish"}),2e3)}}},r=(n(194),n(31)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"loading",class:t.className},[t._m(0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",[t._v("nuxtLoading%")])])}],!1,null,"93b7cf64",null);e.default=component.exports},155:function(t,e,n){"use strict";var o={transition:{afterLeave:function(t){console.log("afterLeave",t)}}},r=n(31),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavHeader"),t._v(" "),n("div",{attrs:{"data-scroll-container":""}},[n("Nuxt"),t._v(" "),t._m(0)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mt-1"},[n("div",{staticClass:"line border-top-1 my-2"}),t._v(" "),n("div",{staticClass:"desc ccg ccg-1 m:ccg-4 p-3",staticStyle:{"--grid-gap-x":"10vw"}},[n("div",{staticClass:"m:mb-0 mb-4"},[n("div",{staticClass:"title fw-600 mb-2"},[t._v("\r\n                        The Other Sites\r\n                    ")]),t._v(" "),n("div",{staticClass:"footer-links"})]),t._v(" "),n("div",{staticClass:"m:mb-0 mb-4"},[n("div",{staticClass:"title fw-600 mb-2"},[t._v("\r\n                        Address\r\n                    ")]),t._v(" "),n("div",{},[t._v("No. 1, Nantai Street, Yongkang District, Tainan City 71005")])]),t._v(" "),n("div",{staticClass:"m:mb-0 mb-4"}),t._v(" "),n("div",{staticClass:"mb-2"},[t._v("Hi @herc.se\r\n                    "),n("br"),n("br"),t._v(" hercsart @github.com\r\n                    "),n("br"),n("br"),t._v(" HERC_SE @Twitter.com\r\n                    "),n("br"),n("br"),t._v(" Herculins @Twitch.com\r\n                    "),n("br"),n("br"),t._v(" HERC.SE @Instagram.com")])]),t._v(" "),n("div",{staticClass:"bottom flex text-uppercase flex-ai-end"},[n("div",{staticClass:"w-50 m:w-100"},[t._v("© 2022")]),t._v(" "),n("div",{staticClass:"w-100 text-center"},[n("img",{staticClass:"w-100 m:w-50",attrs:{src:"https://developers.herc.se/new-profile/assets/FlatLittleHill.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"w-100 text-right"},[t._v("studio in taiwan.")])])])}],!1,null,null,null);e.a=component.exports;installComponents(component,{NavHeader:n(218).default})},159:function(t,e,n){n(160),t.exports=n(161)},194:function(t,e,n){"use strict";n(135)},195:function(t,e,n){var o=n(60)(!1);o.push([t.i,".loading[data-v-93b7cf64]{position:fixed;left:0;z-index:100000;background-color:var(--base-color);display:block;width:100%;transition:1s cubic-bezier(.84,.01,.23,1);overflow:hidden}.none[data-v-93b7cf64]{top:0;height:0%}.start[data-v-93b7cf64]{top:0;height:100%}.finish[data-v-93b7cf64]{bottom:0;height:0%;transition-delay:1s}.content[data-v-93b7cf64]{width:100%;height:100%;position:absolute;top:0;left:0;transition:.3s}.finish .content[data-v-93b7cf64]{opacity:0}",""]),t.exports=o},196:function(t,e,n){var content=n(197);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("2998b330",content,!0,{sourceMap:!1})},197:function(t,e,n){var o=n(60)(!1);o.push([t.i,".page-enter-active,.page-leave-active{opacity:0;transform:translateY(-10vmin);overflow:hidden}*{opacity:1;transition:transform 1.2s cubic-bezier(.84,.01,.02,.99) .3s,opacity 1.2s .6s}.page-enter,.page-leave-to{opacity:0;transform:translateY(40vmin);overflow:hidden}",""]),t.exports=o},198:function(t,e,n){var content=n(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("7d029a38",content,!0,{sourceMap:!1})},199:function(t,e,n){var o=n(60)(!1);o.push([t.i,':root{--priamry-color:#161616;--on-priamry-color:#e7e5e3;--priamry-container-color:#161616;--on-priamry-container-color:#e7e5e3;--header-1:calc(20px + 7.2vw);--header-4:calc(15px + 1.3vw);--p:calc(10px + 0.5vw);--border-size:2px;--border-color:var(--base-color);--border-radius:0}body{font-family:"Archivo",Noto Sans TC,sans-serif;overflow-x:hidden}body *{font-weight:500;line-height:90%}.logotype{font-size:calc(20px + 8.2vw)}.img{border-radius:20px;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover}img{pointer-events:none}[data-scroll-container]{padding:calc(10px + 1vw)}.content img{margin:15px 0}.LovelyFace{top:30vmax;right:-12vmin}.LovelyFace,.LovelyFace_works{width:25vmin;position:absolute}.LovelyFace_works{top:17vmax;right:12vmin}.BigArrow{position:absolute;width:22vw;top:5vmin;left:2vmin}.SmallStar{width:2.5vw}.SmallStar,.Waa{position:absolute}.Waa{width:5.5vw}.BtnCell{left:0;right:0;margin-right:auto;margin-left:auto;top:-3vmax;width:30vmin}.BtnCell,.Yaaaa{position:absolute}.Yaaaa{right:17vmax;top:6vmax;width:22vmax}.PhoneCall{position:absolute;bottom:-15vmax;right:-100vw;left:-91vw;margin:auto;width:30vmax}.menu-background{z-index:100;width:100%;height:100%;overflow-y:auto}.menu-background,.menu-bg{position:fixed;top:0;left:0}.menu-bg{z-index:-1;height:100%!important}.menu-close-btn{opacity:0;position:absolute;top:0;right:0}',""]),t.exports=o},218:function(t,e,n){"use strict";n.r(e);var o=n(31),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"menu fixed flex w-100",staticStyle:{top:"0",left:"0","z-index":"10000",padding:"calc(10px + 1vw)","mix-blend-mode":"difference"}},[n("NuxtLink",{staticClass:"w-100 text-color-on-base text-decoration-none",attrs:{to:"/"}},[t._v("/-/.SE")]),t._v(" "),n("NuxtLink",{staticClass:"w-100 text-center text-color-on-base text-decoration-none",attrs:{to:"/archive"}},[t._v("OBJECT")]),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"menu-background pt-3 fixed",staticStyle:{"--padding":"calc(10px + .2vw)",display:"none"},attrs:{"data-menu":"","data-menu-delay-out":"1s","data-menu-delay-in":"0s","data-menu-cubic-bezier":"cubic-bezier(1,0,.42,.99)","data-menu-time":"1s","data-menu-style":"opacity: 0; z-index: -1;"}},[n("div",{staticClass:"bg-on-base w-100 h-100 menu-bg",attrs:{"data-menu":"","data-menu-delay-out":".2s","data-menu-delay-in":"0s","data-menu-cubic-bezier":"cubic-bezier(1,0,.42,.99)","data-menu-time":"1s","data-menu-style":"height: 0!important;"}}),t._v(" "),n("div",{staticClass:"line border-top-1 mt-1",attrs:{"data-menu":"","data-menu-delay":".1s","data-menu-time-out":"1s","data-menu-time-in":"2s","data-menu-cubic-bezier":"cubic-bezier(1,0,.42,.99)","data-menu-style":"transform: translateY(-5vmax);opacity: 0;"}}),t._v(" "),n("div",{staticClass:"menu-text text-uppercase border-bottom-1 py-1 m:flex px-2 flex-ai-center",attrs:{"data-menu":"","data-menu-delay":".6s","data-menu-time-in":".8s","data-menu-time-out":".5s","data-menu-cubic-bezier":"cubic-bezier(1,0,.42,.99)","data-menu-style":"transform: translateY(-5vmax);opacity: 0;"}},[n("NuxtLink",{staticClass:"h1 fw-500 text-color-base text-decoration-none w-100",attrs:{to:"/"}},[t._v("home")]),t._v(" "),t._m(1)],1),t._v(" "),n("div",{staticClass:"menu-text text-uppercase border-bottom-1 py-1 m:flex px-2 flex-ai-center",attrs:{"data-menu":"","data-menu-delay":".5s","data-menu-time-in":".8s","data-menu-time-out":".5s","data-menu-cubic-bezier":"cubic-bezier(1,0,.42,.99)","data-menu-style":"transform: translateY(-5vmax);opacity: 0;"}},[n("NuxtLink",{staticClass:"h1 fw-500 text-color-base text-decoration-none w-100",attrs:{to:"/about"}},[t._v("my info")]),t._v(" "),t._m(2)],1),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"menu-text text-uppercase border-bottom-1 py-1 m:flex px-2 flex-ai-center",attrs:{"data-menu":"","data-menu-delay":".3s","data-menu-time-in":".8s","data-menu-time-out":".5s","data-menu-cubic-bezier":"cubic-bezier(1,0,.42,.99)","data-menu-style":"transform: translateY(-5vmax);opacity: 0;"}},[n("NuxtLink",{staticClass:"h1 fw-500 text-color-base text-decoration-none w-100",attrs:{to:"/archive"}},[t._v("archive")]),t._v(" "),n("div",{staticClass:"w-75 m:w-25 mt-2 m:mt-0",attrs:{"data-menu":"","data-menu-delay":".6s","data-menu-time-in":"1.3s","data-menu-time-out":".5s","data-menu-cubic-bezier":"cubic-bezier(1,0,.42,.99)","data-menu-style":"transform: translateX(-10vmax);opacity: 0;"}},[t._v("Koakinaimarche Flower Pattern of Obsolete Uh...WHAT THE? fish pattern bags Motex Mask Design Competition ... ")])],1),t._v(" "),t._m(4)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-btn w-100 text-right text-color-on-base text-decoration-none relative",attrs:{"data-menu-control":""}},[n("div",{staticClass:"menu-close-btn",attrs:{"data-menu":"","data-menu-style":"opacity: 1;","data-menu-time":".5s"}},[t._v("MENU")]),t._v(" "),n("div",{attrs:{"data-menu":"","data-menu-style":"opacity: 0;","data-menu-time":".5s"}},[t._v("CLOSE")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-75 m:w-25 mt-2 m:mt-0",attrs:{"data-menu":"","data-menu-delay":".6s","data-menu-time-in":"1s","data-menu-time-out":".5s","data-menu-cubic-bezier":"cubic-bezier(1,0,.42,.99)","data-menu-style":"transform: translateX(-10vmax);opacity: 0;"}},[t._v("HOME "),n("br"),t._v(" SWEET HOME")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-75 m:w-25 mt-2 m:mt-0",attrs:{"data-menu":"","data-menu-delay":".6s","data-menu-time-in":"1.1s","data-menu-time-out":".5s","data-menu-cubic-bezier":"cubic-bezier(1,0,.42,.99)","data-menu-style":"transform: translateX(-10vmax);opacity: 0;"}},[t._v("WHOS "),n("br"),t._v(" WHERE "),n("br"),t._v(" VALUE ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-text text-uppercase border-bottom-1 py-1 m:flex px-2 flex-ai-center",attrs:{"data-menu":"","data-menu-delay":".4s","data-menu-time-in":".8s","data-menu-time-out":".5s","data-menu-cubic-bezier":"cubic-bezier(1,0,.42,.99)","data-menu-style":"transform: translateY(-5vmax);opacity: 0;"}},[n("a",{staticClass:"h1 fw-500 text-color-base text-decoration-none w-100",attrs:{href:"./index.html"}},[t._v("get in touch")]),t._v(" "),n("div",{staticClass:"w-75 m:w-25 mt-2 m:mt-0",attrs:{"data-menu":"","data-menu-delay":".6s","data-menu-time-in":"1.2s","data-menu-time-out":".5s","data-menu-cubic-bezier":"cubic-bezier(1,0,.42,.99)","data-menu-style":"transform: translateX(-10vmax);opacity: 0;"}},[t._v("GITHUB "),n("br"),t._v(" TWITTER "),n("br"),t._v(" TWITCH "),n("br"),t._v(" INSTAGRAM ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom flex text-uppercase flex-ai-end px-2 mt-5 mb-2",attrs:{"data-menu":"","data-menu-delay":".2s","data-menu-time-in":"1.3s","data-menu-time-out":".5s","data-menu-cubic-bezier":"cubic-bezier(1,0,.42,.99)","data-menu-style":"transform: translateY(-10vmax);opacity: 0;"}},[n("div",{staticClass:"w-50 m:w-100"},[t._v("© 2022")]),t._v(" "),n("div",{staticClass:"w-100 text-center"},[n("img",{staticClass:"w-100 m:w-50",attrs:{src:"https://developers.herc.se/new-profile/assets/FlatLittleHill.svg",alt:""}})]),t._v(" "),n("div",{staticClass:"w-100 text-right"},[t._v("studio in taiwan.")])])}],!1,null,null,null);e.default=component.exports}},[[159,7,1,8]]]);