// If user add a note it should be added to local Storage
    showNotes();
    let add = document.getElementById('addBtn');
    let noteText = document.getElementById('noteText');
    add.addEventListener("click", function(e){
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notes.toString());
    showNotes();
});
// Function to show the notes

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element,index) {
        html +=`
        <div class="card  my-4 mx-4" style="width: 18rem;">
          
        <div class="card-body">
          <h5 class="card-title">Notes ${index+1}</h5>
          <hr>
          <p class="card-text" id="noteText">${element}</p>
          <button onclick = "deleteNote(this.id)" id =${index} class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
    });
    let noteCont = document.getElementById('noteCont');
    if(notesObj.length != 0){
        noteCont.innerHTML = html;
    }
    else{
        noteCont.innerHTML = `<h1>Please add Your Note</h1>`
    }
}

// Function to delete the specific note

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
    console.log(`Deleting ${index} item`);

}

