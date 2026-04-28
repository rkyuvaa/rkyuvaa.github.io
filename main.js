/* ============================================
   ANTI-GRAVITY CURSOR SYSTEM
============================================ */
const canvas = document.getElementById('cursor-canvas');
const ctx = canvas.getContext('2d');

let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let ring = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let isHovering = false;
let isClicking = false;
let clickParticles = [];
let floatingParticles = [];
let trailPoints = [];
let frame = 0;

// Spring physics constants
const SPRING = 0.18;
const DAMPING = 0.72;
let ringVx = 0, ringVy = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Ambient Particles (Anti-gravity field)
class FloatingParticle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.baseX = this.x;
    this.baseY = this.y;
    this.size = Math.random() * 2 + 1;
    this.alpha = Math.random() * 0.3 + 0.1;
    this.vx = 0;
    this.vy = 0;
    this.color = Math.random() > 0.5 ? '21,101,240' : '6,182,212';
  }
  update() {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const repelRadius = isHovering ? 150 : 100;
    
    if (dist < repelRadius) {
      const force = (repelRadius - dist) / repelRadius;
      const angle = Math.atan2(dy, dx);
      this.vx += Math.cos(angle) * force * 4;
      this.vy += Math.sin(angle) * force * 4;
    }
    
    // Return to original position
    this.vx += (this.baseX - this.x) * 0.03;
    this.vy += (this.baseY - this.y) * 0.03;
    
    this.vx *= 0.9;
    this.vy *= 0.9;
    
    this.x += this.vx;
    this.y += this.vy;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
    ctx.fill();
  }
}

// Click Burst Particles
class ClickParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 10 + 4;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.size = Math.random() * 3 + 2;
    this.alpha = 1;
    this.decay = Math.random() * 0.03 + 0.02;
    this.color = Math.random() > 0.5 ? '21,101,240' : '6,182,212';
    this.gravity = 0.12;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.gravity;
    this.vx *= 0.98;
    this.vy *= 0.98;
    this.alpha -= this.decay;
    this.size *= 0.96;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
    ctx.fill();
  }
}

// Init
for (let i = 0; i < 70; i++) floatingParticles.push(new FloatingParticle());

document.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  trailPoints.unshift({ x: mouse.x, y: mouse.y, age: 0 });
  if (trailPoints.length > 20) trailPoints.pop();
});

document.addEventListener('mousedown', () => {
  isClicking = true;
  for (let i = 0; i < 25; i++) clickParticles.push(new ClickParticle(mouse.x, mouse.y));
});
document.addEventListener('mouseup', () => (isClicking = false));

const updateInteractions = () => {
  const interactives = document.querySelectorAll('a, button, .svc-card, .proj-card, .contact-link');
  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => (isHovering = true));
    el.addEventListener('mouseleave', () => (isHovering = false));
  });
};

// Initial calls
resizeCanvas();
updateInteractions();

// Re-check interactions periodically for any dynamic elements
setInterval(updateInteractions, 2000);

// Handle cursor visibility when leaving/entering window
document.addEventListener('mouseleave', () => {
  mouse.x = -100;
  mouse.y = -100;
});

