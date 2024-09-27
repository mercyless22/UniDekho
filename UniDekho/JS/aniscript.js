document.querySelectorAll('.anicard').forEach(anicard => {
    gsap.from(anicard, {
        scale: 0.8, // Scale down on entrance
        opacity: 0, // Start invisible
        rotation: 5, // Slight rotation for entrance
        scrollTrigger: {
            trigger: anicard,
            start: "top 90%", // Start animation when card is about to enter the viewport
            end: "bottom 10%", // End animation when card is about to leave the viewport
            markers: false, // Set to true for debugging
            scrub: true, // Smooth animation
            onLeave: () => {
                // Optional: Add behavior when the card leaves the viewport
                gsap.to(anicard, {
                    scale: 0.7, // Scale down on exit
                    opacity: 0, // Fade out
                    duration: 0.5 // Duration for exit animation
                });
            },
            onEnterBack: () => {
                // Optional: Reverse the animation when coming back
                gsap.to(anicard, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5
                });
            }
        }
    });
});
