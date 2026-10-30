// Threads, Nov 2026: Isnin-Jumaat 12:30 tengah hari. parts[0] = post utama, parts[1..] = balasan berantai (maks 500 aksara setiap satu)
const IG=require('./instagram.js');
const slidesOf=slug=>JSON.parse(JSON.stringify(IG.find(p=>p.slug===slug).slides)).map(s=>{if(s.b)s.b=s.b.replace(/di bio/g,'di profil');return s});
module.exports=[
// Minggu 1: Bermula & rekod pengalaman
{d:'2026-11-02',day:'Isnin',kind:'Teks',slug:'Soalan_Mula',parts:[
`Jurutera yang sedang menuju ke Ir., jujur sikit:

Apa yang paling buat anda tangguh persediaan PAE sampai sekarang? 👇`]},
{d:'2026-11-03',day:'Selasa',kind:'Carousel',slug:'Carousel_5_Tanda',slides:slidesOf('Carousel_5_Tanda'),parts:[
`5 tanda anda patut mula bersedia untuk PAE sekarang, bukan "nanti bila dah sedia".

Berapa yang kena pada anda? 👇`]},
{d:'2026-11-04',day:'Rabu',kind:'Thread berantai',slug:'Thread_Rekod_Projek',parts:[
`Cara paling mudah nak "selamatkan" pengalaman kejuruteraan anda sebelum anda lupa.

15 minit seminggu. Itu saja. 🧵`,
`Setiap Jumaat, tulis 4 baris untuk projek yang anda pegang minggu tu:

1. Apa masalahnya
2. Apa yang SAYA buat
3. Keputusan teknikal yang saya ambil
4. Apa hasilnya`,
`Kenapa ni penting? Bila tiba masa menulis laporan, anda bukan lagi menggali ingatan 2–3 tahun lepas. Bahan dah ada, tinggal susun.

💡 Jangan simpan maklumat sulit majikan dalam nota peribadi. Gunakan penerangan umum.`]},
{d:'2026-11-05',day:'Khamis',kind:'Teks',slug:'Quote_Rekod',parts:[
`Pengalaman yang tak direkod, susah untuk dibuktikan.

Pengalaman yang direkod dengan baik, separuh laporan anda dah siap.`]},
{d:'2026-11-06',day:'Jumaat',kind:'Teks',slug:'Kongsi_Minggu_1',parts:[
`Jumaat check-in ✅

Satu langkah kecil yang anda buat minggu ni untuk persediaan Ir.? Logbook, nota projek, atau baru mula baca garis panduan BEM pun dikira.

Kongsi di bawah 👇`]},
// Minggu 2: Penulisan laporan
{d:'2026-11-09',day:'Isnin',kind:'Teks',slug:'Soalan_Laporan',parts:[
`Bahagian laporan mana paling susah untuk anda?

A) Pilih projek mana nak tulis
B) Tunjuk peranan "saya", bukan "pasukan"
C) Ringkaskan butiran teknikal
D) Lain-lain

Jawab dengan huruf 👇`]},
{d:'2026-11-10',day:'Selasa',kind:'Carousel',slug:'Carousel_Saya_Bukan_Kami',slides:slidesOf('Carousel_Saya_Bukan_Kami'),parts:[
`Tulis "saya", bukan "kami".

Satu perubahan kecil yang buat peranan anda dalam laporan jadi jauh lebih jelas. Contoh sebelum & selepas (rekaan) dalam gambar 👆`]},
{d:'2026-11-11',day:'Rabu',kind:'Thread berantai',slug:'Thread_Formula_3_Baris',parts:[
`Formula 3 baris untuk huraikan setiap pengalaman dalam laporan anda 🧵`,
`1️⃣ Situasi: apa masalah atau keperluan projek
2️⃣ Tindakan saya: apa yang SAYA buat dan putuskan
3️⃣ Hasil: apa kesannya, dengan angka jika boleh`,
`Kesilapan biasa: baris 2 terlalu umum. "Saya terlibat dalam reka bentuk" tak cukup. Tulis apa yang anda kira, pilih, semak atau putuskan, dan kenapa.`,
`Cuba pada satu projek hari ni. Kalau nak maklum balas, kongsi versi ringkas (tanpa maklumat sulit) dalam komuniti GraduaToIr, link di profil.`]},
{d:'2026-11-12',day:'Khamis',kind:'Teks',slug:'AI_Prompt_Petakan',parts:[
`🤖 AI prompt untuk jurutera yang rasa "pengalaman saya tak cukup":

"Saya jurutera [bidang], [X] tahun pengalaman. Ini senarai projek dan tugasan saya: [senarai]. Susun mengikut kategori: reka bentuk, pengurusan projek, keselamatan, komunikasi teknikal. Tunjukkan bahagian yang masih lemah."

Jangan masukkan maklumat sulit majikan. Simpan post ni 🔖`]},
{d:'2026-11-13',day:'Jumaat',kind:'Teks',slug:'Kongsi_Minggu_2',parts:[
`Jumaat check-in ✅

Cabaran minggu ni: tulis SATU perenggan tentang satu keputusan teknikal yang anda buat dalam projek.

Dah siap? Balas "siap" 👇`]},
// Minggu 3: Temu duga
{d:'2026-11-16',day:'Isnin',kind:'Teks',slug:'Soalan_Temu_Duga',parts:[
`Kalau esok anda masuk bilik temu duga profesional, apa soalan yang paling anda takut ditanya?

Tulis di bawah. Saya akan kongsi cara mendekatinya minggu ni 👇`]},
{d:'2026-11-17',day:'Selasa',kind:'Carousel',slug:'Carousel_Latihan_Temu_Duga',slides:slidesOf('Carousel_Latihan_Temu_Duga'),parts:[
`Latih temu duga dengan AI dalam 3 langkah. 15 minit sesi, 3 kali seminggu.

Prompt penuh dalam gambar 👆

📌 Untuk format temu duga yang sebenar, rujuk garis panduan rasmi BEM.`]},
{d:'2026-11-18',day:'Rabu',kind:'Thread berantai',slug:'Thread_3_Soalan',parts:[
`3 soalan yang patut anda boleh jawab dengan yakin sebelum masuk temu duga 🧵`,
`1. Apa peranan saya yang sebenar dalam projek ni?

Bukan jawatan anda. Apa yang anda sendiri buat dan pertanggungjawabkan.`,
`2. Apa keputusan teknikal yang saya buat, dan kenapa?

Penemu duga biasanya nak dengar cara anda berfikir, bukan sekadar hasil akhir.`,
`3. Apa yang saya belajar daripada kesilapan?

Jurutera yang boleh bercakap jujur tentang kesilapan dan pembetulannya menunjukkan kematangan profesional.`]},
{d:'2026-11-19',day:'Khamis',kind:'Teks',slug:'Hot_Take_Temu_Duga',parts:[
`Pendapat saya: ramai jurutera bukan kurang pengalaman untuk temu duga.

Mereka cuma tak pernah berlatih MENERANGKAN pengalaman tu dengan jelas, dalam 2 minit, kepada orang yang tak kenal projek mereka.

Setuju atau tak? 👇`]},
{d:'2026-11-20',day:'Jumaat',kind:'Teks',slug:'Kongsi_Minggu_3',parts:[
`Jumaat check-in ✅

Dah cuba latihan temu duga dengan AI minggu ni? Kongsi satu soalan yang AI tanya, dan satu perkara yang anda belajar 👇`]},
// Minggu 4: Etika & pelan tindakan
{d:'2026-11-23',day:'Isnin',kind:'Teks',slug:'Situasi_Etika',parts:[
`Situasi etika 🤔

Anda jumpa kesilapan pengiraan dalam reka bentuk yang dah diluluskan oleh senior anda. Projek dah mula dibina.

Apa langkah pertama anda, dan kenapa? 👇`]},
{d:'2026-11-24',day:'Selasa',kind:'Carousel',slug:'Carousel_Pelan_30_Hari',slides:slidesOf('Carousel_Pelan_30_Hari'),parts:[
`Pelan 30 hari ke laporan PAE anda:

Minggu 1: Susun pengalaman
Minggu 2: Tulis draf pertama
Minggu 3: Semak dan baiki
Minggu 4: Latihan temu duga

Bila anda nak mula? Balas dengan tarikh 👇`]},
{d:'2026-11-25',day:'Rabu',kind:'Thread berantai',slug:'Thread_Mentor',parts:[
`Kenapa setiap Graduate Engineer perlukan sekurang-kurangnya seorang "penyemak jujur" 🧵`,
`Laporan yang anda baca berulang kali akan nampak "okay" pada mata anda sendiri. Orang lain yang akan nampak ayat yang kabur, langkah yang tertinggal, dan "kami" yang patut jadi "saya".`,
`Penyemak tak semestinya PE. Rakan jurutera yang jujur dan teliti pun dah sangat membantu.

Tak ada sesiapa lagi? Komuniti GraduaToIr wujud untuk tu. Link di profil.`]},
{d:'2026-11-26',day:'Khamis',kind:'Gambar',slug:'Promo_Ebook',slides:[{type:'promo',cta:'Link di profil ↓'}],parts:[
`Untuk yang nak panduan penuh, langkah demi langkah:

📘 Graduate to Ir.: The AI-Powered BEM Professional Engineer Application & Assessment Guide
12 Bab · 70 AI Prompts · 44 Toolkit Templates · Pelan Tindakan 30 Hari

Link di profil.

Panduan pendidikan bebas · Bukan penerbitan rasmi BEM`]},
{d:'2026-11-27',day:'Jumaat',kind:'Teks',slug:'Kongsi_Minggu_4',parts:[
`Jumaat check-in terakhir bulan ni 🎉

Satu perkara yang anda dah buat bulan ni untuk persediaan Ir. yang anda tak buat bulan lepas?

Kongsi di bawah. Kecil pun tak apa 👇`]}];
