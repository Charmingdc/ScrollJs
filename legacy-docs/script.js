window.onload = () => {
  const mainClass = document.querySelector('.main');
  const menuButton = document.querySelector('#menu-button');
  const menuBar = document.querySelector('.menu-bar');
  const closeIcon = document.querySelector('#close-icon');
  const codeEditors = document.querySelectorAll('.code-editor');
  
  
  

  menuButton.addEventListener('click', () => {
    menuBar.classList.toggle('show-menu');
    mainClass.classList.toggle('blur')
  });

  closeIcon.addEventListener('click', () => {
    menuBar.classList.toggle('show-menu');
    mainClass.classList.toggle('blur')
  });
  
  
  // Initialize ScrollObserver
 const observer = new ScrollObserver();
 
 observer.observe(codeEditors, null, 'code-editor-show');
}


