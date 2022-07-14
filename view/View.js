import {main}from '../app.js'
export const questionView = () => {
   

    // Selección del contenedor principal
    const container = document.querySelector("#container");

    // Contenedor de la calculadora
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("quiz-container");
    // <div class="calculator-container"></div>

    const keyClear = document.createElement("button");
    keyClear.classList.add("button", "key-clear");
    keyClear.id = "clear";
    keyClear.textContent = "AC";
    //keyClear.addEventListener("click", clear);
    // <button class="calculator-key key-clear" id="clear">AC</button>

    let questionRow = document.createElement("div");
    questionRow.classList.add("calculator-keys-row");
    questionRow.append(keyClear);

    /*const calculatorKeys = document.createElement("div");
    calculatorKeys.classList.add("calculator-keys");
    calculatorKeys.append(calculatorKeysRow);*/

    questionContainer.append( questionRow);
    container.append(questionContainer);
    
    main();

}
//questionView();