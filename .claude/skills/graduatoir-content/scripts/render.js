// Renders IG carousel/single/promo slides (1080x1350) and reels (1080x1920) from data.js
const {chromium}=require('playwright');const fs=require('fs');const {execFileSync}=require('child_process');
const path=require('path');const D=require(path.resolve(process.argv[2]));const OUT=process.argv[3];const SK=path.join(__dirname,'..');const uri=f=>'data:image/png;base64,'+fs.readFileSync(f).toString('base64');const A=path.join(SK,'assets');
const FD='file://'+path.join(SK,'node_modules/@fontsource/inter/files');const COVER=uri(path.join(A,'ebook_cover.png'));
const WM='Gradua<span style="color:#14A39A">ToIr</span>';const LOGOF=path.join(A,'logo_official.png');const OFFICIAL=LOGOF&&fs.existsSync(LOGOF)?uri(LOGOF):null;
const FONT=`@font-face{font-family:Inter;src:url("${FD}/inter-latin-400-normal.woff2");font-weight:400}@font-face{font-family:Inter;src:url("${FD}/inter-latin-600-normal.woff2");font-weight:600}@font-face{font-family:Inter;src:url("${FD}/inter-latin-800-normal.woff2");font-weight:800}html,body{margin:0}`;
const CSS=FONT+`#c{width:1080px;height:1350px;background:#132B46;color:#fff;font-family:Inter;position:relative;overflow:hidden}
.k{position:absolute;left:90px;top:100px;font-size:30px;font-weight:600;letter-spacing:.16em;opacity:.75}
.mid{position:absolute;left:90px;right:90px;top:250px}.n{font-size:150px;font-weight:800;line-height:1;color:#14A39A;margin-bottom:30px}
.t{font-size:104px;font-weight:800;line-height:1.05;letter-spacing:-.02em}.r{width:120px;height:10px;background:#14A39A;margin:60px 0 46px}
.b{font-size:44px;font-weight:400;line-height:1.4;opacity:.85}.ft{position:absolute;left:90px;right:90px;bottom:90px;display:flex;justify-content:space-between;font-size:32px;font-weight:600}.ft span:last-child{opacity:.75}
.pc img{position:absolute;left:330px;top:150px;width:420px;box-shadow:0 30px 80px rgba(0,0,0,.5)}.pc .tx{position:absolute;left:90px;right:90px;top:870px;text-align:center}.pc .tx b{display:block;font-size:76px;font-weight:800;letter-spacing:-.02em}.pc .tx span{display:block;font-size:38px;opacity:.85;margin-top:22px;line-height:1.5}`;
const html=(s,i,N)=>{if(s.type==='promo')return `<div id="c" class="pc"><img src="${COVER}"><div class="tx"><b>Graduate to Ir.</b><span>12 Bab · 70 AI Prompts · 44 Toolkit Templates<br>Pelan Tindakan 30 Hari</span></div><div class="ft"><span>${WM}</span><span>Link di bio ↓</span></div></div>`;
 const k=s.k||s.l||(N>1?`${i+1} / ${N}`:''),big=s.type==='cover'?104:s.type==='end'?88:s.small?60:84;
 const right=s.type==='end'||s.type==='single'?(s.cta||'Komen di bawah ↓'):'Leret →';
 return `<div id="c"><div class="k">${k}</div><div class="mid">${s.n?`<div class="n">${s.n}</div>`:''}<div class="t" style="font-size:${big}px">${s.t}</div><div class="r"></div><div class="b">${s.b||''}</div></div><div class="ft"><span>${WM}</span><span>${right}</span></div></div>`};
const fit=()=>{const t=document.querySelector('.t'),m=document.querySelector('.mid');if(!t||!m)return;let f=parseFloat(t.style.fontSize);while(m.getBoundingClientRect().bottom>1150&&f>44){f-=4;t.style.fontSize=f+'px'}
 const b=document.querySelector('.b');let g=44;while(m.getBoundingClientRect().bottom>1150&&g>30){g-=2;b.style.fontSize=g+'px'}return Math.round(m.getBoundingClientRect().bottom)};
