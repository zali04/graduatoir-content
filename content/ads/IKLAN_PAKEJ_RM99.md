# Arahan Pengiklanan: Pakej Utama Graduate to Ir. (RM99)

Panduan kerja untuk menjalankan Facebook & Instagram Ads bagi Pakej Utama RM99. Ia boleh digunakan oleh pemilik sendiri, pembantu, atau Claude semasa menghasilkan kreatif baharu.

> **Nota:** semua angka sasaran (CTR, CPC, kadar beli) dalam fail ini ialah anggaran biasa untuk produk digital di Malaysia, bukan jaminan. Selepas 2 minggu, gantikan angka-angka ini dengan data sebenar akaun anda. Nama butang dalam Ads Manager mungkin berbeza sedikit, kerana Meta kerap mengubah antara mukanya.

---

## 1. Ringkasan

| Perkara | Nilai |
|---|---|
| Produk yang diiklankan | **Pakej Utama Graduate to Ir.: RM99** (12 Bab · 70 AI Prompts · 44 Toolkit Templates · Pelan Tindakan 30 Hari) |
| Pakej lain di salespage | Starter RM39 (mini ebook 8 bab, 7 worksheet, workbook contoh fiksyen, 15 Starter AI Prompts, Pelan 90 hari) · Mentor 1-to-1 RM299 (Pakej Utama + mentor) |
| Salespage | https://graduatoir.com (Sellhiz + Billplz) |
| Bajet | **RM500 sebulan**: RM15 sehari untuk kempen jualan, ~RM50 untuk retargeting pada minggu 3–4 |
| Sasaran CPA (kos setiap jualan) | **< RM50** (ROAS ≥ 2x). Pulang modal pada RM99 |
| Penonton | Graduan jurutera Malaysia, 22–40 tahun: pelajar tahun akhir, Graduate Engineer, dan jurutera yang sedang bersedia untuk PAE |

**Kenapa RM99 menjadi pakej utama iklan:**
- Marginnya cukup untuk bajet kecil, berbanding RM39 yang terlalu nipis.
- Isinya sepadan dengan semua kandungan media sosial GraduaToIr.
- Di salespage, RM299 berfungsi sebagai penanda harga, manakala RM39 menjadi pilihan untuk pembeli yang sensitif harga.

RM299 dijual melalui DM dan komuniti, bukan melalui iklan cold.

---

## 2. Senarai semak sebelum iklan dihidupkan

- [ ] **Pixel**: dalam Events Manager, event **PageView**, **InitiateCheckout** dan **Purchase** muncul. Uji dengan **Test Events** melalui satu pembelian ujian (contohnya kupon 100% atau RM1 di Sellhiz).
- [ ] Event **Purchase** dihantar dengan **nilai sebenar** (39 / 99 / 299) dan mata wang **MYR**.
- [ ] **Domain graduatoir.com diverifikasi**: Business Settings → Brand safety → Domains.
- [ ] **Salespage dibuka di telefon**: laju (kurang 3 saat), harga ketiga-tiga pakej jelas, senarai isi setiap pakej, siapa penulis (Ir. + PE Chemical), FAQ, cara bayar (FPX / e-wallet / kad), polisi refund, dan penafian *"Panduan pendidikan bebas · Bukan penerbitan rasmi BEM"*.
- [ ] **Sekurang-kurangnya 3–5 jualan organik** daripada komuniti dan DM, untuk testimoni pertama dan isyarat awal Pixel.
- [ ] **Kaedah pembayaran** akaun iklan ditetapkan, dengan had perbelanjaan akaun RM500 sebulan.

---

## 3. Struktur kempen dalam Ads Manager

