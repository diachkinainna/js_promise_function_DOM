function e(e,t){if(e&&t)return new Promise(function(n,c){e.addEventListener(t,function(){n("It was ".concat(t," on the element: ").concat(e.nodeName,", id: ").concat(e.id,"."))})})}var t=function(e){if(e){var t=document.createElement("div");t.textContent=e,t.classList.add("message"),document.body.append(t)}},n=document.getElementById("login"),c=document.getElementById("password"),d=document.getElementById("submit");e(n,"click").then(t),e(c,"click").then(t),e(d,"click").then(t),e(n,"input").then(t),e(c,"input").then(t),e(n,"blur").then(t),e(c,"blur").then(t),e(d,"blur").then(t);
//# sourceMappingURL=index.08581159.js.map
