const containerEl = document.querySelector('.CONTAINER');

 const careers = ['web developer', 'youtuber', 'designer', 'artist', 'infleuncer'];

 let careerIdex = 0;

 let characterIndex = 0;


updateText();

function updateText() {
    characterIndex++;  

 containerEl.innerHTML = `<h1>i am  ${careers[careerIdex].slice(0, 1) === "i" ? "an" : "a"} ${careers[careerIdex].slice(0, characterIndex)}</h1>`;

 

if (characterIndex === careers[careerIdex].length) {
    careerIdex++
    characterIndex = 0;
    
}
if (careerIdex === careers.length) {  
    careerIdex = 0;
}


setTimeout(updateText, 100);



}


        



