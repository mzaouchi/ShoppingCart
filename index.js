// var btnPlus = document.querySelector('.plus')

// btnPlus.addEventListener('click',function(){
//     btnPlus.nextElementSibling.innerHTML++
// })


// var btnMoins = document.querySelector('.moin')

// btnMoins.addEventListener('click',function(){
//     if(btnMoins.previousElementSibling.innerHTML>0){
//         btnMoins.previousElementSibling.innerHTML--
//     }
    
// })

var btnsPlus = document.querySelectorAll('.plus')
var btnsMoins = document.querySelectorAll('.moin')
var btnsDelete = document.querySelectorAll('.del')
var btnsHeart = document.querySelectorAll('.heart')
var totSomme = document.querySelector('#Somme')

for(let i = 0; i <btnsPlus.length;i++){

    btnsPlus[i].addEventListener('click',function(){
        btnsPlus[i].nextElementSibling.innerHTML++
        SommeTotale()
    })

}

for(let i = 0; i<btnsMoins.length;i++){

    btnsMoins[i].addEventListener('click',function(){
    if(btnsMoins[i].previousElementSibling.innerHTML>0){
        btnsMoins[i].previousElementSibling.innerHTML--
        SommeTotale()
    }
})
}

for(let i = 0;i<btnsDelete.length;i++){
    btnsDelete[i].addEventListener('click',function(){
        btnsDelete[i].parentElement.remove()
        SommeTotale()
    })
}

for(let i = 0;i<btnsHeart.length;i++){
    btnsHeart[i].addEventListener('click',function(){
        btnsHeart[i].classList.toggle('heart') 
    })
}

function SommeTotale(){
    var prix = document.querySelectorAll('.prix')
    var quantite = document.querySelectorAll('.quanti')
    var som = 0

    for(let i =0; i<prix.length;i++){
        som = som + prix[i].innerHTML * quantite[i].innerHTML
    }

    totSomme.innerHTML = som
}