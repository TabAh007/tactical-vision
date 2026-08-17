# Tactical Vision 2.0 — Turnkey Product Engineering & Industrial Design

> **Tactical Vision** is an international turnkey product development and mechanical engineering firm specializing in taking complex hardware from initial concept, CAD modeling, and FEA simulation through to prototyping, steel mold tooling, and mass factory production.

![Tactical Vision Banner](public/images/seven-6-YBglQNwbzGuL7Q97.jpg)

---

## 🌟 Key Features

* **Interactive 3D WebGL CAD Engineering Lab**: Real-time 3D viewport powered by Three.js allowing 360° inspection, wireframe CAD topology views, X-ray tactical HUD modes, and an interactive exploded assembly slider.
* **CAD vs. Reality Comparison Slider**: Interactive split comparison showing raw 3D parametric CAD models against finished mass-manufactured physical products.
* **12 Comprehensive Case Studies & 230+ Assets**: Complete portfolio of rugged optics, trail cameras, tactical choke tubes, electronic predator callers, and high-performance marine outboards.
* **Interactive Project Scoping & Estimation Tool**: Instant calculation modal for BOM targets, tooling timelines, and confidential inquiry submission.
* **Modern Tactical Dark Aesthetics**: Built with Tailwind CSS v4, custom glassmorphism design tokens, and optimized responsive layouts.

---

## 🛠️ Tech Stack

* **Frontend**: React 19, Vite, Tailwind CSS v4
* **3D Graphics & Physics**: Three.js, OrbitControls
* **Icons**: Lucide React
* **Typography**: Outfit, Space Grotesk, Inter

---

## 🚀 Getting Started Locally

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TabAh007/tactical-vision.git
   cd tactical-vision
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to **`http://localhost:3000/`**.

---

## 📁 Project Structure

```
Tactical Vision 2/
├── public/
│   └── images/              # 230+ High-resolution product photos, GIFs, and CAD diagrams
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Navigation bar with responsive mobile drawer
│   │   ├── Hero.jsx                 # High-impact hero section with core metrics
│   │   ├── PartnersTicker.jsx       # Client brand trust ticker
│   │   ├── CadViewer3D.jsx          # Interactive 3D WebGL CAD viewport
│   │   ├── PortfolioSection.jsx     # Filterable case study cards & search
│   │   ├── CadRealitySlider.jsx     # Interactive CAD vs. Reality comparison slider
│   │   ├── ServicesSection.jsx      # 7 core engineering capabilities
│   │   ├── EngineeringProcess.jsx   # 4-stage turnkey roadmap
│   │   ├── AboutSection.jsx         # Global engineering network (Baku, US, CA, Asia)
│   │   ├── ContactSection.jsx       # Direct contact desk & inquiry brief form
│   │   ├── Footer.jsx               # Footer links & copyright
│   │   ├── ProjectModal.jsx         # Case study detail modal with thumbnail gallery
│   │   └── EstimatorModal.jsx       # Interactive scoping & budget estimator
│   ├── data/
│   │   ├── portfolioData.js         # Complete portfolio dataset with specs & galleries
│   │   └── servicesData.js          # Core service offerings and deliverables
│   ├── App.jsx                      # Root application layout
│   ├── main.jsx                     # React DOM entrypoint
│   └── index.css                    # Design tokens & Tailwind CSS v4 setup
├── vite.config.js                   # Vite configuration with Tailwind plugin
└── package.json                     # Project dependencies and build scripts
```

---

## 🚢 Deployment

To build the production bundle for deployment on **Vercel**, **Netlify**, or **Cloudflare Pages**:

```bash
npm run build
```

The output will be in the `dist/` directory, ready to serve as a static or SPA deployment.

---

## 📞 Contact & Inquiries

* **Phone / WhatsApp**: +994 50 201 0898
* **Email**: team@tactical-vision.com
* **Headquarters**: Baku, Azerbaijan
