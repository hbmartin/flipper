(self.webpackChunk=self.webpackChunk||[]).push([[5027],{3905:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>u,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(r),d=a,m=g["".concat(p,".").concat(d)]||g[d]||s[d]||i;return r?t.createElement(m,l(l({ref:n},u),{},{components:r})):t.createElement(m,l({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5244:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>l,metadata:()=>o,toc:()=>p,default:()=>u});var t=r(4034),a=r(9973),i=(r(7294),r(3905)),l={id:"images-plugin",title:"Images Setup",sidebar_label:"Images"},o={unversionedId:"setup/images-plugin",id:"setup/images-plugin",isDocsHomePage:!1,title:"Images Setup",description:"Currently, the images plugin only supports Fresco for Android as backend, but just like the network plugin, support for other image loading libraries",source:"@site/../docs/setup/images-plugin.mdx",sourceDirName:"setup",slug:"/setup/images-plugin",permalink:"/docs/setup/images-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/images-plugin.mdx",version:"current",sidebar_label:"Images",frontMatter:{id:"images-plugin",title:"Images Setup",sidebar_label:"Images"},sidebar:"setup",previous:{title:"Databases Plugin Setup",permalink:"/docs/setup/databases-plugin"},next:{title:"Sandbox Setup",permalink:"/docs/setup/sandbox-plugin"}},p=[{value:"Fresco and Android",id:"fresco-and-android",children:[{value:"Leak Tracking",id:"leak-tracking",children:[]},{value:"Attribution",id:"attribution",children:[]}]}],c={toc:p};function u(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Currently, the images plugin only supports ",(0,i.kt)("a",{parentName:"p",href:"https://frescolib.org/"},"Fresco")," for Android as backend, but just like the network plugin, support for other image loading libraries\ncould easily be added. Send us a PR!"),(0,i.kt)("h2",{id:"fresco-and-android"},"Fresco and Android"),(0,i.kt)("p",null,"The Fresco images plugin is shipped as a separate Maven artifact:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-fresco-plugin:0.30.1'\n}\n")),(0,i.kt)("p",null,"After including the plugin in your dependencies, you can add it to the\nclient:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.fresco.FrescoFlipperPlugin;\n\nclient.addPlugin(new FrescoFlipperPlugin());\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FrescoFlipperPlugin")," constructor offers a whole lot of configuration options which\ncan be useful if you have an advanced setup of Fresco in your application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"FrescoFlipperPlugin(\n      DebugImageTracker imageTracker,\n      PlatformBitmapFactory bitmapFactory,\n      @Nullable FlipperObjectHelper flipperObjectHelper,\n      DebugMemoryManager memoryManager,\n      FlipperPerfLogger perfLogger,\n      @Nullable FrescoFlipperDebugPrefHelper debugPrefHelper,\n      @Nullable CloseableReferenceLeakTracker closeableReferenceLeakTracker) { ... }\n")),(0,i.kt)("h3",{id:"leak-tracking"},"Leak Tracking"),(0,i.kt)("p",null,"The Flipper plugin can help you track down ",(0,i.kt)("inlineCode",{parentName:"p"},"CloseableReferences")," who have not had\n",(0,i.kt)("inlineCode",{parentName:"p"},"close()")," called on them. This can have a negative impact on the performance of\nyour application."),(0,i.kt)("p",null,"To enable this functionality, you need to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"CloseableReferenceLeakTracker"),"\nand set it in both your ",(0,i.kt)("inlineCode",{parentName:"p"},"ImagePipelineConfig")," for Fresco and the ",(0,i.kt)("inlineCode",{parentName:"p"},"FrescoPluginPlugin"),"\non creation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import com.facebook.imagepipeline.debug.FlipperCloseableReferenceLeakTracker;\n\n// ...\n\nFlipperCloseableReferenceLeakTracker leakTracker = new FlipperCloseableReferenceLeakTracker();\n\nnew ImagePipelineConfig.Builder()\n    // ...\n    .setCloseableReferenceLeakTracker(leakTracker)\n    .build();\n\n\nclient.addPlugin(new FrescoFlipperPlugin(\n    new FlipperImageTracker(),\n    Fresco.getImagePipelineFactory().getPlatformBitmapFactory(),\n    null,\n    new NoOpDebugMemoryManager(),\n    new NoOpFlipperPerfLogger(),\n    null,\n    leakTracker));\n")),(0,i.kt)("h3",{id:"attribution"},"Attribution"),(0,i.kt)("p",null,"In order to annotate images with the context they are used in, you have to set a\ncaller context when loading the image. This can be any object, so for the simplest\ncase, a String will suffice."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String callerContext = "my_feature";\n\n// For DraweeViews:\ndraweeView.setImageURI(uri, callerContext);\n\n// For prefetching:\nImagePipeline imagePipeline = Fresco.getImagePipeline();\nimagePipeline.prefetchToDiskCache(imageRequest, callerContext);\n\n// For manually fetching an image:\nDataSource<CloseableReference<CloseableImage>>\n    dataSource = imagePipeline.fetchDecodedImage(imageRequest, callerContext);\n')),(0,i.kt)("p",null,"If a caller context is supplied, the image will be properly attributed in the\nFlipper image plugin."))}u.isMDXComponent=!0}}]);