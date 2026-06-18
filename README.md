# Aditya Verma | Personal Portfolio Website

A state-of-the-art developer portfolio designed with a premium dark cyberpunk theme, glassmorphic card elements, custom background neon nebulae, dynamic mouse-tracking glow patterns, and smooth scroll animations.

---

## ✨ Features

- **🛸 High-Performance Pointer Spotlight**: A single page-wide viewport mouse spotlight (`.global-spotlight`) that dynamically follows the pointer and illuminates the underlying cyber code grid and card borders.
- **💎 Glassmorphic Navigation Bar**: A floating header that shrinks and applies a dark translucent backdrop blur (`bg-slate-950/85`), glowing bottom border, and active shadow highlight on scroll. Includes `react-scroll` spy links that highlight your active section.
- **🌈 Color-Graded Section Sub-Themes**: Each section is themed with unique, harmonized gradient titles, neon card glows, and drifting background nebulae blobs:
  - **Hero Area**: Indigo theme with 3D-tilt card metrics and typewriter sequences.
  - **About Me**: Warm Amber/Orange/Rose gradient title with specific card hover glows.
  - **Technical Skills**: Emerald/Teal gradient title with circular glass skill nodes.
  - **Projects Showcase**: Fuchsia/Purple gradient theme with automated demo link formats (naked URLs prepend `https://` and non-URL values like Python scripts dynamically hide the Demo button).
  - **Experience**: Sky-Blue/Cyan timeline logs detailing professional internships and certificate modals.
  - **Contact Form**: Rose/Pink gradient elements, glowing focused inputs, and integrated EmailJS template support.
- **📱 Fully Responsive**: Custom HSL color palettes and Tailwind layouts designed to adjust from mobile to ultra-wide displays.
- **💬 Chatbot Integration**: Pre-integrated React chat drawer.

---

## 🛠️ Tech Stack

**Frontend:**
- **Core Framework**: React 19 & Vite
- **Styling**: Tailwind CSS v4 & Vanilla CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (`Fa`, `Si`, `Fi`, `Cg`)
- **Navigation & Scrolling**: React Scroll

**Backend & Integrations:**
- **Backend API**: Node.js & Express (configured on port `5002`)
- **Contact API**: EmailJS integration

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (recommended: `v18` or higher).

### Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AdityaVerma19/portfolio-frontend.git
   cd portfolio-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/` to see the live site.

4. **Expose to Local Network (for Phone Testing)**:
   Toggle the host exposure inside Vite by pressing `h` in the server terminal, or run:
   ```bash
   npm run dev -- --host
   ```
   This will output a `Network:` URL (e.g., `http://192.168.1.15:5173/`) that you can open in your mobile phone browser.

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
portfolio-frontend/
├── src/
│   ├── assets/           # Images, certificates, and logos
│   ├── Components/       # Modular React sections (Hero, About, Skills, Projects, etc.)
│   ├── App.jsx           # Global pointer tracking and scrolling aura nebulae
│   ├── index.css         # Custom cyberpunk animations, grid backgrounds, and scroll active styles
│   └── main.jsx          # App entry point
├── package.json          # Project scripts and package dependencies
└── vite.config.js        # Vite configurations (including @tailwindcss/vite plugin)
```

---

## 📄 License
Licensed under the MIT License. Created by [Aditya Verma](https://github.com/AdityaVerma19).
