!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var l=o("1WSnx"),n=document.querySelector(".feedback-form"),i=n.querySelector('[name="email"]'),s=n.querySelector('[name="message"]'),u=localStorage.getItem("feedback-form-state");if(u){var f=JSON.parse(u);i.value=f.email,s.value=f.message}else n.reset();n.addEventListener("input",e(l).throttle((function(){var e={email:i.value,message:s.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),n.addEventListener("submit",(function(e){e.preventDefault();var t={email:i.value,message:s.value};console.log(t),localStorage.removeItem("feedback-form-state"),n.reset()}))}();
//# sourceMappingURL=03-feedback.d0df0e76.js.map