function animate() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  frame++;
  
  // Only draw if mouse is on screen
  if (mouse.x > 0 && mouse.y > 0) {
    // Draw Trail
    for (let i = trailPoints.length - 1; i >= 0; i--) {
      const p = trailPoints[i];
      p.age++;
      const alpha = (1 - i / trailPoints.length) * 0.2 * (1 - p.age / 25);
      const size = (1 - i / trailPoints.length) * (isHovering ? 12 : 8);
      if (alpha > 0 && size > 0) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
        grad.addColorStop(0, `rgba(21,101,240, ${alpha})`);
        grad.addColorStop(1, `rgba(6,182,212, 0)`);
        ctx.fillStyle = grad;
        ctx.fill();
      }
    }
  }
  trailPoints = trailPoints.filter((p) => p.age < 25);

  // Ring Physics
  const targetX = mouse.x < 0 ? ring.x : mouse.x;
  const targetY = mouse.y < 0 ? ring.y : mouse.y;
  const dx = targetX - ring.x;
  const dy = targetY - ring.y;
  ringVx += dx * SPRING;
  ringVy += dy * SPRING;
  ringVx *= DAMPING;
  ringVy *= DAMPING;
  ring.x += ringVx;
  ring.y += ringVy;

  // Only draw ring if it's not off-screen
  if (ring.x > -50 && ring.x < canvas.width + 50) {
    // Draw Ring
    const ringSize = isHovering ? 42 : 28;
    const distortion = Math.sqrt(ringVx * ringVx + ringVy * ringVy);
    ctx.beginPath();
    ctx.ellipse(ring.x, ring.y, ringSize + distortion * 0.5, ringSize - distortion * 0.2, Math.atan2(ringVy, ringVx), 0, Math.PI * 2);
    ctx.strokeStyle = isHovering ? 'rgba(59, 130, 246, 1)' : 'rgba(21, 101, 240, 0.7)';
    ctx.lineWidth = isHovering ? 4 : 2;
    ctx.stroke();

    // Orbiting dots on hover
    if (isHovering) {
      for (let i = 0; i < 3; i++) {
        const angle = frame * 0.07 + (i * Math.PI * 2) / 3;
        const ox = ring.x + Math.cos(angle) * (ringSize + 10);
        const oy = ring.y + Math.sin(angle) * (ringSize + 10);
        ctx.beginPath();
        ctx.arc(ox, oy, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6,182,212, ${0.7 + Math.sin(frame * 0.1 + i) * 0.3})`;
        ctx.fill();
      }
    }
  }

  // Main Cursor Dot
  if (mouse.x > 0 && mouse.y > 0) {
    const dotSize = isClicking ? 4 : isHovering ? 8 : 6;
    const glowGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, dotSize * 4);
    glowGrad.addColorStop(0, 'rgba(21,101,240, 0.4)');
    glowGrad.addColorStop(1, 'rgba(21,101,240, 0)');
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, dotSize * 4, 0, Math.PI * 2);
    ctx.fillStyle = glowGrad;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, dotSize, 0, Math.PI * 2);
    const dotGrad = ctx.createRadialGradient(mouse.x - 1, mouse.y - 1, 0, mouse.x, mouse.y, dotSize);
    dotGrad.addColorStop(0, '#06B6D4');
    dotGrad.addColorStop(1, '#1565F0');
    ctx.fillStyle = dotGrad;
    ctx.fill();

    // Cross-hairs on hover
    if (isHovering) {
      ctx.strokeStyle = 'rgba(21,101,240, 0.4)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      const offset = 25;
      const len = 10;
      ctx.beginPath(); ctx.moveTo(mouse.x - offset, mouse.y); ctx.lineTo(mouse.x - offset + len, mouse.y); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(mouse.x + offset, mouse.y); ctx.lineTo(mouse.x + offset - len, mouse.y); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y - offset); ctx.lineTo(mouse.x, mouse.y - offset + len); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y + offset); ctx.lineTo(mouse.x, mouse.y + offset - len); ctx.stroke();
      ctx.setLineDash([]);
    }
  }

  floatingParticles.forEach((p) => { p.update(); p.draw(); });
  clickParticles = clickParticles.filter((p) => p.alpha > 0);
  clickParticles.forEach((p) => { p.update(); p.draw(); });

  requestAnimationFrame(animate);
}

animate();

/* ============================================
   SCROLL & INTERSECTION ANIMATIONS
============================================ */
function animateCount(el) {
  const target = +el.dataset.target;
  let start = 0;
  const duration = 2000;
  let startTime = null;

  const frame = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
    el.textContent = Math.round(easeProgress * target) + '+';
    if (progress < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      if (entry.target.classList.contains('count')) animateCount(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .tl-item, .count').forEach((el) => revealObserver.observe(el));

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar').forEach((bar, i) => {
        setTimeout(() => {
          bar.style.transform = `scaleX(${bar.dataset.w})`;
        }, i * 150);
      });
    }
  });
}, { threshold: 0.3 });

const aboutCard = document.querySelector('.about-card');
if (aboutCard) skillObserver.observe(aboutCard);

// Navbar shadow on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = 'var(--shadow-md)';
    nav.style.background = 'rgba(243, 247, 255, 0.98)';
  } else {
    nav.style.boxShadow = 'none';
    nav.style.background = 'rgba(243, 247, 255, 0.93)';
  }
});
