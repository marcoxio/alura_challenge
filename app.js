document.addEventListener("DOMContentLoaded", function() {
    const textArea = document.querySelector(".text-area");
    const message = document.querySelector(".message");
    const encryptButton = document.querySelector(".btn-encrypt");
    const decryptButton = document.querySelector(".btn-decrypt");
    const copyButton = document.querySelector(".btn-copy");

    encryptButton.addEventListener("click", () => {
        if (textArea.value.trim() !== "") {
            message.value = encrypt(textArea.value);
            clearFields();
        } else {
            console.log("Please enter text before encrypting.");
        }
    });
    
    decryptButton.addEventListener("click", () => {
        if (textArea.value.trim() !== "") {
            message.value = decrypt(textArea.value);
            clearFields();
        } else {
            console.log("Please enter text before decrypting.");
        }
    });
    
    copyButton.addEventListener("click", () => {
        if (message.value.trim() !== "") {
            message.select();
            document.execCommand("copy");
            console.log("Text copied to clipboard!");
        } else {
            console.log("No text to copy.");
        }
    });

    function clearFields() {
        textArea.value = "";
        message.style.backgroundImage = "none";
    }

    // Normalize text to lowercase and remove accents once
    function normalizeText(text) {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    // Encrypt function
    function encrypt(encryptedString) {
        const codeMatrix = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };
        encryptedString = normalizeText(encryptedString);

        for (let letter in codeMatrix) {
            encryptedString = encryptedString.replaceAll(letter, codeMatrix[letter]);
        }

        return encryptedString;
    }

    // Decrypt function
    function decrypt(encryptedString) {
        const codeMatrix = { "enter": "e", "imes": "i", "ai": "a", "ober": "o", "ufat": "u" };
        encryptedString = normalizeText(encryptedString);

        for (let letter in codeMatrix) {
            encryptedString = encryptedString.replaceAll(letter, codeMatrix[letter]);
        }

        return encryptedString;
    }

});
