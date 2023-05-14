const formControls = document.querySelectorAll('.js-form-control');

formControls.forEach(function(item){
  // let formInput = item.querySelector('.form__input');
  item.addEventListener('focus',function(){
    item.classList.add('is-focus')
  });
  item.addEventListener('focusout',function(){
    item.classList.remove('is-focus')
  });

  item.addEventListener('input', function(){
    if(item.value !== '') {
      console.log('12123')
      item.classList.add('is-fill');
    } else {
      console.log('12123')
      item.classList.remove('is-fill');
    }
  })
})


const selects = document.querySelectorAll('select')

selects.forEach(function(item) {
  NiceSelect.bind(item)
})
