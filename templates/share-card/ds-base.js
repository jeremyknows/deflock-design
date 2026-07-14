// templates/share-card/ds-base.js — DeFlock system + press-check for this template.
(() => {
  const base = '../..';
  window.__dfBase = base;
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  for (const p of ['_ds_bundle.js', 'register/press-check.js']) {
    const s = document.createElement('script');
    s.src = base + '/' + p;
    s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line at the bound _ds/<folder> tree relative to this page');
    document.head.appendChild(s);
  }
})();
