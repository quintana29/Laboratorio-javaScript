import {main}from '../app.js'
export const questionView = () => {
   

    const container = document.querySelector("#container");


    const questionContainer = document.createElement("div");
    questionContainer.classList.add("quiz-container","containerQuestion");
    questionContainer.id = "containerQuestion";

    const keyDescription = document.createElement("h2");
    keyDescription.classList.add("keys-row");
    keyDescription.id = "description";
    keyDescription.innerText = "Descripcion general de las preguntas";

    
    const keyTittle = document.createElement("h2");
    keyTittle.classList.add("keys-row");
    keyTittle.id = "question";
    keyTittle.textContent = "INICIO";
    
    let scoreRow = document.createElement("div");
    scoreRow.classList.add("tittle-keys","score");
    scoreRow.id = "score"
    scoreRow.append(keyDescription)
   
   

    let questionRow = document.createElement("div");
    questionRow.classList.add("tittle-keys","listBtn");
    questionRow.id = "listBtn"

    

    questionRow.append(keyTittle);
  
    questionContainer.append(questionRow);
    
    container.append(scoreRow, questionContainer);
    
    main();

}
