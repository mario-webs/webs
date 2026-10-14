// Genera las páginas de la raíz a partir de src/: node build.mjs
// Cada src/pages/<nombre>.html empieza con <!--{json}--> (title, description, nav, bodyclass, head)
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import assert from 'node:assert';

const layout = readFileSync('src/layout.html', 'utf8');
const logo = readFileSync('src/logo.html', 'utf8');

for (const file of readdirSync('src/pages').filter((f) => f.endsWith('.html'))) {
  const src = readFileSync(`src/pages/${file}`, 'utf8');
  const [, json, main] = src.match(/^<!--(\{[\s\S]*?\})-->\r?\n([\s\S]*)$/) ?? assert.fail(`${file}: falta la cabecera <!--{json}-->`);
  const meta = JSON.parse(json);
  assert.equal(main.match(/<h1[\s>]/g)?.length, 1, `${file}: debe tener un solo h1`);
  let html = layout
    .replaceAll('{{title}}', meta.title)
    .replaceAll('{{description}}', meta.description)
    .replace('{{bodyclass}}', meta.bodyclass ?? '')
    .replace('{{head}}', meta.head ?? '')
    .replace('{{main}}', main.trim())
    .replace('{{logo}}', logo.trim());
  if (meta.nav) html = html.replaceAll(`data-nav="${meta.nav}"`, `data-nav="${meta.nav}" aria-current="page"`);
  assert(!/\{\{\w+\}\}/.test(html), `${file}: queda un hueco sin rellenar`);
  writeFileSync(file, html);
  console.log('ok', file);
}
