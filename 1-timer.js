import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i,f as y}from"./assets/vendor-BbbuE1sJ.js";const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0])}},d=document.querySelector("#datetime-picker");let r=null;d.addEventListener("change",()=>{const t=d._flatpickr.selectedDates[0];t&&(r=t,p(r))});function p(e){const t=new Date,o=document.querySelector("[data-start]");e<=t?(i.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):o.disabled=!1}y("#datetime-picker",S);document.querySelector("[data-start]").addEventListener("click",()=>{if(!r)return;document.querySelector("[data-start]").disabled=!0,document.querySelector("#datetime-picker").disabled=!0;const e=setInterval(()=>{const t=r-new Date;if(t<=0){clearInterval(e),u(0),i.success({title:"Success",message:"Countdown finished!"}),document.querySelector("#datetime-picker").disabled=!1;return}u(t)},1e3)});function u(e){const{days:t,hours:o,minutes:c,seconds:s}=a(e);document.querySelector("[data-days]").textContent=n(t),document.querySelector("[data-hours]").textContent=n(o),document.querySelector("[data-minutes]").textContent=n(c),document.querySelector("[data-seconds]").textContent=n(s)}function n(e){return String(e).padStart(2,"0")}function a(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}console.log(a(2e3));console.log(a(14e4));console.log(a(2414e4));
//# sourceMappingURL=1-timer.js.map
