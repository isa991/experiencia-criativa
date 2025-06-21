document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.createElement("div");
  heartsContainer.id = "hearts-container";
  document.body.appendChild(heartsContainer);

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerText = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    heart.style.fontSize = Math.random() * 15 + 10 + "px";

    heart.style.opacity = Math.random() * 0.7 + 0.3;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  }

  setInterval(createHeart, 300);
});
