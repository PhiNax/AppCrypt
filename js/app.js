window.onload = () => {
  let inputText = document.getElementById("crypt-put");
  let outputText = document.getElementById("crypt-out");

  let cryptButton = document.getElementById("crypt-btn");
  let uncryptButton = document.getElementById("uncrypt-btn");

  // Label Messege
  let labelMsg = document.getElementById("label-msg");

  cryptButton.addEventListener("click", () => {
    let textCrypt = inputText.value
      .toLowerCase()
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    outputText.value = textCrypt;
    inputText.value = "";

    window.location.href = "#crypt-out";
  });

  uncryptButton.addEventListener("click", () => {
    let textUnCrypt = inputText.value
      .toLowerCase()
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    outputText.value = textUnCrypt;
  });

  outputText.addEventListener("click", () => {
    if (outputText.value !== "") {
      outputText.select();
      navigator.clipboard.writeText(outputText.value);
      labelMsg.classList.add("label-enabled");
      setTimeout(() => {
        labelMsg.classList.remove("label-enabled");
        outputText.value = "";
        inputText.value = "";
      }, 1500);
      setTimeout(() => {
        window.location.href = "#container-input";
      }, 1700);
    }
  });
};
