(window.webpackJsonp=window.webpackJsonp||[]).push([[90,11,50,101],{232:function(t,e,r){var content=r(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("449637d7",content,!0,{sourceMap:!1})},237:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},238:function(t,e,r){var n=r(244);t.exports=function(source,t){if(null==source)return{};var e,i,r=n(source,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(source);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(r[e]=source[e])}return r},t.exports.default=t.exports,t.exports.__esModule=!0},244:function(t,e){t.exports=function(source,t){if(null==source)return{};var e,i,r={},n=Object.keys(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||(r[e]=source[e]);return r},t.exports.default=t.exports,t.exports.__esModule=!0},252:function(t,e,r){"use strict";r(232)},253:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".alert-card{background-color:#fff8ec}.alert-text{color:#ffc801}",""]),n.locals={},t.exports=n},256:function(t,e,r){var content=r(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("c8cff4e4",content,!0,{sourceMap:!1})},264:function(t,e,r){"use strict";r.r(e);var n={props:{text:{type:String,default:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis praesentium nostrum ad nobis tempora quae nam velit. Maxime mollitia accusamus, rerum, enim placeat, voluptatem aperiam itaque unde fugit suscipit dicta."}}},o=(r(252),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:"alert-card rounded-xl p-3"},[r("div",{staticClass:"flex justify-center gap-3 items-center"},[r("div",{},[r("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M11.9998 8.99996V13M11.9998 17H12.0098M10.2898 3.85996L1.81978 18C1.64514 18.3024 1.55274 18.6453 1.55177 18.9945C1.55079 19.3437 1.64127 19.6871 1.8142 19.9905C1.98714 20.2939 2.2365 20.5467 2.53748 20.7238C2.83847 20.9009 3.18058 20.9961 3.52978 21H20.4698C20.819 20.9961 21.1611 20.9009 21.4621 20.7238C21.7631 20.5467 22.0124 20.2939 22.1854 19.9905C22.3583 19.6871 22.4488 19.3437 22.4478 18.9945C22.4468 18.6453 22.3544 18.3024 22.1798 18L13.7098 3.85996C13.5315 3.56607 13.2805 3.32308 12.981 3.15444C12.6814 2.98581 12.3435 2.89722 11.9998 2.89722C11.656 2.89722 11.3181 2.98581 11.0186 3.15444C10.7191 3.32308 10.468 3.56607 10.2898 3.85996Z",stroke:"#FFC801","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),r("div",[r("p",{staticClass:"tn:text-xs md:text-base alert-text",domProps:{innerHTML:t._s(t.text)}})])])])}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,r){"use strict";r(256)},280:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".btn-drop[data-v-0c577298]{text-align:left;border-radius:.25rem!important;position:relative;background-color:#fff;color:#767676;border:1px solid #ced4da;width:100%;display:flex;align-items:center;justify-content:space-between;height:calc(1.5em + .75rem + 4px)!important}.truncate[data-v-0c577298]{width:250px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:800px){.btn-drop[data-v-0c577298]{width:100%}}.full-width[data-v-0c577298]{width:100%!important}",""]),n.locals={},t.exports=n},302:function(t,e,r){var content=r(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("6bd31dfb",content,!0,{sourceMap:!1})},303:function(t,e,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("9f3eb058",content,!0,{sourceMap:!1})},313:function(t,e,r){"use strict";r.r(e);r(53),r(14),r(68),r(69);var n=r(210),o=r(216),l={props:{isLoading:{type:Boolean,default:!1},type:{type:String,default:""},variant:{type:Object,default:{}},currentVariant:{type:Object,default:function(){}}},components:{Button:n.default,CardShimmer:o.default},methods:{toRupiah:function(t){return t?"Rp"+t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."):"Rp0"},choosePackage:function(t){this.$emit("choosePackage",t)}}},c=r(6),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isLoading?r("div",{staticClass:"w-full"},[r("CardShimmer")],1):r("div",[r("div",{staticClass:"w-full shadow-sm rounded-xl p-3"},["chosen"===t.type?r("div",[r("div",{staticClass:"flex gap-5 items-center"},[r("div",{staticClass:"w-1/5 p-2"},[t.variant.images&&t.variant.images.length>0?r("div",[r("img",{staticClass:"w-full",attrs:{src:""+t.variant.images[0],alt:"Image not found"}})]):r("div",[r("img",{staticClass:"w-full",attrs:{src:"/images/sequrban/cow variant/type-c.svg",alt:"Images not found"}})])]),t._v(" "),r("div",{staticClass:"space-y-1"},[r("p",{staticClass:"tn:text-sm md:text-base font-bold"},[t._v("\n              Sequrban (Seakun x Wadi Qibas)\n            ")]),t._v(" "),r("p",{staticClass:"tn:text-sm md:text-base"},[t._v("\n              Tipe "),r("span",[t._v(" "+t._s(t.variant.packageCode)+" ")])]),t._v(" "),r("p",{staticClass:"tn:text-sm md:text-base"},[t._v("\n              "+t._s(t.toRupiah(t.variant.totalCost))+" x (1 paket)\n            ")])])])]):r("div",[r("div",{staticClass:"flex tn:gap-1 md:gap-4 justify-around items-center"},[r("div",{staticClass:"w-1/5 p-2"},[t.variant.images.length>0?r("div",[r("img",{staticClass:"w-full",attrs:{src:""+t.variant.images[0],alt:"Image not found"}})]):r("div",[r("img",{staticClass:"w-full",attrs:{src:"/images/sequrban/cow variant/type-c.svg",alt:"Images not found"}})])]),t._v(" "),r("div",{staticClass:"tn:text-center md:text-left md:space-y-1"},[r("p",{staticClass:"tn:text-sm md:text-base font-bold"},[t._v("\n              Tipe "),r("span",[t._v(t._s(t.variant.packageCode))]),t._v(" "),r("span",{staticClass:"text-secondary"},[t._v("~"+t._s(t.variant.weight)+" KG")])]),t._v(" "),r("p",{staticClass:"md:text-xl font-extrabold"},[t._v("\n              "+t._s(t.toRupiah(t.variant.totalCost))+"\n            ")]),t._v(" "),r("p",{staticClass:"text-xs"},[t._v("\n              Harga patungan dari harga\n              "),r("span",{staticClass:"font-bold"},[t._v(t._s(t.toRupiah(t.variant.bulkingPrice)))])])]),t._v(" "),t.variant.isAvailable?r("Button",{staticClass:"tn:w-1/4 md:w-1/5",attrs:{label:t.variant.id===t.currentVariant.id?"Dipilih":"Pilih",variant:"primary",disabled:t.variant.id===t.currentVariant.id},on:{click:function(e){return t.choosePackage(t.variant.id)}}}):r("Button",{staticClass:"tn:w-1/4 md:w-1/5",attrs:{label:"Stok habis",variant:"primary",disabled:""}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,r){"use strict";r.r(e);var n={props:{label:String,btnText:String,extendClass:{type:String,default:""}}},o=(r(279),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{on:{click:function(e){return t.$emit("onClick")}}},[t.label?r("label",{attrs:{for:"exampleInputEmail1"}},[t._v(t._s(t.label))]):t._e(),t._v(" "),r("div",{class:"btn btn-drop "+t.extendClass},[r("span",{staticClass:"truncate"},[t._v(t._s(t.btnText))]),t._v(" "),r("svg",{staticClass:"bi bi-chevron-down",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}})])])])}),[],!1,null,"0c577298",null);e.default=component.exports},351:function(t,e,r){r(30),r(23),r(29),r(43),r(44);var n=r(237),o=r(238),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,m=void 0===d?[]:d,f=data.class,h=data.staticClass,style=data.style,v=data.staticStyle,_=data.attrs,C=void 0===_?{}:_,y=o(data,l);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,h],style:[{"enable-background":"new 0 0 512 512"},style,v],attrs:Object.assign({version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:"enable-background:new 0 0 512 512;","xml:space":"preserve"},C)},y),m.concat([r("g",[r("g",[r("path",{attrs:{d:"M509.121,125.966c-3.838-3.838-10.055-3.838-13.893,0L256.005,365.194L16.771,125.966c-3.838-3.838-10.055-3.838-13.893,0\n\t\t\tc-3.838,3.838-3.838,10.055,0,13.893l246.18,246.175c1.842,1.842,4.337,2.878,6.947,2.878c2.61,0,5.104-1.036,6.946-2.878\n\t\t\tl246.17-246.175C512.959,136.021,512.959,129.804,509.121,125.966z"}})])]),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g")]))}}},363:function(t,e,r){"use strict";r(302)},364:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".alert-card{background-color:#fff8ec}.alert-text{color:#ffc801}",""]),n.locals={},t.exports=n},365:function(t,e,r){"use strict";r(303)},366:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".form-content svg[data-v-2e36efe3]{width:16px;height:auto;fill:#a0a3bd}.form-content .icon-right[data-v-2e36efe3]{position:absolute;right:.75rem;top:1.25rem}",""]),n.locals={},t.exports=n},528:function(t,e,r){var content=r(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("f4152d40",content,!0,{sourceMap:!1})},559:function(t,e,r){"use strict";r.r(e);var n={},o=(r(363),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert-card rounded-xl p-3"},[r("div",{staticClass:"flex justify-center gap-3 items-center"},[r("div",{},[r("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M11.9998 8.99996V13M11.9998 17H12.0098M10.2898 3.85996L1.81978 18C1.64514 18.3024 1.55274 18.6453 1.55177 18.9945C1.55079 19.3437 1.64127 19.6871 1.8142 19.9905C1.98714 20.2939 2.2365 20.5467 2.53748 20.7238C2.83847 20.9009 3.18058 20.9961 3.52978 21H20.4698C20.819 20.9961 21.1611 20.9009 21.4621 20.7238C21.7631 20.5467 22.0124 20.2939 22.1854 19.9905C22.3583 19.6871 22.4488 19.3437 22.4478 18.9945C22.4468 18.6453 22.3544 18.3024 22.1798 18L13.7098 3.85996C13.5315 3.56607 13.2805 3.32308 12.981 3.15444C12.6814 2.98581 12.3435 2.89722 11.9998 2.89722C11.656 2.89722 11.3181 2.98581 11.0186 3.15444C10.7191 3.32308 10.468 3.56607 10.2898 3.85996Z",stroke:"#FFC801","stroke-linecap":"round","stroke-linejoin":"round"}})])]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",{staticClass:"tn:text-sm md:text-base alert-text"},[t._v("\n        Pastikan info yang kamu berikan benar. Pihak Vendor akan mencatat dan\n        kirim daging (jatah yang berkurban) sesuai dengan apa yang kamu\n        masukan pada form ini.\n      ")])])}],!1,null,null,null);e.default=component.exports},560:function(t,e,r){"use strict";r.r(e);var n=r(313),o=r(222),l={props:{isShowModal:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},dataQurban:{type:Array,default:[]},qurbanCurrentVariant:{type:Object,default:{}}},components:{SequrbanOrderChoiceCard:n.default,Modal:o.default},methods:{closeModal:function(){this.$emit("closeModal")},choosePackage:function(t){this.$emit("choosePackage",t)}}},c=r(6),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Modal",{attrs:{"is-loading":t.isLoading,"is-show":t.isShowModal},on:{onClose:t.closeModal}},[r("div",[r("h1",{staticClass:"font-bold text-2xl"},[t._v("Ubah varian")])]),t._v(" "),r("div",{staticClass:"w-full space-y-4"},t._l(t.dataQurban,(function(e,n){return r("SequrbanOrderChoiceCard",{key:n,attrs:{variant:e,"current-variant":t.qurbanCurrentVariant},on:{choosePackage:t.choosePackage}})})),1)])}),[],!1,null,null,null);e.default=component.exports},561:function(t,e,r){"use strict";r.r(e);var n=r(222),o=r(210),l=r(264),c={components:{Modal:n.default,Button:o.default,WarningInfo:l.default},props:{showModal:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},dataOrder:{type:Object,default:{}}},methods:{onClose:function(){this.$emit("onClose")}}},d=r(6),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Modal",{attrs:{"is-show":t.showModal},on:{onClose:t.onClose},scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"font-bold text-lg"},[t._v("Cek Data Pesanan")])]},proxy:!0}])},[t._v(" "),r("div",{staticClass:"-mt-3"},[r("WarningInfo",{attrs:{text:"Periksa kembali data kamu sebelum melanjutkan ke pembayaran"}})],1),t._v(" "),r("div",{staticClass:"mt-3 md:px-3"},[r("h1",{staticClass:"text-sm"},[t._v("Nama pemesan")]),t._v(" "),r("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.fullname))])]),t._v(" "),r("div",{staticClass:"mt-2 md:px-3"},[r("h1",{staticClass:"text-sm"},[t._v("Nomor telepon whatsapp")]),t._v(" "),r("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.whatsapp))])]),t._v(" "),r("div",{staticClass:"mt-2 md:px-3"},[r("h1",{staticClass:"text-sm"},[t._v("Email")]),t._v(" "),r("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.email))])]),t._v(" "),r("div",{staticClass:"mt-2 md:px-3"},[r("h1",{staticClass:"text-sm"},[t._v("Nama lengkap yang berqurban")]),t._v(" "),r("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.qurban_fullname))])]),t._v(" "),r("div",{staticClass:"mt-2 md:px-3"},[r("h1",{staticClass:"text-sm"},[t._v("Nama ayah kandung yang berqurban")]),t._v(" "),r("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.qurban_father_name))])]),t._v(" "),r("div",{staticClass:"mt-2 md:px-3"},[r("h1",{staticClass:"text-sm"},[t._v("Alamat pengiriman daging qurban")]),t._v(" "),r("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.address))])]),t._v(" "),r("div",{staticClass:"mt-2 md:px-3"},[r("h1",{staticClass:"text-sm"},[t._v("Kota / Kecamatan")]),t._v(" "),r("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.city))])]),t._v(" "),r("div",{staticClass:"mt-2 md:px-3"},[r("h1",{staticClass:"text-sm"},[t._v("Kode pos")]),t._v(" "),r("p",{staticClass:"font-bold"},[t._v(t._s(t.dataOrder.postal_code))])]),t._v(" "),r("div",{staticClass:"h-1 w-full bg-gray-300 my-2"}),t._v(" "),r("Button",{staticClass:"w-full mt-2 py-2",attrs:{variant:"primary",label:"Daftar","is-loading":t.isLoading},on:{click:function(e){return t.$emit("clickSubmit")}}}),t._v(" "),r("Button",{staticClass:"w-full mt-2",attrs:{variant:"secondary",label:"Kembali"},on:{click:t.onClose}})],1)}),[],!1,null,null,null);e.default=component.exports},562:function(t,e,r){"use strict";r.r(e);r(215);var n={name:"Input",props:{name:{type:String,default:""},label:{type:String,default:""},value:{type:[String,Number],default:""},placeholder:{type:String,default:""},content:{type:String,default:""},error:{type:Object,default:function(){return{isError:!1,message:""}}},initValue:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},dataList:{type:Array,default:function(){return[{value:null,text:"No record found"}]}}},data:function(){return{currentValue:"",newValue:"",newContent:""}},watch:{currentValue:function(t){this.$emit("input",t),this.$emit("onSelectOption",t)},initValue:function(t){this.currentValue=t},value:function(t){this.newValue="data."+t},content:function(t){this.newContent="data."+t}},created:function(){this.currentValue=this.initValue,this.newValue=this.value?"data."+this.value:"",this.newContent=this.content?"data."+this.content:""}},o=(r(365),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",{attrs:{for:t.name}},[t._v(t._s(t.label))]),t._v(" "),r("div",{staticClass:"form-content relative"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"appearance-none border rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentValue=e.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:""},domProps:{value:null}},[t._v("\n        "+t._s(t.placeholder)+"\n      ")]),t._v(" "),t._t("optionList")],2),t._v(" "),r("div",{staticClass:"icon-right"},[t._t("iconRight")],2)]),t._v(" "),t.error.isError?r("p",{staticClass:"text-red-500 text-xs italic"},[t._v("\n    "+t._s(t.error.message)+"\n  ")]):t._e()])}),[],!1,null,"2e36efe3",null);e.default=component.exports},608:function(t,e,r){"use strict";r(528)},609:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".payment-list[data-v-35cce774]{position:absolute;top:0;z-index:20;padding:20px;max-height:200px;overflow-y:auto}.slide-up-enter-active[data-v-35cce774]{transition:all .5s ease}.slide-up-leave-active[data-v-35cce774]{transition:all .5s ease}.slide-fade-leave-to[data-v-35cce774],.slide-up-enter[data-v-35cce774],.slide-up-leave-active[data-v-35cce774]{transform:translateY(-20vh);opacity:0}",""]),n.locals={},t.exports=n},634:function(t,e,r){"use strict";r.r(e);r(30),r(23),r(29),r(43),r(44);var n=r(17),o=(r(137),r(133),r(37),r(45)),l=r.n(o),c=r(313),d=r(559),m=r(560),f=r(561),h=r(277),v=r(562),_=r(210),C=r(316),y=r(312),w=r(351),x=r.n(w),k=r(58),P=r(86),O=r(346);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var M={data:function(){return{typeId:"",isLoading:!1,isLoadingSubmit:!1,isShowModalPackage:!1,isShowModalConfirmation:!1,iSshowOption:!1,showCodePhone:!1,isAgree:!1,dataQurban:[],dataDetailQurban:{},idPhone:"+62",codePhone:62,dataParamOrder:{fullname:"",email:"",whatsapp:"",vendor_code:"",type:"",joint_price:0,admin_fee:0,delivery_cost:0,service_cost:0,packaging_cost:0,total_cost:0,bulking_price:0,discount_price:0,down_payment:0,remaining_payment:0,qurban_fullname:"",qurban_father_name:"",address:"",city:"",postal_code:""},registeredUser:{fullname:"",whatsapp:"",email:"",qurban_fullname:"",qurban_father_name:"",address:"",city:"",postal_code:""},internationalPhoneNumbers:O.a,errorForm:{fullname:{isError:!1,message:""},whatsapp:{isError:!1,message:""},email:{isError:!1,message:""},qurban_fullname:{isError:!1,message:""},qurban_father_name:{isError:!1,message:""},address:{isError:!1,message:""},city:{isError:!1,message:""},postal_code:{isError:!1,message:""}}}},components:{NavbarBlank:k.default,SequrbanChoiceCard:c.default,SequrbanWarningCard:d.default,ModalChangeOrderPackage:m.default,ModalDataConfirmation:f.default,InputForm:h.default,SelectOption:v.default,Button:_.default,ButtonDrop:C.default,ButtonDropDownNew:y.default,DownArrowIcon:x.a,Footer:P.default},watch:{$route:function(t,e){this.id=t.query.id,t!==e&&(this.dataDetailQurban={},this.getDataDetailQurban(this.id))},idPhone:function(){this.validationForm("whatsapp")},dataParamOrder:function(){this.validationForm()}},mounted:function(){this.typeId=this.$route.query.id,this.getDataDetailQurban(this.typeId),this.setFieldValueFromLocalStorage()},methods:{getDataQurban:function(){var t=this;this.isLoading=!0,l.a.get("https://seakun-packet-api-v2.herokuapp.com/sequrban").then((function(e){t.dataQurban=e.data,t.isLoading=!1})).catch((function(t){return console.log(t)}))},getDataDetailQurban:function(t){var e=this;this.isLoading=!0,l.a.get("https://seakun-packet-api-v2.herokuapp.com/sequrban/".concat(t)).then((function(t){e.dataDetailQurban=t.data,e.isLoading=!1})).catch((function(t){return console.log(t)}))},showModalPackage:function(){this.isShowModalPackage=!0,this.getDataQurban()},closeModalPackage:function(){this.isShowModalPackage=!1},choosePackage:function(t){this.isShowModalPackage=!1,this.$router.push("/sequrban/order?id=".concat(t))},validationForm:function(input){var t=this.dataParamOrder,e=/^[A-Za-z][A-Za-z\s]*$/,r=!0,o={fullname:{isError:!1,message:""},whatsapp:{isError:!1,message:""},email:{isError:!1,message:""},qurban_fullname:{isError:!1,message:""},qurban_father_name:{isError:!1,message:""},address:{isError:!1,message:""},city:{isError:!1,message:""},postal_code:{isError:!1,message:""}};return"fullname"!==input&&input||(""===t.fullname?(o.fullname={isError:!0,message:"Nama lengkap harus diisi"},r=!1):t.fullname.match(e)||(o.fullname={isError:!0,message:"Format nama salah"},r=!1)),"qurban_fullname"!==input&&input||(""===t.qurban_fullname?(o.qurban_fullname={isError:!0,message:"Nama lengkap harus diisi"},r=!1):t.qurban_fullname.match(e)||(o.qurban_fullname={isError:!0,message:"Format nama salah"},r=!1)),"qurban_father_name"!==input&&input||(""===t.qurban_father_name?(o.qurban_father_name={isError:!0,message:"Nama lengkap harus diisi"},r=!1):t.qurban_father_name.match(e)||(o.qurban_father_name={isError:!0,message:"Format nama salah"},r=!1)),"email"!==input&&input||(""===t.email?(o.email={isError:!0,message:"Email harus diisi"},r=!1):t.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||(o.email={isError:!0,message:"Format email salah"},r=!1)),"whatsapp"!==input&&input||(""===t.whatsapp?(o.whatsapp={isError:!0,message:"Nomor whatsapp harus diisi"},r=!1):("+62"!==this.idPhone||t.whatsapp.match(/^[8][0-9]*$/))&&("+62"===this.idPhone||t.whatsapp.match(/^[0-9]*$/))||(o.whatsapp={isError:!0,message:"Format nomor whatsapp salah. cth: 81234567890"},r=!1)),"postal_code"!==input&&input||(""===t.postal_code?(o.postal_code={isError:!0,message:"Kode pos harus diisi"},r=!1):t.postal_code.match(/^[0-9]*$/)?t.postal_code.length>5&&(o.postal_code={isError:!0,message:"Maksimal kode pos 5 angka"},r=!1):(o.postal_code={isError:!0,message:"Format kode pos salah"},r=!1)),"address"!==input&&input||""===t.address&&(o.address={isError:!0,message:"Alamat harus diisi"},r=!1),"city"!==input&&input||""===t.city&&(o.city={isError:!0,message:"Kecamatan / kota harus diisi"},r=!1),this.errorForm=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},o),r},clickSubmit:function(){this.validationForm(),console.log(this.validationForm()),this.validationForm()&&(this.isShowModalConfirmation=!0)},closeModalConfirmation:function(){this.isShowModalConfirmation=!1},submitDataOrder:function(){var t=this;this.isLoadingSubmit=!0,this.dataParamOrder={email:this.dataParamOrder.email,whatsapp:this.codePhone+this.dataParamOrder.whatsapp,discount_price:this.dataDetailQurban.discountPrice,address:this.dataParamOrder.address,city:this.dataParamOrder.city,postal_code:this.dataParamOrder.postal_code,fullname:this.capitalizeFirstLetter(this.dataParamOrder.fullname),qurban_fullname:this.capitalizeFirstLetter(this.dataParamOrder.qurban_fullname),qurban_father_name:this.capitalizeFirstLetter(this.dataParamOrder.qurban_father_name),vendor_code:this.dataDetailQurban.vendorCode,type:this.dataDetailQurban.packageCode,joint_price:parseInt(this.dataDetailQurban.jointPrice),admin_fee:parseInt(this.dataDetailQurban.adminFee),delivery_cost:parseInt(this.dataDetailQurban.deliveryCost),service_cost:parseInt(this.dataDetailQurban.serviceCost),packaging_cost:parseInt(this.dataDetailQurban.packagingCost),total_cost:parseInt(this.dataDetailQurban.totalCost),bulking_price:parseInt(this.dataDetailQurban.bulkingPrice),down_payment:parseInt(this.dataDetailQurban.downPayment),remaining_payment:parseInt(this.dataDetailQurban.remainingPayment)},l.a.post("https://seakun-api.herokuapp.com/sequrban/register",this.dataParamOrder).then((function(e){t.toPaymentPage(),t.isLoadingSubmit=!1})).catch((function(t){console.log(t)}))},toPaymentPage:function(){this.$router.push("/payment?type=ondemand&provider=sequrban&packet_id=".concat(this.typeId,"&email=").concat(this.dataParamOrder.email,"&whatsapp=").concat(this.dataParamOrder.whatsapp,"&holder=").concat(this.dataParamOrder.fullname))},capitalizeFirstLetter:function(t){for(var e=t.toLowerCase().split(" "),i=0;i<e.length;i++)e[i]=e[i].charAt(0).toUpperCase()+e[i].substring(1);return e.join(" ")},chooseCodePhone:function(t){this.idPhone=t.dialCode,this.codePhone=t.dialCode.slice(1),this.showCodePhone=!1},goBackToSequrbanPage:function(){this.$router.push("/sequrban")},setFieldValueFromLocalStorage:function(){var t=JSON.parse(localStorage.getItem("registered_user"));t&&(this.dataParamOrder.fullname=t.fullname,this.dataParamOrder.email=t.email,this.dataParamOrder.whatsapp=t.whatsapp,this.dataParamOrder.qurban_fullname=t.qurban_fullname,this.dataParamOrder.qurban_father_name=t.qurban_father_name,this.dataParamOrder.address=t.address,this.dataParamOrder.city=t.city,this.dataParamOrder.postal_code=t.postal_code)},setLocalStorage:function(t){var e=this;document.getElementById(t).addEventListener("change",(function(r){e.registeredUser[t]=r.target.value,localStorage.setItem("registered_user",JSON.stringify(e.registeredUser))}))}}},j=(r(608),r(6)),component=Object(j.a)(M,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NavbarBlank"),t._v(" "),r("div",{staticClass:"container pt-24 -mb-8"},[r("div",{staticClass:"md:shadow md:rounded-3xl max-w-xl mx-auto tn:p-2 md:p-5"},[r("div",[r("h1",{staticClass:"text-3xl font-bold"},[t._v("Pesanan")]),t._v(" "),r("p",[t._v("Silakan isi terlebih dahulu sebelum melakukan pemesanan")]),t._v(" "),r("div",{staticClass:"h-1 w-full bg-gray-300 my-2"}),t._v(" "),r("div",{staticClass:"flex justify-between mt-4"},[r("p",{staticClass:"font-bold"},[t._v("Produk yang dipesan")]),t._v(" "),r("p",{staticClass:"text-primary font-bold cursor-pointer",on:{click:t.showModalPackage}},[t._v("\n            Ubah paket\n          ")])]),t._v(" "),r("div",{staticClass:"my-2"},[r("SequrbanChoiceCard",{attrs:{type:"chosen","is-loading":t.isLoading,variant:t.dataDetailQurban}})],1),t._v(" "),r("div",{staticClass:"mt-4"},[r("h1",{staticClass:"font-bold"},[t._v("Informasi pengguna")]),t._v(" "),r("div",{staticClass:"my-2"},[r("SequrbanWarningCard")],1)])]),t._v(" "),r("InputForm",{staticClass:"mt-4",attrs:{label:"Nama pemesan",placeholder:"Tulis namamu di sini",error:t.errorForm.fullname,id:"fullname"},on:{change:function(e){return t.setLocalStorage("fullname")},keyup:function(e){return t.validationForm("fullname")}},model:{value:t.dataParamOrder.fullname,callback:function(e){t.$set(t.dataParamOrder,"fullname",e)},expression:"dataParamOrder.fullname"}}),t._v(" "),r("label",{staticClass:"mt-4 text-sm",attrs:{for:"nomor-telepon"}},[t._v("Nomor telepon untuk pemotongan")]),t._v(" "),r("div",{staticClass:"relative inline-block text-left w-full"},[r("div",{staticClass:"grid grid-cols-4 gap-3 items-end w-full"},[r("ButtonDropDownNew",{staticClass:"rounded-xl w-full",attrs:{btnText:t.idPhone},on:{click:function(e){t.showCodePhone=!t.showCodePhone}}}),t._v(" "),r("InputForm",{staticClass:"col-span-3 w-full",attrs:{label:"",placeholder:"Masukkan nomor telepon WhatsApp mu",error:t.errorForm.whatsapp,id:"whatsapp"},on:{change:function(e){return t.setLocalStorage("whatsapp")},keyup:function(e){return t.validationForm("whatsapp")}},model:{value:t.dataParamOrder.whatsapp,callback:function(e){t.$set(t.dataParamOrder,"whatsapp",e)},expression:"dataParamOrder.whatsapp"}})],1),t._v(" "),r("div",{staticClass:"relative"},[r("transition",{attrs:{name:"slide-up"}},[t.showCodePhone?r("div",{staticClass:"payment-list w-full bg-white shadow rounded",attrs:{role:"none"}},t._l(t.internationalPhoneNumbers,(function(e){return r("div",{key:e.name,staticClass:"cursor-pointer",on:{click:function(r){return t.chooseCodePhone(e)}}},[t._v("\n                "+t._s(e.name+" ("+e.dialCode+")")+"\n              ")])})),0):t._e()])],1)]),t._v(" "),r("InputForm",{staticClass:"mt-4",attrs:{label:"Email",placeholder:"Tulis alamat email",error:t.errorForm.email,id:"email"},on:{change:function(e){return t.setLocalStorage("email")},keyup:function(e){return t.validationForm("email")}},model:{value:t.dataParamOrder.email,callback:function(e){t.$set(t.dataParamOrder,"email",e)},expression:"dataParamOrder.email"}}),t._v(" "),r("InputForm",{staticClass:"mt-4",attrs:{label:"Nama lengkap yang diniatkan untuk berqurban",placeholder:"Tulis nama di sini",error:t.errorForm.qurban_fullname,id:"qurban_fullname"},on:{change:function(e){return t.setLocalStorage("qurban_fullname")},keyup:function(e){return t.validationForm("qurban_fullname")}},model:{value:t.dataParamOrder.qurban_fullname,callback:function(e){t.$set(t.dataParamOrder,"qurban_fullname",e)},expression:"dataParamOrder.qurban_fullname"}}),t._v(" "),r("div",{staticClass:"mt-1 ml-1 -mb-3"},[r("label",{staticClass:"space-x-1",staticStyle:{display:"inline-block"},attrs:{for:"nama-lengkap"}},[r("input",{staticStyle:{"vertical-align":"middle"},attrs:{type:"checkbox",name:"nama-lengkap",id:"nama-lengkap"},on:{change:function(e){t.dataParamOrder.qurban_fullname=t.dataParamOrder.fullname}}}),r("span",{staticClass:"text-sm",staticStyle:{"vertical-align":"middle"}},[t._v("Sama seperti pemesan")])])]),t._v(" "),r("InputForm",{staticClass:"mt-4",attrs:{label:"Nama ayah kandung yang diniatkan untuk berqurban",placeholder:"Tulis nama di sini",error:t.errorForm.qurban_father_name,id:"qurban_father_name"},on:{change:function(e){return t.setLocalStorage("qurban_father_name")},keyup:function(e){return t.validationForm("qurban_father_name")}},model:{value:t.dataParamOrder.qurban_father_name,callback:function(e){t.$set(t.dataParamOrder,"qurban_father_name",e)},expression:"dataParamOrder.qurban_father_name"}}),t._v(" "),r("InputForm",{staticClass:"mt-4",attrs:{label:"Alamat pengiriman daging qurban",placeholder:"Tulis alamat agar vendor mengirimkan daging qurbanmu",error:t.errorForm.address,id:"address"},on:{change:function(e){return t.setLocalStorage("address")},keyup:function(e){return t.validationForm("address")}},model:{value:t.dataParamOrder.address,callback:function(e){t.$set(t.dataParamOrder,"address",e)},expression:"dataParamOrder.address"}}),t._v(" "),r("div",{staticClass:"grid grid-cols-3 gap-3 mt-4"},[r("InputForm",{staticClass:"mt-0 col-span-2",attrs:{label:"Kota / Kecamatan",placeholder:"Masukkan kota / kecamatan",error:t.errorForm.city,id:"city"},on:{change:function(e){return t.setLocalStorage("city")},keyup:function(e){return t.validationForm("city")}},model:{value:t.dataParamOrder.city,callback:function(e){t.$set(t.dataParamOrder,"city",e)},expression:"dataParamOrder.city"}}),t._v(" "),r("InputForm",{staticClass:"mt-0",attrs:{label:"Kode pos",placeholder:"Kode pos",error:t.errorForm.postal_code,id:"postal_code"},on:{change:function(e){return t.setLocalStorage("postal_code")},keyup:function(e){return t.validationForm("postal_code")}},model:{value:t.dataParamOrder.postal_code,callback:function(e){t.$set(t.dataParamOrder,"postal_code",e)},expression:"dataParamOrder.postal_code"}})],1),t._v(" "),r("div",{staticClass:"mt-4 ml-1"},[r("label",{staticClass:"space-x-1",staticStyle:{display:"inline-block"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.isAgree,expression:"isAgree"}],staticStyle:{"vertical-align":"middle"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAgree)?t._i(t.isAgree,null)>-1:t.isAgree},on:{change:function(e){var r=t.isAgree,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&(t.isAgree=r.concat([null])):l>-1&&(t.isAgree=r.slice(0,l).concat(r.slice(l+1)))}else t.isAgree=o}}}),r("span",{staticClass:"text-sm",staticStyle:{"vertical-align":"middle"}},[t._v("Menyetujui aturan yang dibuat Seakun")]),r("a",{staticClass:"text-primary text-sm font-bold cursor-pointer",attrs:{href:"/terms-of-use",target:"_blank"}},[t._v("\n            Lihat detail")])])]),t._v(" "),r("div",{staticClass:"h-1 w-full bg-gray-300 my-2"}),t._v(" "),r("Button",{staticClass:"w-full mt-3 py-2",attrs:{variant:"primary",label:"Lanjutkan",disabled:!t.isAgree,"is-loading":t.isLoadingSubmit},on:{click:t.clickSubmit}}),t._v(" "),r("Button",{staticClass:"w-full mt-2",attrs:{variant:"secondary",label:"Kembali"},on:{click:t.goBackToSequrbanPage}})],1)]),t._v(" "),r("ModalChangeOrderPackage",{attrs:{"is-show-modal":t.isShowModalPackage,"is-loading":t.isLoading,"data-qurban":t.dataQurban,"qurban-current-variant":t.dataDetailQurban},on:{closeModal:t.closeModalPackage,choosePackage:t.choosePackage}}),t._v(" "),r("ModalDataConfirmation",{attrs:{"show-modal":t.isShowModalConfirmation,"data-order":t.dataParamOrder,"is-loading":t.isLoadingSubmit},on:{clickSubmit:t.submitDataOrder,onClose:t.closeModalConfirmation}}),t._v(" "),r("Footer")],1)}),[],!1,null,"35cce774",null);e.default=component.exports}}]);