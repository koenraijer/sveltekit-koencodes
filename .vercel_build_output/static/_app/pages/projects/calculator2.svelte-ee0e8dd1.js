import{S as ze,i as Ge,s as Ke,e as o,t as O,k as y,c as u,a as i,g as B,d as c,n as A,b as t,f as Ae,F as e,Q as te,R as le,h as De,T as ce,U as qe,j as Me,m as We,o as Xe,x as Ze,u as xe,L as $e,v as et,J as se}from"../../chunks/vendor-76a697cc.js";import{C as tt}from"../../chunks/Chart-c7e5f752.js";function Je(l,a,s){const f=l.slice();return f[14]=a[s],f[15]=a,f[16]=s,f}function Qe(l){let a,s,f=l[1][l[16]]+"",v,D,p,_=l[0][l[16]]+"",C,n,I,h,L,N,V;function b(){return l[11](l[16])}function Y(){l[12].call(h,l[16])}return{c(){a=o("tr"),s=o("td"),v=O(f),D=y(),p=o("td"),C=O(_),n=y(),I=o("td"),h=o("input"),L=y(),this.h()},l(d){a=u(d,"TR",{class:!0});var m=i(a);s=u(m,"TD",{class:!0});var K=i(s);v=B(K,f),K.forEach(c),D=A(m),p=u(m,"TD",{class:!0});var M=i(p);C=B(M,_),M.forEach(c),n=A(m),I=u(m,"TD",{class:!0});var E=i(I);h=u(E,"INPUT",{id:!0,oninput:!0,type:!0,min:!0,max:!0,class:!0}),E.forEach(c),L=A(m),m.forEach(c),this.h()},h(){t(s,"class","svelte-1mdk0x8"),t(p,"class","svelte-1mdk0x8"),t(h,"id","number1"),t(h,"oninput","this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');"),t(h,"type","number"),t(h,"min","0"),t(h,"max","100"),t(h,"class","svelte-1mdk0x8"),t(I,"class","svelte-1mdk0x8"),t(a,"class","svelte-1mdk0x8")},m(d,m){Ae(d,a,m),e(a,s),e(s,v),e(a,D),e(a,p),e(p,C),e(a,n),e(a,I),e(I,h),te(h,l[5][l[16]]),e(a,L),N||(V=[le(h,"change",b),le(h,"input",Y)],N=!0)},p(d,m){l=d,m&2&&f!==(f=l[1][l[16]]+"")&&De(v,f),m&1&&_!==(_=l[0][l[16]]+"")&&De(C,_),m&32&&ce(h.value)!==l[5][l[16]]&&te(h,l[5][l[16]])},d(d){d&&c(a),N=!1,qe(V)}}}function lt(l){let a;return{c(){a=O(l[4])},l(s){a=B(s,l[4])},m(s,f){Ae(s,a,f)},p(s,f){f&16&&De(a,s[4])},d(s){s&&c(a)}}}function st(l){return{c:se,l:se,m:se,p:se,d:se}}function at(l){let a,s,f,v,D,p,_,C,n,I,h,L,N,V,b,Y,d,m,K,M,E,W,X,de,ie,Z,F,q,fe,he,J,me,pe,Q,ve,_e,z,ke,j,w,be,Ee,G,ge,x,R,ae,Te,Le,$=l[0],k=[];for(let r=0;r<$.length;r+=1)k[r]=Qe(Je(l,$,r));function Ie(r,g){return typeof r[4]=="undefined"||r[4]===null?st:lt}let re=Ie(l),H=re(l);return R=new tt({props:{data:l[0],labels:l[1],colors:l[6]}}),{c(){a=o("div"),s=o("div"),f=o("div"),v=o("ol"),D=o("li"),p=o("label"),_=O("Asset"),C=y(),n=o("input"),I=y(),h=o("li"),L=o("label"),N=O("Amount"),V=y(),b=o("input"),Y=y(),d=o("li"),m=o("button"),K=O("Add fund"),M=y(),E=o("table"),W=o("caption"),X=o("h3"),de=O("List of assets"),ie=y(),Z=o("thead"),F=o("tr"),q=o("th"),fe=O("Asset"),he=y(),J=o("th"),me=O("Amount"),pe=y(),Q=o("th"),ve=O("Desired %"),_e=y(),z=o("tbody");for(let r=0;r<k.length;r+=1)k[r].c();ke=y(),j=o("tfoot"),w=o("th"),be=O("Total:"),Ee=y(),G=o("td"),H.c(),ge=y(),x=o("div"),Me(R.$$.fragment),this.h()},l(r){a=u(r,"DIV",{class:!0});var g=i(a);s=u(g,"DIV",{class:!0});var P=i(s);f=u(P,"DIV",{class:!0});var T=i(f);v=u(T,"OL",{class:!0});var U=i(v);D=u(U,"LI",{class:!0});var ne=i(D);p=u(ne,"LABEL",{for:!0,class:!0});var Pe=i(p);_=B(Pe,"Asset"),Pe.forEach(c),C=A(ne),n=u(ne,"INPUT",{id:!0,type:!0,class:!0}),ne.forEach(c),I=A(U),h=u(U,"LI",{class:!0});var oe=i(h);L=u(oe,"LABEL",{for:!0,class:!0});var Ce=i(L);N=B(Ce,"Amount"),Ce.forEach(c),V=A(oe),b=u(oe,"INPUT",{id:!0,oninput:!0,type:!0,class:!0}),oe.forEach(c),Y=A(U),d=u(U,"LI",{class:!0});var He=i(d);m=u(He,"BUTTON",{id:!0,class:!0});var Oe=i(m);K=B(Oe,"Add fund"),Oe.forEach(c),He.forEach(c),U.forEach(c),T.forEach(c),M=A(P),E=u(P,"TABLE",{class:!0});var S=i(E);W=u(S,"CAPTION",{class:!0});var Be=i(W);X=u(Be,"H3",{class:!0});var Fe=i(X);de=B(Fe,"List of assets"),Fe.forEach(c),Be.forEach(c),ie=A(S),Z=u(S,"THEAD",{class:!0});var Ne=i(Z);F=u(Ne,"TR",{class:!0});var ee=i(F);q=u(ee,"TH",{scope:!0,class:!0});var Ue=i(q);fe=B(Ue,"Asset"),Ue.forEach(c),he=A(ee),J=u(ee,"TH",{scope:!0,class:!0});var Ve=i(J);me=B(Ve,"Amount"),Ve.forEach(c),pe=A(ee),Q=u(ee,"TH",{scope:!0,class:!0});var je=i(Q);ve=B(je,"Desired %"),je.forEach(c),ee.forEach(c),Ne.forEach(c),_e=A(S),z=u(S,"TBODY",{class:!0});var we=i(z);for(let ye=0;ye<k.length;ye+=1)k[ye].l(we);we.forEach(c),ke=A(S),j=u(S,"TFOOT",{class:!0});var ue=i(j);w=u(ue,"TH",{scope:!0,colspan:!0,class:!0});var Re=i(w);be=B(Re,"Total:"),Re.forEach(c),Ee=A(ue),G=u(ue,"TD",{class:!0});var Se=i(G);H.l(Se),Se.forEach(c),ue.forEach(c),S.forEach(c),P.forEach(c),ge=A(g),x=u(g,"DIV",{class:!0});var Ye=i(x);We(R.$$.fragment,Ye),Ye.forEach(c),g.forEach(c),this.h()},h(){t(p,"for","name"),t(p,"class","svelte-1mdk0x8"),t(n,"id","name"),t(n,"type","text"),t(n,"class","svelte-1mdk0x8"),t(D,"class","svelte-1mdk0x8"),t(L,"for","number"),t(L,"class","svelte-1mdk0x8"),t(b,"id","number"),t(b,"oninput","this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');"),t(b,"type","number"),t(b,"class","svelte-1mdk0x8"),t(h,"class","svelte-1mdk0x8"),t(m,"id","submit"),t(m,"class","svelte-1mdk0x8"),t(d,"class","svelte-1mdk0x8"),t(v,"class","svelte-1mdk0x8"),t(f,"class","svelte-1mdk0x8"),t(X,"class","svelte-1mdk0x8"),t(W,"class","svelte-1mdk0x8"),t(q,"scope","col"),t(q,"class","svelte-1mdk0x8"),t(J,"scope","col"),t(J,"class","svelte-1mdk0x8"),t(Q,"scope","col"),t(Q,"class","svelte-1mdk0x8"),t(F,"class","svelte-1mdk0x8"),t(Z,"class","svelte-1mdk0x8"),t(z,"class","svelte-1mdk0x8"),t(w,"scope","row"),t(w,"colspan","1"),t(w,"class","svelte-1mdk0x8"),t(G,"class","svelte-1mdk0x8"),t(j,"class","svelte-1mdk0x8"),t(E,"class","svelte-1mdk0x8"),t(s,"class","svelte-1mdk0x8"),t(x,"class","svelte-1mdk0x8"),t(a,"class","container svelte-1mdk0x8")},m(r,g){Ae(r,a,g),e(a,s),e(s,f),e(f,v),e(v,D),e(D,p),e(p,_),e(D,C),e(D,n),te(n,l[3]),e(v,I),e(v,h),e(h,L),e(L,N),e(h,V),e(h,b),te(b,l[2]),e(v,Y),e(v,d),e(d,m),e(m,K),e(s,M),e(s,E),e(E,W),e(W,X),e(X,de),e(E,ie),e(E,Z),e(Z,F),e(F,q),e(q,fe),e(F,he),e(F,J),e(J,me),e(F,pe),e(F,Q),e(Q,ve),e(E,_e),e(E,z);for(let P=0;P<k.length;P+=1)k[P].m(z,null);e(E,ke),e(E,j),e(j,w),e(w,be),e(j,Ee),e(j,G),H.m(G,null),e(a,ge),e(a,x),Xe(R,x,null),ae=!0,Te||(Le=[le(n,"input",l[9]),le(b,"input",l[10]),le(m,"click",l[7])],Te=!0)},p(r,[g]){if(g&8&&n.value!==r[3]&&te(n,r[3]),g&4&&ce(b.value)!==r[2]&&te(b,r[2]),g&291){$=r[0];let T;for(T=0;T<$.length;T+=1){const U=Je(r,$,T);k[T]?k[T].p(U,g):(k[T]=Qe(U),k[T].c(),k[T].m(z,null))}for(;T<k.length;T+=1)k[T].d(1);k.length=$.length}re===(re=Ie(r))&&H?H.p(r,g):(H.d(1),H=re(r),H&&(H.c(),H.m(G,null)));const P={};g&1&&(P.data=r[0]),g&2&&(P.labels=r[1]),R.$set(P)},i(r){ae||(Ze(R.$$.fragment,r),ae=!0)},o(r){xe(R.$$.fragment,r),ae=!1},d(r){r&&c(a),$e(k,r),H.d(),et(R),Te=!1,qe(Le)}}}function rt(l,a,s){let f=[],v=[],D=["#ff5100","#00bdb0","#993000","#00ffee","#949e9d","#bfd9d7","#abede9","#FFA076","#6f7b7a"],p,_,C,n=[];const I=(d,m)=>d+m;function h(){if(typeof _=="undefined"||_===null){alert("Please provide a name for your asset.");return}if(typeof p=="undefined"||p===null){alert("Please provide an amount for your asset");return}f.push(p),v.push(_),s(0,f),s(1,v),s(4,C=f.reduce(I)),s(2,p=null),s(3,_=null)}function L(d){if(n[d]<0||n[d]>100){s(5,n[d]=0,n),alert("Please enter a value between 1 and 100");return}if(n.reduce(I)>100){alert("You have more than 100%!"),s(5,n[d]=0,n);return}typeof n[d]=="undefined"&&n.push(n[d]),s(5,n),console.log(n)}function N(){_=this.value,s(3,_)}function V(){p=ce(this.value),s(2,p)}const b=d=>L(d);function Y(d){n[d]=ce(this.value),s(5,n)}return[f,v,p,_,C,n,D,h,L,N,V,b,Y]}class ut extends ze{constructor(a){super();Ge(this,a,rt,at,Ke,{})}}export{ut as default};
