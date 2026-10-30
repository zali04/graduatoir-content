// TikTok, Nov 2026: Isnin, Rabu, Jumaat 9:30 malam. Video 1080x1920 dengan zon selamat TikTok (safe:'tiktok')
const IG=require('./instagram.js');
const TAGS='#PAE #jurutera #engineeringmalaysia #graduateengineer #kerjaya';
const FOLLOW={end:'logo',c1:'Tip persediaan PAE setiap minggu',c2:'Follow GraduaToIr',c3:'Komuniti & ebook: link di profil'};
const EBOOK={end:'cover',c1:'Panduan penuh langkah demi langkah',c2:'Graduate to Ir.',c3:'Ebook · link di profil'};
// reuse an Instagram reel, moved into the TikTok safe zone and with "bio" -> "profil"
const fromIG=(slug,extra)=>{const p=IG.find(x=>x.slug===slug);const r=JSON.parse(JSON.stringify(p.reel));for(const k of ['c1','c2','c3'])r[k]=(r[k]||'').replace(/di bio/g,'di profil');return Object.assign(r,{safe:'tiktok'},extra||{})};
const V=(k,t,p,end)=>Object.assign({k:'GRADUATOIR · '+k,t,p,safe:'tiktok'},end);
module.exports=[
{d:'2026-11-02',day:'Isnin',kind:'Video',slug:'TT_Rekod_3_Benda',reel:V('MULA DI SINI','3 benda yang patut anda rekod setiap minggu',['Masalah projek yang anda selesaikan.','Keputusan teknikal yang anda buat.','Hasilnya, dengan angka jika ada.'],FOLLOW),
cap:`Laporan PAE jadi jauh lebih mudah kalau anda rekod 3 benda ni setiap minggu ✍️ Simpan video ni 🔖 ${TAGS}`},
{d:'2026-11-04',day:'Rabu',kind:'Video',slug:'TT_3_Kesilapan',reel:fromIG('Reel_3_Kesilapan'),
cap:`3 kesilapan yang buat Training & Experience Report nampak lemah. Yang mana pernah anda buat? Komen nombor 👇 ${TAGS}`},
{d:'2026-11-06',day:'Jumaat',kind:'Video',slug:'TT_Logbook_Tabiat',reel:V('LOGBOOK','3 tabiat kecil untuk logbook anda',['Kemas kini setiap minggu, bukan setahun sekali.','Tulis apa yang SAYA buat, bukan pasukan.','Catat rujukan dokumen, tanpa maklumat sulit.'],FOLLOW),
cap:`Logbook yang tertangguh = laporan yang susah ditulis. Mula dengan 3 tabiat kecil ni 👇 ${TAGS}`},
{d:'2026-11-09',day:'Isnin',kind:'Video',slug:'TT_3_Perkataan',reel:V('TIP LAPORAN','3 perkataan yang melemahkan laporan anda',['“Kami”, bila sepatutnya “saya”.','“Terlibat dalam”, tanpa tindakan yang jelas.','“Membantu”, tanpa terangkan apa yang dibuat.'],FOLLOW),
cap:`Penilai nak tahu apa yang ANDA buat. 3 perkataan ni selalu sembunyikan peranan anda 👀 ${TAGS}`},
{d:'2026-11-11',day:'Rabu',kind:'Video',slug:'TT_Formula_3_Baris',reel:fromIG('Reel_Formula_3_Baris'),
cap:`Formula 3 baris untuk huraikan setiap pengalaman dalam laporan anda. Cuba pada satu projek hari ni ✍️ ${TAGS}`},
{d:'2026-11-13',day:'Jumaat',kind:'Video',slug:'TT_AI_Jangan',reel:V('AI &amp; LAPORAN','Guna AI untuk laporan? Jangan buat 3 benda ni',['Jangan tampal maklumat sulit majikan.','Jangan biar AI reka pengalaman anda.','Jangan guna tanpa semak setiap fakta.'],FOLLOW),
cap:`AI boleh bantu susun ayat. Tapi pengalaman dan fakta mesti 100% milik anda 🤖 ${TAGS} #AI`},
{d:'2026-11-16',day:'Isnin',kind:'Video',slug:'TT_Jawab_2_Minit',reel:V('TEMU DUGA','Cara terangkan satu projek dalam 2 minit',['Mula dengan konteks projek dalam satu ayat.','Terangkan apa yang ANDA putuskan, dan kenapa.','Tutup dengan hasil dan pengajaran.'],FOLLOW),
cap:`Latih ni dengan satu projek anda malam ni. Masa 2 minit, cuba ⏱️ ${TAGS}`},
{d:'2026-11-18',day:'Rabu',kind:'Video',slug:'TT_3_Soalan_Temu_Duga',reel:fromIG('Reel_3_Soalan_Temu_Duga'),
cap:`3 soalan untuk tanya diri sebelum temu duga. Soalan mana paling susah untuk anda? 👇 ${TAGS}`},
{d:'2026-11-20',day:'Jumaat',kind:'Video',slug:'TT_Kesilapan_Temu_Duga',reel:V('TEMU DUGA','3 tabiat yang melemahkan jawapan temu duga',['Jawapan panjang tanpa fokus.','Guna “kami” untuk semua jawapan.','Meneka bila tak pasti. Lebih baik jujur.'],FOLLOW),
cap:`Pernah buat salah satu? Ramai yang buat tanpa sedar 😅 Untuk format temu duga yang sebenar, rujuk garis panduan rasmi BEM. ${TAGS}`},
{d:'2026-11-23',day:'Isnin',kind:'Video',slug:'TT_Situasi_Etika',reel:V('SITUASI ETIKA','Apa langkah pertama anda?',['Anda jumpa kesilapan dalam reka bentuk yang dah diluluskan.','Projek dah mula dibina.','Apa anda buat dulu, dan kenapa? Komen.'],FOLLOW),
cap:`Situasi etika 🤔 Tak ada jawapan "betul" yang mudah. Kongsi cara anda berfikir di komen 👇 ${TAGS}`},
{d:'2026-11-25',day:'Rabu',kind:'Video',slug:'TT_Pelan_30_Hari',reel:V('PELAN TINDAKAN','Pelan 30 hari ke laporan PAE anda',['Minggu 1–2: susun pengalaman, tulis draf.','Minggu 3: semak dan baiki.','Minggu 4: latihan temu duga.'],EBOOK),
cap:`Bila anda nak mula? Komen tarikhnya 👇 Panduan penuh dalam ebook Graduate to Ir., link di profil 📘 ${TAGS}`},
{d:'2026-11-27',day:'Jumaat',kind:'Video',slug:'TT_Jom_Sertai',reel:fromIG('Reel_Jom_Sertai',{c3:'Percuma · link di profil'}),
cap:`Bersedia untuk PAE tak perlu seorang diri 🤝 Komuniti percuma GraduaToIr, link di profil. Tag rakan jurutera anda 👇 ${TAGS}`}];
