window.onload = function () {
  document.querySelectorAll('.hv').forEach((dom) => {
    dom.addEventListener('mouseover', function (e) {
      const cl = e.currentTarget.classList;
      const bd = document.querySelector('.main');

      let color = 'white';

      if (Array.from(cl).indexOf('box1') !== -1) {
        color = '#DADADA';
      } else if (Array.from(cl).indexOf('box2') !== -1) {
        color = '#C8C9C8';
      } else if (Array.from(cl).indexOf('box3') !== -1) {
        color = '#FF8300';
      } else if (Array.from(cl).indexOf('box4') !== -1) {
        color = '#66A8F7';
      }else if (Array.from(cl).indexOf('box6') !== -1) {
        color = '#9FE1FC';
      } else if (Array.from(cl).indexOf('box7') !== -1) {
        color = '#8DCB8A';
      } else if (Array.from(cl).indexOf('box8') !== -1) {
        color = '#50C338';
      } else if (Array.from(cl).indexOf('box9') !== -1) {
        color = '#388B55';
      }

      e.currentTarget.querySelector('a').style.cursor = `url("cursor.png"), auto`;
      bd.style.backgroundColor = color;
    })

    dom.addEventListener('mouseleave', function (e) {
      document.querySelector('.main').style.backgroundColor = 'white';
    });
  })
};
