function initCarousel() {
  let presentSlideNum = 0;
  let slideAmount = 4;
  let elem = document.querySelector('[data-carousel-holder]');

  let carousel__inner = elem.querySelector('.carousel__inner');
  let arrow_right = elem.querySelector('.carousel__arrow_right');
  let arrow_left = elem.querySelector('.carousel__arrow_left');

  update();

  elem.onclick = ({target}) => {
    if (target.closest('.carousel__arrow_right')) {
      next();
    }
    if (target.closest('.carousel__arrow_left')) {
      prev();
    }
  };

  function next() {
    presentSlideNum++;
    update();
  }

  function prev() {
    presentSlideNum--;
    update();
  }

  function update() {
    offset = -carousel__inner.offsetWidth * presentSlideNum;
    carousel__inner.style.transform = `translateX(${offset}px)`;

    if (presentSlideNum == slideAmount - 1) {
      arrow_right.style.display = 'none';
    } else {
      arrow_right.style.display = "";
    }
    if (presentSlideNum == 0) {
      arrow_left.style.display = 'none';
    } else {
      arrow_left.style.display = "";
    }
  } 
}

 

  
