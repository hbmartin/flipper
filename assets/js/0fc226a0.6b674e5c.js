(self.webpackChunk=self.webpackChunk||[]).push([[972],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,g=d["".concat(p,".").concat(f)]||d[f]||c[f]||a;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var i=n(9973),r=n(7294),a=n(3727),o=n(3919),l=n(412),p=(0,r.createContext)({collectLink:function(){}}),s=n(4996);const u=function(e){var t,n,u,c=e.isNavLink,d=e.to,f=e.href,g=e.activeClassName,v=e.isActive,h=e["data-noBrokenLinkCheck"],m=e.autoAddBaseUrl,b=void 0===m||m,y=(0,i.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=(0,s.C)().withBaseUrl,N=(0,r.useContext)(p),w=d||f,_=(0,o.Z)(w),F=null==w?void 0:w.replace("pathname://",""),O=void 0!==F?(n=F,b&&function(e){return e.startsWith("/")}(n)?k(n):n):void 0,D=(0,r.useRef)(!1),A=c?a.OL:a.rU,P=l.default.canUseIntersectionObserver;(0,r.useEffect)((function(){return!P&&_&&null!=O&&window.docusaurus.prefetch(O),function(){P&&u&&u.disconnect()}}),[O,P,_]);var S=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,K=!O||!_||S;return O&&_&&!S&&!h&&N.collectLink(O),K?r.createElement("a",Object.assign({href:O},w&&!_&&{target:"_blank",rel:"noopener noreferrer"},y)):r.createElement(A,Object.assign({},y,{onMouseEnter:function(){D.current||null==O||(window.docusaurus.preload(O),D.current=!0)},innerRef:function(e){var t,n;P&&e&&_&&(t=e,n=function(){null!=O&&window.docusaurus.prefetch(O)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:O||""},c&&{isActive:v,activeClassName:g}))}},3919:(e,t,n)=>{"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:()=>i,Z:()=>r})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,Z:()=>o});var i=n(2263),r=n(3919);function a(){var e=(0,i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,l=void 0!==o&&o,p=a.absolute,s=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(7294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var i=n(7294),r=n(944),a=n(6010);const o="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,s=39;const u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,c=e.values,d=e.groupId,f=e.className,g=(0,r.Z)(),v=g.tabGroupChoices,h=g.setTabGroupChoices,m=(0,i.useState)(u),b=m[0],y=m[1],k=i.Children.toArray(e.children),N=[];if(null!=d){var w=v[d];null!=w&&w!==b&&c.some((function(e){return e.value===w}))&&y(w)}var _=function(e){var t=e.currentTarget,n=N.indexOf(t),i=c[n].value;y(i),null!=d&&(h(d,i),setTimeout((function(){var e,n,i,r,a,o,p,s;(e=t.getBoundingClientRect(),n=e.top,i=e.left,r=e.bottom,a=e.right,o=window,p=o.innerHeight,s=o.innerWidth,n>=0&&a<=s&&r<=p&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},F=function(e){var t,n;switch(e.keyCode){case s:var i=N.indexOf(e.target)+1;n=N[i]||N[0];break;case p:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},f)},c.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:F,onFocus:_,onClick:_},n)}))),t?(0,i.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const i=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(7294),r=n(9443);const a=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8873:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>u,metadata:()=>c,toc:()=>d,default:()=>g});var i=n(4034),r=n(9973),a=(n(7294),n(3905)),o=n(4996),l=n(6742),p=n(1395),s=n(8215),u={id:"react-native-ios",title:"Manually set up your React Native iOS App",sidebar_label:"Manual iOS Setup"},c={unversionedId:"getting-started/react-native-ios",id:"getting-started/react-native-ios",isDocsHomePage:!1,title:"Manually set up your React Native iOS App",description:"These instructions are aimed at people manually adding Flipper to a React Native 0.62+ app.",source:"@site/../docs/getting-started/react-native-ios.mdx",sourceDirName:"getting-started",slug:"/getting-started/react-native-ios",permalink:"/docs/getting-started/react-native-ios",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/getting-started/react-native-ios.mdx",version:"current",sidebar_label:"Manual iOS Setup",frontMatter:{id:"react-native-ios",title:"Manually set up your React Native iOS App",sidebar_label:"Manual iOS Setup"},sidebar:"setup",previous:{title:"Manually set up your React Native Android App",permalink:"/docs/getting-started/react-native-android"},next:{title:"Troubleshooting Issues",permalink:"/docs/troubleshooting"}},d=[{value:"Dependencies",id:"dependencies",children:[{value:"React Native 0.63+",id:"react-native-063",children:[]},{value:"React Native 0.62",id:"react-native-062",children:[]}]},{value:"Initialization",id:"initialization",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Further Steps",id:"further-steps",children:[]}],f={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These instructions are aimed at people manually adding Flipper to a React Native 0.62+ app.\nThis should only be necessary if you have an existing app that cannot be upgraded with the\n",(0,a.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/upgrading"},"React Native Upgrade tool"),"."),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"react-native-063"},"React Native 0.63+"),(0,a.kt)("p",null,"If using React Native 0.63 or later, your ",(0,a.kt)("inlineCode",{parentName:"p"},"ios/Podfile")," should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '10.0'\n\nrequire_relative '../node_modules/react-native/scripts/react_native_pods'\nrequire_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'\n\ntarget 'your-app-name' do\n  config = use_native_modules!\n  use_react_native!(path: config['reactNativePath'])\n\n  # Enables Flipper.\n  #\n  # Note that if you have use_frameworks! enabled, Flipper will not work and\n  # you should disable these next few lines.\n  use_flipper!({'Flipper' => '0.58.0'}) # should match the version of your Flipper client app\n  post_install do |installer|\n    flipper_post_install(installer)\n  end\nend\n")),(0,a.kt)("p",null,"Install the dependencies by running ",(0,a.kt)("inlineCode",{parentName:"p"},"cd ios && pod install"),". Then continue to ",(0,a.kt)("a",{parentName:"p",href:"#initialization"},"Initialization"),"."),(0,a.kt)("h3",{id:"react-native-062"},"React Native 0.62"),(0,a.kt)("p",null,"In 0.62, the setup includes a bit more code (which was moved to a helper in 0.63). Add all of the code below to your ",(0,a.kt)("inlineCode",{parentName:"p"},"ios/Podfile"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '9.0'\n\ndef flipper_pods()\n  flipperkit_version = '0.93.0' # should match the version of your Flipper client app\n  pod 'FlipperKit', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitLayoutPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitUserDefaultsPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitReactPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\nend\n\n# Post Install processing for Flipper\ndef flipper_post_install(installer)\n  file_name = Dir.glob(\"*.xcodeproj\")[0]\n  app_project = Xcodeproj::Project.open(file_name)\n  app_project.native_targets.each do |target|\n    target.build_configurations.each do |config|\n      cflags = config.build_settings['OTHER_CFLAGS'] || '$(inherited) '\n      unless cflags.include? '-DFB_SONARKIT_ENABLED=1'\n        puts 'Adding -DFB_SONARKIT_ENABLED=1 in OTHER_CFLAGS...'\n        cflags << '-DFB_SONARKIT_ENABLED=1'\n      end\n      config.build_settings['OTHER_CFLAGS'] = cflags\n    end\n    app_project.save\n  end\n  installer.pods_project.save\nend\n\ntarget 'your-app-name' do\n  ...\n  # Replace the existing yoga import with the following (adding modular_headers):\n  pod 'Yoga', :path => '../node_modules/react-native/ReactCommon/yoga', :modular_headers => true\n  ...\n  use_native_modules!\n\n  # For enabling Flipper.\n  # Note that if you use_framework!, flipper will not work.\n  # Disable these lines if you are doing use_framework!\n  flipper_pods()\n  post_install do |installer|\n    flipper_post_install(installer)\n  end\nend\n")),(0,a.kt)("p",null,"Install the dependencies by running ",(0,a.kt)("inlineCode",{parentName:"p"},"cd ios && pod install"),". You can now\nimport and initialize Flipper in your AppDelegate."),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("p",null,"The code below enables the following integrations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Layout Inspector"),(0,a.kt)("li",{parentName:"ul"},"Network"),(0,a.kt)("li",{parentName:"ul"},"Shared Preferences"),(0,a.kt)("li",{parentName:"ul"},"Crash Reporter")),(0,a.kt)(p.Z,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ios",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc"},"...\n#if DEBUG\n#ifdef FB_SONARKIT_ENABLED\n#import <FlipperKit/FlipperClient.h>\n#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n#import <FlipperKitLayoutPlugin/SKDescriptorMapper.h>\n#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>\n#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>\n#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>\n#endif\n#endif\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  [self initializeFlipper:application];\n  ...\n}\n\n- (void) initializeFlipper:(UIApplication *)application {\n  #if DEBUG\n  #ifdef FB_SONARKIT_ENABLED\n    FlipperClient *client = [FlipperClient sharedClient];\n    SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];\n    [client addPlugin: [[FlipperKitLayoutPlugin alloc] initWithRootNode: application withDescriptorMapper: layoutDescriptorMapper]];\n    [client addPlugin: [[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];\n    [client addPlugin: [FlipperKitReactPlugin new]];\n    [client addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n    [client start];\n  #endif\n  #endif\n}\n\n@end\n"))),(0,a.kt)(s.Z,{value:"swift",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"...\n#if DEBUG\n#if FB_SONARKIT_ENABLED\nimport FlipperKit\n#endif\n#endif\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n  func application(\n      _ application: UIApplication,\n      didFinishLaunchingWithOptions\n      launchOptions: [UIApplication.LaunchOptionsKey: Any]?\n    ) -> Bool {\n    initializeFlipper(with: application)\n    ...\n  }\n\n  private func initializeFlipper(with application: UIApplication) {\n    #if DEBUG\n    #if FB_SONARKIT_ENABLED\n      let client = FlipperClient.shared()\n      let layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\n      FlipperKitLayoutComponentKitSupport.setUpWith(layoutDescriptorMapper)\n      client?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n      client?.add(FKUserDefaultsPlugin(suiteName: nil))\n      client?.add(FlipperKitReactPlugin())\n      client?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n      client?.add(FlipperReactPerformancePlugin.sharedInstance())\n      client?.start()\n    #endif\n    #endif\n  }\n}\n")))),(0,a.kt)("p",null,"Lastly, open the Flipper desktop app, and run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn ios")," in your terminal."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"See the ",(0,a.kt)(l.Z,{to:(0,o.Z)("/docs/troubleshooting"),mdxType:"Link"},"troubleshooting page")," for help with known problems."),(0,a.kt)("h2",{id:"further-steps"},"Further Steps"),(0,a.kt)("p",null,"To create your own plugins and integrate with Flipper using JavaScript, check out our ",(0,a.kt)(l.Z,{to:(0,o.Z)("/docs/tutorial/react-native"),mdxType:"Link"},"writing plugins for React Native")," tutorial!"))}g.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);