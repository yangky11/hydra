(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{154:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"rightToc",(function(){return i})),t.d(a,"metadata",(function(){return p})),t.d(a,"default",(function(){return l}));var n=t(1),r=t(9),o=(t(0),t(160)),c={id:"search_path",title:"Config search path",sidebar_label:"Config search path"},i=[],p={id:"advanced/search_path",title:"Config search path",description:"Hydra uses a search path approach to find configuration files as it composes the configuration object.",source:"@site/docs/advanced/search_path.md",permalink:"/docs/advanced/search_path",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/docs/advanced/search_path.md",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1570385071,sidebar_label:"Config search path",sidebar:"Docs",previous:{title:"Application packaging",permalink:"/docs/advanced/app_packaging"},next:{title:"Hydra plugins",permalink:"/docs/advanced/plugins"}},s={rightToc:i,metadata:p},d="wrapper";function l(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hydra uses a search path approach to find configuration files as it composes the configuration object.\n",Object(o.b)("inlineCode",{parentName:"p"},"SearchPathPlugin")," can manipulate the search path."),Object(o.b)("p",null,"You can inspect the search path and the configurations loaded by Hydra by turning on verbose logging for the ",Object(o.b)("inlineCode",{parentName:"p"},"hydra")," logger:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py hydra.verbose=hydra\n")))}l.isMDXComponent=!0},160:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return l}));var n=t(0),r=t.n(n),o=r.a.createContext({}),c=function(e){var a=r.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):Object.assign({},a,e)),t},i=function(e){var a=c(e.components);return r.a.createElement(o.Provider,{value:a},e.children)};var p="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===a.indexOf(n)&&(t[n]=e[n]);return t}(e,["components","mdxType","originalType","parentName"]),d=c(t),l=n,u=d[i+"."+l]||d[l]||s[l]||o;return t?r.a.createElement(u,Object.assign({},{ref:a},p,{components:t})):r.a.createElement(u,Object.assign({},{ref:a},p))}));function l(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);