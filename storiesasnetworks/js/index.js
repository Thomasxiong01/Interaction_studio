window.onload = function () {
  document.querySelectorAll('.hv').forEach((dom) => {
    dom.addEventListener('mouseover', function (e) {
      const cl = e.currentTarget.classList;
      const bd = document.querySelector('.main');

      let color = 'white';

      if (Array.from(cl).indexOf('box1') !== -1) {
        color = '#DADADA';
      } else if (Array.from(cl).indexOf('box2') !== -1) {
        color = '#0054F5';
      } else if (Array.from(cl).indexOf('box3') !== -1) {
        color = '#FFA030';
      } else if (Array.from(cl).indexOf('box4') !== -1) {
        color = '#CB00FF';
      }else if (Array.from(cl).indexOf('box6') !== -1) {
        color = '#1018FF';
      } else if (Array.from(cl).indexOf('box7') !== -1) {
        color = '#FF9900';
      } else if (Array.from(cl).indexOf('box8') !== -1) {
        color = '#51D1FE';
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
