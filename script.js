function convertTextToSpeech() {
    const textInput = document.getElementById('text-input').value;
    const audioOutput = document.getElementById('audio-output');

    const utterance = new SpeechSynthesisUtterance(textInput);
    
    // Set speech rate to 0.5
    utterance.rate = 0.5;

    utterance.pitch = 1;

    utterance.onend = function() {
        // This is just for visual feedback, not actual audio generation.
        const speechBlob = new Blob([textInput], { type: 'audio/wav' });
        const speechUrl = URL.createObjectURL(speechBlob);
        audioOutput.src = speechUrl;
    };

    window.speechSynthesis.speak(utterance);
}
