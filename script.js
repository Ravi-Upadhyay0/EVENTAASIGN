
gsap.from(".logo", {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power3.out",
});

gsap.from(".nav ul li", {
  duration: 1,
  x: 100,
  opacity: 0,
  stagger: 0.2,
  ease: "power3.out",
});

gsap.from(".tagline", {
  duration: 1.5,
  y: -50,
  opacity: 0,
  delay: 0.5,
  ease: "power3.out",
});

gsap.from(".headline", {
  duration: 1.5,
  x: -200,
  opacity: 0,
  delay: 0.8,
  ease: "power3.out",
});

gsap.from(".description", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  delay: 1,
  ease: "power3.out",
});


gsap.to(".circle1", {
  x: "30vw",
  y: "-20vh",
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".circle2", {
  x: "-40vw",
  y: "40vh",
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".circle3", {
  x: "50vw",
  y: "30vh",
  duration: 12,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".circle4", {
  x: "-30vw",
  y: "-30vh",
  duration: 14,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});
gsap.to("#promo-video", {
  scrollTrigger: {
    trigger: ".video-container",
    start: "top 80%", 
    end: "bottom 60%", 
    toggleActions: "play none none reverse", 
  },
  duration: 1.5,
  opacity: 1,
  scale: 1,
  ease: "power3.out",
});
gsap.timeline()
  .to(".card", {
    opacity: 1,
    scale: 1,
    rotate: 0,
    duration: 1,
    ease: "back.out(1.7)",
    stagger: 0.3, 
  })
  .from(".card", {
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.3,
  }, "<");

window.addEventListener('load', () => {
  const timeline = gsap.timeline();

  
  timeline.to(".preloader", {
    duration: 4,  
    y: "-100%",     
    opacity: 0,    
    ease: "power2.out" 
  });

  
  timeline.to(".main-content", {
    duration: 3,  
    opacity: 1,     
    ease: "power2.out" 
  }, "-=1"); 
});

