import{r as l}from"./index-DRjF_FHU.js";import{p as d,o as s,a as g}from"./keyboard-CUk6zo9K.js";function m(t){let e=t.width/2,n=t.height/2;return{top:t.clientY-n,right:t.clientX+e,bottom:t.clientY+n,left:t.clientX-e}}function b(t,e){return!(!t||!e||t.right<e.left||t.left>e.right||t.bottom<e.top||t.top>e.bottom)}function y({disabled:t=!1}={}){let e=l.useRef(null),[n,r]=l.useState(!1),o=d(),i=s(()=>{e.current=null,r(!1),o.dispose()}),c=s(p=>{if(o.dispose(),e.current===null){e.current=p.currentTarget,r(!0);{let u=g(p.currentTarget);o.addEventListener(u,"pointerup",i,!1),o.addEventListener(u,"pointermove",a=>{if(e.current){let f=m(a);r(b(f,e.current.getBoundingClientRect()))}},!1),o.addEventListener(u,"pointercancel",i,!1)}}});return{pressed:n,pressProps:t?{}:{onPointerDown:c,onPointerUp:i,onClick:i}}}function E(t,e){return l.useMemo(()=>{var n;if(t.type)return t.type;let r=(n=t.as)!=null?n:"button";if(typeof r=="string"&&r.toLowerCase()==="button"||(e==null?void 0:e.tagName)==="BUTTON"&&!e.hasAttribute("type"))return"button"},[t.type,t.as,e])}export{E as e,y as w};