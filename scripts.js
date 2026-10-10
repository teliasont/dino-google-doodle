//list as many as you'd like
gsap.registerPlugin(MotionPathPlugin);


// GSAP Library
// https://unpkg.com/gsap@3/dist/gsap.min.js

// GSAP Dev Tools
// GSDevTools.create();
// MotionPathHelper.create(cheek);
function flamesFlicker() {
  gsap.set(".flames-2", { opacity: 0 });
  gsap.set(".meteor-glow", {
    transformOrigin: "center center",
    scale: 0.9
  });

  gsap
    .timeline({ repeat: 50, id: "flicker" })
    // Flames swap
    .set(".flames-1", { opacity: 1 })
    .set(".flames-2", { opacity: 0 })
    .set(".flames-1", { opacity: 0 }, "+=0.5")
    .set(".flames-2", { opacity: 1 }, "<")
    // Glow pulse — locked to same position
    .to(
      ".meteor-glow",
      {
        scale: 1,
        duration: 0.5,
        yoyo: true,
        repeat: 1
      },
      0
    ) // ← starts at time 0 of each iteration
    // Shading flicker — locked to same position
    .to(
      ".bg-shading, .dino-shading",
      {
        // opacity: 0.5,
        fill: "#5e1515",
        duration: 0.45,
        ease: "steps(1)",
        yoyo: true,
        repeat: 1
      },
      0
    )
    .to(
      ".lighting",
      {
        fill: "#c0e238",
        opacity: 0.8,
        duration: 0.45,
        ease: "steps(1)",
        yoyo: true,
        repeat: 1
      },
      0
    )
    .set({}, {}, "+=0.5");
}

flamesFlicker();

// Steg chewing
gsap
  .timeline({ repeat: 50 })
  .to(".steg .cheek", {
    motionPath: {
      path: [
        { x: -1, y: -2 },
        { x: -2, y: 0 },
        { x: -1, y: 2 },
        { x: 0, y: 2.5 },
        { x: 1, y: 0 },
        { x: 0, y: 0 }
      ],
      curviness: 1.5
    },
    duration: 1,
    repeat: 1,
    ease: "power1.inOut"
  })
  .to(
    ".steg .eat",
    {
      transformOrigin: "top center",
      scaleY: 1.2,
      duration: 0.35,
      repeat: 3,
      yoyo: "true",
      ease: "power1.inOut",
      delay: 0.1
    },
    "<"
  )
  .to(".steg .cheek", { x: 0, y: 0, duration: 0.1 })
  .set({}, {}, "+=1");

gsap
  .timeline({ repeat: 50 })
  .to(
    ".longneck .cheek-group",
    {
      motionPath: {
        path: [
          { x: 4, y: 0 },
          { x: 0, y: 2.5 },
          { x: -2, y: 2 },
          { x: -4, y: 0 },
          { x: -2, y: -2 },
          { x: 0, y: 0 }
        ],
        curviness: 1.5
      },
      duration: 1.2,
      repeat: 3,
      ease: "power1.inOut",
      delay: 1
    },
    "<"
  )
  .to(
    ".longneck .eat",
    {
      transformOrigin: "top center",
      scaleY: 1.2,
      duration: 0.75,
      repeat: 3,
      yoyo: "true",
      ease: "power1.inOut",
      delay: 1
    },
    "<"
  )
  .to(".longneck .cheek-group", { x: 0, y: 0, duration: 0.1 }) // snap back cleanly
  .set({}, {}, "+=1"); // pause duration — adjust to taste

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function longneckBlink() {
  gsap
    .timeline({
      onComplete: () => {
        gsap.delayedCall(3 + Math.random() * 7, longneckBlink);
      }
    })
    .to(".longneck .eye-group", {
      delay: 1,
      scaleY: 0,
      transformOrigin: "50% 70%",
      duration: 0.06,
      ease: "power1.in"
    })
    .to(".longneck .eye-group", {
      scaleY: 1,
      duration: 0.1,
      ease: "power1.out"
    });
}

longneckBlink();

function stegBlink() {
  gsap
    .timeline({
      onComplete: () => {
        gsap.delayedCall(3 + Math.random() * 7, stegBlink); // waits 1–4s randomly
      }
    })
    .to(".steg .eye-group", {
      scaleY: 0,
      transformOrigin: "50% 70%",
      duration: 0.06,
      ease: "power1.in"
    })
    .to(".steg .eye-group", {
      scaleY: 1,
      duration: 0.1,
      ease: "power1.out"
    });
}

stegBlink();

// // .to(
// //   ".bg-shading",
// //   {
// //     x: -2,
// //     repeat: 6,
// //     yoyo: true,
// //     ease: "steps(3)",
// //     duration: 0.5
// //   },
// //   "<"
// // )
// // .to(
// //   ".dino-shading",
// //   {
// //     x: -2,
// //     y: 1,
// //     repeat: 16,
// //     yoyo: true,
// //     ease: "steps(2)",
// //     duration: 0.5
// //   },
// //   "<"
// // )
// // .to(
// //   ".lighting",
// //   {
// //     transformOrigin: "top right",
// //     x: 50,
// //     ease: "steps(3)",
// //     duration: 0.5,
// //     repeat: 6,
// //     yoyo: "true"
// //   },
// //   "<"
// // );
