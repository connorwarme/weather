(()=>{const t=(t,e)=>{const n=document.createElement(`${t}`);return null==e||((t,e)=>{Object.entries(e).forEach((([e,n])=>{t.setAttribute(e,n)}))})(n,e),n},e=document.querySelector("div.main"),n=t("input",{class:"inputField",id:"inputField"}),i=t("button",{class:"submitBtn","aria-label":"Submit"});i.textContent="Submit",e.appendChild(n),e.appendChild(i),i.addEventListener("click",(()=>{(()=>{const t=n.value;console.log(t),n.value=""})()}))})();