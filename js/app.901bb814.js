(function(t){function e(e){for(var s,o,i=e[0],d=e[1],c=e[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var d=a[i];0!==r[d]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/privat24/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=d;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0c23":function(t,e,a){t.exports=a.p+"img/contentImgDisable.0987833c.0987833c.jpg"},"4ae1":function(t,e,a){t.exports=a.p+"img/headerImg.6238dea2.6238dea2.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("CardOpen",{on:{closedCard:t.closedCard}}),t._l(t.filteredClosedCards,(function(t,e){return a("CardOpen",{key:e,attrs:{objCard:t,statusCard:!1}})})),t.arrClosedCard.length>t.sliceCount&&t.arrClosedCard.length>t.filteredClosedCards.length?a("div",{staticClass:"more-cards"},[a("button",{on:{click:t.showMoreCards}},[a("i",{staticClass:"fas fa-chevron-down mx-1"}),t._v("Ще")])]):t._e()],2)},n=[],o=(a("fb6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-settings",modifiers:{"collapse-settings":!0}}],staticClass:"settings"},[t._v("Settings")]),a("b-collapse",{staticClass:" collapse-wrapper",attrs:{id:"collapse-settings"}},[a("div",{staticClass:"d-flex wrapper-items"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.transportValue,expression:"transportValue"}],staticClass:"form-control mx-2",attrs:{type:"text"},domProps:{value:t.transportValue},on:{input:function(e){e.target.composing||(t.transportValue=e.target.value)}}}),a("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(e){t.transportId=t.transportValue}}},[t._v("Задати № транспорту")])],1)]),a("div",{staticClass:"card m-2",class:{"text-disabled":!t.statusCard}},[a("div",{staticClass:"info d-flex "},[a("div",{staticClass:"img-wrapper"},[a("img",{attrs:{src:t.headerImg}})]),a("div",{staticClass:"info-text"},[a("div",[t._v(" Львів ")]),a("div",[t._v(" ЛЬВІВЕЛЕКТРОТРАНС ")]),a("div",[a("span",{staticClass:"episode"},[t._v(" Серія ")]),a("span",[t._v(" "+t._s(t.statusCard?t.episode:t.objCard.episode)+" ")])])])]),a("div",{staticClass:"content mt-3"},[a("div",{staticClass:"img-content-wrapper"},[a("img",{attrs:{src:t.contentImg,alt:""}})]),a("div",{staticClass:"transport-id"},[a("span",[t._v(" № "+t._s(t.statusCard?t.transportId:t.objCard.transportId))])]),a("div",{staticClass:"name-trans"},[t._v(" Вагон ")]),a("div",{staticClass:"date-info d-flex justify-content-between  text-center "},[a("div",{staticClass:"date"},[a("div",{staticClass:"date__name"},[t._v(" Дата ")]),a("div",{staticStyle:{"font-weight":"500"}},[t._v(" "+t._s(t.statusCard?t.DateNewCard:t.objCard.DateNewCard)+" ")])]),a("div",{staticClass:"time"},[a("div",{staticClass:"time__name"},[t._v(" Час ")]),a("div",{staticStyle:{"font-weight":"500"}},[t._v(" "+t._s(t.statusCard?t.timeBought:t.objCard.timeBought)+" ")])]),a("div",{staticClass:"type-ticket"},[a("div",{staticClass:"ticket-name"},[t._v(" Стандартний ")]),a("div",{staticStyle:{"font-weight":"500"}},[t._v(" "+t._s(t.count)+" шт. ")])])]),a("div",{staticClass:"text-ticker-info ",class:{"text-disabled":!t.statusCard}},[t._v(" Квиток разового використання ")]),t.statusCard?a("div",{staticClass:"validation"},[""===t.dateStart||!1===t.statusCard?a("button",{staticClass:"btn-validation",on:{click:function(e){return t.dateTimer(1,!0)}}},[t._v(" Закомпостувати ")]):t._e(),a("div",{staticClass:"timer-date text-center"},[t._v(" "+t._s(t.date)+" ")])]):t._e()])])],1)}),i=[],d=(a("99af"),{name:"CardOpen",props:{statusCard:{type:Boolean,default:!0},objCard:Object},data:function(){return{transportValue:"",transportId:null,count:1,DateNewCard:"",timeBought:"",date:"",setInt:Function,dateStart:"",episode:"",arrEpisod:["246287618","672331946","996147219","186892964","998554794"]}},computed:{headerImg:function(){return this.statusCard?a("4ae1"):a("f357")},contentImg:function(){return this.statusCard?a("f53a"):a("0c23")},randomEpisod:function(){return Math.floor(Math.random()*this.arrEpisod.length)},dateToDay:function(){var t=new Date,e=t.getDate()<10?"0"+t.getDate():t.getDate(),a=+t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,s=t.getFullYear();return"".concat(e,".").concat(a,".").concat(s)}},beforeMount:function(){if(localStorage.getItem("date")){var t=JSON.parse(localStorage.getItem("date"));this.dateStart=t.dateStart,this.DateNewCard=t.DateNewCard,this.timeBought=t.timeBought,this.transportId=t.transportId,this.episode=t.episode,this.dateTimer()}localStorage.getItem("closedCard")||localStorage.setItem("closedCard",JSON.stringify([]))},methods:{addToArrClosedCard:function(){if(localStorage.getItem("closedCard")){var t={transportId:this.transportId,timeBought:this.timeBought,DateNewCard:this.DateNewCard,episode:this.episode},e=JSON.parse(localStorage.getItem("closedCard"));e.push(t),localStorage.setItem("closedCard",JSON.stringify(e))}},timer:function(){var t=this.dateStart-(new Date).getTime();if(t<=0)return localStorage.removeItem("date"),this.addToArrClosedCard(),this.$emit("closedCard"),clearInterval(this.setInt),this.DateNewCard="",this.timeBought="",this.dateStart="",void(this.date="");var e=Math.floor(t%36e5/6e4),a=Math.floor(t%6e4/1e3);this.date=" ".concat(e<10?"0"+e:e," : ").concat(a<10?"0"+a:a)},dateTimer:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!0===a){var s=new Date;this.dateStart=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),(new Date).getHours()+e,(new Date).getMinutes(),(new Date).getSeconds()).getTime(),this.DateNewCard=this.dateToDay,this.timeBought="".concat(s.getHours()<10?"0 "+s.getHours():s.getHours(),":").concat(s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes(),":").concat(s.getSeconds()<10?"0"+s.getSeconds():s.getSeconds()),this.episode=this.arrEpisod[this.randomEpisod]}window.onbeforeunload=function(){""!==t.dateStart&&localStorage.setItem("date",JSON.stringify({dateStart:t.dateStart,timeBought:t.timeBought,DateNewCard:t.DateNewCard,transportId:t.transportId,episode:t.episode}))},this.timer(),this.setInt=setInterval(this.timer,1e3)}}}),c=d,l=(a("6259"),a("2877")),u=Object(l["a"])(c,o,i,!1,null,null,null),p=u.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("div",{staticClass:"d-flex p-2 align-items-center ms-3"},[a("i",{staticClass:"fas fa-arrow-left arrow"}),a("div",{staticClass:"textBack"},[t._v("Проїзд")])]),a("div",{staticClass:"tabs"},[a("div",{staticClass:"tab active"},[a("button",[t._v("КВИТОК")])]),a("div",{staticClass:"tab"},[a("button",[t._v("ПРОЇЗНИЙ")])])])])}],C={name:"Header"},h=C,m=(a("c61c"),Object(l["a"])(h,f,g,!1,null,"1f3ff1dc",null)),v=m.exports,b={name:"App",components:{Header:v,CardOpen:p},data:function(){return{arrClosedCard:[],sliceCount:2}},beforeMount:function(){localStorage.getItem("closedCard")&&(this.arrClosedCard=JSON.parse(localStorage.getItem("closedCard")))},computed:{filteredClosedCards:function(){return this.arrClosedCard.slice(0,this.sliceCount)}},methods:{showMoreCards:function(){console.log(this.arrClosedCard.slice(0,this.sliceCount)),this.sliceCount+=2},closedCard:function(){console.log(JSON.parse(localStorage.getItem("closedCard"))),this.arrClosedCard=JSON.parse(localStorage.getItem("closedCard"))}}},_=b,w=(a("034f"),Object(l["a"])(_,r,n,!1,null,null,null)),S=w.exports,I=a("5f5b");a("7d05"),a("15f5"),a("7051"),a("f9e3"),a("2dd8");s["default"].config.productionTip=!1,s["default"].use(I["a"]),new s["default"]({render:function(t){return t(S)}}).$mount("#app")},6259:function(t,e,a){"use strict";a("aa61")},6586:function(t,e,a){},"7d05":function(t,e,a){},"85ec":function(t,e,a){},aa61:function(t,e,a){},c61c:function(t,e,a){"use strict";a("6586")},f357:function(t,e,a){t.exports=a.p+"img/headerImgDisable.b33a08dc.b33a08dc.jpg"},f53a:function(t,e,a){t.exports=a.p+"img/contentImg.4322b141.4322b141.jpg"}});
//# sourceMappingURL=app.901bb814.js.map