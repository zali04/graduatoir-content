// Facebook/Instagram ads, Pakej Utama RM99. Feed = 4:5 stills; Reels/Stories = 9:16 videos with safe:'meta'
const IG=require('../../2026-11/instagram.js');
const END={end:'cover',c1:'Elak kesilapan ini dengan',c2:'Pakej Utama · RM99',c3:'12 Bab · 70 AI Prompts · 44 Templat',c4:'Panduan bebas · Bukan penerbitan rasmi BEM'};
const kes=IG.find(p=>p.slug==='Reel_3_Kesilapan').reel;
module.exports=[
{d:'2026-11-01',day:'Iklan',kind:'Carousel 4:5 (Feed)',slug:'Ad_Carousel_Apa_Anda_Dapat',slides:[
 {type:'cover',k:'PAKEJ UTAMA · RM99',t:'Semua yang anda perlukan untuk bersedia ke Ir.',b:'Graduate to Ir. · panduan persediaan BEM PAE dibantu AI.'},
 {type:'item',n:'12',t:'Bab panduan langkah demi langkah.',b:'Dari menyusun pengalaman hingga persediaan temu duga.'},
 {type:'item',n:'70',t:'AI prompts siap guna.',b:'Untuk menyusun pengalaman, menulis semula laporan dan berlatih temu duga.'},
 {type:'item',n:'44',t:'Templat toolkit.',b:'Siap untuk diisi, supaya anda tak mula dari kertas kosong.'},
 {type:'item',n:'30',t:'Hari pelan tindakan.',b:'Langkah mingguan supaya anda kekal konsisten.'},
 {type:'end',t:'Pakej Utama RM99',b:'Ada juga Pakej Starter RM39 dan Pakej Mentor 1-to-1 RM299.',cta:'Ketahui lanjut ↓'}],
 cap:'(lihat Teks_Iklan.md)'},
{d:'2026-11-01',day:'Iklan',kind:'Gambar 4:5 (Feed)',slug:'Ad_Static_RM99',slides:[{type:'promo',price:'Pakej Utama · RM99',cta:'Ketahui lanjut ↓'}],cap:'(lihat Teks_Iklan.md)'},
{d:'2026-11-01',day:'Iklan',kind:'Video 9:16 (Reels/Stories)',slug:'Ad_Video_3_Kesilapan',reel:Object.assign({},kes,{safe:'meta'},END),cap:'(lihat Teks_Iklan.md)'},
{d:'2026-11-01',day:'Iklan',kind:'Video 9:16 (Reels/Stories)',slug:'Ad_Video_Apa_Anda_Dapat',reel:Object.assign({k:'PAKEJ UTAMA · GRADUATE TO IR.',t:'Bersedia ke Ir. dengan sistem, bukan meneka',p:['12 bab panduan langkah demi langkah.','70 AI prompts siap guna.','44 templat dan pelan tindakan 30 hari.'],safe:'meta'},END,{c1:'Semua dalam satu pakej'}),cap:'(lihat Teks_Iklan.md)'}];
