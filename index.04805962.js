const e=["https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/certifikatGOITs1.jpg?raw=true","https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/certifikatGOITs2.jpg?raw=true","https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/certifikatGOITs3.jpg?raw=true","https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/001.jpg?raw=true","https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/002.jpg?raw=true","https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/003.jpg?raw=true","https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/004.jpg?raw=true","https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/005.jpg?raw=true","https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/006.jpg?raw=true"];document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector(".backdrop"),n=document.querySelector(".modal"),i=document.getElementById("prevButton"),s=document.getElementById("nextButton"),o=document.getElementById("image");function a(){const e=document.querySelector(".modal"),t=document.querySelector(".backdrop");e.classList.add("is-visible"),t.classList.add("is-visible"),m(),window.addEventListener("keydown",c),t.addEventListener("click",l),i.addEventListener("click",g),s.addEventListener("click",u)}function r(){n.classList.remove("is-visible"),t.classList.remove("is-visible"),window.removeEventListener("keydown",c),t.removeEventListener("click",l),i.removeEventListener("click",g),s.removeEventListener("click",u)}function c(e){"Escape"===e.key&&r()}function l(e){e.target.classList.contains("backdrop")&&r()}function m(){o.src=e[b]}function d(){const e=document.getElementById("image");e.style.transition="transform .5s ease-in-out",e.style.transform="scale(0.01, 0.98)",setTimeout((()=>{e.style.transition="transform .5s ease-in-out",e.style.transform="scaleX(1)"}),500)}function u(){b=(b+1)%e.length,d(),setTimeout((()=>{m()}),500)}function g(){b=(b-1+e.length)%e.length,d(),setTimeout((()=>{m()}),500)}document.querySelectorAll("[data-modal-open]").forEach((e=>{e.addEventListener("click",a)}));let b=0}));const t=document.querySelector(".button-up");t.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=index.04805962.js.map
