// Your script here.
// Fetch all available voices and populate the dropdown
function populateVoices() {
  voices = speechSynthesis.getVoices();
  voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

// Set the selected voice for the utterance
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
}

// Update rate and pitch settings
function setOption() {
  msg[this.name] = this.value;
}

// Start speaking the text
function startSpeaking() {
  speechSynthesis.cancel(); // Cancel any ongoing speech
  msg.text = document.querySelector('[name="text"]').value;
  speechSynthesis.speak(msg);
}

// Stop speaking
function stopSpeaking() {
  speechSynthesis.cancel();
}

// Event listeners
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', startSpeaking);
stopButton.addEventListener('click', stopSpeaking);

// Initialize the voices on page load
populateVoices();

