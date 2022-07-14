
export const countryView = () => {
 
    const body = document.getElementsByTagName("body")[0];
    const container = document.querySelector("#container");


    const tabla   = document.createElement("table");
    const tblBody = document.createElement("tbody");

   
        
        const hilera = document.createElement("tr");
        const celda = document.createElement("td");
        celda.innerHTML =" Nombres";
        hilera.append(celda);
        
        tblBody.append(hilera);
        tabla.append(tblBody);
        body.append(tabla);
        tabla.setAttribute("border", "2");



    PaisContainer.append(body);
    container.append(PaisContainer);



}