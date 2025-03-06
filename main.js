let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nev-active');
    this.classList.toggle('fa-xmark')
})
let typed = new Typed('#auto-input',{
    strings:['Front-End Developer!','Web Designer!','Video Editor'],
    typespeed: 90,
    backspeed:90,
    backDelay:100,
    loop: true,
})

