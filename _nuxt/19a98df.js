(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{304:function(e,t,n){var content=n(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("c0987186",content,!0,{sourceMap:!1})},367:function(e,t,n){"use strict";n(304)},368:function(e,t,n){var o=n(18)((function(i){return i[1]}));o.push([e.i,"@media (min-width:400px){#navbar{background-color:#f4f9f8}}@media (max-width:800px){nav{text-transform:uppercase}}",""]),o.locals={},e.exports=o},563:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{open:!1,navbarLink:[{id:1,label:"Layanan"},{id:2,label:"Pengguna"},{id:3,label:"Cara pesan"},{id:4,label:"Testimoni"},{id:5,label:"QnA"}]}},components:{Logo:n(89).default},methods:{scrollToSection:function(e){(0===e&&window.scrollTo({top:0,behavior:"smooth"}),1===e)&&document.getElementById("provider").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});2===e&&document.getElementById("pengguna").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});3===e&&document.getElementById("orderFlow").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});4===e&&document.getElementById("testimony").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});5===e&&document.getElementById("qna").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});this.open=!1}}},l=(n(367),n(6)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full bg-white fixed z-40 tn:py-2 lg:py-0 tn:shadow px-2",attrs:{id:"navbar"}},[e.open?n("div",{staticClass:"opacity-20 fixed inset-0 z-90 bg-black"}):e._e(),e._v(" "),n("div",{staticClass:"container static z-0 w-full text-gray-700 md:px-10 lg:flex lg:justify-between lg:items-center"},[n("nuxt-link",{staticClass:"hover:no-underline",attrs:{to:"/"}},[n("div",{on:{click:function(t){return e.scrollToSection(0)}}},[n("Logo",{attrs:{label:"Seakun.id"}})],1)]),e._v(" "),n("div",{staticClass:"absolute tn:top-1 tn:right-1 tn:py-3 tn:px-3 md:px-3 lg:top-0 lg:right-0 lg:relative z-100 flex flex-col tn:w-3/5 md:w-1/2 lg:w-4/5 rounded-xl lg:p-0 lg:justify-end lg:flex-row lg:items-center",class:{shadow:e.open,"bg-white":e.open}},[n("div",{staticClass:"items-center"},[n("button",{staticClass:"lg:hidden rounded-lg focus:outline-none float-right",on:{click:function(t){e.open=!e.open}}},[n("svg",{staticClass:"w-6 h-6 primary",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[n("path",{directives:[{name:"show",rawName:"v-show",value:!e.open,expression:"!open"}],attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z","clip-rule":"evenodd"}}),e._v(" "),n("path",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),e._v(" "),e._l(e.navbarLink,(function(t,o){return n("nav",{key:o,staticClass:"flex-col tn:pr-4 md:pr-4 tn:mt-2 md:p-0 lg:mt-0 hidden lg:flex lg:justify-end lg:flex-row",class:{flex:e.open,hidden:!e.open}},[n("p",{staticClass:"cursor-pointer text-right my-3 text-sm md:text-base font-semibold md:font-bold text-primary hover:text-secondary rounded-lg md:py-0 md:mt-0 hover:opacity-50 focus:opacity-50 lg:ml-12 xl:ml-16",attrs:{href:"#"},on:{click:function(n){return e.scrollToSection(t.id)}}},[e._v("\n          "+e._s(t.label)+"\n        ")])])}))],2)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);