import './less/index.less'

// Your code goes here!



// 1 - LOAD

const paragraphs = document.querySelectorAll('p');

window.addEventListener('load', (e) => {
    codify(paragraphs);
})

function codify(pVar) {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let targetCharacters = '';
    for (let i=0; i < 20; i++) {
        targetCharacters += characters[Math.floor(Math.random() * characters.length)];
    }

    let codeList = '';
    for (let i=0; i < targetCharacters.length; i++) {
        codeList += characters[Math.floor(Math.random() * characters.length)];
    }

    console.log(targetCharacters);
    console.log(codeList);

    pVar.forEach( element => {
        let result = '';
        Array.from(element.textContent).forEach((c) => {
            if (targetCharacters.includes(c)) {
                result += codeList[Math.floor(Math.random() * codeList.length)]; 
            } else {
                result += c;
            }
        });

        element.textContent = result;

    })
}


// 2 - MOUSEENTER

const nav = document.querySelector('.main-navigation');

nav.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'orange';
})

// 3 - MOUSELEAVE

nav.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'white';
})

// 4 - KEYDOWN

let oneKey, twoKey, threeKey, fourKey = false;

const reset = () => {
    oneKey = false;
    twoKey = false;
    threeKey = false;
    fourKey = false;
}

document.addEventListener("keydown", (event) => {
    if (event.key === '1') {
        reset();
        oneKey = true;
        console.log('1', oneKey);
    } else if (event.key === '2' && oneKey && twoKey === false) {
        twoKey = true;
        console.log('2', twoKey);
    } else if (event.key === '3' && twoKey && threeKey === false) {
        threeKey = true;
        console.log('3', threeKey);
    } else if (event.key === '4' && threeKey && fourKey === false) {
        fourKey = true;
        console.log('4', fourKey);
        codify(paragraphs);
    } else {
        reset();
    }
});

  
// 5 - CLICK

const introImg = document.querySelector(".intro img");
let clicked = false;

introImg.addEventListener('click', (event) => {
    if (clicked === false) {
        clicked = true;
        event.target.src = 'https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';
    } else {
        clicked = false;
        event.target.src = 'http://localhost:9000/img/fun-bus.jpg';
    }
});


// 6 - DBLCLICK

const content = document.querySelectorAll('.content-section');

content.forEach((e) => {
    e.addEventListener('dblclick', (event) => {
        event.target.style.backgroundColor = 'Bisque';
    });
});


// 7 - COPY

document.addEventListener('copy', () => {alert('You copied something! :o')});


// 8, 9, 10 - MOUSEUP, MOUSEDOWN, and SELECTION CHANGE

let mouseUp = true;
let mouseDown = false;
let selection = '';


document.addEventListener('mousedown', () => {
    mouseDown = true;
    mouseUp = false;
});

document.addEventListener('mouseup', () => {
    mouseUp = true;
    mouseDown = false;
    console.log(selection.toString());
});

document.addEventListener('selectionchange', () => {
    selection = document.getSelection();
});


//PREVENTDEFAULT

const links = document.querySelectorAll('a');
links.forEach( a => {
    a.addEventListener('click', (event) =>{
        event.preventDefault();
    })
})

