import {main}from '../app.js'
export const questionView = () => {
   

    const container = document.querySelector("#container");


    const questionContainer = document.createElement("div");
    questionContainer.classList.add("quiz-container","containerQuestion");
    questionContainer.id = "containerQuestion";


    const keyTittle = document.createElement("h2");
    keyTittle.classList.add("keys-row");
    keyTittle.id = "question";
    keyTittle.textContent = "INICIO";
    
    let scoreRow = document.createElement("div");
    scoreRow.classList.add("tittle-keys","score");
    scoreRow.id = "score"
   

    let keyCategory = document.createElement("h3");
    keyCategory.classList.add("keys-row","score-key");
    keyCategory.id = "escore";
    keyCategory.textContent = "Hola mundo";

    
   
    scoreRow.appendChild(keyCategory)
    let questionRow = document.createElement("div");
    questionRow.classList.add("tittle-keys","listBtn");
    questionRow.id = "listBtn"

    

    questionRow.append(keyTittle);

    questionContainer.append(questionRow, scoreRow);
    
    container.append(questionContainer);
    
    main();

}
