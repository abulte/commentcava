(function(e){function t(t){for(var o,n,i=t[0],l=t[1],c=t[2],u=0,f=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],o=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(o=!1)}o&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var o={},r={app:0},s=[];function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=o,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var m=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1:function(e,t){},4678:function(e,t,a){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o,r,s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],l=a("2877"),c={},m=Object(l["a"])(c,n,i,!1,null,null,null),u=m.exports,f=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container mb-3"},[a("h1",[e._v("Comment ça va cette semaine ?")]),e.moodId?a("div",{staticClass:"success"},[a("b-alert",{attrs:{variant:"success",show:""}},[e._v(" Merci ! On dirait que ça a marché 🤞. Si jamais tu t'es trompé, tu peux réessayer en "),a("a",{attrs:{href:""},on:{click:function(t){return t.stopPropagation(),e.retry(t)}}},[e._v("cliquant ici")]),e._v(", ça supprimera ton dernier essai. En revanche, si tu quittes cette page, plus moyen de revenir en arrière 😉. ")]),a("LGTM")],1):e._e(),e.moodId?e._e():a("b-alert",{attrs:{show:"",dismissible:""}},[e._v(" L'objectif de ce questionnaire est de... ")]),e.moodId?e._e():a("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("b-form-group",{staticClass:"mt-3",attrs:{"label-size":"lg",label:"Mon moral",description:"C'est le seul champ obligatoire 😉"}},[a("b-form-radio",{attrs:{inline:"",required:"",name:"mood",size:"lg",value:"tres_bien"},model:{value:e.form.mood,callback:function(t){e.$set(e.form,"mood",t)},expression:"form.mood"}},[e._v("😀")]),a("b-form-radio",{attrs:{inline:"",required:"",name:"mood",size:"lg",value:"bien"},model:{value:e.form.mood,callback:function(t){e.$set(e.form,"mood",t)},expression:"form.mood"}},[e._v("🙂")]),a("b-form-radio",{attrs:{inline:"",required:"",name:"mood",size:"lg",value:"moyen"},model:{value:e.form.mood,callback:function(t){e.$set(e.form,"mood",t)},expression:"form.mood"}},[e._v("😐")]),a("b-form-radio",{attrs:{inline:"",required:"",name:"mood",size:"lg",value:"pas_bien"},model:{value:e.form.mood,callback:function(t){e.$set(e.form,"mood",t)},expression:"form.mood"}},[e._v("🙁")])],1),a("b-form-group",{attrs:{"label-size":"lg",label:"Une idée ? Un problème ? Une suggestion ? Un coup de gueule ? Un haïku ? C'est ici !"}},[a("b-form-textarea",{attrs:{placeholder:"",rows:"3"},model:{value:e.form.thoughts,callback:function(t){e.$set(e.form,"thoughts",t)},expression:"form.thoughts"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Envoyer 🚀")]),e._v(" Tu peux t'arrêter ici ou continuer et répondre à un plus de questions ⬇️ "),a("hr"),a("b-form-group",{attrs:{"label-size":"lg",label:"Par rapport à la semaine dernière, je vais…"}},[a("b-form-radio",{attrs:{inline:"",name:"mood_vs_last_week",value:"same"},model:{value:e.form.mood_vs_last_week,callback:function(t){e.$set(e.form,"mood_vs_last_week",t)},expression:"form.mood_vs_last_week"}},[e._v("Pareil")]),a("b-form-radio",{attrs:{inline:"",name:"mood_vs_last_week",value:"better"},model:{value:e.form.mood_vs_last_week,callback:function(t){e.$set(e.form,"mood_vs_last_week",t)},expression:"form.mood_vs_last_week"}},[e._v("Mieux")]),a("b-form-radio",{attrs:{inline:"",name:"mood_vs_last_week",value:"worse"},model:{value:e.form.mood_vs_last_week,callback:function(t){e.$set(e.form,"mood_vs_last_week",t)},expression:"form.mood_vs_last_week"}},[e._v("Moins bien")])],1),a("b-form-group",{attrs:{"label-size":"lg",label:"Mon état de fatigue"}},[a("b-form-radio",{attrs:{inline:"",name:"fatigue",value:"not_tired"},model:{value:e.form.fatigue,callback:function(t){e.$set(e.form,"fatigue",t)},expression:"form.fatigue"}},[e._v("Pas fatigué du tout")]),a("b-form-radio",{attrs:{inline:"",name:"fatigue",value:"a_little_tired"},model:{value:e.form.fatigue,callback:function(t){e.$set(e.form,"fatigue",t)},expression:"form.fatigue"}},[e._v("Un peu fatigué")]),a("b-form-radio",{attrs:{inline:"",name:"fatigue",value:"tired"},model:{value:e.form.fatigue,callback:function(t){e.$set(e.form,"fatigue",t)},expression:"form.fatigue"}},[e._v("Fatigué")]),a("b-form-radio",{attrs:{inline:"",name:"fatigue",value:"very_tired"},model:{value:e.form.fatigue,callback:function(t){e.$set(e.form,"fatigue",t)},expression:"form.fatigue"}},[e._v("Très fatigué")])],1),a("b-form-group",{attrs:{"label-size":"lg",label:"Par rapport à la semaine dernière, je suis…"}},[a("b-form-radio",{attrs:{inline:"",name:"fatigue_vs_last_week",value:"same"},model:{value:e.form.fatigue_vs_last_week,callback:function(t){e.$set(e.form,"fatigue_vs_last_week",t)},expression:"form.fatigue_vs_last_week"}},[e._v("Aussi fatigué")]),a("b-form-radio",{attrs:{inline:"",name:"fatigue_vs_last_week",value:"worse"},model:{value:e.form.fatigue_vs_last_week,callback:function(t){e.$set(e.form,"fatigue_vs_last_week",t)},expression:"form.fatigue_vs_last_week"}},[e._v("Plus fatigué")]),a("b-form-radio",{attrs:{inline:"",name:"fatigue_vs_last_week",value:"better"},model:{value:e.form.fatigue_vs_last_week,callback:function(t){e.$set(e.form,"fatigue_vs_last_week",t)},expression:"form.fatigue_vs_last_week"}},[e._v("Moins fatigué")])],1),a("b-form-group",{attrs:{"label-size":"lg",label:"Ma charge de travail cette semaine a été…"}},[a("b-form-radio",{attrs:{inline:"",name:"workload",value:"good"},model:{value:e.form.workload,callback:function(t){e.$set(e.form,"workload",t)},expression:"form.workload"}},[e._v("Adaptée")]),a("b-form-radio",{attrs:{inline:"",name:"workload",value:"too_much"},model:{value:e.form.workload,callback:function(t){e.$set(e.form,"workload",t)},expression:"form.workload"}},[e._v("Trop importante (je me suis senti dépassé.e)")]),a("b-form-radio",{attrs:{inline:"",name:"workload",value:"not_enough"},model:{value:e.form.workload,callback:function(t){e.$set(e.form,"workload",t)},expression:"form.workload"}},[e._v("Pas assez importante (je me suis senti désoeuvré.e)")])],1),a("b-form-group",{attrs:{"label-size":"lg",label:"J’ai l’impression de me sentir proche des autres membres de mon équipe projet"}},[a("b-form-radio",{attrs:{inline:"",name:"proximity_project",value:"very_no"},model:{value:e.form.proximity_project,callback:function(t){e.$set(e.form,"proximity_project",t)},expression:"form.proximity_project"}},[e._v("Pas du tout d’accord")]),a("b-form-radio",{attrs:{inline:"",name:"proximity_project",value:"no"},model:{value:e.form.proximity_project,callback:function(t){e.$set(e.form,"proximity_project",t)},expression:"form.proximity_project"}},[e._v("Pas d’accord")]),a("b-form-radio",{attrs:{inline:"",name:"proximity_project",value:"yes"},model:{value:e.form.proximity_project,callback:function(t){e.$set(e.form,"proximity_project",t)},expression:"form.proximity_project"}},[e._v("D’accord")]),a("b-form-radio",{attrs:{inline:"",name:"proximity_project",value:"very_yes"},model:{value:e.form.proximity_project,callback:function(t){e.$set(e.form,"proximity_project",t)},expression:"form.proximity_project"}},[e._v("Tout à fait d’accord")])],1),a("b-form-group",{attrs:{"label-size":"lg",label:"J’ai l’impression de me sentir proche des autres membres de l’équipe Etalab"}},[a("b-form-radio",{attrs:{inline:"",name:"proximity_etalab",value:"very_no"},model:{value:e.form.proximity_etalab,callback:function(t){e.$set(e.form,"proximity_etalab",t)},expression:"form.proximity_etalab"}},[e._v("Pas du tout d’accord")]),a("b-form-radio",{attrs:{inline:"",name:"proximity_etalab",value:"no"},model:{value:e.form.proximity_etalab,callback:function(t){e.$set(e.form,"proximity_etalab",t)},expression:"form.proximity_etalab"}},[e._v("Pas d’accord")]),a("b-form-radio",{attrs:{inline:"",name:"proximity_etalab",value:"yes"},model:{value:e.form.proximity_etalab,callback:function(t){e.$set(e.form,"proximity_etalab",t)},expression:"form.proximity_etalab"}},[e._v("D’accord")]),a("b-form-radio",{attrs:{inline:"",name:"proximity_etalab",value:"very_yes"},model:{value:e.form.proximity_etalab,callback:function(t){e.$set(e.form,"proximity_etalab",t)},expression:"form.proximity_etalab"}},[e._v("Tout à fait d’accord")])],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Envoyer 🚀")])],1)],1)},b=[],p=(a("99af"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.image.images?a("img",{attrs:{src:e.image.images.fixed_height.url}}):e._e()}),v=[],_={name:"LGTM",data:function(){return{image:{},limit:1,maxResults:50,searches:["clap clap","well done"]}},computed:{query:function(){return this.searches[this.getRandomInt(this.searches.length)]},offset:function(){return this.page*this.limit},page:function(){return this.getRandomInt(this.maxResults/this.limit)}},methods:{getRandomInt:function(e){return Math.floor(Math.random()*Math.floor(e))},shuffle:function(e){return e.sort((function(){return Math.random()-.5}))}},mounted:function(){var e=this,t="0aqJyd4OFUcq2tZ3tgAvDSC02DnEBgds";this.$http.get("https://api.giphy.com/v1/gifs/search?api_key=".concat(t,"&q=").concat(this.query,"&offset=").concat(this.offset,"&limit=").concat(this.limit)).then((function(e){return e.json()})).then((function(t){e.image=t.data.length>0?t.data[0]:{}}))}},j=_,h=Object(l["a"])(j,p,v,!1,null,null,null),g=h.exports,k="",y={mood:"",mood_vs_last_week:"",fatigue:"",fatigue_vs_last_week:"",workload:"",proximity_project:"",proximity_etalab:"",thoughts:""},x={name:"Home",components:{LGTM:g},data:function(){return{moodId:"",random:this.getRandomString(),form:Object.assign({},y)}},methods:{onSubmit:function(){var e=this;this.form.random=this.random,this.$http.post("".concat(k,"/api/mood"),this.form).then((function(t){e.moodId=t.body.id}))},retry:function(){var e=this;this.$http.delete("".concat(k,"/api/mood/").concat(this.moodId,"?random=").concat(this.random)).then((function(t){e.form=Object.assign({},y),e.moodId=""}))},getRandomString:function(){return Math.random().toString(36).replace(/[^a-z]+/g,"")}}},w=x,z=Object(l["a"])(w,d,b,!1,null,null,null),$=z.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("b-form",{staticClass:"pt-2"},[a("b-form-group",{attrs:{"label-cols":"1",label:"Du"}},[a("b-form-datepicker",{attrs:{"start-weekday":"monday",max:new Date,locale:"fr"},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1),a("b-form-group",{attrs:{"label-cols":"1",label:"Au"}},[a("b-form-datepicker",{attrs:{"start-weekday":"monday",max:new Date,locale:"fr"},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1),a("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function(t){return t.preventDefault(),e.compute(t)}}},[e._v("Calculer 🚀")])],1),e.chartIndicators.length?a("b-row",{staticClass:"mt-4"},e._l(e.chartIndicators,(function(e){return a("b-col",{key:e.$index,attrs:{cols:"4",sm:"12",md:"4"}},[a("BarChart",{attrs:{"chart-data":e}})],1)})),1):e._e()],1)},O=[],I=(a("d81d"),a("b64b"),a("3ca3"),a("1276"),a("ddb0"),a("1fca")),M=I["b"].reactiveProp,P={extends:I["a"],props:["data"],mixins:[M],mounted:function(){var e={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}};this.renderChart(this.chartData,e)}},S=P,q=Object(l["a"])(S,o,r,!1,null,null,null),C=q.exports,T={mood:"",mood_vs_last_week:"",fatigue:"",fatigue_vs_last_week:"",workload:"",proximity_project:"",proximity_etalab:""},E="",R={name:"Report",components:{BarChart:C},data:function(){return{startDate:this.monday(),endDate:this.dateToISO(new Date),data:[],indicators:Object.assign({},T),chartIndicators:[]}},computed:{},methods:{computeChartIndicators:function(){var e=this;this.chartIndicators=Object.keys(this.indicators).map((function(t){return{labels:e.indicators[t].map((function(e){return e[t]})),datasets:[{label:t,backgroundColor:"#f87979",data:e.indicators[t].map((function(e){return e.count}))}]}}))},monday:function(){var e=new Date,t=e.getDay(),a=e.getDate()-t+(0===t?-6:1);return this.dateToISO(new Date(e.setDate(a)))},dateToISO:function(e){return e.toISOString().split("T")[0]},getDataForIndicator:function(e){var t=this;return this.$http.get("".concat(E,"/api/moods/").concat(e,"?start=").concat(this.startDate,"&end=").concat(this.endDate)).then((function(a){t.indicators[e]=a.body}))},getData:function(){var e=this;return this.$http.get("".concat(E,"/api/moods?start=").concat(this.startDate,"&end=").concat(this.endDate)).then((function(t){e.data=t.body}))},compute:function(){var e=this;Promise.all(Object.keys(T).map((function(t){return e.getDataForIndicator(t)}))).then((function(){e.computeChartIndicators()}))}},mounted:function(){this.compute()}},U=R,A=Object(l["a"])(U,D,O,!1,null,null,null),F=A.exports;s["default"].use(f["a"]);var G=[{path:"/",name:"Home",component:$},{path:"/report",name:"Report",component:F}],J=new f["a"]({mode:"history",base:"/",routes:G}),L=J,B=a("2f62");s["default"].use(B["a"]);var H=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}}),N=a("28dd"),Z=a("5f5b"),K=a("b1e0");a("f9e3"),a("2dd8");s["default"].use(Z["a"]),s["default"].use(K["a"]),s["default"].use(N["a"]),s["default"].config.productionTip=!1,new s["default"]({router:L,store:H,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.597697cc.js.map