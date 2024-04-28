let btn4 = document.querySelector('.btn4');
let btn3 = document.querySelector('.btn3');
let btn2 = document.querySelector('.btn2');
let btn1 = document.querySelector('.btn1');

let hideText_4 = document.querySelector('.hid-text4');
let hideText_3 = document.querySelector('.hid-text3');
let hideText_2 = document.querySelector('.hid-text2');
let hideText_1 = document.querySelector('.hid-text1');

let arrow1 = document.querySelector('.arrow1');
let arrow2 = document.querySelector('.arrow2');
let arrow3 = document.querySelector('.arrow3');
let arrow4 = document.querySelector('.arrow4');

let currentImage = './img/down.svg';

function activeArrow(el) {
  if (currentImage === './img/down.svg') {
    currentImage = './img/up.svg';
  } else {
    currentImage = './img/down.svg';
  }
  el.src = currentImage;
}

function hideText(el) {
  if (el.style.display === 'none') {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

btn4.addEventListener('click', function () {
  hideText(hideText_4);

  activeArrow(arrow4);
});

btn3.addEventListener('click', function () {
  hideText(hideText_3);
  activeArrow(arrow3);
});
btn2.addEventListener('click', function () {
  hideText(hideText_2);

  activeArrow(arrow2);
});

btn1.addEventListener('click', function () {
  hideText(hideText_1);
  activeArrow(arrow1);
});
