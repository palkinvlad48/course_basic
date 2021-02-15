/* переключает между скрытие и отображение раскрывающегося содержимого */
let old = null

function clickDrop() {
  $('.dropbtn').on('click', function (e) {
    this.classList.toggle("show")
    //console.log('this-' + this.classList);
    const dropId = $(this).data('id')

    if (old) {
      old.classList.remove('show');
      //this.classList.remove("show")
    }

    let myDropdown = document.getElementById(dropId);
    // console.log('myDropdown-' + myDropdown.classList);
    //if (!e.target.matches('.dropbtn')) { 
    // соответствует ли элемент указанному css-селектору
    // работает с 1-го раза, но не убирает

    //  if (myDropdown.target.matches('.dropbtn')) {

    if (this.classList.contains('show')) {
      //является ли узел потомком данного узла,
      //работает со 2-го раза
      myDropdown.classList.remove('show');

    } else {
      myDropdown.classList.add("show")
      //this.classList.toggle("show")
      old = myDropdown
    }

    //} 
    console.log('this-' + this.classList + '-' + myDropdown.classList);
  });
}
clickDrop()
