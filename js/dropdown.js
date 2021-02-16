/* удаляет drop */
function deleteDrop() {
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

      const dropdowns = document.getElementsByClassName("dropdown-content");
      let i = 0
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}
deleteDrop()
/* */
/* переключает между скрытием и отображением раскрывающегося содержимого */
let old = null // создается клон объекта, если был клик 

function clickDrop() {
  deleteDrop()
  $('.dropbtn').on('click', function (e) {
    this.classList.toggle("show")
    //console.log('this-' + this.classList);
    const dropId = $(this).data('id')

    if (old) {
      old.classList.remove('show');
    } //else { deleteDrop() }

    let myDropdown = document.getElementById(dropId);
 
    // e.target.matches - соответствует ли элемент указанному css-селектору
    // работает с 1-го раза, но не убирает

    if (!this.classList.contains('show')) {
      // this.classList.contains('show') - является ли узел потомком данного узла,
      //работает со 2-го раза
      myDropdown.classList.add("show")
      old = myDropdown
    } else {
      myDropdown.classList.remove('show');
    }

  });
}
clickDrop()
