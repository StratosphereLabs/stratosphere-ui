import{j as i}from"./jsx-runtime-DiklIkkE.js";import{c as S,u as T,F as b}from"./FormLabelText-BYRBbg7S.js";import"./FormCheckbox-CmXjOFpU.js";import{F as u}from"./FormControl-BGKnddOL.js";import"./FormError-DCh6zGQK.js";import"./FormFileInput-Pog9VxRe.js";import"./FormRadioGroupOption-B7rU_Jup.js";import"./FormRangeSlider-Danb-6H0.js";import"./FormTextarea-DF7-D8_R.js";import"./FormToggleSwitch-BqtyrF8U.js";import{c as F}from"./index-lhGYx47h.js";import{r as d}from"./index-DRjF_FHU.js";import"./lodash-CjHNWSW5.js";import"./label-BHy4_Co_.js";import"./keyboard-CkwPyo54.js";import"./description-BiWv9uhY.js";import"./Button-D0Yf2K26.js";import"./useFocusRing-CeEfTI_f.js";import"./index-Bx0Ph3cE.js";import"./hidden-VT-llRfc.js";import"./bugs-DpEN4NTH.js";import"./focus-management-BpNHtozA.js";const a={input:e=>e,output:e=>{if(e.length===0)return"";const n=parseInt(e.charAt(0));return Number.isNaN(n)?"":n.toString()}},O=/^\d$/,m=e=>({target:{value:n}})=>{var r;n.match(O)!==null&&((r=e==null?void 0:e.current)==null||r.focus())},g=({className:e,inputRef:n,inputClassName:r,name:t,nextFocusRef:p})=>{const{setValue:o}=S(),x=d.useRef(null),C=n??x,f=d.useRef(null),l=d.useRef(null),h=d.useRef(null),R=d.useRef(null),j=d.useRef(null);return i.jsxs("div",{className:F("flex gap-2",e),children:[i.jsx(u,{hideErrorMessage:!0,inputRef:C,onChange:m(f),onPaste:E=>{var I;const s=E.clipboardData.getData("text").split("");o(`${t}.digit1`,s[0]??""),o(`${t}.digit2`,s[1]??""),o(`${t}.digit3`,s[2]??""),o(`${t}.digit4`,s[3]??""),o(`${t}.digit5`,s[4]??""),o(`${t}.digit6`,s[5]??""),(I=p==null?void 0:p.current)==null||I.focus()},inputClassName:r,inputMode:"numeric",name:`${t}.digit1`,transform:a}),i.jsx(u,{hideErrorMessage:!0,inputRef:f,onChange:m(l),inputClassName:r,inputMode:"numeric",name:`${t}.digit2`,transform:a}),i.jsx(u,{hideErrorMessage:!0,inputRef:l,onChange:m(h),inputClassName:r,inputMode:"numeric",name:`${t}.digit3`,transform:a}),i.jsx(u,{hideErrorMessage:!0,inputRef:h,onChange:m(R),inputClassName:r,inputMode:"numeric",name:`${t}.digit4`,transform:a}),i.jsx(u,{hideErrorMessage:!0,inputRef:R,onChange:m(j),inputClassName:r,inputMode:"numeric",name:`${t}.digit5`,transform:a}),i.jsx(u,{hideErrorMessage:!0,inputRef:j,onChange:m(p),inputClassName:r,inputMode:"numeric",name:`${t}.digit6`,transform:a})]})};g.__docgenInfo={description:"",methods:[],displayName:"SecurityCodeInput",props:{className:{required:!1,tsType:{name:"string"},description:""},inputRef:{required:!0,tsType:{name:"RefObject",elements:[{name:"HTMLInputElement"}],raw:"RefObject<HTMLInputElement>"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},nextFocusRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"NextElement"}],raw:"RefObject<NextElement>"},description:""}}};const q={digit1:"",digit2:"",digit3:"",digit4:"",digit5:"",digit6:""},te={title:"SecurityCodeInput",component:g},c={args:{name:"code"},render:e=>{const n=T({defaultValues:{code:q}});return i.jsx(b,{methods:n,onFormSubmit:()=>null,children:i.jsx(g,{...e})})}};var M,$,y;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(y=($=c.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};const re=["Default"];export{c as Default,re as __namedExportsOrder,te as default};
