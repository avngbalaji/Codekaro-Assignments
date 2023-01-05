console.log('connected');

function roll(){
    let diceAnimation = document.getElementById('dice');
    diceAnimation.classList.add('animation');
    
    setTimeout(()=>{
        let randomNo = Math.floor(Math.random()*6);
        document.getElementById('dice').innerText=randomNo;
        diceAnimation.classList.remove('animation');
    }, 1000)

    document.getElementById('dice').innerText='';
}