### Kempen A: Jualan (minggu 1 dan seterusnya)
| Tetapan | Nilai |
|---|---|
| Nama | `RM99 | Sales | 2026-11` |
| Objektif | **Sales** |
| Event conversion | **InitiateCheckout** dahulu. Tukar kepada **Purchase** selepas ~15–20 jualan |
| Bajet | **RM15 sehari** (peringkat ad set) |
| Lokasi | Malaysia |
| Umur | 22–40 |
| Audiens | **Advantage+ audience**, dengan cadangan minat: Engineering, Civil engineering, Mechanical engineering, Electrical engineering, Chemical engineering, AutoCAD |
| Kecualikan | Pembeli (custom audience Purchase, 180 hari) |
| Penempatan | Advantage+ placements |
| Iklan | 3–4 iklan (lihat §5). Feed guna 4:5, Reels/Stories guna 9:16 |
| Butang CTA | **Learn more / Ketahui lanjut** |
| URL | `https://graduatoir.com/?utm_source=facebook&utm_medium=paid&utm_campaign=rm99_2026-11&utm_content={{ad.name}}` |

### Kempen B: Retargeting (minggu 3–4)
| Tetapan | Nilai |
|---|---|
| Nama | `RM99 | Retargeting | 2026-11` |
| Objektif / event | Sales / Purchase |
| Bajet | **RM5 sehari** selama ~10 hari |
| Audiens | Pelawat graduatoir.com (30 hari) + penonton video 50% (30 hari) + orang yang berinteraksi dengan Page atau IG (60 hari) |
| Kecualikan | Pembeli |
| Mesej | Jawab keraguan: isi pakej, *"sesuai untuk GE tahun pertama?"*, pilihan Starter RM39 |

**Nama iklan:** `[format]_[sudut]_[versi]`, contohnya `VID916_3kesilapan_v1`, `CAR45_apaandadapat_v1`, `IMG45_static_v1`. Nama iklan ini akan muncul dalam `utm_content`, jadi jualan boleh dijejak ikut iklan.

---

## 4. Fasa dan bajet

| Fasa | Hari | Tindakan |
|---|---|---|
| **Uji** | 1–10 | Jangan ubah apa-apa pada hari 1–4. Biar Meta belajar |
| **Optimum** | 11–20 | Matikan iklan yang kalah. Tambah 1 kreatif baharu dengan cangkuk berbeza |
| **Retarget** | 15–25 | Hidupkan Kempen B |
| **Nilai** | 26–30 | Kira CPA sebenar dan tentukan bajet bulan depan (§7) |

Bila menaikkan bajet, naikkan **paling banyak +20% setiap 3 hari**. Jangan gandakan bajet sekali gus.

---

## 5. Kreatif

### Kreatif yang siap (`content/ads/2026-11/out/`)
| Fail | Format | Penempatan | Kegunaan |
|---|---|---|---|
| `01_…_Ad_Carousel_Apa_Anda_Dapat/01–06.png` | Carousel 4:5, 6 kad | Feed FB & IG | Tunjuk isi pakej satu per satu, kad akhir RM99 + pakej lain |
| `02_…_Ad_Static_RM99/01.png` | Gambar 4:5 | Feed | Kulit ebook + isi + pil harga RM99 |
| `03_…_Ad_Video_3_Kesilapan/*.mp4` | Video 9:16, 14 s | Reels & Stories | Cangkuk berasaskan masalah, penutup RM99 |
| `04_…_Ad_Video_Apa_Anda_Dapat/*.mp4` | Video 9:16, 14 s | Reels & Stories | Cangkuk berasaskan sistem, penutup RM99 |

Video 9:16 menggunakan **zon selamat iklan Meta**: semua teks berada di atas 35% terbawah skrin (kawasan butang CTA dan teks iklan) dan jauh dari tepi kanan. Feed menggunakan gambar 4:5.

**Cara pasang dalam satu iklan:** dalam Ads Manager, guna **"Customise media for each placement"**. Feed guna fail 4:5, manakala Reels dan Stories guna video 9:16.

### Kreatif #1 yang perlu dirakam oleh pemilik: video wajah (30–45 s, 9:16)
Kreatif ini dijangka paling berkesan, kerana kepercayaan datang daripada seorang Ir. yang sebenar. Rakam guna telefon secara menegak, di tempat terang, dengan mikrofon dekat. Tak perlu sempurna.

