const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');



function addList(e){

    const notCompleted= document.querySelector('.notCompleted');
    const Completed= document.querySelector('.Completed');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn= document.createElement('button');

    checkBtn.innerHTML = '<i class="bi bi-check2">';
    delBtn.innerHTML = '<i class="bi bi-trash">';



    if(input.value !== ' '){
        newLi.textContent = input.value;
        input.value= ' ';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });
    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });

}

