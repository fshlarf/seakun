(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{333:function(e,t,r){"use strict";r.r(t);var n={name:"ProviderPill",props:{provider:{type:Object,default:{}},dataGroup:{type:Array,default:[]},isLoading:{type:Boolean,default:!1}},methods:{selectProvider:function(e){this.$emit("selectProvider",e)}}},o=r(6),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"max-w-sm w-72 h-16 py-3 px-3 tn:rounded-full lg:rounded-2xl shadow flex space-x-2 items-center justify-center",on:{click:function(t){return e.selectProvider(e.provider)}}},[r("img",{attrs:{src:""+e.provider.icon,alt:"#"}}),e._v(" "),r("p",{staticClass:"text-lg font-bold"},[e._v("\n    "+e._s(e.provider.name)+"\n    "),e.isLoading||e.provider.slug!==e.dataGroup[0].name?e._e():r("span",{staticClass:"text-sm font-normal"},[e._v("("+e._s(e.dataGroup[0].groupNumber)+" grup)")])])])}),[],!1,null,null,null);t.default=component.exports}}]);