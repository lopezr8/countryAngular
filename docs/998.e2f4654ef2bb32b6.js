"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[998],{3998:(et,v,a)=>{a.r(v),a.d(v,{CountriesModule:()=>W});var c=a(6814),p=a(600),t=a(4946),Z=a(6306),b=a(2096),A=a(7398),l=a(9397),_=a(9862);let g=(()=>{class i{constructor(e){this.http=e,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(e){return this.http.get(e).pipe((0,Z.K)(()=>(0,b.of)([])))}searchCountryByAlphaCode(e){return this.http.get(`${this.apiUrl}/alpha/${e}`).pipe((0,A.U)(o=>o.length>0?o[0]:null),(0,Z.K)(()=>(0,b.of)(null)))}searchCapital(e){return this.getCountriesRequest(`${this.apiUrl}/capital/${e}`).pipe((0,l.b)(o=>this.cacheStore.byCapital={term:e,countries:o}),(0,l.b)(()=>this.saveToLocalStorage()))}searchCountry(e){return this.getCountriesRequest(`${this.apiUrl}/name/${e}`).pipe((0,l.b)(o=>this.cacheStore.byCountries={term:e,countries:o}),(0,l.b)(()=>this.saveToLocalStorage()))}searchRegion(e){return this.getCountriesRequest(`${this.apiUrl}/region/${e}`).pipe((0,l.b)(o=>this.cacheStore.byRegion={region:e,countries:o}),(0,l.b)(()=>this.saveToLocalStorage()))}static#t=this.\u0275fac=function(n){return new(n||i)(t.LFG(_.eN))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),U=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","30","height","30","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2,"Buscando"),t.qZA(),t.O4$(),t.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),t._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),t.qZA(),t.TgZ(9,"circle",3),t._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),t.qZA(),t.TgZ(13,"circle",10),t._UZ(14,"animate",11),t.qZA()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background-color:#000;border-radius:20px;bottom:15px;color:#fff;display:flex;padding:5px 10px;position:fixed;right:15px;box-shadow:0 3px 5px #0003}span[_ngcontent-%COMP%]{margin-left:5px}"]})}return i})();var S=a(8645),w=a(7394);class q extends w.w0{constructor(s,e){super()}schedule(s,e=0){return this}}const m={setInterval(i,s,...e){const{delegate:n}=m;return n?.setInterval?n.setInterval(i,s,...e):setInterval(i,s,...e)},clearInterval(i){const{delegate:s}=m;return(s?.clearInterval||clearInterval)(i)},delegate:void 0};var I=a(9039);const C={now:()=>(C.delegate||Date).now(),delegate:void 0};class d{constructor(s,e=d.now){this.schedulerActionCtor=s,this.now=e}schedule(s,e=0,n){return new this.schedulerActionCtor(this,s).schedule(n,e)}}d.now=C.now;const J=new class P extends d{constructor(s,e=d.now){super(s,e),this.actions=[],this._active=!1}flush(s){const{actions:e}=this;if(this._active)return void e.push(s);let n;this._active=!0;do{if(n=s.execute(s.state,s.delay))break}while(s=e.shift());if(this._active=!1,n){for(;s=e.shift();)s.unsubscribe();throw n}}}(class B extends q{constructor(s,e){super(s,e),this.scheduler=s,this.work=e,this.pending=!1}schedule(s,e=0){var n;if(this.closed)return this;this.state=s;const o=this.id,r=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(r,o,e)),this.pending=!0,this.delay=e,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(r,this.id,e),this}requestAsyncId(s,e,n=0){return m.setInterval(s.flush.bind(s,this),n)}recycleAsyncId(s,e,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return e;null!=e&&m.clearInterval(e)}execute(s,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(s,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(s,e){let o,n=!1;try{this.work(s)}catch(r){n=!0,o=r||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:s,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,I.P)(n,this),null!=s&&(this.id=this.recycleAsyncId(e,s,null)),this.delay=null,super.unsubscribe()}}});var F=a(9360),O=a(8251);let x=(()=>{class i{constructor(){this.debouncer=new S.x,this.initialValue="",this.placeholder="",this.onValue=new t.vpe,this.onDebounce=new t.vpe}ngOnInit(){this.debouncerSuscription=this.debouncer.pipe(function R(i,s=J){return(0,F.e)((e,n)=>{let o=null,r=null,u=null;const f=()=>{if(o){o.unsubscribe(),o=null;const h=r;r=null,n.next(h)}};function tt(){const h=u+i,T=s.now();if(T<h)return o=this.schedule(void 0,h-T),void n.add(o);f()}e.subscribe((0,O.x)(n,h=>{r=h,u=s.now(),o||(o=s.schedule(tt,i),n.add(o))},()=>{f(),n.complete()},void 0,()=>{r=o=null}))})}(300)).subscribe(e=>{this.onDebounce.emit(e)})}ngOnDestroy(){this.debouncerSuscription?.unsubscribe()}emitValue(e){this.onValue.emit(e)}onKeyPress(e){this.debouncer.next(e)}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["shared-search-box"]],inputs:{initialValue:"initialValue",placeholder:"placeholder"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"placeholder","value","keyup"],["txtInput",""]],template:function(n,o){if(1&n){const r=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("keyup",function(){t.CHM(r);const f=t.MAs(1);return t.KtG(o.onKeyPress(f.value))}),t.qZA()}2&n&&t.Q6J("placeholder",o.placeholder)("value",o.initialValue)},encapsulation:2})}return i})();function N(i,s){1&i&&(t.TgZ(0,"div",2),t._uU(1," No Hay Paises que mostrar\n"),t.qZA())}const V=function(i){return["/countries/by",i]};function j(i,s){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td")(15,"a",6),t._uU(16,"Info"),t.qZA()()()),2&i){const e=s.$implicit,n=s.index;t.xp6(2),t.hij("",n+1," "),t.xp6(2),t.hij(" ",e.flag," "),t.xp6(2),t.Q6J("src",e.flags.svg,t.LSH)("alt",e.name.common),t.xp6(2),t.Oqu(e.name.common),t.xp6(2),t.hij("",e.capital," "),t.xp6(2),t.hij("",t.lcZ(13,8,e.population)," "),t.xp6(3),t.Q6J("routerLink",t.VKq(10,V,e.cca3))}}function L(i,s){if(1&i&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Icon"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Bandera"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Nombre"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Capital "),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Poblaci\xf3n"),t.qZA(),t._UZ(15,"th"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,j,17,12,"tr",4),t.qZA()()),2&i){const e=t.oxw();t.xp6(17),t.Q6J("ngForOf",e.countries)}}let y=(()=>{class i{constructor(){this.countries=[]}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(n,o){if(1&n&&(t.YNc(0,N,2,0,"div",0),t.YNc(1,L,18,1,"ng-template",null,1,t.W1O)),2&n){const r=t.MAs(2);t.Q6J("ngIf",0===o.countries.length)("ngIfElse",r)}},dependencies:[c.sg,c.O5,p.rH,c.JJ],styles:["img[_ngcontent-%COMP%]{width:25px}"]})}return i})();function M(i,s){1&i&&t._UZ(0,"shared-loading-spinner")}let Q=(()=>{class i{constructor(e){this.countriesService=e,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(e){this.isLoading=!0,this.countriesService.searchCapital(e).subscribe(n=>{this.countries=n,this.isLoading=!1})}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(g))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(n,o){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por Capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onDebounce",function(u){return o.searchByCapital(u)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr"),t.YNc(9,M,1,0,"shared-loading-spinner",3),t._UZ(10,"countries-table",4),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("initialValue",o.initialValue),t.xp6(4),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("countries",o.countries))},dependencies:[c.O5,U,x,y],encapsulation:2})}return i})(),k=(()=>{class i{constructor(e){this.countriesService=e,this.countries=[],this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(e){this.countriesService.searchCountry(e).subscribe(n=>{this.countries=n})}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(g))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-by-country-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pais",3,"initialValue","onDebounce"],[3,"countries"]],template:function(n,o){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por pais"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onDebounce",function(u){return o.searchByCountry(u)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr")(9,"countries-table",3),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("initialValue",o.initialValue),t.xp6(4),t.Q6J("countries",o.countries))},dependencies:[x,y],encapsulation:2})}return i})();const Y=function(i){return{"btn-outline-primary":i}};function D(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.searchByRegion(r))}),t._uU(1),t.qZA()}if(2&i){const e=s.$implicit,n=t.oxw();t.Q6J("ngClass",t.VKq(2,Y,n.selectedRegion===e)),t.xp6(1),t.hij(" ",e," ")}}let $=(()=>{class i{constructor(e){this.countriesService=e,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(e){this.selectedRegion=e,this.countriesService.searchRegion(e).subscribe(n=>{this.countries=n})}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(g))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(n,o){1&n&&(t.TgZ(0,"h2"),t._uU(1,"Por Region"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1),t.YNc(5,D,2,4,"button",2),t.qZA()(),t.TgZ(6,"div",0)(7,"div",3),t._UZ(8,"hr")(9,"countries-table",4),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("ngForOf",o.regions),t.xp6(4),t.Q6J("countries",o.countries))},dependencies:[c.mk,c.sg,y],encapsulation:2})}return i})();var E=a(4664);function K(i,s){1&i&&(t.TgZ(0,"div",2),t._uU(1," Espere por favor "),t.qZA())}function X(i,s){if(1&i&&(t.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),t._uU(4,"Pais: "),t.TgZ(5,"strong"),t._uU(6),t.qZA()(),t._UZ(7,"hr"),t.qZA()(),t.TgZ(8,"div",3)(9,"div",5)(10,"h3"),t._uU(11,"Bandera"),t.qZA(),t._UZ(12,"img",6),t.qZA(),t.TgZ(13,"div",7)(14,"h3"),t._uU(15,"Informaci\xf3n"),t.qZA(),t.TgZ(16,"ul",8)(17,"li",9)(18,"strong"),t._uU(19,"Poblaci\xf3n:"),t.qZA(),t._uU(20),t.ALo(21,"number"),t.qZA(),t.TgZ(22,"li",9)(23,"strong"),t._uU(24,"C\xf3digo:"),t.qZA(),t._uU(25),t.qZA()()()(),t.TgZ(26,"div",10)(27,"div",7)(28,"h3"),t._uU(29,"Traducciones"),t.qZA(),t.TgZ(30,"div",11)(31,"span",12),t._uU(32),t.qZA(),t.TgZ(33,"span",12),t._uU(34),t.qZA(),t.TgZ(35,"span",12),t._uU(36),t.qZA(),t.TgZ(37,"span",12),t._uU(38),t.qZA(),t.TgZ(39,"span",12),t._uU(40),t.qZA(),t.TgZ(41,"span",12),t._uU(42),t.qZA(),t.TgZ(43,"span",12),t._uU(44),t.qZA(),t.TgZ(45,"span",12),t._uU(46),t.qZA(),t.TgZ(47,"span",12),t._uU(48),t.qZA()()()()()),2&i){const e=t.oxw();t.xp6(6),t.hij("",e.country.name.common," "),t.xp6(6),t.Q6J("src",e.country.flags.svg,t.LSH)("alt",e.country.name.common),t.xp6(8),t.hij(" ",t.lcZ(21,14,e.country.population)," "),t.xp6(5),t.hij(" ",e.country.cca3," "),t.xp6(7),t.hij("",e.country.translations.ara.common," "),t.xp6(2),t.hij("",e.country.translations.bre.common," "),t.xp6(2),t.hij("",e.country.translations.ces.common," "),t.xp6(2),t.hij("",e.country.translations.cym.common," "),t.xp6(2),t.hij("",e.country.translations.est.common," "),t.xp6(2),t.hij("",e.country.translations.fin.common," "),t.xp6(2),t.hij("",e.country.translations.ita.common," "),t.xp6(2),t.hij("",e.country.translations.kor.common," "),t.xp6(2),t.hij("",e.country.translations.per.common," ")}}const H=[{path:"by-capital",component:Q},{path:"by-country",component:k},{path:"by-region",component:$},{path:"by/:id",component:(()=>{class i{constructor(e,n,o){this.activateRoute=e,this.router=n,this.countriesService=o}ngOnInit(){this.activateRoute.params.pipe((0,E.w)(({id:e})=>this.countriesService.searchCountryByAlphaCode(e))).subscribe(e=>e?this.country=e:this.router.navigateByUrl(""))}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(p.gz),t.Y36(p.F0),t.Y36(g))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(n,o){if(1&n&&(t.YNc(0,K,2,0,"ng-template",null,0,t.W1O),t.YNc(2,X,49,16,"div",1)),2&n){const r=t.MAs(1);t.xp6(2),t.Q6J("ngIf",o.country)("ngIfElse",r)}},dependencies:[c.O5,c.JJ],encapsulation:2})}return i})()},{path:"**",redirectTo:"by-capital"}];let z=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(H),p.Bz]})}return i})();var G=a(6208);let W=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[c.ez,z,G.m]})}return i})()}}]);