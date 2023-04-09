const textToTranslateInput = document.getElementById("text-to-translate");
const targetLanguageSelect = document.getElementById("target-language");
const translateButton = document.getElementById("translate-button");
const resultDiv = document.getElementById("result");

const apiKey = "853468262be94452904c923a1a3a3e39";

translateButton.addEventListener("click", () => {
    const textToTranslate = textToTranslateInput.value;
    const targetLanguage = targetLanguageSelect.value;

    fetch(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${targetLanguage}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": apiKey,
            "Ocp-Apim-Subscription-Region": "eastasia"
        },
        body: JSON.stringify([{ Text: textToTranslate }])
    })
        .then(response => response.json())
        .then(data => {
            const translatedText = data[0].translations[0].text;

            resultDiv.innerText = translatedText;
        })
        .catch(error => {
            console.error(error);
            resultDiv.innerText = "An error occurred while translating the text.";
        });
});
