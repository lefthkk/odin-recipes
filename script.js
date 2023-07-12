
const container = document.querySelector('#container');
const button = document.querySelector('.btn');
button.addEventListener('click',size);
const button1 = document.querySelector('.btn-1');
button1.addEventListener('click',size);
for(let i=0;i<100;i++){
    const divs = document.createElement('div');
    
    document.getElementById('container').appendChild(divs);
    divs.setAttribute("id",'divm');
    divs.classList.add(`divm-${i}`);
  
}
function reverts(){
    container.innerHTML = '';
    container.style.backgroundColor = 'white';
}
function size(){
    
    container.style.height = `${this.value}px`;
    container.style.width = `${this.value}px`;
    
    if(this.value == 320){ 
        reverts();
    for(let i=0;i<400;i++){
        const divs = document.createElement('div');
        
        document.getElementById('container').appendChild(divs);
        divs.setAttribute("id",'divm');
        divs.classList.add(`divm-${i}`);
      
    }
        
    }
    if(this.value == 160){ 
    reverts();
    for(let i=0;i<100;i++){
        const divs = document.createElement('div');
        
        document.getElementById('container').appendChild(divs);
        divs.setAttribute("id",'divm');
        divs.classList.add(`divm-${i}`);
      
    }
    
    }
}


container.addEventListener('mousemove', add);


function add(e){
    
    
    e.target.style.backgroundColor = 'blue';
    
}

