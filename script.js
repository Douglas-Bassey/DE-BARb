AOS.init({
  once: true,

  duration: 1000,
});

gsap.to(".loader-logo", {
  opacity: 1,

  scale: 1,

  duration: 2,

  ease: "power3.out",
});

const loadingMessages = [
  "Moments Deserve Attention.",

  "Some Details Deserve Patience.",

  "Some Looks Become Memories.",

  "Today Is Yours...",

  "Take Your Seat Legend!",
];

let progress = 0;

let messageIndex = 0;

const progressFill = document.getElementById("progressFill");
// const percent = document.getElementById("loadingPercent");
const loadingText = document.getElementById("loadingText");

const loader = setInterval(() => {
  progress++;

  progressFill.style.width = progress + "%";

//   percent.innerHTML = progress + "%";

  if (progress === 20) {
    loadingText.innerHTML = loadingMessages[1];
  }

  if (progress === 45) {
    loadingText.innerHTML = loadingMessages[2];
  }

  if (progress === 70) {
    loadingText.innerHTML = loadingMessages[3];
  }

  if (progress === 95) {
    loadingText.innerHTML = loadingMessages[4];
  }

  if (progress >= 100) {
    clearInterval(loader);

    gsap.to("#preloader", {
      opacity: 0,

      duration: 1.2,

      delay: 0.6,

      onComplete: () => {
        document.getElementById("preloader").style.display = "none";

        document.body.style.overflow = "hidden";

         startCinematicIntro();
      },
    });
  }
}, 60);


/* =====================================================
   CINEMATIC INTRO
===================================================== */

function startCinematicIntro() {

    const tl = gsap.timeline({

        defaults: {

            ease: "power3.out"

        }

    });

    /* Reveal Intro */

    tl.set("#cinematicIntro", {

        opacity: 1

    });

    /* Spotlight */

    tl.to("#cinematicIntro .spotlight", {

        opacity: 1,

        scale: 1,

        duration: 0.8

    });

    /* Dust */

    tl.fromTo("#cinematicIntro .particles",

        {

            opacity: 0

        },

        {

            opacity: .18,

            duration: 2

        },

        "-=2"

    );

    /* Chair */

    tl.to("#cinematicIntro .chair-wrapper", {

        bottom: "7%",

        duration: 2,

        ease: "back.out(1.2)"

    });

    tl.to("#cinematicIntro .chair", {

        opacity: 1,

        duration: 1.2

    }, "-=2.2");

    /* Clippers */

    tl.to(".tool-clippers", {

        x: 320,

        opacity: 1,

        duration: 1

    });

   

    /* Chair Turn */

    tl.to(".chair-wrapper", {

        rotationY: 8,

        duration: 1.2

    });

    /* Small Camera Push */

    tl.to("#cinematicIntro", {

        scale: 1.03,

        duration: 2

    }, "-=1");

    /* Hold */

    tl.to({}, {

        duration: 1.5

    });

    /* Fade Out */

    tl.to("#cinematicIntro", {

        opacity: 0,

        duration: 1.5,

        onComplete: () => {

            document.getElementById("cinematicIntro").style.display = "none";

            gsap.to("#hero", {

                opacity: 1,

                duration: 2

            });

        }

    });

}