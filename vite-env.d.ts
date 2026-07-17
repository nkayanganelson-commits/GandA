@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Alex+Brush&family=Inter:wght@300;400;500;600&display=swap');

@theme {
  --font-serif: "Playfair Display", Georgia, serif;
  --font-cormorant: "Cormorant Garamond", Georgia, serif;
  --font-script: "Edwardian Script ITC", "Alex Brush", cursive;
  --font-sans: "Inter", sans-serif;
  
  --color-deep: #071D17;
  --color-mid: #0E3327;
  --color-mid2: #123C2E;
  --color-gold: #CDA45E;
  --color-gold-light: #EBD8A6;
  --color-gold-soft: #8B7239;
  --color-ivory: #F7F2E7;
  --color-ivory-dim: rgba(247, 242, 231, 0.72);
  --color-line: rgba(205, 164, 94, 0.35);
}

:root {
  --deep: #071D17;
  --mid: #0E3327;
  --mid2: #123C2E;
  --gold: #CDA45E;
  --gold-light: #EBD8A6;
  --gold-soft: #8B7239;
  --ivory: #F7F2E7;
  --ivory-dim: rgba(247, 242, 231, 0.72);
  --line: rgba(205, 164, 94, 0.35);
  --ease: cubic-bezier(.22, .61, .36, 1);
}

body {
  background: var(--deep);
  color: var(--ivory);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ambient background texture across whole page */
.grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background-image: radial-gradient(circle at 20% 20%, rgba(205, 164, 94, 0.06), transparent 40%),
                     radial-gradient(circle at 85% 75%, rgba(205, 164, 94, 0.05), transparent 45%);
  mix-blend-mode: screen;
}

/* ============ ENVELOPE STAGE ============ */
#envelope-stage {
  position: relative;
  height: 340vh;
}
.stage-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 2400px;
}

.stage-hint {
  position: absolute;
  bottom: 38px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--ivory-dim);
  font-size: 11px;
  letter-spacing: .28em;
  text-transform: uppercase;
  z-index: 20;
  transition: opacity .5s var(--ease);
}
.stage-hint .chev {
  width: 14px;
  height: 14px;
  border-right: 1.5px solid var(--gold);
  border-bottom: 1.5px solid var(--gold);
  transform: rotate(45deg);
  animation: bob 1.8s ease-in-out infinite;
}

@keyframes bob {
  0%, 100% {
    transform: translateY(0) rotate(45deg);
    opacity: .5;
  }
  50% {
    transform: translateY(6px) rotate(45deg);
    opacity: 1;
  }
}

.envelope-wrap {
  position: relative;
  width: min(78vw, 480px);
  aspect-ratio: 480/320;
  transform-style: preserve-3d;
}

.env-pocket, .env-flap, .env-shadow-piece {
  position: absolute;
  inset: 0;
}

/* back pocket of envelope */
.env-back {
  position: absolute;
  inset: 0;
  background: linear-gradient(155deg, #12402F 0%, #0C2C21 60%, #081C15 100%);
  border: 1px solid var(--line);
  border-radius: 6px;
  box-shadow: 0 40px 90px -30px rgba(0, 0, 0, .75), 0 0 0 1px rgba(205, 164, 94, 0.08) inset;
}
.env-back::before {
  content: '';
  position: absolute;
  inset: 10px;
  border: 1px solid rgba(205, 164, 94, 0.22);
  border-radius: 3px;
  pointer-events: none;
}

/* the card that lives inside, slides upward */
.invite-card {
  position: absolute;
  left: 50%;
  top: 46%;
  width: 88%;
  max-width: 420px;
  transform: translate(-50%, 0) scale(.82);
  background: linear-gradient(165deg, #FBF6EA 0%, #F3ECDA 100%);
  color: #1B2B22;
  border-radius: 10px;
  padding: 38px 30px 32px;
  text-align: center;
  box-shadow: 0 30px 70px -20px rgba(0, 0, 0, .6);
  opacity: 0;
  z-index: 5;
}

/* envelope flap - triangle, opens upward like a lid */
.env-flap {
  width: 100%;
  height: 56%;
  top: 0;
  left: 0;
  transform-origin: top center;
  z-index: 8;
}
.env-flap svg {
  width: 100%;
  height: 100%;
  display: block;
  overflow: visible;
}

.seal {
  position: absolute;
  left: 50%;
  top: 41%;
  width: 64px;
  height: 64px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #E4C179, #9C7A2F 70%, #7C5E22 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, .45), inset 0 0 0 1px rgba(255, 255, 255, .15);
  z-index: 9;
}

/* ============ CONTENT SECTIONS ============ */
main {
  position: relative;
  z-index: 2;
}

section {
  padding: 120px 24px;
  max-width: 1040px;
  margin: 0 auto;
}

/* --- reveal animation on scroll --- */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .9s var(--ease), transform .9s var(--ease);
}
.reveal.in {
  opacity: 1;
  transform: translateY(0);
}

/* --- timeline --- */
.timeline {
  position: relative;
  margin-top: 56px;
  padding-left: 6px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 13px;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: linear-gradient(180deg, transparent, var(--line) 12%, var(--line) 88%, transparent);
}
.tl-item {
  position: relative;
  padding-left: 52px;
  padding-bottom: 40px;
}
.tl-item:last-child {
  padding-bottom: 0;
}
.tl-dot {
  position: absolute;
  left: 6px;
  top: 4px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid var(--gold);
  background: var(--deep);
}
.tl-item.key .tl-dot {
  background: linear-gradient(180deg, var(--gold-light), var(--gold));
  box-shadow: 0 0 0 4px rgba(205, 164, 94, 0.14);
}

/* ============ TOAST & OVERLAY ============ */
.toast {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: var(--ivory);
  color: #1B2B22;
  padding: 13px 22px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  opacity: 0;
  pointer-events: none;
  transition: opacity .4s var(--ease), transform .4s var(--ease);
  z-index: 300;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, .5);
}
.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.share-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(4, 14, 11, 0.62);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  opacity: 0;
  pointer-events: none;
  transition: opacity .4s var(--ease);
}
.share-overlay.open {
  opacity: 1;
  pointer-events: auto;
}

.share-sheet {
  width: 100%;
  max-width: 440px;
  margin: 0 14px 14px;
  background: linear-gradient(180deg, #0F3A2B 0%, #0A2A20 100%);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 26px 24px 30px;
  box-shadow: 0 -20px 60px -20px rgba(0, 0, 0, .7);
  transform: translateY(30px) scale(.98);
  transition: transform .5s var(--ease);
}
.share-overlay.open .share-sheet {
  transform: translateY(0) scale(1);
}

@media (min-width: 560px) {
  .share-overlay {
    align-items: center;
  }
  .share-sheet {
    margin: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}
