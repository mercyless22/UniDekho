gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".card",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
    },
});
