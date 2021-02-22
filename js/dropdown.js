/* удаляет drop */
function deleteDrop() {
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') || (dubl > 1)) {
      if (dubl > 1) {
        dubl = 0
      }
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
let dubl = 0
function clickDrop() {
  deleteDrop()
  $('.dropbtn').on('click', function (e) {
    this.classList.toggle("show")
    //console.log('this-' + this.classList);
    const dropId = $(this).data('id')
    dubl++
    if (old) {
      old.classList.remove('show')
    }

    let myDropdown = document.getElementById(dropId);

    myDropdown.classList.add("show")
    old = myDropdown

  });
}
clickDrop()
