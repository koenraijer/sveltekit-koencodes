import{_ as he}from"../chunks/preload-helper-ec9aa979.js";import{S as Le,i as Me,s as Re,j as ce,k as I,e as c,t as H,m as ne,n as w,c as n,a as h,d as o,g as T,E as Ce,b as r,o as de,f as G,F as l,h as Ee,x as K,u as Q,v as fe,L as ye,w as ct,M as xe,r as nt}from"../chunks/vendor-4f02d0e1.js";import{S as dt}from"../chunks/Seo-ea6672b3.js";import{T as ft}from"../chunks/TagCloud-df179f89.js";import{V as et}from"../chunks/Variables-490c0fbc.js";function ht(f){let e,a,t,u,m,b,v,D,k,$,y,j,A,V,_;return e=new et({}),{c(){ce(e.$$.fragment),a=I(),t=c("a"),u=c("div"),m=c("div"),b=c("div"),v=c("img"),k=I(),$=c("div"),y=c("h3"),j=H(f[0]),A=I(),V=c("p"),this.h()},l(d){ne(e.$$.fragment,d),a=w(d),t=n(d,"A",{class:!0,target:!0,rel:!0,href:!0});var E=h(t);u=n(E,"DIV",{class:!0});var q=h(u);m=n(q,"DIV",{class:!0});var S=h(m);b=n(S,"DIV",{class:!0});var C=h(b);v=n(C,"IMG",{src:!0,class:!0}),C.forEach(o),S.forEach(o),k=w(q),$=n(q,"DIV",{class:!0});var N=h($);y=n(N,"H3",{class:!0});var L=h(y);j=T(L,f[0]),L.forEach(o),A=w(N),V=n(N,"P",{class:!0});var O=h(V);O.forEach(o),N.forEach(o),q.forEach(o),E.forEach(o),this.h()},h(){Ce(v.src,D=f[3])||r(v,"src",D),r(v,"class","svelte-1qj9iy"),r(b,"class","svelte-1qj9iy"),r(m,"class","svelte-1qj9iy"),r(y,"class","svelte-1qj9iy"),r(V,"class","svelte-1qj9iy"),r($,"class","svelte-1qj9iy"),r(u,"class","project svelte-1qj9iy"),r(t,"class","divlink svelte-1qj9iy"),r(t,"target","_blank"),r(t,"rel","noopener"),r(t,"href",f[1])},m(d,E){de(e,d,E),G(d,a,E),G(d,t,E),l(t,u),l(u,m),l(m,b),l(b,v),l(u,k),l(u,$),l($,y),l(y,j),l($,A),l($,V),V.innerHTML=f[2],_=!0},p(d,[E]){(!_||E&8&&!Ce(v.src,D=d[3]))&&r(v,"src",D),(!_||E&1)&&Ee(j,d[0]),(!_||E&4)&&(V.innerHTML=d[2]),(!_||E&2)&&r(t,"href",d[1])},i(d){_||(K(e.$$.fragment,d),_=!0)},o(d){Q(e.$$.fragment,d),_=!1},d(d){fe(e,d),d&&o(a),d&&o(t)}}}function vt(f,e,a){let{title:t="a project"}=e,{src:u="/"}=e,{description:m="a project about something."}=e,{img:b="&#128161"}=e;return f.$$set=v=>{"title"in v&&a(0,t=v.title),"src"in v&&a(1,u=v.src),"description"in v&&a(2,m=v.description),"img"in v&&a(3,b=v.img)},[t,u,m,b]}class ut extends Le{constructor(e){super();Me(this,e,vt,ht,Re,{title:0,src:1,description:2,img:3})}}function mt(f){let e,a;return{c(){e=c("img"),this.h()},l(t){e=n(t,"IMG",{src:!0,class:!0}),this.h()},h(){Ce(e.src,a="artError-3.svg")||r(e,"src",a),r(e,"class","svelte-whc5nk")},m(t,u){G(t,e,u)},p:ye,i:ye,o:ye,d(t){t&&o(e)}}}class _t extends Le{constructor(e){super();Me(this,e,null,mt,Re,{})}}function tt(f,e,a){const t=f.slice();return t[3]=e[a].title,t[4]=e[a].src,t[5]=e[a].description,t[6]=e[a].img,t}function st(f,e,a){const t=f.slice();return t[9]=e[a].path,t[3]=e[a].metadata.title,t[10]=e[a].metadata.snippet,t[11]=e[a].metadata.date,t}function lt(f){let e,a,t,u=f[3]+"",m,b,v,D=new Date(f[11]).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})+"",k,$,y,j=f[10]+"",A,V;return{c(){e=c("a"),a=c("div"),t=c("h3"),m=H(u),b=I(),v=c("span"),k=H(D),$=I(),y=c("p"),A=H(j),this.h()},l(_){e=n(_,"A",{class:!0,href:!0});var d=h(e);a=n(d,"DIV",{class:!0});var E=h(a);t=n(E,"H3",{class:!0});var q=h(t);m=T(q,u),q.forEach(o),b=w(E),v=n(E,"SPAN",{class:!0});var S=h(v);k=T(S,D),S.forEach(o),$=w(E),y=n(E,"P",{class:!0});var C=h(y);A=T(C,j),C.forEach(o),E.forEach(o),d.forEach(o),this.h()},h(){r(t,"class","svelte-1c5j14b"),r(v,"class","date svelte-1c5j14b"),r(y,"class","svelte-1c5j14b"),r(a,"class","blogPost svelte-1c5j14b"),r(e,"class","divlink svelte-1c5j14b"),r(e,"href",V=`${f[9].replace(".md","")}`)},m(_,d){G(_,e,d),l(e,a),l(a,t),l(t,m),l(a,b),l(a,v),l(v,k),l(a,$),l(a,y),l(y,A)},p(_,d){d&1&&u!==(u=_[3]+"")&&Ee(m,u),d&1&&D!==(D=new Date(_[11]).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})+"")&&Ee(k,D),d&1&&j!==(j=_[10]+"")&&Ee(A,j),d&1&&V!==(V=`${_[9].replace(".md","")}`)&&r(e,"href",V)},d(_){_&&o(e)}}}function rt(f){let e,a;return e=new ut({props:{title:f[3],src:f[4],description:f[5],img:f[6]}}),{c(){ce(e.$$.fragment)},l(t){ne(e.$$.fragment,t)},m(t,u){de(e,t,u),a=!0},p:ye,i(t){a||(K(e.$$.fragment,t),a=!0)},o(t){Q(e.$$.fragment,t),a=!1},d(t){fe(e,t)}}}function gt(f){let e,a,t,u,m,b,v,D,k,$,y,j,A,V,_,d,E,q,S,C,N,L,O,Ie,we,W,De,ve,M,F,J,X,ke,$e,B,ue,Y,re,ae,Ve,Pe,U,Z,Ae,He,x,Te,ee,Se,qe,te,me;e=new et({}),t=new dt({props:{pageTitle:pt,metaDescription:bt}}),k=new _t({});let oe=f[0].slice(0,4),P=[];for(let s=0;s<oe.length;s+=1)P[s]=lt(st(f,oe,s));x=new ft({});let se=f[1],g=[];for(let s=0;s<se.length;s+=1)g[s]=rt(tt(f,se,s));const it=s=>Q(g[s],1,1,()=>{g[s]=null});return{c(){ce(e.$$.fragment),a=I(),ce(t.$$.fragment),u=I(),m=c("div"),b=c("div"),v=c("div"),D=c("div"),ce(k.$$.fragment),$=I(),y=c("div"),j=c("div"),A=c("h2"),V=H("Hi, I'm Koen!"),_=I(),d=c("h1"),E=H("I do some programming in my off-time."),q=I(),S=c("h3"),C=H("I write about web development as if you knew nothing, because neither do I!"),N=I(),L=c("nav"),O=c("a"),Ie=H("Blog"),we=I(),W=c("a"),De=H("Projects"),ve=I(),M=c("div"),F=c("div"),J=c("div"),X=c("h1"),ke=H("Recently published"),$e=I(),B=c("div");for(let s=0;s<P.length;s+=1)P[s].c();ue=I(),Y=c("a"),re=c("div"),ae=c("h4"),Ve=H("All posts \u2794"),Pe=I(),U=c("div"),Z=c("h2"),Ae=H("Explore topics"),He=I(),ce(x.$$.fragment),Te=I(),ee=c("h1"),Se=H("Projects"),qe=I(),te=c("div");for(let s=0;s<g.length;s+=1)g[s].c();this.h()},l(s){ne(e.$$.fragment,s),a=w(s),ne(t.$$.fragment,s),u=w(s),m=n(s,"DIV",{class:!0});var p=h(m);b=n(p,"DIV",{class:!0});var i=h(b);v=n(i,"DIV",{class:!0});var R=h(v);D=n(R,"DIV",{class:!0});var Oe=h(D);ne(k.$$.fragment,Oe),Oe.forEach(o),$=w(R),y=n(R,"DIV",{class:!0});var Be=h(y);j=n(Be,"DIV",{});var z=h(j);A=n(z,"H2",{class:!0});var Ge=h(A);V=T(Ge,"Hi, I'm Koen!"),Ge.forEach(o),_=w(z),d=n(z,"H1",{class:!0});var Ke=h(d);E=T(Ke,"I do some programming in my off-time."),Ke.forEach(o),q=w(z),S=n(z,"H3",{class:!0});var Ne=h(S);C=T(Ne,"I write about web development as if you knew nothing, because neither do I!"),Ne.forEach(o),N=w(z),L=n(z,"NAV",{class:!0});var _e=h(L);O=n(_e,"A",{class:!0,href:!0});var Fe=h(O);Ie=T(Fe,"Blog"),Fe.forEach(o),we=w(_e),W=n(_e,"A",{class:!0,href:!0});var Je=h(W);De=T(Je,"Projects"),Je.forEach(o),_e.forEach(o),z.forEach(o),Be.forEach(o),R.forEach(o),i.forEach(o),p.forEach(o),ve=w(s),M=n(s,"DIV",{class:!0});var ie=h(M);F=n(ie,"DIV",{class:!0});var ge=h(F);J=n(ge,"DIV",{class:!0});var pe=h(J);X=n(pe,"H1",{id:!0,class:!0});var Ue=h(X);ke=T(Ue,"Recently published"),Ue.forEach(o),$e=w(pe),B=n(pe,"DIV",{class:!0});var be=h(B);for(let le=0;le<P.length;le+=1)P[le].l(be);ue=w(be),Y=n(be,"A",{href:!0,class:!0});var ze=h(Y);re=n(ze,"DIV",{class:!0});var Qe=h(re);ae=n(Qe,"H4",{class:!0});var We=h(ae);Ve=T(We,"All posts \u2794"),We.forEach(o),Qe.forEach(o),ze.forEach(o),be.forEach(o),pe.forEach(o),Pe=w(ge),U=n(ge,"DIV",{class:!0});var je=h(U);Z=n(je,"H2",{id:!0,class:!0});var Xe=h(Z);Ae=T(Xe,"Explore topics"),Xe.forEach(o),He=w(je),ne(x.$$.fragment,je),je.forEach(o),ge.forEach(o),Te=w(ie),ee=n(ie,"H1",{id:!0,class:!0});var Ye=h(ee);Se=T(Ye,"Projects"),Ye.forEach(o),qe=w(ie),te=n(ie,"DIV",{class:!0});var Ze=h(te);for(let le=0;le<g.length;le+=1)g[le].l(Ze);Ze.forEach(o),ie.forEach(o),this.h()},h(){r(D,"class","grid1-art svelte-1c5j14b"),r(A,"class","svelte-1c5j14b"),r(d,"class","svelte-1c5j14b"),r(S,"class","svelte-1c5j14b"),r(O,"class","button blogbutton svelte-1c5j14b"),r(O,"href","#blogposts"),r(W,"class","button projectsbutton svelte-1c5j14b"),r(W,"href","#projects"),r(L,"class","svelte-1c5j14b"),r(y,"class","grid1-hero svelte-1c5j14b"),r(v,"class","grid1 svelte-1c5j14b"),r(b,"class","container svelte-1c5j14b"),r(m,"class","hero-background svelte-1c5j14b"),r(X,"id","blogposts"),r(X,"class","header svelte-1c5j14b"),r(ae,"class","svelte-1c5j14b"),r(re,"class","blogPost allPostButton svelte-1c5j14b"),r(Y,"href","/blog"),r(Y,"class","divlink svelte-1c5j14b"),r(B,"class","blog-parent svelte-1c5j14b"),r(J,"class","grid2-blog"),r(Z,"id","tags"),r(Z,"class","header svelte-1c5j14b"),r(U,"class","grid2-tags svelte-1c5j14b"),r(F,"class","grid2 svelte-1c5j14b"),r(ee,"id","projects"),r(ee,"class","header svelte-1c5j14b"),r(te,"class","grid3 svelte-1c5j14b"),r(M,"class","container svelte-1c5j14b")},m(s,p){de(e,s,p),G(s,a,p),de(t,s,p),G(s,u,p),G(s,m,p),l(m,b),l(b,v),l(v,D),de(k,D,null),l(v,$),l(v,y),l(y,j),l(j,A),l(A,V),l(j,_),l(j,d),l(d,E),l(j,q),l(j,S),l(S,C),l(j,N),l(j,L),l(L,O),l(O,Ie),l(L,we),l(L,W),l(W,De),G(s,ve,p),G(s,M,p),l(M,F),l(F,J),l(J,X),l(X,ke),l(J,$e),l(J,B);for(let i=0;i<P.length;i+=1)P[i].m(B,null);l(B,ue),l(B,Y),l(Y,re),l(re,ae),l(ae,Ve),l(F,Pe),l(F,U),l(U,Z),l(Z,Ae),l(U,He),de(x,U,null),l(M,Te),l(M,ee),l(ee,Se),l(M,qe),l(M,te);for(let i=0;i<g.length;i+=1)g[i].m(te,null);me=!0},p(s,[p]){if(p&1){oe=s[0].slice(0,4);let i;for(i=0;i<oe.length;i+=1){const R=st(s,oe,i);P[i]?P[i].p(R,p):(P[i]=lt(R),P[i].c(),P[i].m(B,ue))}for(;i<P.length;i+=1)P[i].d(1);P.length=oe.length}if(p&2){se=s[1];let i;for(i=0;i<se.length;i+=1){const R=tt(s,se,i);g[i]?(g[i].p(R,p),K(g[i],1)):(g[i]=rt(R),g[i].c(),K(g[i],1),g[i].m(te,null))}for(nt(),i=se.length;i<g.length;i+=1)it(i);ct()}},i(s){if(!me){K(e.$$.fragment,s),K(t.$$.fragment,s),K(k.$$.fragment,s),K(x.$$.fragment,s);for(let p=0;p<se.length;p+=1)K(g[p]);me=!0}},o(s){Q(e.$$.fragment,s),Q(t.$$.fragment,s),Q(k.$$.fragment,s),Q(x.$$.fragment,s),g=g.filter(Boolean);for(let p=0;p<g.length;p+=1)Q(g[p]);me=!1},d(s){fe(e,s),s&&o(a),fe(t,s),s&&o(u),s&&o(m),fe(k),s&&o(ve),s&&o(M),xe(P,s),fe(x),xe(g,s)}}}const at={"./blog/fifthpost.md":()=>he(()=>import("./blog/fifthpost.md-d6481eaa.js"),["pages/blog/fifthpost.md-d6481eaa.js","chunks/vendor-4f02d0e1.js","chunks/blog-1ebfbb25.js","assets/blog-03e48a3f.css","chunks/Variables-490c0fbc.js","assets/Variables-da71c3e7.css","chunks/Seo-ea6672b3.js","chunks/Date-5bcd979e.js"]),"./blog/firstpost.md":()=>he(()=>import("./blog/firstpost.md-644493f1.js"),["pages/blog/firstpost.md-644493f1.js","chunks/vendor-4f02d0e1.js","chunks/blog-1ebfbb25.js","assets/blog-03e48a3f.css","chunks/Variables-490c0fbc.js","assets/Variables-da71c3e7.css","chunks/Seo-ea6672b3.js","chunks/Date-5bcd979e.js"]),"./blog/fourthpost.md":()=>he(()=>import("./blog/fourthpost.md-a2f72c3d.js"),["pages/blog/fourthpost.md-a2f72c3d.js","chunks/vendor-4f02d0e1.js","chunks/blog-1ebfbb25.js","assets/blog-03e48a3f.css","chunks/Variables-490c0fbc.js","assets/Variables-da71c3e7.css","chunks/Seo-ea6672b3.js","chunks/Date-5bcd979e.js"]),"./blog/secondpost.md":()=>he(()=>import("./blog/secondpost.md-3c543b44.js"),["pages/blog/secondpost.md-3c543b44.js","chunks/vendor-4f02d0e1.js","chunks/blog-1ebfbb25.js","assets/blog-03e48a3f.css","chunks/Variables-490c0fbc.js","assets/Variables-da71c3e7.css","chunks/Seo-ea6672b3.js","chunks/Date-5bcd979e.js"]),"./blog/thirdpost.md":()=>he(()=>import("./blog/thirdpost.md-37a1812a.js"),["pages/blog/thirdpost.md-37a1812a.js","chunks/vendor-4f02d0e1.js","chunks/blog-1ebfbb25.js","assets/blog-03e48a3f.css","chunks/Variables-490c0fbc.js","assets/Variables-da71c3e7.css","chunks/Seo-ea6672b3.js","chunks/Date-5bcd979e.js"])};let ot=[];for(let f in at)ot.push(at[f]().then(({metadata:e})=>({path:f,metadata:e})));const kt=async()=>({props:{posts:await Promise.all(ot)}});let pt="home",bt="The homepage: a collection of projects and blog posts.";function jt(f,e,a){let{posts:t}=e;t.slice().sort((m,b)=>new Date(b.metadata.date)-new Date(m.metadata.date));let u=[{title:"My charity website",src:"https://www.vriendenvoorkika.nl/",description:'Climbing a mountain for charity. Made a website for it using Jekyll and Netlify. Consider <a href="https://www.actievoorkika.nl/sanne-koen-thomas-en-romy">donating</a>!',img:"illustration-crosses.svg"},{title:"This blog",src:"/",description:"Maxed out Jekyll, and felt overwhelmed by React. In comes SvelteKit!",img:"illustration-3scribbles.svg"},{title:"An investing calculator",src:"/calculator",description:"Making this in SvelteKit was a breeze. My Python version stranded due the price of Flask hosting.",img:"illustration-shapes.svg"},{title:"Interactive diagnostic flowchart",src:"/flowcharts/schildklier",description:"Quick and dirty way to diagnose thyroid problems. Adapted from a flowchart by the NHG (Dutch GP association).",img:"illustration-0arrow.svg"}];return f.$$set=m=>{"posts"in m&&a(0,t=m.posts)},[t,u]}class $t extends Le{constructor(e){super();Me(this,e,jt,gt,Re,{posts:0})}}export{$t as default,kt as load};