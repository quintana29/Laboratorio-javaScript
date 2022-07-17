import {main}from '../app.js'
export const questionView = () => {
   

    const container = document.querySelector("#container");


    const questionContainer = document.createElement("div");
    questionContainer.classList.add("quiz-container","containerQuestion");
    questionContainer.id = "containerQuestion";

    const keyDescription = document.createElement("h2");
    keyDescription.classList.add("tittle-keys");
    keyDescription.id = "description";
    keyDescription.innerText = "JUEGO DE PREGUNTAS";

    
    const keyTittle = document.createElement("h2");
    keyTittle.classList.add("tittle-keys");
    keyTittle.id = "question";
    keyTittle.textContent = "Seleccione la opción que considere correcta:";
    
    let scoreRow = document.createElement("div");
    scoreRow.classList.add("tittle-keys","score");
    scoreRow.id = "score"
    scoreRow.append(keyDescription,keyTittle)
   
   

    let questionRow = document.createElement("div");
    questionRow.classList.add("tittle-keys","listBtn");
    questionRow.id = "listBtn"

    

    //questionRow.append(keyTittle);
  
    questionContainer.append(questionRow);
    
    container.append(scoreRow,questionContainer);
    
    main();

}
