import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; 

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


/**
 * Aplica animación de aparición con ScrollTrigger a un conjunto de elementos
 */
export function animateFadeInFromBottom(targets, container) {
  gsap.fromTo(
    targets,
    {
      autoAlpha: 0,
      y: 50,
      scale: 0.95,
      transformOrigin: "center bottom",
    },
    {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: {
        amount: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
      
        markers: false, 
      },
    }
  );
}

/**
 * Aplica animación hover persistente (se queda con el último estado)
 */
export function applyHoverEffect(elements) {
  elements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        rotation: 1.5,
        y: -10,
        x: 10,
        skewX: 2,
        skewY: 1,
        transformOrigin: "center bottom",
        boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
        duration: 0.4,
        ease: "power2.out",
      });
    });

    // Comentado: para que no revierta
    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        rotation: 0,
        x: 0,
        y: 0,
        skewX: 0,
        skewY: 0,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

export function slideFadeInStaggered(targets) {
  const { title, desc } = targets;

  if (title) {
    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
    );
  }

  if (desc) {
    gsap.fromTo(
      desc,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out" },
    );
  }
}

export const scrollToTarget = (scrollTargetRef, offset = 0) => {
  const element = scrollTargetRef?.current;

  if (!element) {
    console.warn("scrollTargetRef no está definido o no tiene current.");
    return;
  }

  const targetY = element.offsetTop + offset;


  gsap.to(window, {
    scrollTo: { y: targetY, autoKill: true },
    duration: 0.9,
    ease: "power2.inOut",
  });
};
