(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{139:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(1),o=r(9),a=(r(0),r(160)),i={id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},c=[{value:"Original working directory",id:"original-working-directory",children:[]}],l={id:"tutorial/working_directory",title:"Output/Working directory",description:"Hydra solves the problem of your needing to specify a new output directory for each run, by ",source:"@site/docs/tutorial/8_working_directory.md",permalink:"/docs/tutorial/working_directory",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/docs/tutorial/8_working_directory.md",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1571868684,sidebar_label:"Output/Working directory",sidebar:"Docs",previous:{title:"Tab completion",permalink:"/docs/tutorial/tab_completion"},next:{title:"Logging",permalink:"/docs/tutorial/logging"}},p={rightToc:c,metadata:l},u="wrapper";function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)(u,Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hydra solves the problem of your needing to specify a new output directory for each run, by\ncreating a directory for each run and executing your code within that directory."),Object(a.b)("p",null,"The working directory is used to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Store the output for the application (For example, a database dump file)"),Object(a.b)("li",{parentName:"ul"},"Store the Hydra output for the run (Configuration, Logs etc)")),Object(a.b)("p",null,"Every time you run the app, a new working directory is automatically created:"),Object(a.b)("p",null,"Python file: ",Object(a.b)("inlineCode",{parentName:"p"},"my_app.py")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'import os\n\n@hydra.main()\ndef my_app(_cfg):\n    print("Working directory : {}".format(os.getcwd()))\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-17\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-19\n')),Object(a.b)("p",null,"Let's take a look at one of those working directories:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ tree outputs/2019-09-25/15-16-17\noutputs/2019-09-25/15-16-17\n\u251c\u2500\u2500 .hydra\n\u2502   \u251c\u2500\u2500 config.yaml\n\u2502   \u251c\u2500\u2500 hydra.yaml\n\u2502   \u2514\u2500\u2500 overrides.yaml\n\u2514\u2500\u2500 my_app.log\n")),Object(a.b)("p",null,"We have the Hydra output directory (",Object(a.b)("inlineCode",{parentName:"p"},".hydra")," by default) and the application log file.\nInside the configuration output directory we have:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"config.yaml"),": A dump of the user specified configuration"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hydra.yaml"),": A dump of the Hydra configuration"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"overrides.yaml"),": The command line overrides used")),Object(a.b)("p",null,"And in the main output directory:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"my_app.log"),": A log file created for this run")),Object(a.b)("h3",{id:"original-working-directory"},"Original working directory"),Object(a.b)("p",null,"You can still access the original working directory if you need to:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'import os\nimport hydra\nfrom hydra import utils\n\n@hydra.main()\ndef my_app(_cfg):\n    print("Current working directory  : {}".format(os.getcwd()))\n    print("Original working directory : {}".format(utils.get_original_cwd()))\n    print("to_absolute_path(\'foo\')    : {}".format(utils.to_absolute_path("foo")))\n    print("to_absolute_path(\'/foo\')   : {}".format(utils.to_absolute_path("/foo")))\n\n\n$ python examples/tutorial/8_working_directory/original_cwd.py\nCurrent working directory  : /Users/omry/dev/hydra/outputs/2019-10-23/10-53-03\nOriginal working directory : /Users/omry/dev/hydra\nto_absolute_path(\'foo\')    : /Users/omry/dev/hydra/foo\nto_absolute_path(\'/foo\')   : /foo\n')),Object(a.b)("p",null,"Working directory can be ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../configure_hydra/workdir/"}),"customized"),"."))}d.isMDXComponent=!0},160:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},c=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),u=i(r),d=n,y=u[c+"."+d]||u[d]||p[d]||a;return r?o.a.createElement(y,Object.assign({},{ref:t},l,{components:r})):o.a.createElement(y,Object.assign({},{ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:n,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);