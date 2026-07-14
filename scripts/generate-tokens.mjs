// DeFlock Design token compiler (run with: node scripts/generate-tokens.mjs)
// Reads tokens/tokens.json (machine truth, locked) + tokens/web-tokens.source.json
// (three-tier web definitions) and emits tokens/generated/df-tokens.css.
// Replaces the hand-synced mirror (src/styles/tokens.css) that caused drift.
export function compile(truth, source, date) {
  const jsonPath = (p) => p.split('.').reduce((n, k) => (n == null ? undefined : n[k]), truth);
  const resolve = (def, name) => def.value
    .replace(/\{json:([^}]+)\}/g, (_, p) => {
      const hit = jsonPath(p);
      if (hit === undefined) {
        if (def.fallback !== undefined) return def.fallback;
        throw new Error('--df-' + name + ": pointer '" + p + "' missing, no fallback");
      }
      return String(hit);
    })
    .replace(/\{([a-z][a-z0-9-]*)\}/g, (_, ref) => 'var(--df-' + ref + ')');
  const kindOf = (name) =>
    /(^|-)(color|surface|text|backdrop|wash|border)/.test(name) ? 'color'
    : /shadow|inset|focus-ring/.test(name) ? 'shadow'
    : /font|weight|tracking|leading|size-|type-/.test(name) ? 'font'
    : /radius/.test(name) ? 'radius'
    : /space|pad$|control-h|sheet-w|avatar-size|chrome|-offset/.test(name) ? 'spacing'
    : 'other';
  const lines = [
    '/* GENERATED FILE — DO NOT EDIT.',
    ' * Compiled by scripts/generate-tokens.mjs from tokens/tokens.json (locked machine',
    ' * truth, 2026-07-11) + tokens/web-tokens.source.json (three-tier web definitions).',
    ' * Generated: ' + date + '. Edit the sources and re-run. */',
    ':root {',
  ];
  for (const [tier, label] of [
    ['tier1', 'TIER 1 — PRIMITIVES (plates, type, texture recipes, physical values)'],
    ['tier2', 'TIER 2 — SEMANTIC (surfaces, text, borders, interaction, scale)'],
    ['tier3', 'TIER 3 — COMPONENT (per-component contract)'],
  ]) {
    lines.push('  /* ' + label + ' */');
    for (const [name, def] of Object.entries(source[tier])) {
      const kind = kindOf(name);
      lines.push('  --df-' + name + ': ' + resolve(def, name) + ';' + (kind === 'other' ? ' /* @kind other */' : ''));
    }
  }
  lines.push(
    '  /* LEGACY COMPAT — names consumed by shipped src/ CSS; migrate then delete (docs/migration-map.md) */',
    '  --df-texture-halftone-image: var(--df-halftone-image); /* @kind other */',
    '  --df-texture-halftone-size: var(--df-halftone-size); /* @kind other */',
    '  --df-texture-reg-mark-stroke: var(--df-stroke-hairline); /* @kind other */',
    '  --df-texture-misregistration-shadow: var(--df-misreg-shadow);',
    '  --df-texture-stamp-shadow: var(--df-stamp-inset);',
    '  --df-texture-stamp-rotate-min: var(--df-tilt-stamp-min); /* @kind other */',
    '  --df-texture-stamp-rotate-max: var(--df-tilt-stamp-max); /* @kind other */',
    '  --df-space-base-unit: var(--df-space-unit);',
    '  --df-layout-chrome-margin: var(--df-chrome-margin);',
    '  --df-type-slam-family: var(--df-font-slam);',
    '  --df-type-label-family: var(--df-font-label);',
    '  --df-type-meta-family: var(--df-font-meta);',
    '  --df-font-display: var(--df-font-slam);',
    '}',
    '',
  );
  return lines.join('\n');
}
// Node CLI entry (run from project root) — inert in the browser bundle.
async function main() {
  const { readFileSync, writeFileSync, mkdirSync } = await import('node:fs');
  const truth = JSON.parse(readFileSync('tokens/tokens.json', 'utf8'));
  const source = JSON.parse(readFileSync('tokens/web-tokens.source.json', 'utf8'));
  mkdirSync('tokens/generated', { recursive: true });
  writeFileSync('tokens/generated/df-tokens.css', compile(truth, source, new Date().toISOString().slice(0, 10)));
  console.log('wrote tokens/generated/df-tokens.css');
}
if (typeof process !== 'undefined' && process.versions && process.versions.node && process.argv[1] && process.argv[1].endsWith('generate-tokens.mjs')) main();
