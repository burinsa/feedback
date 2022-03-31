let formFb = document.querySelector('.fb-form');
let feedback = document.querySelector('.feedback');
let modal = document.querySelector('.modal');
let modalText = document.querySelector('.modal_text');




formFb.addEventListener('submit', async (e) => {
  e.preventDefault();

  let response = await fetch('email.php', {
    method: 'POST',
    body: new FormData(formFb)
  });

  if(response.ok) {
    feedback.classList.add('hidden');
    modal.classList.add('show');
    modalText.textContent = "Форма отправлена. Мы с вами свяжемся в ближайшее время."
    setTimeout(function(){
      window.location.href = '/';
    }, 3 * 1000);
  } else {
    feedback.classList.add('hidden');
    modal.classList.add('show');
    modalText.textContent = "Что то пошло не так. Попробуйте ещё раз."
    setTimeout(function(){
      window.location.href = '/';
    }, 3 * 1000);
  }
  
});

