(self.webpackChunk=self.webpackChunk||[]).push([[504],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),h=r,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return o?n.createElement(f,a(a({ref:t},u),{},{components:o})):n.createElement(f,a({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6534:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>a,metadata:()=>l,toc:()=>s,default:()=>u});var n=o(4034),r=o(9973),i=(o(7294),o(3905)),a={id:"stetho",title:"Stetho Guidance",sidebar_label:"Stetho Guidance"},l={unversionedId:"stetho",id:"stetho",isDocsHomePage:!1,title:"Stetho Guidance",description:"In 2015, we introduced Stetho, an Android debugging bridge built on top of Chrome DevTools. While it was a valuable tool to us and many members of the community, we felt that it limited us in what we could do with it. Stetho is Android-only and while Chrome DevTools gave us a nice foundation to build upon, they also limited us in what we could build. Stetho is an Android tool and Chrome DevTools is built for web developers. This means we can only provide a good experience for the intersection of those two development environments, which was very limiting. With Flipper being built as a standalone app, we can do more things, like handling adb connections and supporting iOS, which wasn't easily achievable with Stetho.",source:"@site/../docs/stetho.mdx",sourceDirName:".",slug:"/stetho",permalink:"/docs/stetho",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/stetho.mdx",version:"current",sidebar_label:"Stetho Guidance",frontMatter:{id:"stetho",title:"Stetho Guidance",sidebar_label:"Stetho Guidance"},sidebar:"setup",previous:{title:"Running Flipper with different ports",permalink:"/docs/custom-ports"}},s=[],c={toc:s};function u(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In 2015, we introduced ",(0,i.kt)("a",{parentName:"p",href:"http://facebook.github.io/stetho/"},"Stetho"),", an Android debugging bridge built on top of ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/"},"Chrome DevTools"),". While it was a valuable tool to us and many members of the community, we felt that it limited us in what we could do with it. Stetho is Android-only and while Chrome DevTools gave us a nice foundation to build upon, they also limited us in what we could build. Stetho is an Android tool and Chrome DevTools is built for web developers. This means we can only provide a good experience for the intersection of those two development environments, which was very limiting. With Flipper being built as a standalone app, we can do more things, like handling adb connections and supporting iOS, which wasn't easily achievable with Stetho."),(0,i.kt)("p",null,"This is why we built Flipper. We wanted to create a platform that gives us all the flexibility we need to build more advanced features and support for iOS. One of Flipper's core concepts is its extensibility using ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial/intro"},"plugins"),". Plugins are written in React and we provide a set of ready-to-use UI components that allow developers to build great plugin UIs with a few lines of code."),(0,i.kt)("p",null,"While offering many new features, Flipper also already covers most of the features provided by Stetho. This includes network and layout inspection and an advanced log viewer. We are committed to continuously improving Flipper with new features and plugins, however, we are aware that not all Stetho features are currently supported by Flipper. If you are using a particular feature of Stetho which isn't supported by Flipper, we are more than happy to hear about your use-case. Stetho will continue to work and we are not abandoning it so you can choose the tool that fits your needs best. We are confident that Flipper will work well for most use-cases and are more than happy to accept contributions from the open-source community adding new features."))}u.isMDXComponent=!0}}]);