
const randomTexts = [
    "Take a deep breath and continue coding!!!!!!",
    "Ufffff , how much random texts can I generate???",
    "Life is a journey but I have lost the tickets.",
    "You know why half of the population is unsuccessful?? 'Cause the other half chose not to be.",
    "I am clueless but at least I am 5'8''.",
     "Dumb people don't numb people.",
    "I am done!!!",
    "Look who's back . Ms.'can make a website but can't talk.'",
    "I know there are so many languages but I prefer to talk nonsense.",
    "Responsibilities are after me and I have left the race long back. ",
    "I was turning positive in life but life turned on me",
    "In a good way, this looks like the logging in page of the computer games we used to play as kids",
    "You are capable of amazing things.",
    "It's you human again isn't it? Who else would trust a machine to help",
    "My wishes to you hooman",
    "No more texts",
    "' be the bigger person'- no I'm on diet",
    "If you need any help , feel free to ask me , I won't be of any help but feel free",
    "BYE BYE"

  ];
  
  
  const textBox = document.getElementById('random-text');
  const generateBtn = document.getElementById('generate-btn');
  
  
  generateBtn.addEventListener('click', () => {
    
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    textBox.textContent = randomTexts[randomIndex];
  });
  