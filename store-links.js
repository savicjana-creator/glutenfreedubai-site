// Set each URL only after verifying PUBLIC availability for that platform.
// A TestFlight or closed-testing release is not a public launch.
(function () {
  var stores = {
    ios: { url: '', host: 'apps.apple.com', label: 'Download on the', name: 'App Store' },
    android: { url: '', host: 'play.google.com', label: 'Get it on', name: 'Google Play' }
  };
  Object.keys(stores).forEach(function (key) {
    var store = stores[key];
    if (!store.url) return;
    var url;
    try { url = new URL(store.url); } catch (_) { return; }
    if (url.protocol !== 'https:' || url.hostname !== store.host || url.username || url.password) return;
    document.querySelectorAll('[data-store="' + key + '"]').forEach(function (placeholder) {
      var link = document.createElement('a');
      link.className = 'store'; link.href = url.href;
      var small = document.createElement('small'); small.textContent = store.label;
      link.appendChild(small); link.appendChild(document.createTextNode(store.name));
      placeholder.replaceWith(link);
    });
  });
})();
