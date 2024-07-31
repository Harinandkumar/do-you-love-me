// yes btn
function clickYesButton() {
    alert('I love you too! 💖');
    document.getElementById('main-card').style.display = 'none';
    var optionsCard = document.getElementById('options-card');
    optionsCard.style.display = 'flex';
optionsCard.style.flexDirection = 'column';
    
    optionsCard.style.alignItems = 'center';
    optionsCard.style.justifyContent = 'center';
    optionsCard.style.gap = '29px';
    optionsCard.style.paddingTop = '2px';
}


// no button on hover
document.getElementById('btn2').onmouseover = function() {
    let x = Math.random() * (window.innerWidth - this.clientWidth); 
    let y = Math.random() * (window.innerHeight - this.clientHeight); 

    this.style.position = 'absolute'; // Set position to absolute
    this.style.left = x + 'px';
    this.style.top = y + 'px';
};

//  "Date" button
document.getElementById('date-btn').onclick = function() {
    document.getElementById('options-card').style.display = 'none';
   var datekro =  document.getElementById('date-options-card');
   datekro.style.display = 'flex';
   datekro.style.flexDirection = 'column';
       
       datekro.style.alignItems = 'center';
       datekro.style.justifyContent = 'center';
       datekro.style.gap = '29px';
       datekro.style.paddingTop = '2px';
};

//  "Marry" 
document.getElementById('marry-btn').onclick = function() {
    alert('Wow, tumhare parents ko pata hai? Mujhe pehle unse milna padega! 😂');
};

document.getElementById('coffee-btn').onclick = function() {
    alert('Great choice! I know a perfect coffee spot. When are you free? ☕😊');
};

document.getElementById('movie-btn').onclick = function() {
    alert('Awesome! Let’s pick a time that works for both of us. Which movie do you have in mind? 🍿🎥');
};
