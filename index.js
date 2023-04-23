let cardArray = [
    {
    'name': "CSS",
    'img': "https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo",
    },

    {
        'name': "HTMl",
        'img': 'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn',
        },

        {
            'name': "jQuery",
            'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_Rcy7RQNzkn3K_g8Pvj9V-kISlFBQFhU86cjW1tQ5AnZb4TUn8MC4wCmrIgzq1SPV1A&usqp=CAU',
            },

            {
                'name': "js",
                'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
                },
                {
                    'name': "node",
                    'img': 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png',
                    },
       {
                        'name': "python",
                        'img': "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                        }
];

// step 1
const parentDiv = document.querySelector("#card-section");

// step 2 to duplicate each card
const gameCard = cardArray.concat(cardArray)

// step 3
//Note that this method creates a new shuffled array instead of modifiny the original one
  let shuffledChild = Array.from(gameCard).sort( () => 0.5 - Math.random());


  let clickcount = 0;
  let firstCard = "";
  let secondCard = "";

// styling the match card
const card_match = ()=>{
let card_selected  = document.querySelectorAll('.card_selected');
card_selected.forEach(curElem => {
    curElem.classList.add('card_match')
});
}

// step 7
// countine play untill all the div match
const resetGame =() =>{
    firstCard = "";
    secondCard = "";
    clickcount = 0;

    let card_selected  = document.querySelectorAll('.card_selected');
card_selected.forEach(curElem => {
    curElem.classList.remove('card_selected')
});
}




// step 4 
// to find which divor box has been selected
  parentDiv.addEventListener('click', (event) =>{
  let curCard = event.target;
  if(curCard.id ==="card-section"){return false}
 // step 5 
 //to select only two div at a time

    clickcount ++;
    if(clickcount < 3){

    // step 6
    // for matching the card
    if (clickcount ===1) {
        firstCard = curCard.parentNode.dataset.name;
        curCard.parentNode.classList.add('card_selected');
    } else {
        secondCard = curCard.parentNode.dataset.name;
        curCard.parentNode.classList.add('card_selected');
    }
    if(firstCard !== "" && secondCard !== ""){
        if(firstCard === secondCard){

            // step 8 to add some delay for showing that some div is selected
          setTimeout(() => {
            card_match();
           resetGame()
          }, 1000);
           
        }
        else{
            setTimeout(() => {
                resetGame()
            }, 1000);
            
        }
    }
    }
    

})


for(let i=0; i<shuffledChild.length; i++){
    const childDiv = document.createElement('div');
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;
/* childDiv.style.backgroundImage =`url(${shuffledChild[i].img})`;*/
const forntDiv = document.createElement('div');
forntDiv.classList.add('fornt-card')
const backDiv = document.createElement('div');
backDiv.classList.add('back-card')
backDiv.style.backgroundImage =`url(${shuffledChild[i].img})`;


    parentDiv.appendChild(childDiv)
    childDiv.appendChild(forntDiv)
    childDiv.appendChild(backDiv)
}