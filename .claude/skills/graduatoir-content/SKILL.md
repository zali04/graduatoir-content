---
name: graduatoir-content
description: Generate a month of GraduaToIr social media content (Facebook Page, Facebook Group, Instagram) in the approved brand layout - carousels, single images, 14s reels, captions and a scheduling checklist. Use when asked to make, plan or render GraduaToIr / Graduate to Ir. posts, a content calendar, or the monthly content run.
---

# GraduaToIr monthly content

GraduaToIr helps Malaysian graduate engineers prepare for the BEM Professional Assessment Examination (PAE) and reach Ir. status. The owner is Ir. Mohd Norzali Bin Zulkifli, Professional Engineer (Chemical Engineering). The paid product is the ebook **Graduate to Ir.** (12 Bab · 70 AI Prompts · 44 Toolkit Templates · Pelan Tindakan 30 Hari). The free community is the Facebook Group.

Write everything for the audience in **Bahasa Malaysia** (casual-professional, "anda"), unless the owner asks otherwise.

## Brand (do not change)

| Item | Value |
|---|---|
| Brand / account name | **GraduaToIr**: "Gradua" white (or navy on light), "ToIr" teal. Tagline: GE → Ir. Prep |
| Product name | **Graduate to Ir.** (the ebook only) |
| Background | navy `#132B46` |
| Accent | teal `#14A39A` (rules, numbers, circles, steps line, "ToIr") |
| Text | white |
| Font | Inter 400 / 600 / 800 only |
| Motif | rising steps line (GE → Ir.) |
| Official logo | `assets/logo_official.png` (owner's file, never edit). The renderer uses `assets/logo_card.png` (same logo, background flattened to pure white) on a white card: large on carousel end slides and on reels with `end:'logo'`, small (110 px) in the top-right corner of every other still image |
| FB Page cover | `assets/fb_page_cover.png` (owner's banner; mentions graduatoir.com, Ebook, AI Toolkit, Mentorship) |
| Website | graduatoir.com |

All of this is already encoded in `scripts/render.js`. Do not hand-draw new layouts. Write data files and render.

## Channels and rhythm

| Channel | Days | Time (MYT) | Role | Formats |
|---|---|---|---|---|
| FB Group | Isnin, Rabu, Jumaat | 8:30 malam | Community, conversation | single image + long caption |
| Instagram | Selasa, Khamis, Sabtu | 9:00 malam | Reach and saves | carousel (Selasa), single (Khamis), reel (Sabtu) |
| FB Page | Selasa, Khamis, Sabtu | 8:00 malam | Public face, ads later | reuse that week's Instagram visuals with FB captions |

Group weekly pattern: **Isnin = Soalan PAE** (question thread), **Rabu = Tip & AI Prompt**, **Jumaat = Kongsi Kemajuan** (progress thread). The last Friday of the month may softly promote the ebook.

Give each month one theme per week, shared across channels, so the Group threads, Instagram and Page reinforce each other. Example: report writing, then interview practice, then ethics, then an action plan.

## Content rules

- **80/20:** at most one promotional post per channel per month. Everything else teaches or starts a conversation.
- **Links:** Instagram captions say "link di bio". FB Group and Page captions never put the link in the body. Say "link di komen pertama 👇" and add an admin note telling the owner to post the link as the first comment and pin it.
- **No invented facts about BEM/PAE.** Do not state eligibility rules, years of experience, fees, report word counts, interview formats or dates. When a post touches these, tell readers to check the latest official BEM guidelines.
- **Disclaimer:** promotional posts include "Panduan pendidikan bebas · Bukan penerbitan rasmi BEM".
- **AI prompts:** remind readers not to paste confidential employer information. AI helps phrase things, but facts and experience must be their own.
- **Examples:** label invented example sentences as rekaan (fictional).
- **No repeats:** read `content/HISTORY.md` first, and pick topics or angles not used in the last 3 months.
- **Hashtags (Instagram):** `#PAE #BEM #ProfessionalEngineer #GraduateEngineer #JuruteraMalaysia`, plus at most 2 topical tags.

## Data format

Each channel is one CommonJS file, `content/YYYY-MM/<channel>.js`, exporting an array of posts in date order:

```js
module.exports=[
{d:'2026-12-01',day:'Selasa',kind:'Carousel',slug:'Carousel_Topik',   // slug: ASCII, no spaces
 slides:[
  {type:'cover',k:'GRADUATOIR · PAE',t:'Tajuk besar',b:'Subtajuk'},
  {type:'item',n:'01',t:'Poin',b:'Huraian'},           // n: big teal number (optional)
  {type:'item',l:'SEBELUM ✗',t:'“Ayat contoh”',b:'…',small:true},  // l: label instead of n; small: long text
  {type:'end',t:'Soalan untuk komen?',b:'Simpan post ini untuk rujukan.<br>Link komuniti & ebook di bio.'}],
 cap:`caption…`},
{d:'2026-12-03',day:'Khamis',kind:'Gambar',slug:'Quote_X',
 slides:[{type:'single',k:'GRADUATOIR',t:'Tajuk',b:'Sokongan',cta:'Komen di bawah ↓'}],cap:`…`},
{d:'2026-12-05',day:'Sabtu',kind:'Reel',slug:'Reel_X',
 reel:{k:'GRADUATOIR · TIP PAE',t:'Tajuk reel',p:['Poin 1','Poin 2','Poin 3'],
       end:'cover',            // 'cover' = ebook cover; 'logo' = brand card
       c1:'Baris kecil',c2:'Graduate to Ir.',c3:'Ebook · link di bio'},cap:`…`},
{d:'…',day:'…',kind:'Gambar',slug:'Promo_Ebook',slides:[{type:'promo'}],cap:`…`}];
```

Length limits that fit the layouts: cover title ≤ 60 characters; item title ≤ 70; body ≤ 160 (`small:true` up to about 220); reel title ≤ 55; each reel point ≤ 50; a carousel has 5–7 slides. The renderer shrinks text that overflows, but stay within these limits anyway. Escape `&` as `&amp;` inside slide text. Captions are plain text, where emoji are fine. In slide text, use only the arrows already used (→ ↓); emoji do not render in Inter.

## Monthly run (steps)

1. **Setup** (once per container):
   ```bash
   cd .claude/skills/graduatoir-content && npm install --no-audit --no-fund @fontsource/inter@5.1.0 && cd -
   export NODE_PATH=$(npm root -g)   # Playwright is preinstalled globally
   ```
2. **Plan:** read `content/HISTORY.md`. Choose 4 weekly themes for the target month (the month after the run date). List every date per channel using the rhythm above, from the first matching weekday of the month through the last.
3. **Write** `content/YYYY-MM/group.js`, `instagram.js` and `page.js`. For the Page, reuse the Instagram slides/reels for the same dates and rewrite the captions for Facebook (no hashtag block, link in comment).
4. **Render** each channel:
   ```bash
   S=.claude/skills/graduatoir-content/scripts
   for ch in group instagram page; do node $S/render.js content/YYYY-MM/$ch.js content/YYYY-MM/out/$ch; done
   ```
   Reels take about 30 s each. ffmpeg is required.
5. **Visual QA (mandatory):** build a contact sheet of every PNG, plus a frame at 8 s and at 12 s of every reel, then look at it. Check for overlapping or cut-off text, the wrong font, and missing images. Fix the data and re-render until it is clean. A renderer `OVERFLOW` warning means a text is too long, so shorten it.
6. **Checklists:**
   ```bash
   node $S/checklist.js content/YYYY-MM/group.js content/YYYY-MM/out/group "FB Group <Bulan> <Tahun>" "8:30 malam"
   node $S/checklist.js content/YYYY-MM/instagram.js content/YYYY-MM/out/instagram "Instagram <Bulan> <Tahun>" "9:00 malam"
   node $S/checklist.js content/YYYY-MM/page.js content/YYYY-MM/out/page "FB Page <Bulan> <Tahun>" "8:00 malam"
   ```
   Each command writes a self-contained `Senarai_Semak_*.html` (media embedded, copy buttons, checkboxes) into the out folder. Also zip each out folder for download.
7. **History:** append the month's topics to `content/HISTORY.md`.
8. **Deliver:**
   - Commit the data files, rendered media and history (the HTML and zips are git-ignored), then push to `main`.
   - Send the three checklists and zips to the owner with SendUserFile.
   - Summarise in Bahasa Malaysia: the themes, how many posts each channel gets, and anything the owner must do by hand (pin link comments, set the reel cover).
   - Scheduling is manual: Group via the Group's Scheduled posts; Instagram and Page via Meta Business Suite Planner. Meta closed the Groups API in 2024, so tools cannot post to Groups.
9. **Optional, Canva:** if `curl -s -o /dev/null -w "%{http_code}" https://www.canva.com/` returns a 2xx/3xx code and the Canva tools are connected, upload each PNG/MP4 with Canva `create-upload-url`, then `curl -X POST -H "Content-Type: application/octet-stream" --data-binary @FILE URL`. Never use Canva AI generation: the account's AI quota is limited, and the layouts here are the approved ones.
