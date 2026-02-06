
const title = document.getElementById("title");
const message = document.getElementById("message");
const photo = document.getElementById("photo");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const quiz = document.getElementById("quiz");
const quizBtns = document.querySelectorAll(".quiz-btn");

const correctSound = document.getElementById("correctSound");
const punchSound = document.getElementById("punchSound");
//const Valentine = document.getElementById("valentine");
const valentineSound = document.getElementById("valentine");

let step = 0;

const steps = [
  {
    title: "Hey Husband 😌",
    message: "This is for you.\nJust click yes. Nothing else.",
    photo: "photos/photo1.jpg"
  },
  {
    //title: "Hey 😏",
    message: "Just a quizz\nI know you dont like these kind of quizzes. Just try it out beb",
    photo: "photos/photo2.jpg"
  },
  {
    title: "❤️",
    message:
      "Every step with you teaches me something new.\n\n" +
      "After three and a half years of marriage, life still feels magical " +
      "because I am learning it with you.",
    photo: "photos/photo4.jpg"
  },
  {
   
    title: "Hmmm.......... 💘",
    message: "So...\nwill you be my Valentine? 🌹",
    photo: "photos/photo5.jpg"
     
  }
];

const animations = ["cute-pop", "cute-wiggle"];

function animatePhoto() {
  photo.className = "";
  const random = animations[Math.floor(Math.random() * animations.length)];
  photo.classList.add(random);
}

yesBtn.addEventListener("click", () => {
  step++;

  if (step < steps.length) {
    title.textContent = steps[step].title;
    message.textContent = steps[step].message;
    photo.src = steps[step].photo;
    animatePhoto();

    quiz.style.display = step === 1 ? "block" : "none";
    if (step === 3) {   // your Valentine step
      valentineSound.play().catch(() => {
        console.log("Sound blocked until user interacts");
      });
    }
  } else {
    finalScreen();
  }
});

/* QUIZ LOGIC */
quizBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.dataset.answer;

    if (answer === "texas") {
      // ✅ RIGHT ANSWER → PHOTO 7
      correctSound.play();

      title.textContent = "Correct 😎💖";
      message.textContent =
        "ummahhhh😘"; 

      photo.src = "photos/photo7.jpg";
      photo.className = "cute-heartbeat";
      quiz.style.display = "none";
    } else {
      // ❌ WRONG ANSWER → PHOTO 6
      punchSound.play();

      title.textContent = "WRONG 😤";
      message.textContent =
        "Think again… but enjoy this punishment 😈";

      photo.src = "photos/photo3.jpg";
      photo.className = "cute-shake";
    }
  });
});

/* NO button escape */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function finalScreen() {
  title.textContent = "YAYYY 💃🕺";
  message.textContent =
    "You are officially my Valentine ❤️\n" +
    "No refunds. No returns 😘";

  photo.src = "photos/photo6.jpg";
  photo.className = "cute-heartbeat";
  yesBtn.textContent = "I ❤️ YOU";
  noBtn.style.display = "none";

  
 
}
// Envelope open logic
const envelopeOverlay = document.getElementById("envelope-overlay");

envelopeOverlay.addEventListener("click", () => {
  envelopeOverlay.style.opacity = "0";
  envelopeOverlay.style.transition = "opacity 0.6s ease";

  setTimeout(() => {
    envelopeOverlay.style.display = "none";
  }, 600);
});
