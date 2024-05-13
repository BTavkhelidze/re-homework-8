const btns = Array.from(document.querySelectorAll('.btn'));

const hideTexts = Array.from(document.querySelectorAll('.hidden'));

const arrows = Array.from(document.querySelectorAll('.arrow'));

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

// btns.forEach((btn) =>
//   btn.addEventListener('click', function () {
//     hideTexts.forEach((el) => hideText(el));
//     arrows.forEach((el) => activeArrow(el));
//   })
// );

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    hideText(hideTexts[i]);
    activeArrow(arrows[i]);
  });
}
