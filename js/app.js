showNotes();
//if yours click on the add button
let  addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function(e){
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtxt.value = "";
    console.log(notesObj);
    showNotes();
})

function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        //create date start
        const time = new Date();
        let result =  `${time.getDate()}-${(time.getMonth()+1)}-${time.getFullYear()}`;
        const original_date = result;
        let min = time.getMinutes();
        const minutes = min;
        //create date end
        html += `
        <div class="notecard main-container" my-2 mx-2 style="width: 18rem;">
            <div class="card-body">
                <span><h4 class="card-title fw-bold title">Note ${index+1}</h4></span>
                <p class="card-text date">${original_date}+ ${min}</p>
                <p class="card-text mt-1">${element}</p>
                <button id = ${index} onclick ="deletenotes(this.id)" class="btn text-black my-color-style mb-2 mt-2">Delete</button>
            </div>
        </div>`;
    });
    let noteselm = document.getElementById('notes');
    if(notesObj.length != 0){
        noteselm.innerHTML = html;
    }
    else{
        noteselm.innerHTML = 'Please Add Notes !'
        noteselm.style.fontWeight="700";
        
    }
    //set date position
    let date_position = document.querySelectorAll('.date');
    date_position.forEach(element =>{
    element.style.color = "grey";
    element.style.float = 'right';
    element.style.display= "inline";
    });
    
}

function deletenotes(index){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}


let search = document.getElementById('searchtxt');
search.addEventListener('input', function(){
    let inputval = search.value.toLowerCase();
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})


// Extra designings
let heading = document.getElementById('logo-heading');
heading.addEventListener('mousemove', function(e){
    heading.style.color = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`;
})

let colorchange  = document.querySelector('#btn1');
colorchange.addEventListener('click', function(element){
    let select_all_classes = document.querySelectorAll('.my-color-style');
    let save_note_text_color = document.querySelector('.my-textcolor-style');
    save_note_text_color.style.color = '#AC5FDB';
    select_all_classes.forEach(all_classes =>{
        all_classes.style.backgroundColor = '#AC5FDB';
    });
});
let colorchange1  = document.querySelector('#btn2');
colorchange1.addEventListener('click', function(element){
    let select_all_classes = document.querySelectorAll('.my-color-style');
    let save_note_text_color = document.querySelector('.my-textcolor-style');
    save_note_text_color.style.color = '#FF004D';
    select_all_classes.forEach(all_classes =>{
        all_classes.style.backgroundColor = '#FF004D';
    });
});
let colorchange2  = document.querySelector('#btn3');
colorchange2.addEventListener('click', function(element){
    let select_all_classes = document.querySelectorAll('.my-color-style');
    let save_note_text_color = document.querySelector('.my-textcolor-style');
    save_note_text_color.style.color = '#0EF6BE';
    select_all_classes.forEach(all_classes =>{
        all_classes.style.backgroundColor = '#0EF6BE';
    });
});

//setting date inside the card
// let date_position = document.querySelectorAll('.date');
// date_position.forEach(element =>{
//     element.style.color = "grey";
//     element.style.float = 'right';
//     element.style.display= "inline";
    
// })