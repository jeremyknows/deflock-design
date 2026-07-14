// CI drift guard: fails (exit 1) when tokens/generated/df-tokens.css is stale vs its
// sources. Run from project root: node scripts/verify-tokens.mjs
// (Node-only entry; inert in the browser bundle — no static node imports.)
import { compile } from './generate-tokens.mjs';
async function main() {
  const { readFileSync } = await import('node:fs');
  const gen = readFileSync('tokens/generated/df-tokens.css', 'utf8');
  const truth = JSON.parse(readFileSync('tokens/tokens.json', 'utf8'));
  const source = JSON.parse(readFileSync('tokens/web-tokens.source.json', 'utf8'));
  const date = (gen.match(/Generated: (\d{4}-\d{2}-\d{2})/) || [])[1] || 'unknown';
  if (compile(truth, source, date) !== gen) {
    console.error('DRIFT: tokens/generated/df-tokens.css does not match its sources. Run: node scripts/generate-tokens.mjs');
    process.exit(1);
  }
  console.log('tokens in sync (' + date + ')');
}
if (typeof process !== 'undefined' && process.versions && process.versions.node && process.argv[1] && process.argv[1].endsWith('verify-tokens.mjs')) main();
