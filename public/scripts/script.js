const loginBtn = document.querySelector('button');
const requiredInputs = document.querySelectorAll('[required]');
const emailInput = document.querySelector('[type="email"]');
const formLogin = document.querySelector('form');


const jsConfetti = new JSConfetti()
formLogin.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    if(validateForm()) {
        event.preventDefault(); 
        jsConfetti.addConfetti({
            confettiNumber: 150,
            confettiColors: [
                '#5E43FF', '#FF7535', '#B9FFB7', '#120B11', '#302A2F', '#736f72',
              ],
        })


        setTimeout(() => {       formLogin.submit();      }, 1000);
    }
    function validateForm() {    return true; } 
    
}

window.onload = () => {
    const transitionElements = document.querySelector('.transition'),
          anchors = document.querySelectorAll('a')

    setTimeout(() => {
        transitionElements.classList.remove('is-active')
    }, 500)

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i]

        anchor.addEventListener('click', e => {
            e.preventDefault()
            let target = e.currentTarget.href

            transitionElements.classList.add('is-active')

            setTimeout(() => {
                window.location.href = target
            }, 500)
        })
    }
}

