import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as S,i as l}from"./assets/vendor-BbbuE1sJ.js";const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]);const t=e[0];t&&(r=t,D(r))}},d=document.querySelector("#datetime-picker");let r=null;const o=document.querySelector("[data-start]");o.disabled=!0;function D(e){e<=new Date?(l.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):o.disabled=!1}S("#datetime-picker",p);o.addEventListener("click",()=>{if(!r)return;o.disabled=!0,d.disabled=!0;const e=setInterval(()=>{const t=r-new Date;if(t<=0){clearInterval(e),i(0),l.success({title:"Success",message:"Countdown finished!"}),d.disabled=!1;return}i(t)},1e3)});function i(e){const{days:t,hours:a,minutes:c,seconds:u}=s(e);document.querySelector("[data-days]").textContent=n(t),document.querySelector("[data-hours]").textContent=n(a),document.querySelector("[data-minutes]").textContent=n(c),document.querySelector("[data-seconds]").textContent=n(u)}function n(e){return String(e).padStart(2,"0")}function s(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));
//# sourceMappingURL=1-timer.js.map