const fs = require('fs');
const path = require('path');

function extractSeo(content) {
  const seo = {};
  const titleMatch = /title\s*[:=]\s*['"]([^'\"]+)['"]/i.exec(content);
  const descMatch = /description\s*[:=]\s*['"]([^'\"]+)['"]/i.exec(content);
  const keywordsMatch = /keywords\s*[:=]\s*['"]([^'\"]+)['"]/i.exec(content);
  if (titleMatch) seo.title = titleMatch[1];
  if (descMatch) seo.description = descMatch[1];
  if (keywordsMatch) seo.keywords = keywordsMatch[1];
  return seo;
}

function scorePage(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const seo = extractSeo(content);
  let score = 0;
  if (seo.title) { score += 2; if (/Cek Kendaraan/.test(seo.title)) score += 2; }
  if (seo.description) { const len = seo.description.length; if (len >= 80 && len <= 160) score += 2; else if (len >= 50) score += 1; }
  if (seo.keywords) { const count = seo.keywords.split(',').filter(k=>k.trim()).length; if (count >= 3) score += 2; else if (count>0) score += 1; }
  if (content.includes('<section class="faq"')) score += 2;
  if (content.match(/<h1[^>]*>.*Cek Kendaraan.*<\/h1>/i)) score += 2;
  if (!/(best|fastest|unbeatable)/i.test(content)) score += 1;
  return Math.min(score, 10);
}

function walk(dir, results) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, results);
    } else if (entry.isFile() && fullPath.endsWith('.vue')) {
      const route = fullPath.replace(/.*\\app\\pages/, '').replace(/\\.vue$/, '').replace(/\\index$/, '/');
      const score = scorePage(fullPath);
      results.push({ route: route === '' ? '/' : route, score });
    }
  }
}

const pagesDir = path.resolve('app/pages');
const results = [];
walk(pagesDir, results);
fs.writeFileSync('reports/content_quality_scores.json', JSON.stringify(results, null, 2), 'utf8');
console.log('Scores written');
