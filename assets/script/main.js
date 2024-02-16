var textInput = document.querySelector("#input");

function encoder() {
    var text = textInput.value
    if (text === '') {
        alert("Por favor, digite um texto para ser codificado.");
        return;
    }

    if (uppercaseLetter(text)) {
        return;
    }

    checkRules(text);

    var result = text.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('output-title').innerHTML = "Encoded Message";
    document.getElementById('output-text').innerHTML = result;

    outputInfo();
}

function decoder() {
    var text = textInput.value

    if (text === '') {
        alert("Por favor, digite um texto para ser codificado.");
        return;
    }

    if (uppercaseLetter(text)) {
        return;
    }

    checkRules(text);

    var resultDecoder = text.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('output-title').innerHTML = "Decoded Message";
    document.getElementById('output-text').innerHTML = resultDecoder;

    outputInfo();
}

function copy() {
    var resultadoCapturado = document.getElementById('output-text').innerText;
    navigator.clipboard.writeText(resultadoCapturado).then(function () {
        alert("Texto copiado com sucesso!");
    }, function () {
        alert("Erro ao copiar o texto. Por favor, copie manualmente.");
    });
    reset();
}

function reset() {
    textInput.value = '';
    document.getElementById('output-title').innerHTML = 'No messages were found';
    document.getElementById('output-text').innerHTML = 'Enter text you want to encrypt or decrypt';
    document.getElementById('output-copy').style.display = 'none';
    document.getElementById('output-message').style.display = 'block';
}

function uppercaseLetter(text) {
    if (/[^a-z\s]/.test(text)) {
        alert("Apenas palavras minúsculas são permitidas!");
        textInput.value = '';
        return true;
    }
    return false;
}

function outputInfo() {
    document.getElementById('output-textarea').style.display = 'block';
    document.getElementById('output-message').style.display = 'none';
    document.getElementById('output-copy').style.display = 'block';
}

function checkRules(text){
    if (text === '') {
        alert("Por favor, digite um texto para ser codificado.");
        reset();
        return;
    }

    if (uppercaseLetter(text)) {
        reset();
        return;
    }
}