| Masa | Visual | Skrip |
|---|---|---|
| 0–3 s | Wajah, dekat | *"Kalau anda Graduate Engineer dan belum mula rekod pengalaman, tonton ni."* |
| 3–12 s | Wajah | *"Ramai jurutera bukan kurang pengalaman. Masalahnya, pengalaman tu tak direkod. Bila tiba masa tulis laporan PAE, semuanya dah lupa."* |
| 12–18 s | Wajah | *"Saya Ir. Mohd Norzali, Professional Engineer dalam bidang Chemical Engineering."* |
| 18–32 s | Skrin: kulit ebook, kemudian beberapa halaman dalam | *"Sebab tu saya susun Pakej Utama Graduate to Ir.: 12 bab, 70 AI prompts, 44 templat dan pelan tindakan 30 hari, supaya anda bersedia dengan sistem, bukan meneka."* |
| 32–40 s | Wajah | *"RM99. Klik link di bawah untuk tengok isi penuhnya."* |

Letak sari kata (BM) pada video, sebab ramai menonton tanpa bunyi. Jangan sebut "confirm lulus" atau apa-apa jaminan.

### Peraturan menghasilkan kreatif baharu
1. Guna skill `graduatoir-content`. Data iklan diletak dalam `content/ads/YYYY-MM/ads.js`:
   - Feed: slaid 4:5 (`cover` / `item` / `end` / `promo` dengan `price`)
   - Reels/Stories: video dengan `safe:'meta'`
2. Setiap kreatif baharu mesti menguji **satu sudut** sahaja: masalah, sistem, bukti, harga, atau penulis.
3. **Cangkuk 3 saat pertama** ialah faktor paling penting. Tukar cangkuk dahulu sebelum menukar perkara lain.
4. Selepas render, buat semakan visual: tiada teks bertindih, dan teks berada di luar zon CTA.
5. Muat naik ke iklan sedia ada sebagai **iklan baharu dalam ad set yang sama**. Jangan edit iklan yang sedang berjalan, kerana ia akan memulakan semula fasa belajar.

**Sudut cangkuk untuk diuji (bank idea):**
- **Masalah:** *"Laporan PAE susah bukan sebab kurang pengalaman…"*
- **Sistem:** *"Bersedia ke Ir. dengan sistem, bukan meneka."*
- **AI:** *"70 AI prompt untuk susun pengalaman kejuruteraan anda."*
- **Penulis:** *"Panduan daripada seorang Professional Engineer yang pernah melaluinya."*
- **Harga:** *"Kurang daripada harga satu buku rujukan kejuruteraan."* Gunakan hanya jika benar untuk buku yang dibandingkan.
- **Bukti:** testimoni pembeli sebenar (selepas ada).

---

## 6. Copywriting

### Teks utama (Primary text): 5 variasi untuk diuji
**V1: Masalah**
> Ramai Graduate Engineer bukan kurang pengalaman.
> Mereka cuma tak rekod pengalaman tu dengan betul, dan bila tiba masa menulis laporan PAE, semuanya dah lupa.
>
> Pakej Utama Graduate to Ir. bantu anda bersedia dengan sistem:
> ✅ 12 bab panduan langkah demi langkah
> ✅ 70 AI prompts siap guna
> ✅ 44 templat toolkit
> ✅ Pelan tindakan 30 hari
>
> RM99. Klik "Ketahui lanjut" untuk lihat isi penuh.

**V2: Sistem**
> Persediaan PAE tak patut jadi tekaan.
>
> Pakej Utama Graduate to Ir. susun semuanya untuk anda: cara merekod pengalaman, cara menulis supaya peranan ANDA jelas, dan cara berlatih untuk temu duga dengan bantuan AI.
>
> 12 Bab · 70 AI Prompts · 44 Templat · Pelan 30 Hari
> 👉 RM99

**V3: Penulis**
> Saya Ir. Mohd Norzali, Professional Engineer (Chemical Engineering).
>
> Saya susun Graduate to Ir. untuk graduan jurutera yang nak bersedia ke Ir. dengan lebih tersusun dan lebih yakin, menggunakan AI sebagai pembantu, bukan jalan pintas.
>
> Pakej Utama: 12 bab, 70 AI prompts, 44 templat, pelan 30 hari. RM99.
>
> Panduan pendidikan bebas · Bukan penerbitan rasmi BEM.

