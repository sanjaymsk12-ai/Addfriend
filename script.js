let h = document.querySelectorAll('h1')

h[0].style.fontFamily = 'Calibri'


h[1].style.fontFamily = 'Calibri'
h[1].style.fontSize = '25px'
h[1].style.color = 'red'


let btn = document.getElementById('b1')

btn.style.color='#ffffffff'
btn.style.backgroundColor = '#2108c4ff'
btn.style.fontSize='25px'
btn.style.padding = '10px'
btn.style.borderRadius = '10px'
btn.style.fontWeight='700'
// btn.style.borderBlockColor = 'blue'
// btn.style.borderBlockStartColor = 'blue'
// btn.style.borderBlockendColor = 'blue'

btn.style.borderColor = 'blue'

btn.addEventListener('click',function(){
    let text = h[1].innerHTML
    console.log(text);
    if(text == 'Stranger'){

        h[1].innerHTML='Friends'
        h[1].style.color = 'green' 
        setTimeout(() => {
            btn.innerHTML = 'Remove' 
            btn.style.backgroundColor = '#ffffffff'
            btn.style.color='#1f00ebff'
        }, 300);
        

    }else{
        h[1].innerHTML='Stranger'
        h[1].style.color = 'red'
        btn.innerHTML = 'Add Friend' 
        btn.style.backgroundColor = '#1f00ebff'
        btn.style.color='#ffffffff'
    }
    

})


// btn.addEventListener('mousedown',function(){
//    btn.style.backgroundColor = '#1f00ebff'
//    btn.style.color='#ffffffff'
// })


// btn.addEventListener('mouseup',function(){
//     btn.style.backgroundColor = '#ffffffff'
//     btn.style.color='#1f00ebff'
// })