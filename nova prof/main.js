x = 0;
y = 0;
drawCircle = "";
drawRect = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
 var content =event.results[0][0].transcript;

 document.getElementById("status").innerHTML = "A fala foi reconhecida como: "+ content
 if(content=="círculo")
 {
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Desenhando um círculo"
 }
}
