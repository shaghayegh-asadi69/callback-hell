const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=> {
        setTimeout(() => {
           first.style.color = 'red'
           setTimeout(() => {
            second.style.color= 'pink'
            setTimeout(() => {
                third.style.color= 'yellow'
            }, 1000);

           }, 3000);

        }, 2000);
    })