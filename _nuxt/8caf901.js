(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{530:function(e,t,n){"use strict";n.r(t);var r=n(25),c=(n(72),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,o,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,c=e.error,o=r.slug||"hello",console.log(c),t.next=5,n(o).fetch().catch((function(e){c({statusCode:404,message:"Page not found"})}));case 5:return d=t.sent,t.abrupt("return",{page:d});case 7:case"end":return t.stop()}}),t)})))()},methods:{convertDate:function(e){return new Date(e).toDateString()}}}),o=n(94),d=n(135),l=n.n(d),v=n(465),f=n(464),_=n(523),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",[n("v-card-title",[e._v("\n      "+e._s(e.page.title)+"\n    ")]),e._v(" "),n("v-card-text",[e._v("\n      "+e._s(e.page.description)+"\n      "),n("v-chip",[e._v("\n        "+e._s(e.convertDate(e.page.createdAt))+"\n      ")]),e._v("\n      "+e._s(e.page.slug)+"\n      "),n("nuxt-content",{attrs:{document:e.page}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCard:v.a,VCardText:f.c,VCardTitle:f.d,VChip:_.a})}}]);