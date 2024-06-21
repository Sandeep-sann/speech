function getStarted() {
    alert("Let's get started with the Audio World!");
    document.querySelector('.overlay').classList.add('hidden');
    document.getElementById('converter-section').classList.remove('hidden');
}

function showConverter() {
    document.querySelector('.overlay').classList.add('hidden');
    document.getElementById('converter-section').classList.remove('hidden');
}

function convertTextToSpeech() {
    const textInput = document.getElementById('text-input').value;
    const audioOutput = document.getElementById('audio-output');

    const utterance = new SpeechSynthesisUtterance(textInput);
    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onend = function() {
        // This is just for visual feedback, not actual audio generation.
        const speechBlob = new Blob([textInput], { type: 'audio/wav' });
        const speechUrl = URL.createObjectURL(speechBlob);
        audioOutput.src = speechUrl;
    };

    window.speechSynthesis.speak(utterance);
}