(window.webpackJsonp=window.webpackJsonp||[]).push([[78,30,44,57,79,80],{211:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return l}));r(133),r(53),r(14),r(68),r(69),r(225);function n(t){for(var e=t.toLowerCase().split(" "),i=0;i<e.length;i++)e[i]=e[i].charAt(0).toUpperCase()+e[i].substring(1);return e.join(" ")}function o(t){return t||0==t?"Rp".concat(t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")):void 0}function l(){var t=new Date;return String(t.getDate()).padStart(2,"0")+"/"+String(t.getMonth()+1).padStart(2,"0")+"/"+t.getFullYear()}},225:function(t,e,r){"use strict";var n=r(3),o=r(226),l=r(135),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);n(n.P+n.F*c,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},226:function(t,e,r){var n=r(16),o=r(136),l=r(35);t.exports=function(t,e,r,c){var d=String(l(t)),m=d.length,f=void 0===r?" ":String(r),h=n(e);if(h<=m||""==f)return d;var v=h-m,k=o.call(f,Math.ceil(v/f.length));return k.length>v&&(k=k.slice(0,v)),c?k+d:d+k}},229:function(t,e,r){var content=r(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("6499d150",content,!0,{sourceMap:!1})},230:function(t,e,r){"use strict";var n=r(211);r.d(e,"a",(function(){return n.b}))},231:function(t,e,r){var content=r(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("5785f316",content,!0,{sourceMap:!1})},243:function(t,e,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("20258f04",content,!0,{sourceMap:!1})},246:function(t,e,r){"use strict";r.r(e);r(248);var n=r(6),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card rounded-2xl"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"wrapper w-full"},[r("div",{staticClass:"gap-2 items-center"},[r("div",{},[r("div",{staticClass:"shimmer h-32 w-full"})]),t._v(" "),r("div",{},[r("div",{staticClass:"shimmer h-4 w-1/4 my-1"}),t._v(" "),r("div",{staticClass:"shimmer w-full my-1"}),t._v(" "),r("div",{staticClass:"shimmer w-full my-1"}),t._v(" "),r("div",{staticClass:"shimmer w-full my-1"})])])])])])}],!1,null,"705702a4",null);e.default=component.exports},248:function(t,e,r){"use strict";r(229)},249:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".card[data-v-705702a4]{border:none;box-shadow:0 4px 20px rgba(0,0,0,.08)}",""]),n.locals={},t.exports=n},250:function(t,e,r){"use strict";r(231)},251:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,'.card-package[data-v-2f4f18cd]:hover{border:1px solid #8dcabe!important}.preorder[data-v-2f4f18cd]{position:absolute;top:.5rem;left:-10px}.preorder[data-v-2f4f18cd]:before{content:"";position:absolute;bottom:-10px;left:0;border-color:#295245 #295245 transparent transparent;border-style:solid;border-width:5px}@media (max-width:450px){.preorder[data-v-2f4f18cd]{top:.5rem;left:-10px}}',""]),n.locals={},t.exports=n},263:function(t,e,r){"use strict";r.r(e);var n=r(230),o={name:"CardPackage",props:{packet:{type:Object,default:{}},slug:{type:String,default:""}},methods:{formatMoneyRupiah:function(t){return Object(n.a)(t)},setMonthPacket:function(t){return"month"===t.paymentType&&parseInt(t.totalMonth)>1?t.totalMonth:""}}},l=(r(250),r(6)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative card-package tn:px-1 md:px-3 md:mx-3 py-4 shadow-md border !rounded-lg cursor-pointer"},[t.packet.isPreOrder?r("div",{},[r("div",{staticClass:"preorder bg-secondary text-white text-xs p-2 w-16 rounded-r-xl rounded-tl-2xl"},[t._v("\n      Preorder\n    ")])]):t._e(),t._v(" "),r("div",{staticClass:"w-1/3 mx-auto"},[r("img",{staticClass:"w-auto h-14 object-contain mx-auto",attrs:{src:"/images/icons/modal package digital/"+t.slug+".png",alt:"Image not found"}})]),t._v(" "),r("div",{staticClass:"text-center mt-6"},[r("h1",{staticClass:"tn:text-lg md:text-sm font-bold my-2"},[t._v("\n      "+t._s(t.packet.name)+"\n    ")]),t._v(" "),t.packet.active?t._e():r("p",{staticClass:"text-center text-red-700 tn:text-sm md:text-md"},[t._v("\n      Paket tidak aktif\n    ")]),t._v(" "),r("p",{staticClass:"tn:text-2xl md:text-xl font-bold mt-6"},[t._v("\n      "+t._s(t.formatMoneyRupiah(t.packet.grandTotal))+"\n      "),r("span",{staticClass:"text-sm text-primary"},[t._v("/ "+t._s(t.setMonthPacket(t.packet))+"\n        "+t._s("month"===t.packet.paymentType?"bulan":"tahun"))])]),t._v(" "),r("h1",{staticClass:"text-sm mt-6"},[t._v("Keuntungan")]),t._v(" "),r("div",{staticClass:"mt-3 text-left"},[t._l(t.packet.facilities,(function(e,n){return r("div",{key:n,staticClass:"mt-1 tn:px-3"},[r("div",{staticClass:"flex"},[r("img",{staticClass:"self-start pt-[2px]",attrs:{src:"/images/icons/checked.svg",alt:"checked"}}),t._v(" "),r("p",{class:"ml-2 text-sm "+(t.packet.active?"font-bold":"font-normal")},[t._v("\n            "+t._s(e)+"\n          ")])])])})),t._v(" "),r("div",{staticClass:"mt-3"},[t.packet.isPreOrder?r("nuxt-link",{staticClass:"text-xs text-primary px-2",attrs:{to:"/info/pre-order"}},[t._v("Lihat Ketentuan Pre order Selengkapnya")]):t._e()],1)],2)])])}),[],!1,null,"2f4f18cd",null);e.default=component.exports},268:function(t,e,r){"use strict";r(243)},269:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".inactive[data-v-0431985b]{pointer-events:none;opacity:.7}",""]),n.locals={},t.exports=n},272:function(t,e,r){"use strict";r.r(e);r(56);var n=r(222),o=r(246),l=r(263),c={name:"ModalPackages",props:{isShow:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},provider:{type:String,default:"Netflix"},packages:{type:Array,default:[]},slug:{type:String,default:""}},data:function(){return{preOrderPackage:["apple-one","canva","disney-hotstar","gramedia","microsoft","nintendo","wattpad"]}},components:{Modal:n.default,CardShimmerVertical:o.default,CardPackage:l.default},methods:{setPreOrderNotes:function(t){return["gramedia","disney-hotstar","wattpad"].includes(t)?'<span class="font-bold">Pre-order:</span> Akun akan dibuatkan ketika\n          anggota member dalam satu grup sudah lengkap. Member melakukan\n          pembayaran setelah akun dibuat.':'<span class="font-bold">Pre-order:</span> Member akan diinfokan untuk melakukan pembayaran setelah satu grup full. Link invitation ke Paket Premium akan dikirim setelah member melakukan pembayaran ke Seakun.'}}},d=(r(268),r(6)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Modal",{attrs:{"is-show":t.isShow,size:"auto"},on:{onClose:function(e){return t.$emit("on-close")}},scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"flex tn:gap-2 md:gap-3 xl:gap-4 items-center"},[r("h1",{staticClass:"tn:text-sm md:text-lg xl:text-xl font-bold"},[t._v("\n        Pilih Paket "+t._s(t.provider)+"\n      ")])])]},proxy:!0}])},[t._v(" "),t.isLoading?r("div",[r("CardShimmerVertical")],1):r("div",[t.preOrderPackage.includes(t.slug)?r("div",{staticClass:"ml-3 mb-2",class:{"xl:w-[416px]":1===t.packages.length}},[r("p",{staticClass:"tn:text-xs md:text-sm",domProps:{innerHTML:t._s(t.setPreOrderNotes(t.slug))}})]):t._e(),t._v(" "),t.packages.length>0?r("div",{staticClass:"flex tn:flex-col md:flex-row tn:flex-wrap xl:flex-nowrap md:justify-between tn:space-y-3 xl:space-y-0"},t._l(t.packages,(function(e,n){return r("div",{key:n,staticClass:"w-full h-full",class:"mx-auto "+(e.active?"":"inactive"),on:{click:function(r){return t.$emit("choose-packet",e)}}},[r("CardPackage",{staticClass:"xl:w-[416px]",attrs:{slug:t.slug,packet:e}})],1)})),0):t._e()])])}),[],!1,null,"0431985b",null);e.default=component.exports},275:function(t,e,r){"use strict";r.r(e);var n={name:"detailOrderLoading"},o=r(6),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-detail bg-white shadow-md  mt-8 rounded-md items-center mx-2"},[r("div",{staticClass:"order-detail__product px-4 pt-4 pb-2 grid grid-cols-5 gap-2 items-center"},[r("div",{staticClass:"flex-1"},[r("div",{staticClass:"shimmer w-full h-24"})]),t._v(" "),r("div",{staticClass:"detail-product__price col-span-4 ml-4"},[r("p",{staticClass:"font-bold shimmer w-full my-2"}),t._v(" "),r("p",{staticClass:"font-bold shimmer w-full my-2"}),t._v(" "),r("p",{staticClass:"font-bold shimmer w-full my-2"})])]),t._v(" "),r("div",{staticClass:"order-detail__payment flex justify-between  px-4 py-3 border-t border-gray-50 "},[r("div",{staticClass:"shimmer w-4/12"}),t._v(" "),r("div",{staticClass:"shimmer w-4/12"})]),t._v(" "),r("div",{staticClass:"order-detail__payment flex justify-between  px-4 pb-3 border-t border-gray-50 "},[r("div",{staticClass:"shimmer w-4/12"}),t._v(" "),r("div",{staticClass:"shimmer w-4/12"})])])}],!1,null,null,null);e.default=component.exports},276:function(t,e,r){"use strict";r.r(e);r(215);var n=r(211),o={name:"ProductHighlight",props:{provider:{type:String,default:""},isLoading:{type:Boolean,dafault:!1},packageName:{type:String,default:""},grandTotal:{type:Number|String,default:null},totalMonth:{type:Number,default:null}},data:function(){return{currencyFormat:n.b}},methods:{setNameProvider:function(t){switch(t){case"netflix":return"Netflix";case"spotify":return"Spotify";case"youtube":return"Youtube";case"gramedia":return"Gramedia";case"microsoft":case"microsoft365":return"Microsoft 365";case"canva":return"Canva";case"disney-hotstar":return"Disney+ Hotstar";case"nintendo":return"Nintendo Switch";case"apple-one":return"Apple One";case"wattpad":return"Wattpad";default:return t}}}},l=r(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-detail bg-white shadow-md mt-2 rounded-md items-center mx-2"},[r("div",{staticClass:"order-detail__product px-4 pt-4 pb-2 grid grid-cols-5 gap-2 items-center"},[r("div",{staticClass:"flex-1"},[r("img",{staticClass:"detail-product__image w-full",attrs:{src:"/images/"+t.provider.toLowerCase()+".png",alt:"Image not found"}})]),t._v(" "),r("div",{staticClass:"detail-product__price col-span-4 ml-4"},[t.isLoading?r("p",{staticClass:"font-bold shimmer w-9/12"}):r("p",{staticClass:"md:text-lg tn:text-sm font-bold"},[r("span",{staticClass:"capitalize"},[t._v(t._s(t.setNameProvider(t.provider))+" ")]),t._v(" -\n        "+t._s(t.packageName)+"\n      ")]),t._v(" "),r("p",{staticClass:"md:text-lg tn:text-sm font-normal"},[t._v("\n        "+t._s(t.currencyFormat(t.grandTotal))+" ("+t._s(t.totalMonth)+" Bulan)\n      ")])])]),t._v(" "),r("div",{staticClass:"order-detail__payment flex justify-between px-4 py-3 border-t border-gray-50"},[r("div",[t._v("Total Pembayaran")]),t._v(" "),r("div",[t.isLoading?r("p",{staticClass:"shimmer w-4/12"}):[t._v("\n        "+t._s(t.currencyFormat(t.grandTotal))+"\n      ")]],2)])])}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,r){var content=r(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("c71394a6",content,!0,{sourceMap:!1})},288:function(t,e,r){var content=r(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("7c3ed735",content,!0,{sourceMap:!1})},342:function(t,e,r){"use strict";r(287)},343:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".payment-list[data-v-60e7599f]{position:absolute;top:0;z-index:20;padding:20px;max-height:200px;overflow-y:auto;list-style:none}.payment-list ul[data-v-60e7599f]{padding-left:24px}.slide-up-enter-active[data-v-60e7599f]{transition:all .5s ease}.slide-up-leave-active[data-v-60e7599f]{transition:all .5s ease}.slide-fade-leave-to[data-v-60e7599f],.slide-up-enter[data-v-60e7599f],.slide-up-leave-active[data-v-60e7599f]{transform:translateY(-20vh);opacity:0}",""]),n.locals={},t.exports=n},344:function(t,e,r){"use strict";r(288)},345:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".payment-list[data-v-0bd37814]{position:absolute;top:0;z-index:20;padding:20px;max-height:200px;overflow-y:auto;list-style:none}.payment-list ul[data-v-0bd37814]{padding-left:24px}.slide-up-enter-active[data-v-0bd37814]{transition:all .5s ease}.slide-up-leave-active[data-v-0bd37814]{transition:all .5s ease}.slide-fade-leave-to[data-v-0bd37814],.slide-up-enter[data-v-0bd37814],.slide-up-leave-active[data-v-0bd37814]{transform:translateY(-20vh);opacity:0}",""]),n.locals={},t.exports=n},382:function(t,e,r){var content=r(584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("1da163d4",content,!0,{sourceMap:!1})},543:function(t,e,r){"use strict";r.r(e);var n={name:"PopupDropdownList",props:{show:{type:Boolean,default:!1},dataList:{type:Array,default:function(){return[]}}}},o=(r(342),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative"},[r("transition",{attrs:{name:"slide-up"}},[t.show?r("div",{staticClass:"payment-list w-full bg-white shadow rounded "},t._l(t.dataList,(function(e){return r("li",{key:e.name,staticClass:"pb-2 cursor-pointer",on:{click:function(r){return t.$emit("onClikcItem",e)}}},[t._v("\n           "+t._s(e.name+" ("+e.dialCode+")")+"\n      ")])})),0):t._e()])],1)}),[],!1,null,"60e7599f",null);e.default=component.exports},544:function(t,e,r){"use strict";r.r(e);var n={name:"PopupDropdownListSubcribe",props:{show:{type:Boolean,default:!1},dataList:{type:Array,default:function(){return[]}}}},o=(r(344),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative"},[r("transition",{attrs:{name:"slide-up"}},[t.show?r("div",{staticClass:"payment-list w-full bg-white shadow rounded "},t._l(t.dataList,(function(e){return r("li",{key:e.name,staticClass:"pb-2  cursor-pointer",on:{click:function(r){return t.$emit("onClikcItem",e)}}},[t._v("\n           "+t._s(""+e.name)+"\n      ")])})),0):t._e()])],1)}),[],!1,null,"0bd37814",null);e.default=component.exports},583:function(t,e,r){"use strict";r(382)},584:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".form-check-input{width:18px;height:16px}.voucher{background:#efefef;font-size:16px}.voucher__action svg,.voucher__label svg{width:16px;display:inline-block;height:auto}.voucher__action svg{fill:rgba(107,114,128,var(--tw-text-opacity))}",""]),n.locals={},t.exports=n},638:function(t,e,r){"use strict";r.r(e);r(30),r(23),r(29),r(43),r(44);var n=r(17),o=r(4),l=(r(46),r(31),r(36),r(137),r(45)),c=r.n(l),d=r(312),m=r(275),f=r(276),h=r(277),v=r(543),k=r(210),x=r(544),_=r(346),y=r(211),w=r(272);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={name:"OrderPage",layout:"new",components:{ProductHighLightLoading:m.default,ProductHighLight:f.default,InputForm:h.default,ButtonDrop:d.default,Button:k.default,DropdownCodeNumber:v.default,DropDownPricesListSubcribe:x.default,ModalPackages:w.default},data:function(){return{provider:"",packageId:"",packet:"",detailOrder:{loading:!0,data:{}},email:"",userName:"",phoneNumber:"",longSubcribe:{name:"Pilih Masa Berlangganan",month:"",price:0},isShowLoading:!1,codeNumber:"+62",isShowCodeNumber:!1,isShowPriceList:!1,pricesList:[],isAgreeTos:!1,internationalPhoneNumbers:_.a,currencyFormat:y.b,errorForm:{email:{isError:!1,message:""},name:{isError:!1,message:""},phoneNumber:{isError:!1,message:""}},price:0,subcriptionDuration:1,isShowModalPackages:!1,dataPackages:[],isFetchingPacket:!1,registeredUser:{name:"",email:"",phone:""}}},watch:{codeNumber:function(){this.validationForm("userPhone")}},mounted:function(){var t=this.$router.history.current.query,e=t.provider,r=t.packet_id;e&&(this.provider=e,this.packageId=r,this.getOrderDetail()),this.setFieldValueFromLocalStorage()},computed:{setNameProvider:function(){switch(this.provider){case"netflix":return"Netflix";case"spotify":return"Spotify";case"youtube":return"Youtube";case"gramedia":return"Gramedia";case"microsoft":return"Microsoft 365";case"canva":return"Canva";case"disney-hotstar":return"Disney+ Hotstar";case"nintendo":return"Nintendo Switch"}}},methods:{getOrderDetail:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,data,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.detailOrder,t.detailOrder=P(P({},r),{},{loading:!0}),e.prev=2,n="microsoft"===t.provider?"microsoft365":t.provider.toLowerCase(),e.next=6,c.a.get("https://seakun-packet-api-v2.herokuapp.com/".concat(n,"/").concat(t.packageId));case 6:200==(o=e.sent).status&&(data=o.data,t.packet=data.name,t.detailOrder=P(P({},r),{},{data:data}),t.price=data.grandTotal,t.subcriptionDuration=data.totalMonth,data.prices.length>0?(t.pricesList=null===(l=data.prices)||void 0===l?void 0:l.map((function(t){return P(P({},t),{},{name:"".concat(t.month," bulan ( ").concat(Object(y.b)(t.price)," )")})})),t.longSubcribe=t.pricesList[0]):(t.pricesList=[{month:data.totalMonth,name:"".concat(data.totalMonth," bulan ( ").concat(Object(y.b)(data.grandTotal)," )"),price:data.grandTotal}],t.longSubcribe=t.pricesList[0])),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:t.detailOrder=P(P({},t.detailOrder),{},{loading:!1});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))()},onClickItemCodeNumber:function(t){this.codeNumber=t.dialCode,this.isShowCodeNumber=!1},onClickItemPrice:function(t){this.longSubcribe=t,this.price=t.price,this.subcriptionDuration=parseInt(t.month),this.detailOrder=P(P({},this.detailOrder),{},{data:P(P({},this.detailOrder.data),{},{grandTotal:t.price,totalMonth:t.month})}),this.isShowPriceList=!1},onTyping:function(){console.log("typing...")},validationForm:function(input){var t=this.email,e=this.userName,r=this.phoneNumber,n=(this.errorForm,!0),o={email:{isError:!1,message:""},name:{isError:!1,message:""},phoneNumber:{isError:!1,message:""}};return"userEmail"!==input&&input||(""===t?(o.email={isError:!0,message:"Email harus diisi"},n=!1):this.validateEmail(t)||(o.email={isError:!0,message:"Format email salah. cth: john@mail.com"},n=!1)),"fullname"!==input&&input||(""===e?(o.name={isError:!0,message:"Nama lengkap harus diisi"},n=!1):e.match(/^[A-Za-z][A-Za-z\s]*$/)||(o.name={isError:!0,message:"Format nama salah"},n=!1)),"userPhone"!==input&&input||(""===r?(o.phoneNumber={isError:!0,message:"Nomor whatsapp harus diisi"},n=!1):("+62"!==this.codeNumber||r.match(/^[8][0-9]*$/))&&("+62"===this.codeNumber||r.match(/^[0-9]*$/))||(o.phoneNumber={isError:!0,message:"Format nomor whatsapp salah. cth: 81234567890"},n=!1)),this.errorForm=P({},o),n},submitOrder:function(){this.validationForm()&&this.postRegisteredUser()},validateEmail:function(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())},postRegisteredUser:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isShowLoading=!0,r={fullname:Object(y.a)(t.userName),email:t.email,whatsapp:"".concat(t.codeNumber).concat(t.phoneNumber),provider:"disney+ hotstar"===t.provider.toLowerCase()?"disney-hotstar":t.provider,packet:t.packet,subcription_duration:t.subcriptionDuration,price:parseInt(t.price),discountprice:"",userhost:t.detailOrder.data.userHost,referalcode:"",voucher:"",createddate:Object(y.c)(),ispreorder:t.detailOrder.data.isPreOrder||!1,total_month:t.detailOrder.data.totalMonth,total_year:t.detailOrder.data.totalYear,linkwhatsapp:"https://api.whatsapp.com/send?phone=".concat(t.codeNumber).concat(t.phoneNumber)},n={"Access-Control-Allow-Origin":"*"},e.prev=3,e.next=6,c.a.post("https://seakun-api.herokuapp.com/registered-user",r,{headers:n});case 6:if(200!=(o=e.sent).status){e.next=11;break}t.executeApiMailSeakun(r),e.next=12;break;case 11:throw o;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})))()},executeApiMailSeakun:function(t){var e=this,r=P(P({},t),{},{payment_type:this.detailOrder.data.paymentType});c.a.post("https://seakun-mail-api-v2.herokuapp.com/",r).then((function(t){e.isDisableBtn=!1,e.$router.push({path:e.setPathToRedirect(r),query:{type:"digital",provider:e.provider,packet_id:e.packageId,duration:e.subcriptionDuration,price:e.price,holder:e.userName,email:e.email,whatsapp:e.codeNumber+e.phoneNumber}}),e.isShowLoading=!1})).catch((function(t){console.log(t),e.isShowLoading=!1}))},setPathToRedirect:function(t){return t.userhost?"/thankyou/user-host":t.ispreorder?"/thankyou/pre-order":"/payment"},onCloseModalPackages:function(){this.isShowModalPackages=!1},onClickChangePacket:function(t){this.isFetchingPacket=!0,this.dataPackages=[],this.isShowModalPackages=!0,this.fetchPackages(t.slug)},fetchPackages:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="microsoft"===t.provider?"microsoft365":t.provider.toLowerCase(),e.prev=1,e.next=4,c.a.get("https://seakun-packet-api-v2.herokuapp.com/".concat(r));case 4:n=e.sent,(data=n.data)&&(t.dataPackages=data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:t.isFetchingPacket=!1;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()},choosePacket:function(t){this.packageId=t.id,this.getOrderDetail(),this.isShowModalPackages=!1},setFieldValueFromLocalStorage:function(){var t=JSON.parse(localStorage.getItem("registered_user"));t&&(this.userName=t.name,this.email=t.email,this.phoneNumber=t.phone)},setLocalStorage:function(t){var e=this;document.getElementById(t).addEventListener("change",(function(r){e.registeredUser[t]=r.target.value,localStorage.setItem("registered_user",JSON.stringify(e.registeredUser))}))}}},O=(r(583),r(6)),component=Object(O.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-payment max-w-2xl w-full mx-auto md:mt-10 px-4"},[t._m(0),t._v(" "),r("div",{staticClass:"flex justify-between items-center px-2 mt-10 mb-4"},[r("p",{staticClass:"md:text-xl tn:text-lg font-bold"},[t._v("Produk yang dipesan")]),t._v(" "),r("p",{staticClass:"md:text-sm tn:text-base text-green-seakun cursor-pointer",on:{click:t.onClickChangePacket}},[t._v("\n      Ubah Paket\n    ")])]),t._v(" "),r("div",[t.detailOrder.loading?r("ProductHighLightLoading",{staticClass:"mt-4"}):r("ProductHighLight",{attrs:{provider:t.provider,isLoading:t.detailOrder.loading,packageName:t.detailOrder.data.name,grandTotal:t.detailOrder.data.grandTotal,totalMonth:t.detailOrder.data.totalMonth}}),t._v(" "),r("div",{staticClass:"mt-4"},[r("p",{staticClass:"pb-1 tn:text-sm"},[t._v("Pilih Masa Berlangganan")]),t._v(" "),r("ButtonDrop",{attrs:{btnText:t.longSubcribe.name,disabled:t.pricesList.length<=0},on:{click:function(e){t.isShowPriceList=!t.isShowPriceList}}}),t._v(" "),r("div",{staticClass:"w-full"},[r("DropDownPricesListSubcribe",{attrs:{show:t.isShowPriceList,dataList:t.pricesList},on:{onClikcItem:t.onClickItemPrice}})],1)],1)],1),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"order-form"},[r("InputForm",{staticClass:"mt-4",attrs:{label:"Nama lengkap",placeholder:"Masukkan nama",id:"name",error:t.errorForm.name},on:{change:function(e){return t.setLocalStorage("name")},keyup:function(e){return t.validationForm("fullname")}},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),r("InputForm",{staticClass:"mt-4",attrs:{label:"Email",placeholder:"Masukkan email",error:t.errorForm.email,id:"email"},on:{change:function(e){return t.setLocalStorage("email")},keyup:function(e){return t.validationForm("userEmail")}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("div",{staticClass:"mt-4"},[r("p",{staticClass:"pb-1 tn:text-sm"},[t._v("Nomor telepon")]),t._v(" "),r("div",{staticClass:"grid grid-cols-8 gap-2 items-center"},[r("div",{staticClass:"col-span-2"},[r("ButtonDrop",{attrs:{btnText:t.codeNumber},on:{click:function(e){t.isShowCodeNumber=!t.isShowCodeNumber}}})],1),t._v(" "),r("div",{staticClass:"col-span-6"},[r("InputForm",{attrs:{placeholder:"Masukkan nomor whatsapp",error:t.errorForm.phoneNumber,id:"phone"},on:{change:function(e){return t.setLocalStorage("phone")},keyup:function(e){return t.validationForm("userPhone")}},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}})],1)]),t._v(" "),r("div",{staticClass:"w-9/12 mt-1"},[r("DropdownCodeNumber",{attrs:{dataList:t.internationalPhoneNumbers,show:t.isShowCodeNumber},on:{onClikcItem:t.onClickItemCodeNumber}})],1)]),t._v(" "),r("div",{staticClass:"ml-2 mt-6"},[r("label",{staticClass:"space-x-1 md:text-base tn:text-sm",staticStyle:{display:"inline-block"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.isAgreeTos,expression:"isAgreeTos"}],staticClass:"tn:mr-1 tn:-mt-1",staticStyle:{"vertical-align":"middle"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAgreeTos)?t._i(t.isAgreeTos,null)>-1:t.isAgreeTos},on:{change:function(e){var r=t.isAgreeTos,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&(t.isAgreeTos=r.concat([null])):l>-1&&(t.isAgreeTos=r.slice(0,l).concat(r.slice(l+1)))}else t.isAgreeTos=o}}}),t._v("\n        Menyetujui\n        "),r("a",{staticClass:"text-green-seakun ml-0",attrs:{href:"/terms-of-use",target:"_blank"}},[t._v("aturan")]),t._v("\n        yang dibuat oleh Seakun.id\n      ")])]),t._v(" "),r("Button",{staticClass:"w-full bg-green-seakun text-white py-2 mt-8",attrs:{disabled:!t.isAgreeTos,label:"Konfirmasi pesanan","is-loading":t.isShowLoading},on:{click:t.submitOrder}}),t._v(" "),r("ModalPackages",{attrs:{"is-show":t.isShowModalPackages,provider:t.setNameProvider,packages:t.dataPackages,slug:t.provider,"is-loading":t.isFetchingPacket},on:{"on-close":t.onCloseModalPackages,"choose-packet":t.choosePacket}})],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tn:pt-8 md:pt-10 px-2"},[r("h2",{staticClass:"md:text-2xl tn:text-lg font-bold"},[t._v("Pesanan")]),t._v(" "),r("p",{staticClass:"md:text-lg tn:text-base mt-3"},[t._v("\n      Silahkan isi terlebih dahulu sebelum melakukan pemesanan.\n    ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6 pt-2"},[r("h2",{staticClass:"md:text-xl tn:text-lg font-bold"},[t._v("Informasi Pengguna")])])}],!1,null,null,null);e.default=component.exports}}]);