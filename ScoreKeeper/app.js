//Son los botones
//Botones:
const boton1Puntaje = document.querySelector('#boton1Puntaje');
const boton2Puntaje = document.querySelector('#boton2Puntaje');
const botonReinicio = document.querySelector('#botonReinicio');
//Puntajes de 0 a 0:
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
//Opciones
const playToSelect = document.querySelector('#playTo');
//Variable del puntaje:
let p1Score = 0;
let p2Score = 0;
//Variable de la puntuación ganadora:
let winningScore = 5;
let isGameOver = false;

boton1Puntaje.addEventListener('click', function(){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            //Es un atributo de bulma que permite desactivar los botones 
            boton1Puntaje.disabled = true;
            boton2Puntaje.disabled = true;
        }
         p1Display.textContent = p1Score;
    }
    })

    boton2Puntaje.addEventListener('click', function(){
        if(!isGameOver){
            p2Score += 1;
            if(p2Score === winningScore){
                isGameOver = true;
                p2Display.classList.add('has-text-success');
                p1Display.classList.add('has-text-danger');
                //Es un atributo de bulma que permite desactivar los botones 
                boton1Puntaje.disabled = true;
                boton2Puntaje.disabled = true;
            }
             p2Display.textContent = p2Score;
        }
        })
playToSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value); 
    reset();
})

botonReinicio.addEventListener('click', reset)

function reset(){
    isGameOver = false;
p1Score = 0;
p2Score = 0;
p1Display.textContent = 0;
p2Display.textContent = 0;
p1Display.classList.remove('has-text-success', 'has-text-danger');
p2Display.classList.remove('has-text-success', 'has-text-danger');
boton1Puntaje.disabled = false;
boton2Puntaje.disabled = false;
}