**V4: AI**
> 70 AI prompt untuk jurutera yang sedang bersedia ke Ir. 🤖
>
> Susun pengalaman → tulis semula perenggan laporan → latih temu duga dengan AI sebagai penemu duga.
>
> Semua dalam Pakej Utama Graduate to Ir., bersama 12 bab panduan, 44 templat dan pelan tindakan 30 hari.
>
> RM99 · ada juga Pakej Starter RM39.

**V5: Pendek (untuk Reels/Stories)**
> GE → Ir. dengan sistem, bukan meneka.
> 12 Bab · 70 AI Prompts · 44 Templat · Pelan 30 Hari. RM99.

### Tajuk (Headline, maks ~40 aksara)
1. Pakej Utama Graduate to Ir. · RM99
2. Bersedia ke Ir. dengan sistem
3. 70 AI Prompts untuk persediaan PAE
4. Dari GE ke Ir., langkah demi langkah
5. 12 Bab · 44 Templat · RM99

### Penerangan (Description)
- Panduan bebas · Bukan penerbitan rasmi BEM
- Ada juga Starter RM39 & Mentor RM299

### Peraturan copywriting
- **Jangan janji keputusan.** Elak "confirm lulus", "jadi Ir. dalam 30 hari" dan "dijamin".
- **Jangan guna logo atau nama BEM** dalam cara yang membayangkan iklan ini rasmi. Nama "BEM PAE" boleh disebut sebagai topik.
- **Jangan menuduh ciri peribadi**, contohnya *"Anda gagal PAE?"* atau *"Anda jurutera yang lemah?"*. Gunakan bentuk umum, contohnya *"Untuk GE yang sedang bersedia…"*.
- **Isi pakej mesti tepat.** RM99 = 12 bab, 70 prompt, 44 templat, pelan 30 hari. Jangan campur dengan isi RM39.
- **Testimoni mesti daripada pembeli sebenar**, dengan izin bertulis. Jangan reka atau ubah testimoni.
- **Kecemasan masa** (contohnya "harga naik esok") hanya boleh digunakan jika benar.

---

## 7. Pemantauan prestasi

### Lajur yang perlu dipaparkan dalam Ads Manager
Gunakan **Columns → Customise columns**:
Amount spent · Impressions · Reach · Frequency · CTR (link) · CPC (link) · Landing page views · Initiate checkout · Cost per initiate checkout · Purchases · Cost per purchase · Purchase conversion value · Purchase ROAS · ThruPlays / 3-second video plays (untuk video).

### Rutin
| Bila | Masa | Semak |
|---|---|---|
| **Setiap hari** (hari 1–14) | 5 minit | Perbelanjaan berjalan? Ada iklan yang ditolak (rejected)? Ada amaran pembayaran? **Jangan ubah iklan.** |
| **Setiap Isnin** | 15 minit | Isi jadual mingguan di bawah. Gunakan peraturan §8. Matikan 1 iklan paling lemah, tambah 1 yang baharu. |
| **Hujung bulan** | 30 minit | Kira CPA, ROAS dan campuran pakej. Tentukan bajet bulan depan. Catat pengajaran. |

### Sasaran awal (anggaran)
| Metrik | Sasaran | Maksud jika terkeluar sasaran |
|---|---|---|
| CTR (link) | > 1% | Bawah 0.7% bermaksud cangkuk atau kreatif tak menarik perhatian |
| CPC (link) | < RM1.50 | Tinggi bermaksud kreatif lemah atau audiens kurang sesuai |
| Landing page view / klik | > 70% | Rendah bermaksud salespage lambat dibuka |
| Initiate checkout / LPV | > 5% | Rendah bermaksud salespage tak meyakinkan (harga, isi, kepercayaan) |
| Purchase / checkout | > 30% | Rendah bermaksud masalah di halaman bayaran (kaedah bayar, langkah terlalu banyak) |
| **Cost per purchase** | **< RM50** | Lihat §8 |
| Frequency (7 hari) | < 3 | Lebih tinggi bermaksud audiens dah bosan, jadi tukar kreatif |

