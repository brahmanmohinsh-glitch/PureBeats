<p align="center">
  <img src="https://img.shields.io/badge/PureBeats-Music_Player-00f5d4?style=for-the-badge&logo=musicbrainz&logoColor=white" alt="PureBeats Badge"/>
  <img src="https://img.shields.io/badge/Tracks-2,795+-f72585?style=for-the-badge" alt="Tracks"/>
  <img src="https://img.shields.io/badge/Audio-320kbps-7928ca?style=for-the-badge" alt="Audio Quality"/>
  <img src="https://img.shields.io/badge/Genres-8-ffb703?style=for-the-badge" alt="Genres"/>
  <img src="https://img.shields.io/badge/PWA-Installable-4361ee?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA"/>
</p>

# 🎵 PureBeats — Pure Music Player

> **A high-fidelity, studio-grade web music player with 2,795+ master songs in 320kbps across 8 Indian genres — featuring a 5-band studio equalizer, 3D vinyl turntable deck, real-time audio visualizer, and immersive glassmorphism UI.**

Created & developed by **Mohinsh**.

---

## ✨ Features

### 🎧 Studio-Grade Audio Engine
- **320kbps master streaming** via HTML5 Audio with zero CORS blocks
- **5-band studio equalizer** (60Hz · 250Hz · 1kHz · 4kHz · 16kHz) with real-time frequency control
- **3 visualizer modes** — Bars, Waveform & Circular — beat-synced and canvas-rendered
- **3D vinyl turntable deck** with spinning disc animation synced to playback

### 🎬 Massive Music Library — 2,795+ Tracks
| Genre | Tracks | Vocalists |
|-------|--------|-----------|
| 🎬 Bollywood Hits | 278 | Arijit Singh, Atif Aslam, KK, Shreya Ghoshal, Sonu Nigam & 14 legends |
| 🌾 Haryanvi Beats | 300 | Dhanda Nyoliwala, Masoom Sharma, Gulzaar, Renuka Panwar & 10 superstars |
| 🥁 Punjabi Swag | 300 | Sidhu Moose Wala, Diljit Dosanjh, Karan Aujla, AP Dhillon & 12 icons |
| 🌟 Bhojpuri Dhamaka | 231 | Pawan Singh, Khesari Lal Yadav, Shilpi Raj & 11 superstars |
| 🔥 Desi Hip-Hop / Rap | 403 | DIVINE, KR$NA, Seedhe Maut, Hanumankind, Emiway & 13 icons |
| 🌙 Neighbour Melodies | 223 | AUR, Abdul Hannan, Kaifi Khalil, Talha Anjum, Rahat & Nusrat Fateh Ali Khan |
| 📻 Old is Gold | 560 | Kishore Kumar, Lata Mangeshkar, Mohammad Rafi, Asha Bhosle & 14 legends |
| 🔱 Better OG | 210 | Shankar Mahadevan, Kailash Kher, Hariharan, A.R. Rahman & 6 powerhouses |

### 🖥️ Immersive 3D UI
- **Glassmorphism design** with frosted-glass panels, neon accents & depth layering
- **Interactive 3D genre cards** on the main page with hover tilt effects
- **Animated sidebar** with collapsible genre descriptions and singer sublists (accordion toggle)
- **Dynamic hero banner** with real-time track info and cover art

### 🔍 Smart Search
- Search by **song name**, **singer/artist**, or **genre**
- Instant fuzzy matching across all 2,795+ tracks
- Live search with hover-preview — hovering over a singer in the sidebar opens their songs on the main page

### 📱 Multi-Device & PWA
- **Fully responsive** — optimized for mobile, tablet, laptop & desktop
- **Installable PWA** with offline caching via Service Worker
- **Mobile sidebar drawer** with hamburger toggle and backdrop overlay
- Touch-friendly controls and gesture support

### ⚡ Performance Optimized
- `content-visibility: auto` for virtualized song rows
- GPU-accelerated transforms for 3D cards, turntable & visualizer
- Preconnect & DNS prefetch for CDN resources
- Service Worker cache (`purebeats-v13-seo-fast`) for instant repeat loads
- SEO-optimized with JSON-LD schema, Open Graph, Twitter Cards & `sitemap.xml`

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Vanilla HTML5, CSS3, JavaScript (ES6+) |
| **Audio** | Web Audio API (AudioContext, BiquadFilter, AnalyserNode) |
| **Rendering** | Canvas 2D (Visualizer), CSS 3D Transforms (Turntable & Cards) |
| **PWA** | Service Worker, Web App Manifest |
| **Fonts** | Plus Jakarta Sans, JetBrains Mono (Google Fonts) |
| **APIs** | JioSaavn API, iTunes Search API (fallback) |
| **SEO** | JSON-LD Schema.org, Open Graph, Twitter Cards |

---

## 📂 Project Structure

```
pulse-music-player/
├── index.html              # Main app (1,850+ lines — full UI, sidebar, 3D cards, SEO)
├── login.html              # Authentication / login page
├── style.css               # Complete stylesheet (3,750+ lines — glassmorphism, 3D, responsive)
├── script.js               # Core app logic (3,800+ lines — engine, EQ, visualizer, search)
├── sw.js                   # Service Worker for PWA offline caching
├── manifest.json           # PWA manifest with app metadata & shortcuts
├── robots.txt              # Search engine crawl directives
├── sitemap.xml             # XML sitemap for SEO
├── crypto-js.min.js        # Encryption utility
│
├── bollywood_catalog.js    # 278 Bollywood tracks catalog
├── haryanvi_catalog.js     # 300 Haryanvi tracks catalog
├── punjabi_catalog.js      # 300 Punjabi tracks catalog
├── bhojpuri_catalog.js     # 231 Bhojpuri tracks catalog
├── rap_catalog.js          # 403 Rap/Hip-Hop tracks catalog
├── neighbour_catalog.js    # 223 Neighbour tracks catalog
├── oldisgold_catalog.js    # 560 Old is Gold tracks catalog
├── betterog_catalog.js     # 210 Better OG tracks catalog
├── artists_catalog.js      # Superstar artists catalog
└── dhanda_catalog.js       # Dhanda Nyoliwala special catalog
```

---

## 🚀 Getting Started

### Run Locally
```bash
# Clone the repository
git clone https://github.com/your-username/pulse-music-player.git
cd pulse-music-player

# Serve with any static server
python -m http.server 5500
# or
npx serve .
```

Open `http://localhost:5500` in your browser.

### Install as PWA
1. Open the app in Chrome / Edge
2. Click the **Install** icon in the address bar
3. The app installs as a standalone desktop/mobile app with offline support

---

## 🎛️ Equalizer Presets

The 5-band parametric EQ operates on these frequency bands:

| Band | Frequency | Purpose |
|------|-----------|---------|
| Sub Bass | 60 Hz | Deep rumble & kick drums |
| Low Mid | 250 Hz | Warmth & body |
| Mid | 1 kHz | Vocal presence & clarity |
| Upper Mid | 4 kHz | Brightness & detail |
| Air | 16 kHz | Sparkle & shimmer |

---

## 📸 Screenshots

> *Add screenshots of the player UI, 3D turntable, genre cards, equalizer panel, and mobile responsive views here.*

---

## 👨‍💻 Author

**Mohinsh** — Creator & Lead Developer

---

## 📄 License

This project is for personal and educational use. All music content is streamed via third-party APIs and is not hosted in this repository.

---

<p align="center">
  <b>Built with ❤️ and 🎵 by Mohinsh</b>
</p>