const RCSS=FONT+`#v{width:1080px;height:1920px;background:#132B46;color:#fff;font-family:Inter;position:relative;overflow:hidden}.a{position:absolute;left:90px;right:90px}
.k{top:290px;font-size:32px;font-weight:600;letter-spacing:.16em;opacity:.75}.t{top:360px;font-size:96px;font-weight:800;line-height:1.02;letter-spacing:-.02em}.rule{top:740px;width:120px;height:10px;background:#14A39A}
.p{display:flex;gap:34px;align-items:flex-start;font-size:56px;font-weight:600;line-height:1.2}.p i{flex:none;width:92px;height:92px;border:6px solid #14A39A;color:#14A39A;border-radius:50%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;font-style:normal;font-weight:800;font-size:48px;margin-top:-10px}
.p1{top:820px}.p2{top:1020px}.p3{top:1220px}#s1,#s2{position:absolute;inset:0}#s2{opacity:0}#s2 img{position:absolute;left:290px;top:300px;width:500px}#s2 img.cv{box-shadow:0 30px 80px rgba(0,0,0,.5)}
#s2 .c1{top:1150px;text-align:center;font-size:44px;font-weight:600;opacity:.8}#s2 .c2{top:1220px;text-align:center;font-size:84px;font-weight:800;letter-spacing:-.02em}#s2 .c3{top:1360px;text-align:center;font-size:40px;opacity:.8}svg.st{position:absolute;right:-20px;bottom:90px}`;
const rhtml=r=>`<div id="v"><svg class="st" width="700" height="440" viewBox="0 0 1000 620" fill="none" stroke="#14A39A" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"><path id="sp" d="M60 580H260V440H460V300H660V160H860V40" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></svg>
<div id="s1"><div class="a k" id="k">${r.k}</div><div class="a t" id="t">${r.t}</div><div class="a rule" id="r"></div>${r.p.map((x,i)=>`<div class="a p p${i+1}" id="p${i+1}"><i>${i+1}</i><span>${x}</span></div>`).join('')}</div>
<div id="s2">${r.end==='cover'?`<img id="cv" class="cv" src="${COVER}">`:OFFICIAL?`<div id="cv" style="position:absolute;left:240px;top:330px;width:600px;height:600px;background:#fff;border-radius:40px;display:flex;align-items:center;justify-content:center"><img src="${OFFICIAL}" style="width:540px;position:static"></div>`:`<div id="cv" style="position:absolute;left:0;right:0;top:640px;text-align:center;font-size:130px;font-weight:800;letter-spacing:-.02em">${WM}<div style="font-size:44px;font-weight:600;letter-spacing:.12em;opacity:.8;margin-top:20px">GE → IR. PREP</div></div>`}<div class="a c1">${r.c1}</div><div class="a c2">${r.c2}</div><div class="a c3">${r.c3}</div></div></div>`;
const anim=()=>{const ease=x=>1-Math.pow(1-Math.min(1,Math.max(0,x)),3);const inn=(id,t,t0,d=.5,dy=40)=>{const e=document.getElementById(id);if(!e)return;const p=ease((t-t0)/d);e.style.opacity=p;e.style.transform='translateY('+(1-p)*dy+'px)'};
 window.render=t=>{inn('k',t,.2);inn('t',t,.4,.6);inn('r',t,.9,.4,0);inn('p1',t,2.2);inn('p2',t,4.6);inn('p3',t,7.0);const x=ease((t-9.9)/.6);document.getElementById('sp').style.strokeDashoffset=1-ease(t/10);
 document.querySelector('svg.st').style.opacity=.35*(1-x);document.getElementById('s1').style.opacity=1-x;document.getElementById('s2').style.opacity=x;document.getElementById('cv').style.transform='scale('+(0.94+0.06*ease((t-9.9)/3))+')'}};
(async()=>{const b=await chromium.launch();fs.mkdirSync(OUT,{recursive:true});
 for(const [pi,p] of D.entries()){const dir=`${OUT}/${String(pi+1).padStart(2,'0')}_${p.d}_${p.slug}`;fs.mkdirSync(dir,{recursive:true});p.dir=dir;
  if(p.slides){const pg=await b.newPage({viewport:{width:1080,height:1350}});
   for(const [i,s] of p.slides.entries()){await pg.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${html(s,i,p.slides.length)}</body></html>`);await pg.evaluate(()=>document.fonts.ready);
    await pg.waitForFunction(()=>[...document.images].every(i=>i.complete));const bottom=await pg.evaluate(fit);if(bottom>1150)console.warn('OVERFLOW',dir,i,bottom);
    await pg.screenshot({path:`${dir}/${String(i+1).padStart(2,'0')}.png`});}await pg.close();}
  if(p.reel){const pg=await b.newPage({viewport:{width:1080,height:1920}});await pg.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${RCSS}</style></head><body>${rhtml(p.reel)}</body></html>`);
   await pg.evaluate(()=>document.fonts.ready);await pg.waitForFunction(()=>[...document.images].every(i=>i.complete));await pg.evaluate(anim);const fr=`${dir}/_frames`;fs.mkdirSync(fr,{recursive:true});
   for(let i=0;i<420;i++){await pg.evaluate(t=>render(t),i/30);await pg.screenshot({path:`${fr}/${String(i).padStart(4,'0')}.jpg`,type:'jpeg',quality:95});}await pg.close();
   const a=fs.existsSync(path.join(A,'music.m4a'))?path.join(A,'music.m4a'):null,args=['-v','error','-y','-framerate','30','-i',`${fr}/%04d.jpg`];
   if(a)args.push('-i',a,'-i',a,'-filter_complex','[1:a][2:a]acrossfade=d=1.5[a0];[a0]atrim=0:14,afade=t=in:d=0.3,afade=t=out:st=12.5:d=1.5,loudnorm=I=-14:TP=-1.5[a]','-map','0:v','-map','[a]','-c:a','aac','-b:a','192k','-ar','48000');
   args.push('-c:v','libx264','-profile:v','high','-preset','slow','-crf','18','-pix_fmt','yuv420p','-movflags','+faststart','-t','14',`${dir}/${p.slug}.mp4`);execFileSync('ffmpeg',args);
   fs.copyFileSync(`${fr}/0090.jpg`,`${dir}/thumbnail.jpg`);fs.rmSync(fr,{recursive:true});}
  fs.writeFileSync(`${dir}/caption.txt`,p.cap);console.log('done',dir);}
 await b.close();})();
