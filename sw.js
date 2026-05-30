# Recovery Journal — PWA

A shopping addiction recovery tracker that installs on your phone like a native app.

---

## What's included

```
index.html      ← The entire app (one file)
manifest.json   ← Makes it installable as a PWA
sw.js           ← Service worker (offline support)
icons/
  icon-192.png  ← App icon
  icon-512.png  ← App icon (large)
```

---

## How to install on your phone (free, no App Store needed)

### Option A — GitHub Pages (recommended, free)

1. Create a free account at [github.com](https://github.com)
2. Click **+** → **New repository** → name it `recovery-journal` → **Public** → Create
3. Upload all these files (drag & drop or use the upload button)
4. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)** → Save
5. Your app will be live at `https://YOUR-USERNAME.github.io/recovery-journal`
6. Open that URL on your phone's browser → tap **Share → Add to Home Screen** (iOS) or the browser menu → **Install app** (Android)

### Option B — Netlify (even easier, free)

1. Go to [netlify.com](https://netlify.com) → sign up free
2. Drag the entire `shopping-journal-pwa` folder onto the Netlify dashboard
3. It instantly gives you a URL (e.g. `https://random-name.netlify.app`)
4. Open on your phone → Add to Home Screen

### Option C — Local testing first

If you have Node.js installed:
```bash
npx serve .
```
Then open `http://localhost:3000` on your phone (must be on same Wi-Fi).

---

## Installing on your phone

### iPhone / iPad (Safari)
1. Open the app URL in **Safari** (not Chrome)
2. Tap the **Share** button (box with arrow)
3. Scroll down → tap **Add to Home Screen**
4. Tap **Add**
5. The app icon appears on your home screen — it opens full-screen with no browser UI

### Android (Chrome)
1. Open the app URL in **Chrome**
2. Tap the **three-dot menu** (top right)
3. Tap **Add to Home screen** or **Install app**
4. Tap **Install**

---

## Features

- **Urge log** — date/time, trigger, emotion, intensity, bought or resisted
- **Purchase reflection** — item, cost, planned vs impulse, feelings before/after/24h
- **No-buy wins** — celebrate every temptation you overcome
- **Weekly reflection** — triggers, emotions, pride, goals, values check-in
- **Dashboard** — spending charts, trigger analysis, emotion breakdown, inventory
- **Offline support** — works with no internet after first load
- **All data stays on your device** — nothing is sent to any server

---

## Privacy

All data is stored in your browser's `localStorage`. Nothing leaves your device.
To back up your data: open the app → browser console → `localStorage.getItem('saj_v1')` → copy the text.
