import{S as At,i as Mt,s as Nt,j as Lt,k as w,e as c,t as d,M as Me,m as qt,n as g,c as u,a as f,g as h,d as n,N as Ne,b as e,O as Bt,o as St,f as M,F as l,P as oe,Q as Le,R as ce,h as ue,x as Tt,u as Vt,v as Dt,T as zt,l as qe,J as fe}from"../chunks/vendor-2ca5b27b.js";import{S as Ct}from"../chunks/Seo-db1af496.js";function Rt(s){let a=Math.round(s[4])+"",t,r;return{c(){t=d(a),r=d("%")},l(o){t=h(o,a),r=h(o,"%")},m(o,p){M(o,t,p),M(o,r,p)},p(o,p){p&16&&a!==(a=Math.round(o[4])+"")&&ue(t,a)},d(o){o&&n(t),o&&n(r)}}}function Ut(s){let a,t=s[0]&&It();return{c(){t&&t.c(),a=qe()},l(r){t&&t.l(r),a=qe()},m(r,o){t&&t.m(r,o),M(r,a,o)},p(r,o){r[0]?t||(t=It(),t.c(),t.m(a.parentNode,a)):t&&(t.d(1),t=null)},d(r){t&&t.d(r),r&&n(a)}}}function $t(s){let a;function t(p,k){if(p[1])return Ht;if(!p[1])return jt}let r=t(s),o=r&&r(s);return{c(){o&&o.c(),a=qe()},l(p){o&&o.l(p),a=qe()},m(p,k){o&&o.m(p,k),M(p,a,k)},p(p,k){r!==(r=t(p))&&(o&&o.d(1),o=r&&r(p),o&&(o.c(),o.m(a.parentNode,a)))},d(p){o&&o.d(p),p&&n(a)}}}function It(s){let a;return{c(){a=d("100%")},l(t){a=h(t,"100%")},m(t,r){M(t,a,r)},d(t){t&&n(a)}}}function jt(s){let a;return{c(){a=d("0%")},l(t){a=h(t,"0%")},m(t,r){M(t,a,r)},d(t){t&&n(a)}}}function Ht(s){let a;return{c(){a=d("0%")},l(t){a=h(t,"0%")},m(t,r){M(t,a,r)},d(t){t&&n(a)}}}function Ot(s){let a;return{c(){a=d("buy")},l(t){a=h(t,"buy")},m(t,r){M(t,a,r)},d(t){t&&n(a)}}}function Ft(s){let a;return{c(){a=d("sell")},l(t){a=h(t,"sell")},m(t,r){M(t,a,r)},d(t){t&&n(a)}}}function Yt(s){let a=Math.round(s[4])+"",t;return{c(){t=d(a)},l(r){t=h(r,a)},m(r,o){M(r,t,o)},p(r,o){o&16&&a!==(a=Math.round(r[4])+"")&&ue(t,a)},d(r){r&&n(t)}}}function Jt(s){return{c:fe,l:fe,m:fe,p:fe,d:fe}}function Qt(s){let a,t,r,o,p,k,E,N,L,D,ne,T,U,Y,Be,Se,_,Te,$,J,Ve,De,m,ze,V,Q,Ce,Re,y,Ue,G,de,$e,je,j,Z,b,He,K,Oe,W,Fe,he,Ye,pe,Je,ve,X,Qe,ie=Math.abs(Math.round(s[5]))+"",_e,Ge,Ke,ee,q,z,x,me,I,We,P,be,Xe,H,Ze,C,et,tt,lt,te,at,rt,le,st,O,ot,ut;a=new Ct({props:{pageTitle:Gt,metaDescription:Kt}});function ft(i,v){return i[0]?i[1]?Rt:Ut:$t}let ye=ft(s),B=ye(s);function dt(i,v){return i[5]>0?Ft:Ot}let we=dt(s),R=we(s);function ht(i,v){return i[4]?Yt:Jt}let ge=ht(s),S=ge(s);return{c(){Lt(a.$$.fragment),t=w(),r=c("main"),o=c("h1"),p=d("Portfolio rebalancing calculator"),k=w(),E=c("div"),N=c("div"),L=c("form"),D=c("input"),ne=w(),T=c("ol"),U=c("li"),Y=c("label"),Be=d("Current money in volatile assets?"),Se=w(),_=c("input"),Te=w(),$=c("li"),J=c("label"),Ve=d("Current money in stable assets?"),De=w(),m=c("input"),ze=w(),V=c("li"),Q=c("label"),Ce=d("Preferred percentage of volatile assets?"),Re=w(),y=c("input"),Ue=w(),G=c("label"),de=d(s[2]),$e=d("%"),je=w(),j=c("div"),Z=c("div"),b=c("h3"),He=d("You currently have "),K=c("span"),B.c(),Oe=d(" of your total portfolio value of "),W=c("span"),Fe=d("\u20AC"),he=d(s[3]),Ye=d(" in volatile assets."),pe=c("br"),Je=d(` To rebalance, 
                `),R.c(),ve=w(),X=c("span"),Qe=d("\u20AC"),_e=d(ie),Ge=d(" of volatile assets."),Ke=w(),ee=c("div"),q=Me("svg"),z=Me("circle"),x=Me("circle"),I=Me("text"),S.c(),We=w(),P=c("div"),be=c("hr"),Xe=w(),H=c("p"),Ze=d("This calculator is intended for people who follow a long-term investment strategy such as the "),C=c("a"),et=d("Boglehead method"),tt=d(", where there's a volatile part and a stable part: stocks and bonds."),lt=w(),te=c("p"),at=d("In recent years, low interest rates have made bonds unattractive. People now opt for deposit savings or cash buffers. Stocks are still in high demand, but crypto currencies are gaining ground."),rt=w(),le=c("p"),st=d("None of this is relevant for this calculator, as long as there is a volatile and a stable asset that you're trying to balance!"),this.h()},l(i){qt(a.$$.fragment,i),t=g(i),r=u(i,"MAIN",{class:!0});var v=f(r);o=u(v,"H1",{class:!0});var pt=f(o);p=h(pt,"Portfolio rebalancing calculator"),pt.forEach(n),k=g(v),E=u(v,"DIV",{class:!0});var ae=f(E);N=u(ae,"DIV",{class:!0});var vt=f(N);L=u(vt,"FORM",{name:!0,class:!0});var ke=f(L);D=u(ke,"INPUT",{type:!0,name:!0,class:!0}),ne=g(ke),T=u(ke,"OL",{class:!0});var re=f(T);U=u(re,"LI",{class:!0});var Ee=f(U);Y=u(Ee,"LABEL",{for:!0,class:!0});var _t=f(Y);Be=h(_t,"Current money in volatile assets?"),_t.forEach(n),Se=g(Ee),_=u(Ee,"INPUT",{type:!0,min:!0,name:!0,id:!0,"aria-required":!0,placeholder:!0,autocomplete:!0,autocorrect:!0,autocapitalize:!0,oninput:!0,class:!0}),Ee.forEach(n),Te=g(re),$=u(re,"LI",{class:!0});var xe=f($);J=u(xe,"LABEL",{for:!0,class:!0});var mt=f(J);Ve=h(mt,"Current money in stable assets?"),mt.forEach(n),De=g(xe),m=u(xe,"INPUT",{type:!0,min:!0,name:!0,id:!0,"aria-required":!0,placeholder:!0,autocomplete:!0,oninput:!0,class:!0}),xe.forEach(n),ze=g(re),V=u(re,"LI",{class:!0});var se=f(V);Q=u(se,"LABEL",{for:!0,class:!0});var bt=f(Q);Ce=h(bt,"Preferred percentage of volatile assets?"),bt.forEach(n),Re=g(se),y=u(se,"INPUT",{type:!0,min:!0,max:!0,name:!0,id:!0,"aria-required":!0,autocapitalize:!0,class:!0}),Ue=g(se),G=u(se,"LABEL",{class:!0});var nt=f(G);de=h(nt,s[2]),$e=h(nt,"%"),nt.forEach(n),se.forEach(n),re.forEach(n),ke.forEach(n),vt.forEach(n),je=g(ae),j=u(ae,"DIV",{class:!0});var Pe=f(j);Z=u(Pe,"DIV",{class:!0});var yt=f(Z);b=u(yt,"H3",{class:!0});var A=f(b);He=h(A,"You currently have "),K=u(A,"SPAN",{class:!0});var wt=f(K);B.l(wt),wt.forEach(n),Oe=h(A," of your total portfolio value of "),W=u(A,"SPAN",{class:!0});var it=f(W);Fe=h(it,"\u20AC"),he=h(it,s[3]),it.forEach(n),Ye=h(A," in volatile assets."),pe=u(A,"BR",{class:!0}),Je=h(A,` To rebalance, 
                `),R.l(A),ve=g(A),X=u(A,"SPAN",{class:!0});var ct=f(X);Qe=h(ct,"\u20AC"),_e=h(ct,ie),ct.forEach(n),Ge=h(A," of volatile assets."),A.forEach(n),yt.forEach(n),Ke=g(Pe),ee=u(Pe,"DIV",{class:!0});var gt=f(ee);q=Ne(gt,"svg",{height:!0,width:!0,viewBox:!0,class:!0});var Ie=f(q);z=Ne(Ie,"circle",{class:!0,r:!0,cx:!0,cy:!0,fill:!0}),f(z).forEach(n),x=Ne(Ie,"circle",{r:!0,cx:!0,cy:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-dasharray":!0,transform:!0,class:!0}),f(x).forEach(n),I=Ne(Ie,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-size":!0,class:!0});var kt=f(I);S.l(kt),kt.forEach(n),Ie.forEach(n),gt.forEach(n),Pe.forEach(n),We=g(ae),P=u(ae,"DIV",{style:!0,class:!0});var F=f(P);be=u(F,"HR",{class:!0}),Xe=g(F),H=u(F,"P",{class:!0});var Ae=f(H);Ze=h(Ae,"This calculator is intended for people who follow a long-term investment strategy such as the "),C=u(Ae,"A",{target:!0,rel:!0,href:!0,class:!0});var Et=f(C);et=h(Et,"Boglehead method"),Et.forEach(n),tt=h(Ae,", where there's a volatile part and a stable part: stocks and bonds."),Ae.forEach(n),lt=g(F),te=u(F,"P",{class:!0});var xt=f(te);at=h(xt,"In recent years, low interest rates have made bonds unattractive. People now opt for deposit savings or cash buffers. Stocks are still in high demand, but crypto currencies are gaining ground."),xt.forEach(n),rt=g(F),le=u(F,"P",{class:!0});var Pt=f(le);st=h(Pt,"None of this is relevant for this calculator, as long as there is a volatile and a stable asset that you're trying to balance!"),Pt.forEach(n),F.forEach(n),ae.forEach(n),v.forEach(n),this.h()},h(){e(o,"class","svelte-x4wh8e"),e(D,"type","hidden"),e(D,"name","form-name"),D.value="contact",e(D,"class","svelte-x4wh8e"),e(Y,"for","field-volatile"),e(Y,"class","svelte-x4wh8e"),e(_,"type","number"),e(_,"min","0"),e(_,"name","volatile"),e(_,"id","field-volatile"),_.required="",e(_,"aria-required","true"),e(_,"placeholder","Enter value of volatile assets"),e(_,"autocomplete","volatile"),e(_,"autocorrect","off"),e(_,"autocapitalize","off"),e(_,"oninput","this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');"),e(_,"class","svelte-x4wh8e"),e(U,"class","svelte-x4wh8e"),e(J,"for","field-stable"),e(J,"class","svelte-x4wh8e"),e(m,"type","number"),e(m,"min","0"),e(m,"name","stable"),e(m,"id","field-stable"),m.required="",e(m,"aria-required","true"),e(m,"placeholder","Enter value of stable assets"),e(m,"autocomplete","stable"),e(m,"oninput","this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');"),e(m,"class","svelte-x4wh8e"),e($,"class","svelte-x4wh8e"),e(Q,"for","field-percentage"),e(Q,"class","svelte-x4wh8e"),e(y,"type","range"),e(y,"min","0"),e(y,"max","100"),e(y,"name","percentage"),e(y,"id","field-percentage"),y.required="",e(y,"aria-required","true"),e(y,"autocapitalize","off"),e(y,"class"," svelte-x4wh8e"),e(G,"class","svelte-x4wh8e"),e(V,"class","svelte-x4wh8e"),e(T,"class","svelte-x4wh8e"),e(L,"name","calculator"),e(L,"class","svelte-x4wh8e"),e(N,"class","wrapper svelte-x4wh8e"),e(K,"class","svelte-x4wh8e"),e(W,"class","svelte-x4wh8e"),e(pe,"class","svelte-x4wh8e"),e(X,"class","svelte-x4wh8e"),e(b,"class","svelte-x4wh8e"),e(Z,"class","explanation-text svelte-x4wh8e"),e(z,"class","circle svelte-x4wh8e"),e(z,"r","10"),e(z,"cx","10"),e(z,"cy","10"),e(z,"fill","var(--primary-300)"),e(x,"r","5"),e(x,"cx","10"),e(x,"cy","10"),e(x,"fill","transparent"),e(x,"stroke","var(--secondary-300)"),e(x,"stroke-width","10"),e(x,"stroke-dasharray",me="calc("+Math.round(s[4])+" * 30.65 / 100) 31.4159"),e(x,"transform","rotate(-90) translate(-20)"),e(x,"class","svelte-x4wh8e"),e(I,"x","50%"),e(I,"y","50%"),e(I,"dominant-baseline","middle"),e(I,"text-anchor","middle"),e(I,"font-size","3"),e(I,"class","svelte-x4wh8e"),e(q,"height","20"),e(q,"width","20"),e(q,"viewBox","0 0 20 20"),e(q,"class","svelte-x4wh8e"),e(ee,"class","explanation-pie svelte-x4wh8e"),e(j,"class","wrapper svelte-x4wh8e"),e(be,"class","svelte-x4wh8e"),e(C,"target","_blank"),e(C,"rel","noopener"),e(C,"href","https://www.bogleheads.org/wiki/Bogleheads\xAE_investment_philosophy"),e(C,"class","svelte-x4wh8e"),e(H,"class","svelte-x4wh8e"),e(te,"class","svelte-x4wh8e"),e(le,"class","svelte-x4wh8e"),Bt(P,"margin-top","var(--spacing-unit)"),e(P,"class","disclaimer svelte-x4wh8e"),e(E,"class","grid svelte-x4wh8e"),e(r,"class","container svelte-x4wh8e")},m(i,v){St(a,i,v),M(i,t,v),M(i,r,v),l(r,o),l(o,p),l(r,k),l(r,E),l(E,N),l(N,L),l(L,D),l(L,ne),l(L,T),l(T,U),l(U,Y),l(Y,Be),l(U,Se),l(U,_),oe(_,s[0]),l(T,Te),l(T,$),l($,J),l(J,Ve),l($,De),l($,m),oe(m,s[1]),l(T,ze),l(T,V),l(V,Q),l(Q,Ce),l(V,Re),l(V,y),oe(y,s[2]),l(V,Ue),l(V,G),l(G,de),l(G,$e),l(E,je),l(E,j),l(j,Z),l(Z,b),l(b,He),l(b,K),B.m(K,null),l(b,Oe),l(b,W),l(W,Fe),l(W,he),l(b,Ye),l(b,pe),l(b,Je),R.m(b,null),l(b,ve),l(b,X),l(X,Qe),l(X,_e),l(b,Ge),l(j,Ke),l(j,ee),l(ee,q),l(q,z),l(q,x),l(q,I),S.m(I,null),l(E,We),l(E,P),l(P,be),l(P,Xe),l(P,H),l(H,Ze),l(H,C),l(C,et),l(H,tt),l(P,lt),l(P,te),l(te,at),l(P,rt),l(P,le),l(le,st),O=!0,ot||(ut=[Le(_,"input",s[6]),Le(m,"input",s[7]),Le(y,"change",s[8]),Le(y,"input",s[8])],ot=!0)},p(i,[v]){v&1&&ce(_.value)!==i[0]&&oe(_,i[0]),v&2&&ce(m.value)!==i[1]&&oe(m,i[1]),v&4&&oe(y,i[2]),(!O||v&4)&&ue(de,i[2]),ye===(ye=ft(i))&&B?B.p(i,v):(B.d(1),B=ye(i),B&&(B.c(),B.m(K,null))),(!O||v&8)&&ue(he,i[3]),we!==(we=dt(i))&&(R.d(1),R=we(i),R&&(R.c(),R.m(b,ve))),(!O||v&32)&&ie!==(ie=Math.abs(Math.round(i[5]))+"")&&ue(_e,ie),(!O||v&16&&me!==(me="calc("+Math.round(i[4])+" * 30.65 / 100) 31.4159"))&&e(x,"stroke-dasharray",me),ge===(ge=ht(i))&&S?S.p(i,v):(S.d(1),S=ge(i),S&&(S.c(),S.m(I,null)))},i(i){O||(Tt(a.$$.fragment,i),O=!0)},o(i){Vt(a.$$.fragment,i),O=!1},d(i){Dt(a,i),i&&n(t),i&&n(r),B.d(),R.d(),S.d(),ot=!1,zt(ut)}}}let Gt="portfolio rebalancing calculator",Kt="An interactive calculator meant to rebalance an investing portfolio consisting of volatile assets such as stocks, and stable assets such as bonds.";function Wt(s,a,t){let r,o,p,k=null,E=null,N=0;function L(){k=ce(this.value),t(0,k)}function D(){E=ce(this.value),t(1,E)}function ne(){N=ce(this.value),t(2,N)}return s.$$.update=()=>{s.$$.dirty&3&&t(3,r=k+E),s.$$.dirty&9&&t(4,o=k/r*100),s.$$.dirty&16,s.$$.dirty&13&&t(5,p=k-N/100*r),s.$$.dirty&1,s.$$.dirty&2},[k,E,N,r,o,p,L,D,ne]}class el extends At{constructor(a){super();Mt(this,a,Wt,Qt,Nt,{})}}export{el as default};