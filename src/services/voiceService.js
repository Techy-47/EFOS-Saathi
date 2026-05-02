export function startVoiceRecognition({ onResult, onStart, onEnd, onError }) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    onError?.(
      "Speech recognition is not supported in this browser. Please use Google Chrome."
    );
    return null;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "hi-IN";
  recognition.interimResults = false;
  recognition.continuous = false;

  recognition.onstart = () => {
    onStart?.();
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    onResult?.(transcript);
  };

  recognition.onerror = (event) => {
    onError?.(event.error || "Voice recognition error");
  };

  recognition.onend = () => {
    onEnd?.();
  };

  recognition.start();

  return recognition;
}

export function speakText(text) {
  if (!window.speechSynthesis) {
    return;
  }

  window.speechSynthesis.cancel();

  const cleanText = text
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/#/g, "")
    .replace(/`/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/\n+/g, ". ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 650);

  const utterance = new SpeechSynthesisUtterance(cleanText);

  // Hindi/Hinglish ke liye hi-IN best demo voice hai
  utterance.lang = "hi-IN";
  utterance.rate = 0.92;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
}
export function stopSpeaking() {
  if (!window.speechSynthesis) {
    return;
  }

  window.speechSynthesis.cancel();
}