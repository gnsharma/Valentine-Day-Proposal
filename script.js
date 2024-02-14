const button = document.getElementById("runaway-button");
const yesButton = document.getElementById("yes-button");
const dialogElem = document.getElementById("dialog");

["mouseover", "click"].forEach(function(el) {
  button.addEventListener(el, function(event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);
    button.style.position = 'absolute';
    button.style.top = `${top}px`;
    button.style.left = `${left}px`;
  });
});

yesButton.addEventListener('click', function(event) {
  dialogElem.showModal();
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

const urlParams = new URLSearchParams(window.location.search);

const shareData = {
  title: "Great news",
  text: `${urlParams.get("gf-name") || "Anika Jain"} has accepted your request to be your valentine`
};

const shareButton = document.getElementById("share-button");
const shareResult = document.getElementById("share-result");

// Share must be triggered by "user activation"
shareButton.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
  } catch (err) {
    shareResult.textContent = `Error: ${err}`;
  }
});

(() => {
  const gfName = urlParams.get("gf-name") || "Anika Jain";
  if (gfName) {
    document.getElementById("gf-name").innerText = gfName;
  }

  const bfName = urlParams.get("bf-name") || "Govind";
  if (bfName) {
    document.getElementById("bf-name").innerText = bfName;
  }

  const randomInt = (n) => Math.floor(Math.random() * n);
  document.getElementById("dynamic").innerText = `
    @keyframes spin {
        0% {
          margin-top: 2vh;
          opacity: 0;
        }
        20% {
          opacity:1.0;
          margin-top: 0vh;
          margin-left: 0vw;
          transform: rotate(${randomInt(90)}deg);
        }
        100% {
          opacity: 0.4;
          margin-top: 100vh;
          margin-left: ${randomInt(4)}vw;
          transform: rotate(1080deg); 
        }
      };
    `;
  let numberOfHearts = 45;
  while (numberOfHearts--) {
    var heartDiv = document.createElement("div");
    heartDiv.classList.add("heart");
    heartDiv.style = `animation: spin ${randomInt(14) + 6}s ease-in infinite;
                        top: ${randomInt(40)}vh;
                       left: ${randomInt(100)}vw;
                  font-size: ${randomInt(40) + 20}px;
                      color: ${["#d00", "#e66", "#fcc"][randomInt(3)]};`;
    heartDiv.textContent = ["\u2661", "\u2665"][randomInt(2)];
    document.getElementById("falling-hearts").appendChild(heartDiv);
  }
})();