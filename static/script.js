async function translateCode() {
  const inputLang = document.getElementById("inputLang").value;
  const outputLang = document.getElementById("outputLang").value;
  const code = document.getElementById("codeInput").value;

  const response = await fetch("/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      input_lang: inputLang,
      output_lang: outputLang,
      code: code
    })
  });

  const data = await response.json();
  document.getElementById("translatedCode").textContent = data.result || "Translation failed.";
}