### Jadual laporan mingguan (salin setiap Isnin)
| Minggu | Belanja | Klik | CTR | CPC | Checkout | Jualan (39/99/299) | Hasil RM | CPA | ROAS | Iklan terbaik | Tindakan |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | / / | | | | | |
| 2 | | | | | | / / | | | | | |
| 3 | | | | | | / / | | | | | |
| 4 | | | | | | / / | | | | | |

---

## 8. Peraturan bila nak stop, teruskan atau skala

### Peringkat iklan (setiap kreatif)
| Keadaan | Tindakan |
|---|---|
| Hari 1–4 | **Jangan ubah apa-apa** (kecuali iklan ditolak) |
| Belanja **RM40** dan **0 InitiateCheckout** | **Stop** iklan tersebut |
| CTR (link) **< 0.7%** selepas ~1,500 impression | **Stop**. Buat versi baharu dengan cangkuk berbeza |
| CPC > RM2.50 selepas RM30 | **Stop** |
| Frequency > 3 dan CTR menurun | Ganti dengan kreatif baharu |
| Cost per checkout paling rendah dalam ad set | **Biarkan.** Meta akan beri lebih bajet secara automatik |

### Peringkat kempen
| Keadaan | Tindakan |
|---|---|
| **CPA > RM99** selepas **RM150** dibelanjakan | **Jeda kempen.** Semak salespage dan tawaran sebelum belanja lagi |
| CPA RM50–99 | Teruskan, tapi uji kreatif baharu dan baiki salespage |
| **CPA < RM50** selama 7 hari berturut-turut | **Skala**: +20% bajet setiap 3 hari |
| **CPA < RM30** | Pertimbangkan menaikkan bajet bulan depan (contohnya RM800–1,000) |
| Klik banyak tapi tiada checkout | **Jangan tukar iklan.** Masalah di salespage |
| Checkout banyak tapi tiada purchase | Semak halaman bayaran Billplz/Sellhiz dan pastikan event Purchase berfungsi |
| Iklan ditolak (rejected) | Baca sebab, buang ayat yang melanggar §6, kemudian hantar semula atau mohon semakan |

### Hentikan semua iklan serta-merta jika
- Ada aduan pembeli tentang isi pakej yang tak sepadan dengan iklan.
- Pixel atau event Purchase berhenti berfungsi (jualan berlaku tapi tak direkod).
- Akaun iklan menerima amaran polisi.

---

## 9. Diagnosis cepat

| Simptom | Kemungkinan punca | Cuba |
|---|---|---|
| Impression rendah, perbelanjaan tak habis | Audiens terlalu sempit, atau iklan dalam semakan | Guna Advantage+ audience; tunggu kelulusan |
| CTR rendah | Cangkuk lemah | Tukar 3 saat pertama atau tajuk gambar; cuba sudut lain (§5) |
| CTR tinggi, checkout rendah | Salespage | Harga dan isi di bahagian atas, bukti (halaman contoh, testimoni), FAQ, kelajuan |
| Ramai beli RM39, sedikit RM99 | Perbezaan nilai RM39 dan RM99 tak jelas | Jadual perbandingan pakej di salespage; upsell selepas beli RM39 |
| CPA naik selepas minggu 2 | Kreatif dah lesu | Tambah 2 kreatif baharu, terutamanya video wajah |

---

## 10. Bulan ke-2 dan seterusnya
- **Testimoni:** minta setiap pembeli 1–2 ayat (dengan izin), kemudian jadikan kreatif "bukti".
- **Lookalike 1%** daripada pembeli, selepas ada sekurang-kurangnya ~100 pembeli.
- **Kempen lead:** Senarai Semak PAE percuma sebagai pertukaran untuk emel atau WhatsApp, diikuti 3–5 mesej susulan untuk menawarkan RM99.
- **Upsell RM39 → RM99** selepas pembelian (jika Sellhiz menyokong).
- **RM299:** tawarkan kepada pembeli RM99 dan ahli komuniti yang aktif, melalui DM, bukan iklan cold. Hadkan slot ikut kapasiti sebenar.
