import {Script} from 'node:vm';
import {readFileSync,writeFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const js=['data.js','engine.js','render.js','app.js'].map(f=>read('dist/'+f).replace(/^import[^\n]*\n/gm,'').replace(/^export \{[^\n]*\n/gm,'').replace(/\bexport /g,'')).join('\n');
new Script(js,{filename:'Jouer.html'});
const css=read('dist/style.css').replace(/@import [^;]+;/g,'');
const html=read('dist/index.html').replace('<link rel="stylesheet" href="style.css">','<style>'+css+'</style>').replace('<script type="module" src="app.js"></script>','<script type="module">'+js+'</script>');
writeFileSync(new URL('../Jouer.html',import.meta.url),html);
console.log('Jouer.html : version autonome régénérée.');
