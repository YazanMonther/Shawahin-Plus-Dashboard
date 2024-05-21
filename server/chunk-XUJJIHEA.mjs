import './polyfills.server.mjs';
import{a as G,b as V,c as J}from"./chunk-UHVBUIAZ.mjs";import{H as z,I as L,J as N,a as b,b as M,k as p,u as U}from"./chunk-65BLW562.mjs";import{A as w,Ab as ee,Da as r,Ea as o,F as $,Fa as R,I,J as E,Jb as j,K as f,Kb as F,Ma as S,Na as Z,Ob as B,Ra as s,Sa as g,Wa as T,Xa as C,Ya as A,cc as H,d as k,fc as x,h as v,ja as l,ka as u,s as D,sa as m,ya as Y}from"./chunk-2BUOXUC6.mjs";import{h as y}from"./chunk-KRLCULJA.mjs";function oe(a,i){if(a&1&&(r(0,"div",1)(1,"div",2)(2,"div",3),s(3,"ID:"),o(),r(4,"div",4),s(5),o()(),r(6,"div",2)(7,"div",3),s(8,"Status:"),o(),r(9,"div",4),s(10),o()(),r(11,"div",2)(12,"div",3),s(13,"Service Type:"),o(),r(14,"div",4),s(15),o()(),r(16,"div",2)(17,"div",3),s(18,"Service Name:"),o(),r(19,"div",4),s(20),o()(),r(21,"div",2)(22,"div",3),s(23,"Description:"),o(),r(24,"div",4),s(25),o()(),r(26,"div",2)(27,"div",3),s(28,"Phone Number:"),o(),r(29,"div",4),s(30),o()(),r(31,"div",2)(32,"div",3),s(33,"City:"),o(),r(34,"div",4),s(35),o()(),r(36,"div",2)(37,"div",3),s(38,"Address:"),o(),r(39,"div",4),s(40),o()(),r(41,"div",2)(42,"div",3),s(43,"Image URL:"),o(),r(44,"div",4),s(45),o()(),r(46,"div",2)(47,"div",3),s(48,"User ID:"),o(),r(49,"div",4),s(50),o()(),r(51,"div",2)(52,"div",3),s(53,"Service Type ID:"),o(),r(54,"div",4),s(55),o()()()),a&2){let h=Z();l(5),g(h.Data.id),l(5),g(h.Data.requestStatus),l(5),g(h.Data.serviceTypeName),l(5),g(h.Data.serviceName),l(5),g(h.Data.description),l(5),g(h.Data.phoneNumber),l(5),g(h.Data.city),l(5),g(h.Data.address),l(5),g(h.Data.imageUrl),l(5),g(h.Data.userId),l(5),g(h.Data.serviceTypeId)}}var K=(()=>{let i=class i{};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=f({type:i,selectors:[["app-service-details-view"]],inputs:{Data:"Data"},standalone:!0,features:[C],decls:1,vars:1,consts:[["class","details-container",4,"ngIf"],[1,"details-container"],[1,"detail-item"],[1,"label"],[1,"value"]],template:function(t,n){t&1&&Y(0,oe,56,11,"div",0),t&2&&m("ngIf",n.Data)},dependencies:[ee],styles:[".details-container[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:20px;border:1px solid #ccc;border-radius:8px;box-shadow:0 0 10px #0000001a;background-color:#fff}.details-container[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px solid #ccc;padding:10px}.details-container[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700;margin-right:10px}"]});let a=i;return a})();var P=(()=>{let i=class i{constructor(e,t){this.Http=e,this.localStorageService=t,this.getAllRequests="servicerequests/GetAll",this.getById="servicerequests/GetById",this.acceptRequestUrl="Services/Add",this.authToken=this.localStorageService.getToken(),this.deleteRequest="servicerequests/Remove",this.denayRequestUrl="servicerequests/Denay",this.headers=new j({"Content-Type":"application/json",Authorization:`bearer ${this.authToken}`}),this.getAll=()=>this.Http.get(`${b}/${this.getAllRequests}`,{headers:this.headers}),this.getReqById=n=>this.Http.get(`${b}/${this.getById}/${n}`,{headers:this.headers}),this.acceptRequest=n=>{if(!this.authToken)return v("Authentication token is missing");let d={headers:this.headers};return this.Http.post(`${b}/${this.acceptRequestUrl}/${n}/${this.getUserIdFromLocalStorage()}`,null,d).pipe(D(c=>{console.error("Error:",c);let q=c.error?c.error:"Something went wronG";return v(q)}))},this.removeRequest=n=>{if(!this.authToken)return v("Authentication token is missing");let d={headers:this.headers};return this.Http.delete(`${b}/${this.deleteRequest}/${n}`,d).pipe(D(c=>{console.error("Error:",c);let q=c.error?c.error:"Something went wrong";return v(q)}))},this.denayRequest=n=>{if(!this.authToken)return v("Authentication token is missing");let d={headers:this.headers};return this.Http.put(`${b}/${this.denayRequestUrl}/${n}`,null,d).pipe(D(c=>{console.error("Error:",c);let q=c.error?c.error:"Something went wrong";return v(q)}))}}getUserIdFromLocalStorage(){return console.log(this.localStorageService.getUserId()),console.log(`token : ${this.authToken}`),this.localStorageService.getUserId()||""}};i.\u0275fac=function(t){return new(t||i)(I(F),I(M))},i.\u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var te=(()=>{let i=class i{constructor(e,t,n,d){this.route=e,this.requestService=t,this.dialog=n,this.router=d,this.isLoading=!0,this.destroy$=new k,this.route.params.pipe(w(this.destroy$)).subscribe(c=>y(this,null,function*(){this.id=c.requestId,console.log("Request ID:",this.id),yield this.getRequestData(this.id.toString())}))}ngOnInit(){return y(this,null,function*(){})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getRequestData(e){return y(this,null,function*(){console.log(e);try{this.requestData=yield this.requestService.getReqById(e).toPromise(),console.log("Request Data:",this.requestData)}catch(t){console.error("Error fetching data:",t)}finally{this.isLoading=!1}})}openConfirmationDialog(e){let t=this.dialog.open(V,{width:"300px",data:{title:"Confirmation",message:`Are you sure you want to ${e}?`}});t.componentInstance.cancelButtonClass=e==="accept"?"red-button":"green-button",t.componentInstance.acceptButtonClass=e==="accept"?"green-button":"red-button",t.componentInstance.buutonText=e,t.afterClosed().subscribe(n=>{n&&(e=="accept"?this.acceptRequest():e=="deny"?this.denyRequest():e=="remove"&&this.removeRequest())})}openResponseDialog(e){this.dialog.open(J,{width:"400px",data:e}).afterClosed().subscribe(()=>{console.log("Response dialog closed"),this.router.navigateByUrl("pages/services")})}acceptRequest(){this.requestService.acceptRequest(this.id).subscribe(e=>{console.log("Request accepted:",e),console.log("Response Message:",e.message),this.openResponseDialog(e.message)},e=>{console.error("Error accepting request:",e),this.openResponseDialog(e)})}denyRequest(){this.requestService.denayRequest(this.id).subscribe(e=>{console.log("Request response denied:",e),console.log("Response Message:",e.message),this.openResponseDialog(e.message)},e=>{console.error("Error denaying request:",e),this.openResponseDialog(e)}),console.log("Request denied:",this.id)}removeRequest(){this.requestService.removeRequest(this.id).subscribe(e=>{console.log("Request response removed:",e),console.log("Response Message:",e.message),this.openResponseDialog(e.message)},e=>{console.error("Error removing request:",e),this.openResponseDialog(e)}),console.log("Request removed:",this.id)}};i.\u0275fac=function(t){return new(t||i)(u(H),u(P),u(G),u(x))},i.\u0275cmp=f({type:i,selectors:[["app-request-details"]],standalone:!0,features:[C],decls:12,vars:1,consts:[[1,"request-details"],[1,"header"],[3,"Data"],[1,"action-buttons"],[1,"accept-button",3,"click"],[1,"deny-button",3,"click"],[1,"remove-button",3,"click"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1)(2,"h1"),s(3,"Request Details"),o()(),R(4,"app-service-details-view",2),r(5,"div",3)(6,"button",4),S("click",function(){return n.openConfirmationDialog("accept")}),s(7," Accept "),o(),r(8,"button",5),S("click",function(){return n.openConfirmationDialog("deny")}),s(9," Deny "),o(),r(10,"button",6),S("click",function(){return n.openConfirmationDialog("remove")}),s(11," Remove "),o()()()),t&2&&(l(4),m("Data",n.requestData))},dependencies:[K],styles:[".request-details[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#080710;color:#333;margin:30px 0 0;padding:0}.request-details[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{background-color:#ff833e;color:#fff;padding:10px;text-align:center}.request-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:20px}.request-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .accept-button[_ngcontent-%COMP%], .request-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .deny-button[_ngcontent-%COMP%], .request-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]{padding:10px;font-size:16px;cursor:pointer;border:none;border-radius:5px}.request-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .accept-button[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff}.request-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .deny-button[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}.request-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]{background-color:#333;color:#fff}"]});let a=i;return a})();var O=(()=>{let i=class i{constructor(e,t){this.Http=e,this.localStorageService=t,this.getAllServices="Services/GetAll",this.getById="Services/GetById",this.authToken=this.localStorageService.getToken(),this.deleteStations="Services/Remove",this.headers=new j({"Content-Type":"application/json",Authorization:`bearer ${this.authToken}`}),this.getAll=()=>this.Http.get(`${b}/${this.getAllServices}`,{headers:this.headers}),this.geById=n=>this.Http.get(`${b}/${this.getById}/${n}`,{headers:this.headers}),this.removeService=n=>{if(!this.authToken)return v("Authentication token is missing");let d={headers:this.headers};return this.Http.delete(`${b}/${this.deleteStations}/${n}`,d).pipe(D(c=>{console.error("Error:",c);let q=c.error?c.error:"Something went wrong";return v(q)}))}}getUserIdFromLocalStorage(){return console.log(this.localStorageService.getUserId()),console.log(`token : ${this.authToken}`),this.localStorageService.getUserId()||""}};i.\u0275fac=function(t){return new(t||i)(I(F),I(M))},i.\u0275prov=$({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var ie=(()=>{let i=class i{constructor(e,t,n,d){this.route=e,this.ServicesService=t,this.dialog=n,this.router=d,this.isLoading=!0,this.destroy$=new k,this.route.params.pipe(w(this.destroy$)).subscribe(c=>y(this,null,function*(){this.id=c.serviceId,console.log(" ID:",this.id),yield this.getServiceData(this.id.toString())}))}ngOnInit(){return y(this,null,function*(){})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}getServiceData(e){return y(this,null,function*(){console.log(e);try{this.Data=yield this.ServicesService.geById(e).toPromise(),console.log(" Data:",this.ServicesService)}catch(t){console.error("Error fetching data:",t)}finally{this.isLoading=!1}})}openConfirmationDialog(e){let t=this.dialog.open(V,{width:"300px",data:{title:"Confirmation",message:`Are you sure you want to ${e}?`}});t.componentInstance.cancelButtonClass=e==="accept"?"red-button":"green-button",t.componentInstance.acceptButtonClass=e==="accept"?"green-button":"red-button",t.componentInstance.buutonText=e,t.afterClosed().subscribe(n=>{e=="Delete"&&this.RemoveService()})}openResponseDialog(e){this.dialog.open(J,{width:"400px",data:e}).afterClosed().subscribe(()=>{console.log("Response dialog closed"),this.router.navigateByUrl(`pages/stations/${p.acceptedServices}`)})}RemoveService(){this.ServicesService.removeService(this.id).subscribe(e=>{console.log(" response denied:",e),console.log("Response Message:",e.message),this.openResponseDialog(e.message)},e=>{console.error("Error denaying request:",e),this.openResponseDialog(e)}),console.log("Request denied:",this.id)}};i.\u0275fac=function(t){return new(t||i)(u(H),u(O),u(G),u(x))},i.\u0275cmp=f({type:i,selectors:[["app-service-details"]],standalone:!0,features:[T([O]),C],decls:8,vars:1,consts:[[1,"service-details"],[1,"header"],[3,"Data"],[1,"action-buttons"],[1,"remove-button",3,"click"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"div",1)(2,"h1"),s(3,"Service Details"),o()(),R(4,"app-service-details-view",2),r(5,"div",3)(6,"button",4),S("click",function(){return n.openConfirmationDialog("Delete")}),s(7," Delete "),o()()()),t&2&&(l(4),m("Data",n.Data))},dependencies:[K],styles:[".service-details[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#080710;color:#333;margin:30px 0 0;padding:0}.service-details[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{background-color:#ff833e;color:#fff;padding:10px;text-align:center}.service-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:20px}.service-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .accept-button[_ngcontent-%COMP%], .service-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .deny-button[_ngcontent-%COMP%], .service-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]{padding:10px;font-size:16px;cursor:pointer;border:none;border-radius:5px}.service-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .accept-button[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff}.service-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .deny-button[_ngcontent-%COMP%], .service-details[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}"]});let a=i;return a})();var de=()=>[5,10,25,100],X=(()=>{let i=class i{constructor(e,t){this.router=e,this.localStorage=t,this.IdType="id",this.requestService=E(P),this.dataSource=new U,this.displayedColumns=["id","serviceTypeName","serviceName","description","phoneNumber","city","address","requestStatus"]}onRowClick(e){console.log("Row Clicked. RequestId:",e),this.router.navigate([`${p.services}/${p.serviceRequestDetails}/${e}`])}ngOnInit(){this.getAllRequests().subscribe(e=>{this.dataSource.data=e}),this.localStorage.setLastVisitedRoute(`/${p.services}/${p.servicesRequest}`)}getAllRequests(){return this.requestService.getAll()}updateRequestStatus(e,t){let n=this.dataSource.data.findIndex(d=>d.requestId===e);n!==-1&&(this.dataSource.data[n].requestStatus=t)}};i.\u0275fac=function(t){return new(t||i)(u(x),u(M))},i.\u0275cmp=f({type:i,selectors:[["app-services-request"]],standalone:!0,features:[T([P]),C],decls:5,vars:6,consts:[[1,"mat-elevation-z8"],[3,"dataSource","displayedColumns","pageSizeOptions","IdType","rowClick"],["showFirstLastButtons","",3,"pageSizeOptions"]],template:function(t,n){t&1&&(r(0,"h2"),s(1,"Stations Request"),o(),r(2,"div",0)(3,"app-table",1),S("rowClick",function(c){return n.onRowClick(c)}),o(),R(4,"mat-paginator",2),o()),t&2&&(l(3),m("dataSource",n.dataSource.data)("displayedColumns",n.displayedColumns)("pageSizeOptions",n.pageSizeOptions)("IdType",n.IdType),l(1),m("pageSizeOptions",A(5,de)))},dependencies:[L,z,B,N],styles:["h2[_ngcontent-%COMP%]{margin-top:20px}button[_ngcontent-%COMP%]{padding:3px 6px;cursor:pointer;background-color:#4caf50;color:#fff;border:none;border-radius:3px;font-size:10px}button[_ngcontent-%COMP%]:hover{background-color:#45a049}.mat-paginator[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:20px}"]});let a=i;return a})();var pe=()=>[5,10,25,100],ne=(()=>{let i=class i{constructor(e,t){this.router=e,this.localStorage=t,this.IdType="id",this.acceptedService=E(O),this.dataSource=new U,this.displayedColumns=["id","serviceTypeName","serviceName","description","phoneNumber","city","address"]}onRowClick(e){console.log("Row Clicked. StationId:",e),this.router.navigate([`${p.services}/${p.serviceDetails}/${e}`])}ngOnInit(){this.getAllRequests().subscribe(e=>{this.dataSource.data=e}),this.localStorage.setLastVisitedRoute(`/${p.services}/${p.acceptedServices}`)}getAllRequests(){return this.acceptedService.getAll()}};i.\u0275fac=function(t){return new(t||i)(u(x),u(M))},i.\u0275cmp=f({type:i,selectors:[["app-accepted-services"]],standalone:!0,features:[C],decls:5,vars:6,consts:[[1,"mat-elevation-z8"],[3,"dataSource","displayedColumns","pageSizeOptions","IdType","rowClick"],["showFirstLastButtons","",3,"pageSizeOptions"]],template:function(t,n){t&1&&(r(0,"h2"),s(1,"Accepted Services"),o(),r(2,"div",0)(3,"app-table",1),S("rowClick",function(c){return n.onRowClick(c)}),o(),R(4,"mat-paginator",2),o()),t&2&&(l(3),m("dataSource",n.dataSource.data)("displayedColumns",n.displayedColumns)("pageSizeOptions",n.pageSizeOptions)("IdType",n.IdType),l(1),m("pageSizeOptions",A(5,pe)))},dependencies:[L,z,B,N]});let a=i;return a})();var nt=[{path:`${p.serviceRequestDetails}/:requestId`,component:te},{path:`${p.serviceDetails}/:serviceId`,component:ie},{path:`${p.servicesRequest}`,component:X},{path:`${p.acceptedServices}`,component:ne},{path:"",component:X}];export{nt as ServiceRoute};
