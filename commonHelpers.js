(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const c=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".header-nav-link"),e=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),c.classList.toggle("is-open");const r=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[r](document.body)};n.forEach(t=>t.addEventListener("click",e)),o.addEventListener("click",e),s.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(c.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=commonHelpers.js.map
