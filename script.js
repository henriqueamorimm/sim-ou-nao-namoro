const naoButton = document.getElementById("nao-button");
const simButton = document.getElementById("sim-button");

naoButton.addEventListener("mouseover", function() {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    naoButton.style.position = "absolute";
    naoButton.style.left = x + "px";
    naoButton.style.top = y + "px";
  }, 500);
  
  naoButton.addEventListener("mouseout", function() {
    clearInterval(intervalId);
    naoButton.style.position = "static";
  });
  simButton.addEventListener("click", function() {
    if (confirm("Você tem certeza que quer clicar em SIM?")) {
      window.location.href = "https://youtu.be/VF97zz_5oCc";
    }
  });