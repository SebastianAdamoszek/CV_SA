function togglePartial(id) {
  if (id === 'about') {
    var reposElement = document.getElementById('repositories');
    reposElement.classList.remove('hide');

    var careerElement = document.getElementById('career');
    careerElement.classList.remove('hide');

    var educationElement = document.getElementById('education');
    educationElement.classList.remove('hide');

    var letterElement = document.getElementById('letter');
    letterElement.classList.add('hide');
  } else {
    var partials = document.getElementsByClassName('partial');
    for (var i = 0; i < partials.length; i++) {
      if (partials[i].id === id) {
        partials[i].classList.remove('hide');
      } else {
        partials[i].classList.add('hide');
      }
    }
  }
}

function showHide(id, action) {
  var element = document.getElementById(id);
  if (action === 'hide') {
    element.classList.add('hide');
  } else {
    element.classList.remove('hide');
  }
}

function toggleActiveShadow(id) {
  var clickedElement = document.getElementById(id);
  var otherElementId = id === 'clickAbout' ? 'clickLetter' : 'clickAbout';

  var otherElement = document.getElementById(otherElementId);

  clickedElement.classList.add('activeShadow');

  otherElement.classList.remove('activeShadow');
}
