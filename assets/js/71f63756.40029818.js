(self.webpackChunk=self.webpackChunk||[]).push([[9641],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(7294);const a=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},1395:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(7294),a=r(944),i=r(6010);const l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;const c=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,p=e.values,d=e.groupId,f=e.className,m=(0,a.Z)(),b=m.tabGroupChoices,g=m.setTabGroupChoices,v=(0,n.useState)(c),h=v[0],y=v[1],k=n.Children.toArray(e.children),O=[];if(null!=d){var P=b[d];null!=P&&P!==h&&p.some((function(e){return e.value===P}))&&y(P)}var w=function(e){var t=e.currentTarget,r=O.indexOf(t),n=p[r].value;y(n),null!=d&&(g(d,n),setTimeout((function(){var e,r,n,a,i,l,s,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,l=window,s=l.innerHeight,u=l.innerWidth,r>=0&&i<=u&&a<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},S=function(e){var t,r;switch(e.keyCode){case u:var n=O.indexOf(e.target)+1;r=O[n]||O[0];break;case s:var a=O.indexOf(e.target)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},f)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:w,onClick:w},r)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(7294).createContext)(void 0)},944:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(7294),a=r(9443);const i=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},611:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,metadata:()=>u,toc:()=>c,default:()=>d});var n=r(4034),a=r(9973),i=(r(7294),r(3905)),l=r(1395),o=r(8215),s={id:"shared-preferences-plugin",title:"Shared Preferences Setup",sidebar_label:"Shared Preferences"},u={unversionedId:"setup/shared-preferences-plugin",id:"setup/shared-preferences-plugin",isDocsHomePage:!1,title:"Shared Preferences Setup",description:"This plugin is available for both Android and iOS.",source:"@site/../docs/setup/shared-preferences-plugin.mdx",sourceDirName:"setup",slug:"/setup/shared-preferences-plugin",permalink:"/docs/setup/shared-preferences-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/shared-preferences-plugin.mdx",version:"current",sidebar_label:"Shared Preferences",frontMatter:{id:"shared-preferences-plugin",title:"Shared Preferences Setup",sidebar_label:"Shared Preferences"},sidebar:"setup",previous:{title:"Sandbox Setup",permalink:"/docs/setup/sandbox-plugin"},next:{title:"LeakCanary Setup",permalink:"/docs/setup/leak-canary-plugin"}},c=[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This plugin is available for both Android and iOS."),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin;\n\nclient.addPlugin(\n    new SharedPreferencesFlipperPlugin(context, "my_shared_preference_file"));\n')),(0,i.kt)("h2",{id:"ios"},"iOS"),(0,i.kt)("p",null,"If you want to use the Shared Preferences plugin, you need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"FlipperKit/FlipperKitUserDefaultsPlugin")," to your Podfile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/FlipperKitUserDefaultsPlugin', '~>' + flipperkit_version\n")),(0,i.kt)("p",null,"Initialize the plugin in the following way:"),(0,i.kt)(l.Z,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ios",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},'#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>\n\n[client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:@"your_suitename"]];\n'))),(0,i.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'import FlipperKit\n\nclient?.add(FKUserDefaultsPlugin.init(suiteName: "your_suitename"))\n')))))}d.isMDXComponent=!0},6010:(e,t,r)=>{"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:()=>a})}}]);