// Builds a self-contained scheduling checklist (HTML) from data.js + rendered output folder
const fs=require('fs'),path=require('path');const D=require(path.resolve(process.argv[2]));const OUT=process.argv[3],TITLE=process.argv[4]||'Kalendar',TIME=process.argv[5]||'9:00 malam';
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');const MON=['Jan','Feb','Mac','Apr','Mei','Jun','Jul','Ogo','Sep','Okt','Nov','Dis'];
const dirs=fs.readdirSync(OUT).filter(d=>fs.statSync(path.join(OUT,d)).isDirectory()).sort();
const cards=D.map((p,i)=>{const dir=path.join(OUT,dirs[i]);const files=fs.readdirSync(dir).sort();
 const media=files.filter(f=>/\.(png|mp4)$/.test(f)).map(f=>{const b=fs.readFileSync(path.join(dir,f)).toString('base64');const mt=f.endsWith('.mp4')?'video/mp4':'image/png';const name=`${dirs[i]}_${f}`;
  return `<figure>${mt=='video/mp4'?`<video src="data:${mt};base64,${b}" controls playsinline preload="metadata"></video>`:`<img src="data:${mt};base64,${b}">`}<a download="${name}" href="data:${mt};base64,${b}">Muat turun ${f}</a></figure>`}).join('');
 const [y,m,d]=p.d.split('-');
 return `<section class="card"><label class="hd"><input type="checkbox" data-id="${p.d}"><span><b>${p.day}, ${+d} ${MON[m-1]} · ${TIME}</b><small>${p.kind}${p.slides&&p.slides.length>1?` · ${p.slides.length} slaid (susun ikut nombor)`:''}</small></span></label>
<div class="media">${media}</div><div class="txt"><pre id="t${i}">${esc(p.cap)}</pre><button data-t="t${i}">Salin caption</button></div></section>`}).join('\n');
fs.writeFileSync(path.join(OUT,`Senarai_Semak_${TITLE.replace(/\W+/g,'_')}.html`),`<!doctype html><html lang="ms"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${TITLE}</title><style>
:root{--bg:#f5f6f8;--card:#fff;--ink:#132B46;--mut:#5b6575;--line:#dde1e7;--acc:#14A39A}
@media (prefers-color-scheme:dark){:root{--bg:#0d1824;--card:#132B46;--ink:#fff;--mut:#b7c0cc;--line:#2a4361}}
body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,system-ui,sans-serif}main{max-width:980px;margin:0 auto;padding:24px 16px 60px}
.lead{color:var(--mut)}.card{background:var(--card);border:1px solid var(--line);border-radius:12px;margin-bottom:16px;overflow:hidden}
.hd{display:flex;gap:12px;align-items:center;padding:14px 16px;border-bottom:1px solid var(--line);cursor:pointer}.hd input{width:22px;height:22px;accent-color:var(--acc)}.hd small{display:block;color:var(--mut)}.card:has(input:checked){opacity:.55}
.media{display:flex;gap:10px;overflow-x:auto;padding:16px}figure{margin:0;flex:none;width:170px}figure img,figure video{width:100%;border-radius:8px;display:block}figure a{font-size:12px;color:inherit;display:block;margin-top:6px;word-break:break-all}
.txt{padding:0 16px 16px}pre{white-space:pre-wrap;font-family:inherit;font-size:15px;line-height:1.5}button{background:var(--acc);color:#fff;border:0;border-radius:8px;padding:10px 16px;font-weight:600;cursor:pointer}
</style></head><body><main><h1>${TITLE}</h1><p class="lead">Untuk setiap post: muat turun media, salin caption, kemudian jadualkan dalam Meta Business Suite (Planner) atau app Instagram (Advanced settings → Schedule). Tandakan kotak bila siap.</p>
${cards}</main><script>
document.querySelectorAll('button[data-t]').forEach(b=>b.onclick=async()=>{const t=document.getElementById(b.dataset.t).innerText;try{await navigator.clipboard.writeText(t)}catch(e){const a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();document.execCommand('copy');a.remove()}b.textContent='Disalin ✓';setTimeout(()=>b.textContent='Salin caption',1500)});
document.querySelectorAll('input[data-id]').forEach(c=>{const k='${TITLE}-'+c.dataset.id;try{c.checked=localStorage.getItem(k)==='1'}catch(e){}c.onchange=()=>{try{localStorage.setItem(k,c.checked?'1':'0')}catch(e){}}});
</script></body></html>`);
