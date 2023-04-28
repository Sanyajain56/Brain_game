let cardArray = [
    {
    'name': "CSS",
    'img': "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-ice-cream-e127d41.jpg?quality=90&webp=true&resize=440,400",
    },

    {
        'name': "HTMl",
        'img': 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },

        {
            'name': "jQuery",
            'img': 'https://images.unsplash.com/photo-1639744091981-2f826321fae6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            },

            {
                'name': "js",
                'img': 'https://rumkisgoldenspoon.com/wp-content/uploads/2021/02/Dal-makhani-ki-recipe.jpg',
                },
                {
                    'name': "node",
                    'img': 'https://images.unsplash.com/photo-1561651823-34feb02250e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=554&q=80',
                    },
       {
                        'name': "python",
                        'img': "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
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