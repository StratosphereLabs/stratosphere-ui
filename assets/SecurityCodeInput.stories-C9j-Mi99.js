import{j as r}from"./jsx-runtime-DiklIkkE.js";import{c as F,u as O,F as _}from"./FormLabelText-BYRBbg7S.js";import"./FormCheckbox-CmXjOFpU.js";import{F as o}from"./FormControl-BdTh8q4i.js";import"./FormError-DCh6zGQK.js";import"./FormFileInput-Pog9VxRe.js";import"./FormRadioGroupOption-B7rU_Jup.js";import"./FormRangeSlider-Danb-6H0.js";import"./FormTextarea-DF7-D8_R.js";import"./FormToggleSwitch-BqtyrF8U.js";import{c as q}from"./index-lhGYx47h.js";import{r as s}from"./index-DRjF_FHU.js";import"./lodash-CjHNWSW5.js";import"./label-BHy4_Co_.js";import"./keyboard-CkwPyo54.js";import"./description-BiWv9uhY.js";import"./Button-D0Yf2K26.js";import"./useFocusRing-CeEfTI_f.js";import"./index-Bx0Ph3cE.js";import"./hidden-VT-llRfc.js";import"./bugs-DpEN4NTH.js";import"./focus-management-BpNHtozA.js";const y=/^\d$/,N=/^\d\d\d\d\d\d$/,u={input:e=>e,output:e=>{if(e.length===0)return"";const n=parseInt(e.charAt(0));return Number.isNaN(n)?"":n.toString()}},d=e=>({target:{value:n}})=>{var t;n.match(y)!==null&&((t=e==null?void 0:e.current)==null||t.focus())},p=({className:e,inputRef:n,inputClassName:t,name:i,nextFocusRef:m})=>{const{setValue:S}=F(),x=s.useRef(null),T=n??x,f=s.useRef(null),g=s.useRef(null),l=s.useRef(null),h=s.useRef(null),R=s.useRef(null);return r.jsxs("div",{className:q("flex gap-2",e),children:[r.jsx(o,{hideErrorMessage:!0,inputRef:T,onChange:({target:{value:c}})=>{var E,j;c.match(N)!==null?(c.split("").forEach(($,b)=>{S(`${i}.digit${b+1}`,$??"")}),(E=m==null?void 0:m.current)==null||E.focus()):c.match(y)!==null&&((j=f.current)==null||j.focus())},inputClassName:t,inputMode:"numeric",name:`${i}.digit1`,transform:u}),r.jsx(o,{hideErrorMessage:!0,inputRef:f,onChange:d(g),inputClassName:t,inputMode:"numeric",name:`${i}.digit2`,transform:u}),r.jsx(o,{hideErrorMessage:!0,inputRef:g,onChange:d(l),inputClassName:t,inputMode:"numeric",name:`${i}.digit3`,transform:u}),r.jsx(o,{hideErrorMessage:!0,inputRef:l,onChange:d(h),inputClassName:t,inputMode:"numeric",name:`${i}.digit4`,transform:u}),r.jsx(o,{hideErrorMessage:!0,inputRef:h,onChange:d(R),inputClassName:t,inputMode:"numeric",name:`${i}.digit5`,transform:u}),r.jsx(o,{hideErrorMessage:!0,inputRef:R,onChange:d(m),inputClassName:t,inputMode:"numeric",name:`${i}.digit6`,transform:u})]})};p.__docgenInfo={description:"",methods:[],displayName:"SecurityCodeInput",props:{className:{required:!1,tsType:{name:"string"},description:""},inputRef:{required:!0,tsType:{name:"RefObject",elements:[{name:"HTMLInputElement"}],raw:"RefObject<HTMLInputElement>"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},nextFocusRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"NextElement"}],raw:"RefObject<NextElement>"},description:""}}};const V={digit1:"",digit2:"",digit3:"",digit4:"",digit5:"",digit6:""},ne={title:"SecurityCodeInput",component:p},a={args:{name:"code"},render:e=>{const n=O({defaultValues:{code:V}});return r.jsx(_,{methods:n,onFormSubmit:()=>null,children:r.jsx(p,{...e})})}};var I,M,C;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'code'
  },
  render: args => {
    const methods = useForm({
      defaultValues: {
        code: defaultSecurityCodeInputValues
      }
    });
    return <Form methods={methods} onFormSubmit={() => null}>
        <SecurityCodeInput {...args} />
      </Form>;
  }
}`,...(C=(M=a.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const ie=["Default"];export{a as Default,ie as __namedExportsOrder,ne as default};
