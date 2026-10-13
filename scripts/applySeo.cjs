const fs = require('fs');
const path = require('path');

const pagesDir = path.resolve('c:/laragon/www/FleetSumo/app/pages');

function getAllVueFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllVueFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.vue')) {
      files.push(fullPath);
    }
  }
  return files;
}

function toTitleCase(str) {
  return str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function generateSeoBlock(filePath) {
  const relative = path.relative(pagesDir, filePath);
  const route = '/' + relative.replace(/\\\\/g, '/').replace('.vue', '');
  const baseName = path.basename(filePath, '.vue');
  const focusKeyword = toTitleCase(baseName.replace(/_/g, ' '));
  const title = `${focusKeyword} – FleetSumo`;
  const description = `Informasi lengkap tentang ${focusKeyword.toLowerCase()} pada FleetSumo.`;
  const image = '/assets/images/featured-default.jpg';
  const url = `https://fleet-sumo.com${route}`;
  return `<script setup lang="ts">
import { useSeo } from '~/composables/useSeo';
useSeo({ title: '${title}', description: '${description}', keywords: '${focusKeyword}', image: '${image}', url: '${url}' });
</script>`;
}

const vueFiles = getAllVueFiles(pagesDir);

vueFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  if (!content.includes('useSeo')) {
    const seoBlock = generateSeoBlock(file);
    if (content.includes('<script setup')) {
      content = content.replace(/<script setup[^>]*>/, match => `${match}\n${seoBlock}`);
    } else {
      content = `${seoBlock}\n${content}`;
    }
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
});
