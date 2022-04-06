function toggleText() {
  let text = document.querySelector('#text');
  let btn = document.querySelector('.toggle-text-button');
    
  btn.addEventListener('click', () => {
    if (text.hasAttribute('hidden') == false) text.hidden = true;
    else text.hidden = false;

  });           
}



