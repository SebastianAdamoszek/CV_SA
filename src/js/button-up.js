const myButton = document.querySelector('.button-up');

// window.onscroll = function () {
//   scrollFunction();
// };

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

myButton.addEventListener('click', topFunction);
