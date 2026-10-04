(function () {
  "use strict";
  var config = window.GFD_NEWSLETTER;
  if (!config || config.ready !== true) return;
  try {
    var url = new URL(config.signupUrl);
    if (url.protocol !== "https:" || url.username || url.password) return;
    document.getElementById("signup-link").href = url.href;
    document.getElementById("signup").hidden = false;
    document.getElementById("coming-soon").hidden = true;
  } catch (_) {
    // Missing/invalid configuration leaves an honest coming-soon state.
  }
})();
