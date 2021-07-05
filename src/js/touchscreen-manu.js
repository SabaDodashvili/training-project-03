let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};

if (isMobile.any()) {
  body.classList.add('touch');

  let arow = document.querySelectorAll('.arow');

  for (let i = 0; i < arow.length; i++) {
    let thisLink = arow[i].previousElementSibling;
    let subManu = arow[i].nextElementSibling;
    let thisArow = arow[i];
    thisLink.classList.add('parent');
    arow[i].addEventListener('click', function () {
      subManu.classList.toggle('open');
      thisArow.classList.toggle('active');
    });
  }
} else {
  body.classList.add('mouse');
}
