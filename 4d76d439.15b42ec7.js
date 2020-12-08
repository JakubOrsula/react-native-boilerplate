(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(75)),i={slug:"/Configuration",title:"Configuration"},c={unversionedId:"2_Getting Started/2_2_Configuration",id:"2_Getting Started/2_2_Configuration",isDocsHomePage:!1,title:"Configuration",description:"Change the appicon",source:"@site/docs/2_Getting Started/2_2_Configuration.md",slug:"/Configuration",permalink:"/react-native-boilerplate/docs/Configuration",editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs/docs/2_Getting Started/2_2_Configuration.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/react-native-boilerplate/docs/Installation"},next:{title:"Theme \ud83c\udfa8",permalink:"/react-native-boilerplate/docs/Theme"}},p=[{value:"Change the appicon",id:"change-the-appicon",children:[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}]},{value:"Change the splash screen icon",id:"change-the-splash-screen-icon",children:[{value:"iOS",id:"ios-1",children:[]},{value:"Android",id:"android-1",children:[]}]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"change-the-appicon"},"Change the appicon"),Object(o.b)("p",null,"To help generate appicons, you can use an online tool like ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://appicon.co/"}),"appicon")," to generate for both iOS and Android all icons and image sets."),Object(o.b)("h3",{id:"ios"},"iOS"),Object(o.b)("p",null,"To change the appicon of the iOS application, you need to replace all the content of "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"src > ios > *name_of_your_app* > Images.xcassets > AppIcon.appiconset\n")),Object(o.b)("p",null,"with your appicons generated with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://appicon.co/"}),"appicon")," for example."),Object(o.b)("h3",{id:"android"},"Android"),Object(o.b)("p",null,"To change the appicon of the Android application, you need to replace all the content of "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"src > android > app > src > res\n")),Object(o.b)("p",null,"with your appicons generated with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://appicon.co/"}),"appicon")," for example."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"change-the-splash-screen-icon"},"Change the splash screen icon"),Object(o.b)("h3",{id:"ios-1"},"iOS"),Object(o.b)("p",null,"You can use the same tool (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://appicon.co/"}),"appicon"),") to generate image sets (@1x, @2x, @3x).\nThen you just have to replace : ",Object(o.b)("inlineCode",{parentName:"p"},"Splash_icon@1x.png"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Splash_icon@2x.png"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Splash_icon@3x.png")," with yours in :"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"src > ios > *name_of_your_app* > Images.xcassets > SplashIcon.imageset\n")),Object(o.b)("h3",{id:"android-1"},"Android"),Object(o.b)("p",null,"You just have to replace the splash_icon.png located at : "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"src > android > app > src > res > drawable\n")))}s.isMDXComponent=!0},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);