(window.webpackJsonp=window.webpackJsonp||[]).push([[39,21,29],{212:function(t,l,e){var content=e(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("9610f45c",content,!0,{sourceMap:!1})},216:function(t,l,e){"use strict";e.r(l);e(220);var o=e(6),component=Object(o.a)({},(function(){var t=this,l=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"wrapper w-full"},[e("div",{staticClass:"grid grid-cols-6 gap-2 items-center"},[e("div",{staticClass:"col-span-2"},[e("div",{staticClass:"shimmer h-24 w-full"})]),t._v(" "),e("div",{staticClass:"col-span-4"},[e("div",{staticClass:"shimmer h-4 w-full my-1"}),t._v(" "),e("div",{staticClass:"shimmer w-8/12 my-1"}),t._v(" "),e("div",{staticClass:"shimmer w-9/12 my-1"}),t._v(" "),e("div",{staticClass:"shimmer w-full my-1"})])])])])])}],!1,null,"8b5e9a08",null);l.default=component.exports},217:function(t,l,e){var content=e(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("6a2cdb88",content,!0,{sourceMap:!1})},220:function(t,l,e){"use strict";e(212)},221:function(t,l,e){var o=e(18)((function(i){return i[1]}));o.push([t.i,".card[data-v-8b5e9a08]{border:none;box-shadow:0 4px 20px rgba(0,0,0,.08)}",""]),o.locals={},t.exports=o},222:function(t,l,e){"use strict";e.r(l);var o=e(216),r={name:"Modal",data:function(){return{classModal:"".concat(this.size?"xl:w-"+this.size:"xl:w-1/2")}},props:{isShow:{type:Boolean,default:!1},size:{type:String,default:null},isLoading:{type:Boolean,default:!1}},components:{CardShimmer:o.default},methods:{onClose:function(){this.$emit("onClose")}}},n=(e(223),e(6)),component=Object(n.a)(r,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[t.isShow?e("div",{staticClass:"z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed",attrs:{tabindex:"0"}},[e("div",{staticClass:"z-50 relative p-3 mx-auto my-0 w-full"},[e("div",{staticClass:"modal-popup bg-white rounded-2xl shadow-lg border flex flex-col overflow-hidden tn:w-full md:w-4/5 lg:w-3/5",class:t.classModal},[e("button",{staticClass:"fill-current h-6 w-6 absolute right-0 top-0 m-6 font-3xl font-bold primary focus:outline-none",on:{click:t.onClose}},[e("svg",{staticClass:"w-6 h-6 primary",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),t._v(" "),e("div",{staticClass:"px-6 py-3"},[t._t("header")],2),t._v(" "),e("div",{staticClass:"scroll-bar tn:px-3 tn:py-0 md:px-6 overflow-y-auto overscroll-auto"},[t.isLoading?e("div",{staticClass:"space-y-2"},[e("CardShimmer"),t._v(" "),e("CardShimmer"),t._v(" "),e("CardShimmer")],1):e("div",[t._t("default")],2)]),t._v(" "),e("div",{staticClass:"px-6 py-3"},[t._t("footer")],2)])]),t._v(" "),e("div",{staticClass:"z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50",on:{click:t.onClose}})]):t._e()])}),[],!1,null,null,null);l.default=component.exports},223:function(t,l,e){"use strict";e(217)},224:function(t,l,e){var o=e(18)((function(i){return i[1]}));o.push([t.i,".modal-popup{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);max-height:95%;max-width:95%;min-width:20rem}.scroll-bar-hidden::-webkit-scrollbar{display:none}.scroll-bar-hidden{-ms-overflow-style:none;scrollbar-width:none}.scroll-bar::-webkit-scrollbar{width:5px}.scroll-bar::-webkit-scrollbar-thumb{background:#86d0c1;border-radius:2px;margin-right:5px}.scroll-bar{scrollbar-width:thin!important;scrollbar-color:#86d0c1 #fff!important;border-radius:2px}",""]),o.locals={},t.exports=o},307:function(t,l,e){var content=e(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("8b178442",content,!0,{sourceMap:!1})},373:function(t,l,e){"use strict";e(307)},374:function(t,l,e){var o=e(18)((function(i){return i[1]}));o.push([t.i,"@media (min-width:1200px){.scheme-card{width:450px}}",""]),o.locals={},t.exports=o},569:function(t,l,e){"use strict";e.r(l);var o={components:{Modal:e(222).default},props:{dataScheme:{type:Object,default:{}},showModal:{type:Boolean,default:!1}},methods:{closeModal:function(){this.$emit("closeModal")},toSchemePage:function(){this.$emit("toSchemePage")}}},r=(e(373),e(6)),component=Object(r.a)(o,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("Modal",{attrs:{"is-show":t.showModal,size:"auto"},on:{onClose:t.closeModal},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"flex tn:gap-2 md:gap-3 xl:gap-4 items-center"},[e("h1",{staticClass:"tn:text-sm md:text-lg xl:text-xl font-bold"},[t._v("\n        Skema Harga "+t._s(t.dataScheme.name)+"\n      ")]),t._v(" "),e("p",{staticClass:"tn:text-xs md:text-sm text-primary font-semibold cursor-pointer",on:{click:t.toSchemePage}},[t._v("\n        Lihat semua\n      ")])])]},proxy:!0}])},[t._v(" "),e("div",{staticClass:"tn:space-y-3 xl:space-y-0 xl:flex xl:justify-center xl:w-auto"},t._l(t.dataScheme.list,(function(l,o){return e("div",{key:o},[l.name===t.dataScheme.slug?e("div",{staticClass:"scheme-card tn:px-2 tn:py-2 md:px-8 xl:px-4 xl:mx-2 tn:border-top md:border rounded-xl xl:py-3"},[e("div",{staticClass:"h-10 mx-auto"},[e("img",{staticClass:"h-full mx-auto",attrs:{src:""+l.img,alt:"Image not found"}})]),t._v(" "),e("div",{staticClass:"text-center"},[e("h1",{staticClass:"tn:text-lg xl:text-sm font-bold my-2"},[t._v("\n            "+t._s(l.title)+"\n          ")])]),t._v(" "),"wattpad"===t.dataScheme.slug?e("div",{staticClass:"w-auto h-48 border"},[e("img",{staticClass:"h-full mx-auto",attrs:{src:""+l.screenshot,alt:"Image not found"}})]):e("div",{staticClass:"w-full h-full mx-auto"},[e("img",{staticClass:"w-full h-fullmy-2 border",attrs:{src:""+l.screenshot,alt:"Image not found"}})]),t._v(" "),e("div",{staticClass:"space-y-1"},[e("h1",{staticClass:"tn:text-lg xl:text-sm font-bold my-2"},[t._v("Detail Harga")]),t._v(" "),t._l(l.informations,(function(l,o){return e("div",{key:o,staticClass:"flex justify-between items-center tn:text-xs md:text-sm xl:text-xs",class:{"font-bold":l.is_total}},[e("div",[t._v(t._s(l.title))]),t._v(" "),e("div",[t._v(t._s(l.value))])])}))],2),t._v(" "),e("div",{staticClass:"h-px w-full bg-gray-400 my-2"}),t._v(" "),e("div",{},[e("h1",{staticClass:"tn:text-lg xl:text-sm font-bold my-2"},[t._v("\n            Skema Berlangganan\n          ")]),t._v(" "),e("ol",{staticClass:"space-y-1 tn:ml-3 md:ml-4 tn:text-xs md:text-sm xl:text-xs list-decimal list-outside"},t._l(l.schemes,(function(l,o){return e("li",{key:o},[t._v("\n              "+t._s(l)+"\n            ")])})),0)]),t._v(" "),e("div",{staticClass:"h-[2px] w-1/3 mx-auto mt-4 bg-primary md:hidden"})]):t._e()])})),0)])}),[],!1,null,null,null);l.default=component.exports}}]);