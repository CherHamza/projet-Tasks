if (location.pathname == '/home') {

    let tasks = "";
    let selectOptions = null;
    let taskUser = " ";
    let pTask = null;
    let taskUserD=  "";
    let taskUserP = "";



    //fetch tasks done/pending

    // fetch('https://localhost:4443/tasksList', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    // })
    // .then(res => res.json())
    // .then(tasks => {
    //     tasks.forEach(task => {
            
    //         if (task.done === true) {
                
    //             document.getElementById('tasksDone').innerHTML += `
    //                 <div class="${task.cat} ${task.done ? 'done' : ''}">
    //                     <p>${task.title}</p>
    //                 </div>`;
    //         } else {
                
    //             document.getElementById('tasksPending').innerHTML += `
    //             <div class="${task.cat} ${task.done ? 'done' : ''}">
    //                 <p>${task.title}</p>
    //             </div>`;
    //         }
    //     });

        
    // });

//fetch Select Users

fetch('https://localhost:4443/usersList', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
.then(res => res.json())
.then(users =>{
    selectOptions = document.getElementById('userSelect');
    let optionsUsers= "<option value='empty' selected>Choisissez un utilisateur</option>";


    users.forEach(user => {

        optionsUsers += "<option value='" + user.id + "'>" +user.name +"</option>";
    //   const option = document.createElement('option');
    //   option.value = user.id; 
    //   option.textContent = user.name; 
    //   selectOptions.appendChild(option);
    });
    selectOptions.innerHTML = optionsUsers;

    selectOptions.addEventListener('change', (e)=>{
        e.preventDefault();
        // console.log(e);

        let id = selectOptions.value;
        console.log(id);

       
        
        if (taskUser) {
            taskUser.innerHTML = ''}
        if (taskUserD) {
            taskUserD.innerHTML = ''}
        if (taskUserP) {
            taskUserP.innerHTML = ''}


        fetch('https://localhost:4443/userSelect/' + id, {
            method: "GET"
        })

        .then(res=> res.json())
        .then (data =>{
            tasks = data
            
            taskUserD= document.getElementById('taskUserDone');
            taskUserP= document.getElementById('taskUserPending');

           //faire une fonction render(data)
           tasks.forEach(task=>{
            console.log(task);
            console.log(task.title);

            //  pTask = document.createElement('p');
            //  pTask.textContent = task.title; 
            //  taskUser.appendChild(pTask);

             if(task.done == true){
                const pTaskD = document.createElement('p');
                pTaskD.textContent = task.title;
                pTaskD.classList.add('done');
                taskUserD.appendChild(pTaskD);

             }else{
                const pTaskP = document.createElement('p');
                pTaskP.textContent = task.title;
                pTaskP.classList.add('pending');
                taskUserP.appendChild(pTaskP);
             }

           })
         
        })


    })
    
})


}
if (location.pathname == '/newtask'){
    const form = document.querySelector('form');


    fetch('https://localhost:4443/usersList', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
})
.then(res => res.json())
.then(users =>{
    selectOptions = document.getElementById('selectUser');
    let optionsUsers= "<option value='empty' selected>Choisissez un utilisateur</option>";


    users.forEach(user => {

        optionsUsers += "<option value='" + user.id + "'>" +user.name +"</option>";
    //   const option = document.createElement('option');
    //   option.value = user.id; 
    //   option.textContent = user.name; 
    //   selectOptions.appendChild(option);
    });
    selectOptions.innerHTML = optionsUsers;

}


)


fetch('https://localhost:4443/newtask/cat', {
 method: "GET",
 headers: {
    'content-type': 'application/json'
 },

})

.then(res => res.json())
.then(cat => {
    selectOptions = document.getElementById('selectCat');
    let optionsCat= "<option value='empty' selected>Choisissez une catégorie</option>";
    cat.forEach(cat=>{
        console.log(cat);
        


            optionsCat += "<option value='" + cat.name + "'>" + cat.name+ '</option>';
        });
        selectOptions.innerHTML = optionsCat;
        
    })

    form.addEventListener('submit', (e)=>{
        
        e.preventDefault();
        console.log(form.title.value);
        console.log(form.selectCat.value);
        console.log(form.selectUser.value);
        // console.log(form);

        fetch('https://localhost:4443/newtask/', {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                title: form.title.value,
                category: form.selectCat.value,
                userId: form.selectUser.value,
            })

        })
        // .then(()=> location.href = '/home')
        


    })


}
