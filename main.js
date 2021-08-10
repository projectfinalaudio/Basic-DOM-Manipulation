const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

const text_box = document.querySelector('.text_box');

////////////////////// BOX 1 //////////////////////

box1.addEventListener('click', () => {
    // box1.style.margin = '200px';
    box1.style.width = '400px';
    box1.style.padding = '6px';
    box1.style.color = 'antiquewhite';
    box1.style.fontWeight = 'bold';
    box1.style.textAlign = 'right';
    // box1.innerText = 'Box 1';
    box1.style.fontSize = '20px'
    // text_box.style.display = 'block';
})

box1.addEventListener('dblclick', () => {
    box1.style.width = '10vh';
    box1.style.margin = '30px';
    box1.style.padding = '0px';
    box1.innerText = '';
    // text_box.style.display = 'none';   
})

////////////////////// BOX 2 //////////////////////

box2.addEventListener('click', () => {
    box2.style.margin = '150px';
    box2.style.padding = '12px';
    box2.style.color = 'antiquewhite';
    box2.style.fontWeight = 'bold';
    box2.style.textAlign = 'center';
    // box2.innerText = 'Box 2';
    // text_box.style.display = 'block';
})

box2.addEventListener('dblclick', () => {
    box2.style.margin = '30px';
    box2.style.padding = '0px';
    box2.innerText = '';
    // text_box.style.display = 'none';   
})

////////////////////// BOX 3 //////////////////////

box3.addEventListener('click', () => {
    box3.style.marginLeft = '300px';
    box3.style.padding = '12px';
    box3.style.color = 'antiquewhite';
    box3.style.fontWeight = 'bold';
    box3.style.textAlign = 'center';
    // box3.innerText = 'Box 3';
    // text_box.style.display = 'block';
})

box3.addEventListener('dblclick', () => {
    box3.style.margin = '30px';
    box3.style.padding = '0px';
    box3.innerText = '';
    // text_box.style.display = 'none';   
})
