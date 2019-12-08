(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{136:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"rightToc",(function(){return c})),a.d(n,"metadata",(function(){return l})),a.d(n,"default",(function(){return u}));var t=a(1),r=a(9),i=(a(0),a(160)),o={id:"plugins",title:"Hydra plugins",sidebar_label:"Hydra plugins"},c=[{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]},{value:"SearchPathPlugin",id:"searchpathplugin",children:[]}],l={id:"advanced/plugins",title:"Hydra plugins",description:"Hydra has a plugin architecture.",source:"@site/docs/advanced/plugins.md",permalink:"/docs/advanced/plugins",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/docs/advanced/plugins.md",lastUpdatedBy:"Lyndon Duong",lastUpdatedAt:1572894073,sidebar_label:"Hydra plugins",sidebar:"Docs",previous:{title:"Config search path",permalink:"/docs/advanced/search_path"},next:{title:"Compose API",permalink:"/docs/advanced/compose_api"}},s={rightToc:c,metadata:l},p="wrapper";function u(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(p,Object(t.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hydra has a plugin architecture.\nPlugin types includes:"),Object(i.b)("h2",{id:"sweeper"},"Sweeper"),Object(i.b)("p",null,"A sweeper is responsible for converting command line arguments list into multiple jobs.\nFor example, the basic built-in sweeper takes arguments like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"batch_size=128 optimizer=nesterov,adam learning_rate=0.01,0.1 \n")),Object(i.b)("p",null,"And creates 4 jobs with the following parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"batch_size=128 optimizer=nesterov learning_rate=0.01\nbatch_size=128 optimizer=nesterov learning_rate=0.1\nbatch_size=128 optimizer=adam learning_rate=0.01\nbatch_size=128 optimizer=adam learning_rate=0.1\n")),Object(i.b)("h2",{id:"launcher"},"Launcher"),Object(i.b)("p",null,"Launchers are responsible for launching a job to a specific environment.\nA Launcher is taking a batch of argument lists like the one above and launches a job for each one.\nThe job uses those arguments to compose its configuration.\nThe basic launcher simply launches the job locally. "),Object(i.b)("h2",{id:"searchpathplugin"},"SearchPathPlugin"),Object(i.b)("p",null,"A config path plugin can manipulate the search path.\nThis can be used to influence the default Hydra configuration to be more appropriate to a specific environment,\nor just add new entries to the search path to make more configurations available to the Hydra app."),Object(i.b)("p",null,"SearchPathPlugin plugins are discovered automatically by Hydra and are being called to manipulate the search path before\nthe configuration is composed."),Object(i.b)("p",null,"Many other plugins also implement SearchPathPlugin to add their configuration to the config search path once they are installed. "))}u.isMDXComponent=!0},160:function(e,n,a){"use strict";a.d(n,"a",(function(){return c})),a.d(n,"b",(function(){return u}));var t=a(0),r=a.n(t),i=r.a.createContext({}),o=function(e){var n=r.a.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):Object.assign({},n,e)),a},c=function(e){var n=o(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(t.forwardRef)((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,l=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(a[t]=e[t]);return a}(e,["components","mdxType","originalType","parentName"]),p=o(a),u=t,d=p[c+"."+u]||p[u]||s[u]||i;return a?r.a.createElement(d,Object.assign({},{ref:n},l,{components:a})):r.a.createElement(d,Object.assign({},{ref:n},l))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[l]="string"==typeof e?e:t,o[1]=c;for(var u=2;u<i;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);