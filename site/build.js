// Builds site/index.html: a self-contained GraduaToIr link-in-bio page (logo and icons inlined)
const fs=require('fs'),path=require('path');// needs simple-icons@13.21.0 (npm install it next to this file, or set NODE_PATH)
const si=require('simple-icons');
const logo='data:image/png;base64,'+fs.readFileSync(path.join(__dirname,'logo.png')).toString('base64');
const ic=p=>`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${p}"/></svg>`;
const group='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z';
const book='M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z';
const L=[
 {t:'Ebook Graduate to Ir.',s:'12 Bab · 70 AI Prompts · 44 Templat · Pelan 30 Hari',u:'https://graduatoir.com',i:book,main:true},
 {t:'Komuniti Facebook Group',s:'Tanya soalan PAE, kongsi kemajuan · percuma',u:'https://www.facebook.com/groups/graduatoir',i:group},
 {t:'Facebook Page',s:'Tip dan kemas kini GraduaToIr',u:'https://www.facebook.com/graduatoir',i:si.siFacebook.path},
 {t:'Instagram',s:'Carousel & Reels persediaan PAE',u:'https://www.instagram.com/graduatoir/',i:si.siInstagram.path},
 {t:'Threads',s:'Perbincangan dan tip ringkas',u:'https://www.threads.com/@graduatoir',i:si.siThreads.path},
 {t:'TikTok',s:'Video tip ringkas',u:'https://www.tiktok.com/@graduatoir',i:si.siTiktok.path}];
const btn=l=>`<a class="btn${l.main?' main':''}" href="${l.u}"${l.u.startsWith('https://graduatoir.com')?'':' target="_blank" rel="noopener"'}><span class="ico">${ic(l.i)}</span><span class="tx"><b>${l.t}</b><small>${l.s}</small></span><span class="go" aria-hidden="true">→</span></a>`;
fs.writeFileSync(path.join(__dirname,'index.html'),`<!doctype html>
<html lang="ms"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>GraduaToIr · GE → Ir. Prep</title>
<meta name="description" content="GraduaToIr: persediaan BEM PAE untuk graduan jurutera Malaysia. Sertai komuniti dan ikuti tip di Facebook, Instagram, Threads dan TikTok.">
<meta property="og:title" content="GraduaToIr · GE → Ir. Prep"><meta property="og:description" content="Persediaan BEM PAE untuk graduan jurutera Malaysia."><meta property="og:type" content="website"><meta property="og:url" content="https://graduatoir.com/links/">
<meta name="theme-color" content="#132B46"><link rel="icon" href="${logo}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>
:root{--navy:#132B46;--navy2:#1B3A5C;--teal:#14A39A;--ink:#fff;--mut:#B7C3D1}
*{box-sizing:border-box}html,body{margin:0}
body{min-height:100vh;background:var(--navy);color:var(--ink);font-family:Inter,system-ui,-apple-system,sans-serif;display:flex;justify-content:center;padding:48px 16px 40px}
main{width:100%;max-width:480px;text-align:center}
.logo{width:132px;height:132px;margin:0 auto 20px;background:#fff;border-radius:28px;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 40px rgba(0,0,0,.35)}
.logo img{width:120px;height:120px}
h1{margin:0;font-size:32px;font-weight:800;letter-spacing:-.02em}h1 span{color:var(--teal)}
.tag{margin:6px 0 0;font-size:13px;font-weight:600;letter-spacing:.16em;color:var(--mut)}
.bio{margin:18px auto 28px;max-width:380px;font-size:16px;line-height:1.5;color:var(--mut)}
.links{display:flex;flex-direction:column;gap:12px}
.btn{display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:var(--navy2);border:1px solid rgba(255,255,255,.08);color:var(--ink);text-decoration:none;text-align:left;transition:transform .15s,background .15s}
.btn:hover,.btn:focus-visible{background:#22476F;transform:translateY(-2px)}.btn:focus-visible{outline:3px solid var(--teal);outline-offset:2px}
.btn.main{background:var(--teal);border-color:transparent}.btn.main:hover{background:#17B5AB}.btn.main small{color:rgba(255,255,255,.88)}
.ico{flex:none;width:40px;height:40px;border-radius:10px;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center}
.ico svg{width:20px;height:20px;fill:#fff}
.tx{flex:1;min-width:0}.tx b{display:block;font-size:16px;font-weight:600}.tx small{display:block;font-size:13px;color:var(--mut);margin-top:2px}
.go{flex:none;font-size:18px;opacity:.7}
.steps{margin:36px auto 0;display:block;opacity:.35}
footer{margin-top:16px;font-size:12px;color:var(--mut);line-height:1.6}
</style></head><body><main>
<div class="logo"><img src="${logo}" alt="Logo GraduaToIr"></div>
<h1>Gradua<span>ToIr</span></h1>
<p class="tag">GE → IR. PREP</p>
<p class="bio">Persediaan BEM PAE untuk graduan jurutera Malaysia, dari Graduate Engineer ke Ir.</p>
<nav class="links" aria-label="Pautan GraduaToIr">
${L.map(btn).join('\n')}
</nav>
<svg class="steps" width="200" height="56" viewBox="0 0 500 140" fill="none" stroke="#14A39A" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 130H120V95H220V60H320V25H420V10"/></svg>
<footer>© ${new Date().getFullYear()} GraduaToIr · Panduan pendidikan bebas · Bukan saluran rasmi BEM</footer>
</main></body></html>
`);console.log('ok',fs.statSync(path.join(__dirname,'index.html')).size);
