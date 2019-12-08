(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{144:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"rightToc",(function(){return c})),a.d(n,"metadata",(function(){return p})),a.d(n,"default",(function(){return m}));var t=a(1),r=a(9),o=(a(0),a(160)),i={id:"compose_api",title:"Compose API",sidebar_label:"Experimental compose API"},c=[{value:"<code>hydra.experimental.compose()</code> example",id:"hydraexperimentalcompose-example",children:[]},{value:"API Documentation",id:"api-documentation",children:[]}],p={id:"advanced/compose_api",title:"Compose API",description:"Hydra 0.11.0 introduces a new experimental API for composing configuration via the `hydra.experimental.compose()` function.",source:"@site/docs/advanced/hydra_compose.md",permalink:"/docs/advanced/compose_api",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/docs/advanced/hydra_compose.md",lastUpdatedBy:"Yann Dubois",lastUpdatedAt:1574465796,sidebar_label:"Experimental compose API",sidebar:"Docs",previous:{title:"Hydra plugins",permalink:"/docs/advanced/plugins"},next:{title:"Ray example",permalink:"/docs/advanced/ray_example"}},d={rightToc:c,metadata:p},l="wrapper";function m(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(l,Object(t.a)({},d,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hydra 0.11.0 introduces a new experimental API for composing configuration via the ",Object(o.b)("inlineCode",{parentName:"p"},"hydra.experimental.compose()")," function.\nPrior to calling compose(), you have to initialize Hydra: This can be done by using the standard ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main()")," or by calling ",Object(o.b)("inlineCode",{parentName:"p"},"hydra.experimental.initialize()"),"."),Object(o.b)("h3",{id:"hydraexperimentalcompose-example"},Object(o.b)("inlineCode",{parentName:"h3"},"hydra.experimental.compose()")," example"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),'from hydra.experimental import compose, initialize\n\n\nif __name__ == "__main__":\n    initialize(\n        config_dir="conf", strict=True,\n    )\n\n    cfg = compose("config.yaml", overrides=["db=mysql", "db.user=me"])\n    print(cfg.pretty())\n')),Object(o.b)("h3",{id:"api-documentation"},"API Documentation"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),'def compose(config_file=None, overrides=[], strict=None):\n    """\n    :param config_file: optional config file to load\n    :param overrides: list of overrides for config file\n    :param strict: optionally override the default strict mode\n    :return: the composed config\n    """\n\n\ndef initialize(config_dir=None, strict=None, caller_stack_depth=1):\n    """\n    Initializes the Hydra sub system\n\n    :param config_dir: config directory relative to the calling script\n    :param strict: Default value for strict mode\n    :param caller_stack_depth:\n    :return:\n    """\n\n\n')))}m.isMDXComponent=!0},160:function(e,n,a){"use strict";a.d(n,"a",(function(){return c})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t),o=r.a.createContext({}),i=function(e){var n=r.a.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):Object.assign({},n,e)),a},c=function(e){var n=i(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},l=Object(t.forwardRef)((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,p=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(a[t]=e[t]);return a}(e,["components","mdxType","originalType","parentName"]),l=i(a),m=t,s=l[c+"."+m]||l[m]||d[m]||o;return a?r.a.createElement(s,Object.assign({},{ref:n},p,{components:a})):r.a.createElement(s,Object.assign({},{ref:n},p))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=l;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[p]="string"==typeof e?e:t,i[1]=c;for(var m=2;m<o;m++)i[m]=a[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"}}]);