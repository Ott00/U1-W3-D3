window.onload = () => {
  //pesco gli elementi dal DOM
  const task = document.getElementById("task");
  const btnAddTask = document.getElementById("addTask");
  const main = document.getElementsByTagName("main")[0];
  //creo una contenitore per la lista
  const listDiv = document.createElement("div");
  //creo una lista
  const list = document.createElement("ul");
  //appendo la lista al main
  main.appendChild(listDiv);
  listDiv.appendChild(list);

  btnAddTask.onclick = function () {
    //creo gli elementi di una lista e li do il valore ricevuto dall'input
    const listElement = document.createElement("li");
    listElement.innerText = task.value;

    if (task.value !== "") {
      //resetto il valore di input
      task.value = "";

      //creo il bottone(icona) per rimuovere la task e gli assegno la sua classe di fontawesome
      const btnRemoveTask = document.createElement("i");
      btnRemoveTask.classList.add("fas");
      btnRemoveTask.classList.add("fa-trash-alt");
      btnRemoveTask.style.fontSize = ".7rem";
      btnRemoveTask.style.marginLeft = ".3rem";

      //aggiungo il bottone remove all'elemento
      listElement.appendChild(btnRemoveTask);

      //appendo gli elementi alla lista
      list.appendChild(listElement);

      //do una classe al blocco output
      listDiv.classList.add("output-block");

      //quando clicco un elemento della lista l'elemento viene
      //segnato come fatto con l'aggiunta di una classe css
      listElement.onclick = function (e) {
        const clickedElement = e.target;
        clickedElement.classList.add("task-done");
      };

      btnRemoveTask.onclick = function (e) {
        const clickedElement = e.target;
        clickedElement.closest("li").remove();

        //controllo se il div abbia ancora dei figli dopo la rimozione di uno di loro
        //e nel caso siano 0 i figli rimuovo anche il contenitore che rimarrebbe se no vuoto
        if (list.childElementCount === 0) {
          //console.log("Vero");
          listDiv.remove();
        }
      };
    } else {
      alert("Non è stata messa nessuna task");
    }
  };
};
