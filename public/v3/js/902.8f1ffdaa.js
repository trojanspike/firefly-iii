"use strict";(self["webpackChunkfirefly_iii"]=self["webpackChunkfirefly_iii"]||[]).push([[902],{902:(s,e,t)=>{t.r(e),t.d(e,{default:()=>$});var r=t(3673),a=t(2323);const i={class:"row q-mx-md"},o={class:"col-12"},n={class:"row q-mx-md q-mt-md"},l={class:"col-12"},u=(0,r._)("div",{class:"text-h6"},"Edit account",-1),c={class:"row"},d={class:"col-12 q-mb-xs"},m={class:"row"},b={class:"col-12 q-mb-xs"},h={class:"row q-mx-md"},p={class:"col-12"},f={class:"row"},g={class:"col-12 text-right"},w={class:"row"},X={class:"col-12 text-right"};function _(s,e,t,_,v,E){const q=(0,r.up)("q-btn"),x=(0,r.up)("q-banner"),k=(0,r.up)("q-card-section"),C=(0,r.up)("q-input"),y=(0,r.up)("q-card"),A=(0,r.up)("q-checkbox"),I=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(I,null,{default:(0,r.w5)((()=>[(0,r._)("div",i,[(0,r._)("div",o,[""!==v.errorMessage?((0,r.wg)(),(0,r.j4)(x,{key:0,"inline-actions":"",rounded:"",class:"bg-orange text-white"},{action:(0,r.w5)((()=>[(0,r.Wm)(q,{flat:"",onClick:E.dismissBanner,label:"Dismiss"},null,8,["onClick"])])),default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(v.errorMessage)+" ",1)])),_:1})):(0,r.kq)("",!0)])]),(0,r._)("div",n,[(0,r._)("div",l,[(0,r.Wm)(y,{bordered:""},{default:(0,r.w5)((()=>[(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[u])),_:1}),(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r._)("div",c,[(0,r._)("div",d,[(0,r.Wm)(C,{"error-message":v.submissionErrors.name,error:v.hasSubmissionErrors.name,"bottom-slots":"",disable:E.disabledInput,type:"text",clearable:"",modelValue:v.name,"onUpdate:modelValue":e[0]||(e[0]=s=>v.name=s),label:s.$t("form.name"),outlined:""},null,8,["error-message","error","disable","modelValue","label"])])]),(0,r._)("div",m,[(0,r._)("div",b,[(0,r.Wm)(C,{"error-message":v.submissionErrors.iban,error:v.hasSubmissionErrors.iban,mask:"AA## XXXX XXXX XXXX XXXX XXXX XXXX XXXX XX","bottom-slots":"",disable:E.disabledInput,type:"text",clearable:"",modelValue:v.iban,"onUpdate:modelValue":e[1]||(e[1]=s=>v.iban=s),label:s.$t("form.iban"),outlined:""},null,8,["error-message","error","disable","modelValue","label"])])])])),_:1})])),_:1})])]),(0,r._)("div",h,[(0,r._)("div",p,[(0,r.Wm)(y,{class:"q-mt-xs"},{default:(0,r.w5)((()=>[(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r._)("div",f,[(0,r._)("div",g,[(0,r.Wm)(q,{disable:E.disabledInput,color:"primary",label:"Update",onClick:E.submitAccount},null,8,["disable","onClick"])])]),(0,r._)("div",w,[(0,r._)("div",X,[(0,r.Wm)(A,{disable:E.disabledInput,modelValue:v.doReturnHere,"onUpdate:modelValue":e[2]||(e[2]=s=>v.doReturnHere=s),"left-label":"",label:"Return here"},null,8,["disable","modelValue"])])])])),_:1})])),_:1})])])])),_:1})}var v=t(1901),E=t(5474);class q{post(s,e){let t="/api/v1/accounts/"+s;return E.api.put(t,e)}}const x={name:"Edit",data(){return{tab:"split-0",submissionErrors:{},hasSubmissionErrors:{},submitting:!1,doReturnHere:!1,doResetForm:!1,errorMessage:"",type:"",id:0,name:"",iban:""}},computed:{disabledInput:function(){return this.submitting}},created(){this.id=parseInt(this.$route.params.id),this.collectAccount()},methods:{collectAccount:function(){let s=new v.Z;s.get(this.id).then((s=>this.parseAccount(s)))},parseAccount:function(s){this.name=s.data.data.attributes.name,this.iban=s.data.data.attributes.iban},resetErrors:function(){this.submissionErrors={name:"",iban:""},this.hasSubmissionErrors={name:!1,iban:!1}},submitAccount:function(){this.submitting=!0,this.errorMessage="",this.resetErrors();const s=this.buildAccount();let e=new q;e.post(this.id,s).catch(this.processErrors).then(this.processSuccess)},buildAccount:function(){let s={name:this.name,iban:this.iban};return s},dismissBanner:function(){this.errorMessage=""},processSuccess:function(s){if(this.$store.dispatch("fireflyiii/refreshCacheKey"),!s)return;this.submitting=!1;let e={level:"success",text:"TODO I am updated lol",show:!0,action:{show:!0,text:"Go to account",link:{name:"accounts.show",params:{id:parseInt(s.data.data.id)}}}};this.$q.localStorage.set("flash",e),this.doReturnHere&&window.dispatchEvent(new CustomEvent("flash",{detail:{flash:this.$q.localStorage.getItem("flash")}})),this.doReturnHere||this.$router.go(-1)},processErrors:function(s){if(s.response){let e=s.response.data;this.errorMessage=e.message,console.log(e);for(let s in e.errors)e.errors.hasOwnProperty(s)&&(this.submissionErrors[s]=e.errors[s][0],this.hasSubmissionErrors[s]=!0)}this.submitting=!1}}};var k=t(4260),C=t(4379),y=t(5607),A=t(2165),I=t(151),S=t(5589),W=t(4842),V=t(5735),Z=t(7518),Q=t.n(Z);const R=(0,k.Z)(x,[["render",_]]),$=R;Q()(x,"components",{QPage:C.Z,QBanner:y.Z,QBtn:A.Z,QCard:I.Z,QCardSection:S.Z,QInput:W.Z,QCheckbox:V.Z})}}]);