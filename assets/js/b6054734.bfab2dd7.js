(self.webpackChunk=self.webpackChunk||[]).push([[9782],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6742:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var i=n(9973),a=n(7294),r=n(3727),o=n(3919),l=n(412),s=(0,a.createContext)({collectLink:function(){}}),p=n(4996);const u=function(e){var t,n,u,d=e.isNavLink,c=e.to,h=e.href,m=e.activeClassName,g=e.isActive,f=e["data-noBrokenLinkCheck"],k=e.autoAddBaseUrl,w=void 0===k||k,b=(0,i.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=(0,p.C)().withBaseUrl,C=(0,a.useContext)(s),v=c||h,N=(0,o.Z)(v),x=null==v?void 0:v.replace("pathname://",""),T=void 0!==x?(n=x,w&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,I=(0,a.useRef)(!1),S=d?r.OL:r.rU,P=l.default.canUseIntersectionObserver;(0,a.useEffect)((function(){return!P&&N&&null!=T&&window.docusaurus.prefetch(T),function(){P&&u&&u.disconnect()}}),[T,P,N]);var D=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,j=!T||!N||D;return T&&N&&!D&&!f&&C.collectLink(T),j?a.createElement("a",Object.assign({href:T},v&&!N&&{target:"_blank",rel:"noopener noreferrer"},b)):a.createElement(S,Object.assign({},b,{onMouseEnter:function(){I.current||null==T||(window.docusaurus.preload(T),I.current=!0)},innerRef:function(e){var t,n;P&&e&&N&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:T||""},d&&{isActive:g,activeClassName:m}))}},3919:(e,t,n)=>{"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,{b:()=>i,Z:()=>a})},4996:(e,t,n)=>{"use strict";n.d(t,{C:()=>r,Z:()=>o});var i=n(2263),a=n(3919);function r(){var e=(0,i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,l=void 0!==o&&o,s=r.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},401:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>p,default:()=>d});var i=n(4034),a=n(9973),r=(n(7294),n(3905)),o=n(4996),l=(n(6742),{id:"js-custom",title:"Building A Custom Desktop Plugin",sidebar_label:"Desktop Plugin - Custom UI"}),s={unversionedId:"tutorial/js-custom",id:"tutorial/js-custom",isDocsHomePage:!1,title:"Building A Custom Desktop Plugin",description:"Displaying your data in a table might work for many use-cases. However, depending on your plugin and data it might make sense to customize the way your data is visualized. Flipper uses React to render the plugins and provides a variety of ready-to-use UI components that can be used to build custom plugin UIs.",source:"@site/../docs/tutorial/js-custom.mdx",sourceDirName:"tutorial",slug:"/tutorial/js-custom",permalink:"/docs/tutorial/js-custom",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/js-custom.mdx",version:"current",sidebar_label:"Desktop Plugin - Custom UI",frontMatter:{id:"js-custom",title:"Building A Custom Desktop Plugin",sidebar_label:"Desktop Plugin - Custom UI"},sidebar:"extending",previous:{title:"Showing a table",permalink:"/docs/tutorial/js-table"},next:{title:"Publishing your Plugin",permalink:"/docs/tutorial/js-publishing"}},p=[{value:"Replacing the table",id:"replacing-the-table",children:[]},{value:"The <code>plugin</code> declaration",id:"the-plugin-declaration",children:[]},{value:"Writing <code>plugin</code> logic",id:"writing-plugin-logic",children:[{value:"Testing <code>plugin</code> logic",id:"testing-plugin-logic",children:[]}]},{value:"Building a User Interface for the plugin",id:"building-a-user-interface-for-the-plugin",children:[{value:"Unit testing the User Interface",id:"unit-testing-the-user-interface",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Displaying your data in a table might work for many use-cases. However, depending on your plugin and data it might make sense to customize the way your data is visualized. Flipper uses React to render the plugins and provides a variety of ready-to-use UI components that can be used to build custom plugin UIs."),(0,r.kt)("h2",{id:"replacing-the-table"},"Replacing the table"),(0,r.kt)("p",null,"For our sea mammals app, we might not only want to see them listed as image URLs in a table but render the actual images in nice little cards. When selecting one of the cards we still want to display all details in the sidebar."),(0,r.kt)("img",{alt:"Custom cards UI for our sea mammals plugin",src:(0,o.Z)("img/js-custom.png")}),(0,r.kt)("p",null,"Currently, the default export in our ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx")," is from ",(0,r.kt)("inlineCode",{parentName:"p"},"createTablePlugin"),".\nNow we are going to replace this with a custom React component by using the more flexible APIs exposed by ",(0,r.kt)("inlineCode",{parentName:"p"},"flipper-plugin")," ."),(0,r.kt)("p",null,"After that, we replace our ",(0,r.kt)("inlineCode",{parentName:"p"},"createTablePlugin")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," definition, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," definition which is used for rendering.\nSeparating those two concepts helps with testing and maintaining state when the user switches plugins."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport {PluginClient, createState} from 'flipper-plugin';\n\n// (3)\ntype Row = {\n  id: number;\n  title: string;\n  url: string;\n};\n\n// (2)\ntype Events = {\n  newRow: Row;\n};\n\n// (1)\nexport function plugin(client: PluginClient<Events, {}>) {\n  // (5)\n  const rows = createState<Record<string, Row>>({}, {persist: 'rows'});\n  const selectedID = createState<string | null>(null, {persist: 'selection'});\n\n  // (6)\n  client.onMessage('newRow', (row) => {\n    rows.update((draft) => {\n      draft[row.id] = row;\n    });\n  });\n\n  // (7)\n  function setSelection(id: number) {\n    selectedID.set('' + id);\n  }\n\n  // (4)\n  return {\n    rows,\n    selectedID,\n    setSelection,\n  };\n}\n\nexport function Component() {\n  return <h1>Sea Mammals plugin</h1>;\n}\n")),(0,r.kt)("h2",{id:"the-plugin-declaration"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"plugin")," declaration"),(0,r.kt)("p",null,"The implementation of our plugin is driven by the named, exported function ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," as defined at ",(0,r.kt)("inlineCode",{parentName:"p"},"(3)"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," method is called upon instantiating the plugin.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," method receives one argument, the ",(0,r.kt)("inlineCode",{parentName:"p"},"client"),", which provides all APIs needed to both interact with Flipper desktop,\nand the plugin loaded into the client application.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"PluginClient")," types all available APIs and takes two generic arguments."),(0,r.kt)("p",null,"The first, ",(0,r.kt)("inlineCode",{parentName:"p"},"Events"),", describes all possible events that can be sent from the client plugin to the desktop plugin,\nand determines the events available for ",(0,r.kt)("inlineCode",{parentName:"p"},"client.onMessage")," (see below).\nIn our example, only one event can occur, ",(0,r.kt)("inlineCode",{parentName:"p"},"newRow"),", as defined at ",(0,r.kt)("inlineCode",{parentName:"p"},"(2)"),".\nBut typically there are more.\nThe data provided by this ",(0,r.kt)("inlineCode",{parentName:"p"},"newRow")," event is described with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Row")," type, as defined at ",(0,r.kt)("inlineCode",{parentName:"p"},"(3)"),".\nThe event names and data structures should correspond with the data that is send using ",(0,r.kt)("a",{parentName:"p",href:"../extending/create-plugin#push-data-to-the-desktop"},(0,r.kt)("inlineCode",{parentName:"a"},"connection.send"))," from the client."),(0,r.kt)("p",null,"From our ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," function, as shown at ",(0,r.kt)("inlineCode",{parentName:"p"},"(4)"),", we have to return an object that captures the entire API we want to expose from our plugin to our UI components and unit tests.\nIn this case, we return the state atoms ",(0,r.kt)("inlineCode",{parentName:"p"},"rows")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"selectedID"),", and expose the ",(0,r.kt)("inlineCode",{parentName:"p"},"setSelection")," method."),(0,r.kt)("h2",{id:"writing-plugin-logic"},"Writing ",(0,r.kt)("inlineCode",{parentName:"h2"},"plugin")," logic"),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," function will execute only once during the entire life-cycle of the plugin, we can use local variables in the function body to preserve state.\nIn our example, we create two pieces of state, the set of rows available, ",(0,r.kt)("inlineCode",{parentName:"p"},"rows"),", and the current selection: ",(0,r.kt)("inlineCode",{parentName:"p"},"selectionID"),". See ",(0,r.kt)("inlineCode",{parentName:"p"},"(5)"),".\nFor larger data collections, we strongly recommend to leverage the better optimized ",(0,r.kt)("a",{parentName:"p",href:"../extending/flipper-plugin#createdatasource"},(0,r.kt)("inlineCode",{parentName:"a"},"createDataSource")),", but in this simple example ",(0,r.kt)("inlineCode",{parentName:"p"},"createState")," will suffice for the small data set."),(0,r.kt)("p",null,"It is possible to store state directly in ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," declarations, but ",(0,r.kt)("inlineCode",{parentName:"p"},"createState")," creates a storage container that gives us a few advantages.\nMost importantly, state created using ",(0,r.kt)("inlineCode",{parentName:"p"},"createState")," can be subscribed to by our UI components using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useValue")," hook.\nSecondly, state created with ",(0,r.kt)("inlineCode",{parentName:"p"},"createState")," can be made part of Flipper imports / exports.\nWe can enable this feature by providing a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"persist")," key.\nThe current value of a the container can be read using ",(0,r.kt)("inlineCode",{parentName:"p"},".get()"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},".set()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".update()")," can be used to replace the current value."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," can be used to receive and send information to the client plugin.\nWith ",(0,r.kt)("inlineCode",{parentName:"p"},"client.send"),", we can invoke methods on the plugin.\nWith ",(0,r.kt)("inlineCode",{parentName:"p"},"client.onMessage")," (",(0,r.kt)("inlineCode",{parentName:"p"},"(6)"),") we can subscribe to the specific events as specified with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Events")," type (",(0,r.kt)("inlineCode",{parentName:"p"},"(2)"),").\nIn the event handler, we can update some pieces of state, using the ",(0,r.kt)("inlineCode",{parentName:"p"},".set")," method to replace state, or the ",(0,r.kt)("inlineCode",{parentName:"p"},".update")," method to immutably update the state using ",(0,r.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer"},"immer"),".\nIn this case, we add the received row to the ",(0,r.kt)("inlineCode",{parentName:"p"},"rows")," state under its own ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,r.kt)("p",null,"Finally, ",(0,r.kt)("inlineCode",{parentName:"p"},"(7)"),", we create (and expose at ",(0,r.kt)("inlineCode",{parentName:"p"},"(4)"),") a utility to update the selection, which we will user later in our UI."),(0,r.kt)("p",null,"Note that no state should be stored outside the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," definition; multiple invocations of ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," can be 'alive' if multiple connected apps are using the plugin.\nStoring the state inside the closure makes sure no state is mixed up."),(0,r.kt)("h3",{id:"testing-plugin-logic"},"Testing ",(0,r.kt)("inlineCode",{parentName:"h3"},"plugin")," logic"),(0,r.kt)("p",null,"Before we create the UI for our plugin, we are going to pretend that we always write unit tests first.\nUnit tests will be picked automatically by Jest if they are named like ",(0,r.kt)("inlineCode",{parentName:"p"},"__tests__/*.spec.tsx"),", so we create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"__tests__/seamammals.spec.tsx")," and start the test runner by\nrunning ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test --watch")," in our plugin root.\nHere is our initial unit test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// (1)\nimport {TestUtils} from \'flipper-plugin\';\n// (2)\nimport * as MammalsPlugin from \'..\';\n\ntest(\'It can store rows\', () => {\n  // (3)\n  const {instance, sendEvent} = TestUtils.startPlugin(MammalsPlugin);\n\n  expect(instance.rows.get()).toEqual({});\n  expect(instance.selectedID.get()).toBeNull();\n\n  // (4)\n  sendEvent(\'newRow\', {\n    id: 1,\n    title: \'Dolphin\',\n    url: \'http://dolphin.png\',\n  });\n  sendEvent(\'newRow\', {\n    id: 2,\n    title: \'Turtle\',\n    url: \'http://turtle.png\',\n  });\n\n  // (5)\n  expect(instance.rows.get()).toMatchInlineSnapshot(`\n    Object {\n      "1": Object {\n        "id": 1,\n        "title": "Dolphin",\n        "url": "http://dolphin.png",\n      },\n      "2": Object {\n        "id": 2,\n        "title": "Turtle",\n        "url": "http://turtle.png",\n      },\n    }\n  `);\n});\n')),(0,r.kt)("p",null,"Testing utilities for plugins are shipped as part of ",(0,r.kt)("inlineCode",{parentName:"p"},"flipper-plugin"),", so we import them (",(0,r.kt)("inlineCode",{parentName:"p"},"(1)"),").\nSecondly, we directly import our above plugin implementation into our unit test.\nUsing ",(0,r.kt)("inlineCode",{parentName:"p"},"as"),", we put the entire implementation into one object, which is the format in which our utilities expect them (",(0,r.kt)("inlineCode",{parentName:"p"},"(2)"),")."),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"TestUtils.startPlugin")," (",(0,r.kt)("inlineCode",{parentName:"p"},"(3)"),") we can instantiate our plugin in a fully mocked environment,\nin which our plugin can do everything except for actually rendering, which makes this operation really cheap.\nFrom the ",(0,r.kt)("inlineCode",{parentName:"p"},"startPlugin"),", we get back an ",(0,r.kt)("inlineCode",{parentName:"p"},"instance"),", which corresponds to the object we returned from our ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," implementation (",(0,r.kt)("inlineCode",{parentName:"p"},"(4)")," in our previous listing).\nBeyond that, we get a bunch of utilities to interact with our plugin.\nThe full list is documented ",(0,r.kt)("a",{parentName:"p",href:"/docs/extending/flipper-plugin#the-test-runner-object"},"here"),", but for this test we are only interested in ",(0,r.kt)("inlineCode",{parentName:"p"},"sendEvent"),"."),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"sendEvent"),", we can mimic the client plugin sending events to our plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"(4)"),".\nSimilarly we can emulate all other possible events, such as the initial connection setup with (",(0,r.kt)("inlineCode",{parentName:"p"},".connect()"),"), the user (de)selecting the plugin (",(0,r.kt)("inlineCode",{parentName:"p"},".activate()")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"deactivate()"),"), or a deeplink being triggered (",(0,r.kt)("inlineCode",{parentName:"p"},".triggerDeepLink"),") etc."),(0,r.kt)("p",null,"After the events have been sent, the internal state of our plugin should have been updated, so we assert this is the case at ",(0,r.kt)("inlineCode",{parentName:"p"},"(5)"),".\nThe assertions are provided by ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"toMatchInlineSnapshot")," is particularly useful, as it will generate the initial snapshot during the first run of the unit tests, which saves a lot of effort."),(0,r.kt)("h2",{id:"building-a-user-interface-for-the-plugin"},"Building a User Interface for the plugin"),(0,r.kt)("p",null,"So far, in ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx"),", our ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," didn't do anything useful yet. Time to build some nice UI.\nFlipper leverages Ant design, so any ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/overview/"},"official Ant component")," can be used in Flipper plugins."),(0,r.kt)("p",null,"The styling system used by Flipper can be found by starting Flipper, and opening ",(0,r.kt)("inlineCode",{parentName:"p"},"View > Flipper Style Guide"),".\nThe different ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout")," elements are documented there as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, {memo} from 'react';\nimport {Typography, Card} from 'antd';\nimport {\n  Layout,\n  PluginClient,\n  usePlugin,\n  createState,\n  useValue,\n  theme,\n  styled,\n  DataInspector,\n  DetailSidebar\n} from 'flipper-plugin';\n\n// (1)\nexport function Component() {\n  // (2)\n  const instance = usePlugin(plugin);\n  // (3)\n  const rows = useValue(instance.rows);\n  const selectedID = useValue(instance.selectedID);\n\n  // (4)\n  return (\n    <>\n      <Layout.ScrollContainer\n        vertical\n        style={{background: theme.backgroundWash}}>\n        <Layout.Horizontal gap pad style={{flexWrap: 'wrap'}}>\n          {Object.entries(rows).map(([id, row]) => (\n            <MammalCard\n              row={row}\n              onSelect={instance.setSelection}\n              selected={id === selectedID}\n              key={id}\n            />\n          ))}\n        </Layout.Horizontal>\n      </Layout.ScrollContainer>\n      <DetailSidebar>\n        {selectedID && renderSidebar(rows[selectedID])}\n      </DetailSidebar>\n    </>\n  );\n}\n\nfunction renderSidebar(row: Row) {\n  return (\n    <Layout.Container gap pad>\n      <Typography.Title level={4}>Extras</Typography.Title>\n      <DataInspector data={row} expandRoot={true} />\n    </Layout.Container>\n  );\n}\n")),(0,r.kt)("p",null,"A plugin module can have many components, but it should always export one component named ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," that is used as the root component for the plugin rendering.\nThe component mustn't take any props, and will be mounted by Flipper when the user selects the plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"(1)"),")."),(0,r.kt)("p",null,"Inside the component we can grab the relevant instance of the plugin by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"usePlugin")," (",(0,r.kt)("inlineCode",{parentName:"p"},"(2)"),") hook.\nThis returns the instance API we returned in the first listing at the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," function.\nOur original ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," definition is passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"usePlugin")," as argument.\nThis is done to get the typings of ",(0,r.kt)("inlineCode",{parentName:"p"},"instance")," correct and should always be done."),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"useValue")," hook (",(0,r.kt)("inlineCode",{parentName:"p"},"(3)"),"), we can grab the current value from the states we created earlier using ",(0,r.kt)("inlineCode",{parentName:"p"},"createState"),".\nThe benefit of ",(0,r.kt)("inlineCode",{parentName:"p"},"useValue(instance.rows)")," over using ",(0,r.kt)("inlineCode",{parentName:"p"},"rows.get()"),", is that the first will automatically subscribe our component to any future updates to the state, causing the component to re-render when new rows arrive."),(0,r.kt)("p",null,"Since both ",(0,r.kt)("inlineCode",{parentName:"p"},"usePlugin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useValue")," are hooks, they usual React rules for them apply; they need to be called unconditionally.\nSo it is recommended to put them at the top of your component body.\nBoth hooks can not only be used in the root ",(0,r.kt)("inlineCode",{parentName:"p"},"Component"),", but also in any other component in your plugin component tree.\nSo it is not necessary to grab all the data at the root and pass it down using props.\nUsing ",(0,r.kt)("inlineCode",{parentName:"p"},"useValue")," as deep in the component tree as possible will benefit performance."),(0,r.kt)("p",null,"Finally (",(0,r.kt)("inlineCode",{parentName:"p"},"(4)"),") we render the data we have. The details have been left out here, as from here it is just idiomatic React code.\nThe source of the other ",(0,r.kt)("inlineCode",{parentName:"p"},"MammalCard")," component can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/seamammals/src/index_custom.tsx#L118-L132"},"here"),"."),(0,r.kt)("p",null,"Tip: it is recommended to keep components as much as possible outside the entry file, as components defined outside the index.tsx file will benefit from fast refresh."),(0,r.kt)("h3",{id:"unit-testing-the-user-interface"},"Unit testing the User Interface"),(0,r.kt)("p",null,"At this moment the plugin is ready to be used in Flipper, and opening it should lead to sane results.\nBut let's verify with some tests that the UI works correctly, and doesn't regress in the future by adding another unit test to the ",(0,r.kt)("inlineCode",{parentName:"p"},"seamammals.spec.tsx")," file and assert that the rendering is correct and interactive:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"test('It can have selection and render details', async () => {\n  // (1)\n  const {\n    instance,\n    renderer,\n    act,\n    sendEvent,\n    exportState,\n  } = TestUtils.renderPlugin(MammalsPlugin);\n\n  // (2)\n  sendEvent('newRow', {\n    id: 1,\n    title: 'Dolphin',\n    url: 'http://dolphin.png',\n  });\n  sendEvent('newRow', {\n    id: 2,\n    title: 'Turtle',\n    url: 'http://turtle.png',\n  });\n\n  // (3) Dolphin card should now be visible\n  expect(await renderer.findByTestId('Dolphin')).not.toBeNull();\n  // (4) Let's assert the structure of the Turtle card as well\n  expect(await renderer.findByTestId('Turtle')).toMatchInlineSnapshot(`\n    <div\n      class=\"css-ok7d66-View-FlexBox-FlexColumn\"\n      data-testid=\"Turtle\"\n    >\n      <div\n        class=\"css-vgz97s\"\n        style=\"background-image: url(http://turtle.png);\"\n      />\n      <span\n        class=\"css-8j2gzl-Text\"\n      >\n        Turtle\n      </span>\n    </div>\n  `);\n\n  // (5) Nothing selected, so we should not have a sidebar\n  expect(renderer.queryAllByText('Extras').length).toBe(0);\n\n  act(() => {\n    instance.setSelection(2);\n  });\n\n  // Sidebar should be visible now\n  expect(await renderer.findByText('Extras')).not.toBeNull();\n\n  // (6) Verify export\n  expect(exportState()).toEqual({\n    rows: {\n      '1': {\n        id: 1,\n        title: 'Dolphin',\n        url: 'http://dolphin.png',\n      },\n      '2': {\n        id: 2,\n        title: 'Turtle',\n        url: 'http://turtle.png',\n      },\n    },\n    selection: '2',\n  });\n});\n")),(0,r.kt)("p",null,"Like in our previous test, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"TestUtils")," to start our plugin.\nBut rather than using ",(0,r.kt)("inlineCode",{parentName:"p"},"startPlugin"),", we now use ",(0,r.kt)("inlineCode",{parentName:"p"},"renderPlugin"),".\nWhich does the same but also renders the component in memory, using ",(0,r.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro"},"react-testing-library"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"renderer")," returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"startPlugin")," allows us to interact with the DOM."),(0,r.kt)("p",null,"Like in the previous test, we start by sending some events to the plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"(2)"),").\nAfter that (",(0,r.kt)("inlineCode",{parentName:"p"},"(3)"),"), our new data should be reflected in the dom.\nSince we used ",(0,r.kt)("inlineCode",{parentName:"p"},"<Card data-testid={row.title}")," in our component implementation (not shown above) we can search in the DOM based on that test-id to find the right element.\nBut it is also possible to search for a specific classname, etc.\nThe available queries are documented ",(0,r.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/dom-testing-library/api-queries#queries"},"here"),"."),(0,r.kt)("p",null,"Rather than just checking that the rendering isn't ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", we can also take a snapshot of the DOM, and assert that it doesn't change accidentally in the future.\nJest's ",(0,r.kt)("inlineCode",{parentName:"p"},"toMatchInlineSnapshot")," (",(0,r.kt)("inlineCode",{parentName:"p"},"(4)"),") is quite useful for that.\nBut don't overuse it as large snapshots are pretty useless and just create a maintenance burden without catching much."),(0,r.kt)("p",null,"In the next section, ",(0,r.kt)("inlineCode",{parentName:"p"},"(5)"),", we simulate updating the selection from code, and assert that the sidebar has become visible. Note that the update is wrapped in ",(0,r.kt)("inlineCode",{parentName:"p"},"act"),", which is recommended as it makes sure that updates are flushed to the DOM before we make queries and assertions on the DOM (the earlier ",(0,r.kt)("inlineCode",{parentName:"p"},"sendEvent")," does apply ",(0,r.kt)("inlineCode",{parentName:"p"},"act")," automatically and doesn't need wrapping)."),(0,r.kt)("p",null,"Alternatively, we could have emulated actually clicking a DOM element, by using ",(0,r.kt)("inlineCode",{parentName:"p"},"fireEvent.click(renderer.findByTestId('dolphin'))"),". See ",(0,r.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/dom-testing-library/api-events"},"firing events")," in the docs of React testing library for details."),(0,r.kt)("p",null,"Finally (",(0,r.kt)("inlineCode",{parentName:"p"},"(6)"),") we grab the final state of our plugin state by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"exportState")," utility.\nIt returns all the persistable state of our plugin, based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"persist")," keys we passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"createState")," in our first listing.\nWe can now assert that the plugin ends up in the desired state."))}d.isMDXComponent=!0}}]);