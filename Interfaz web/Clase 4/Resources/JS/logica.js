let btn = document.getElementById('btn');
btn.addEventListener('click', changeBg);



function changeBg(){
    let label = document.getElementById('label');
    label.classList.add('bg-changed');
}