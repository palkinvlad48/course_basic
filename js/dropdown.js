/* удаляет drop */
function deleteDrop() {
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') || (dubl > 1)) {

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
    console.log('this-' + dubl);
    const dropId = $(this).data('id')

    let myDropdown = document.getElementById(dropId);
dubl++
    if (old) {
      old.classList.remove('show')
      dubl = 1
    } //else {
    myDropdown.classList.add("show")
    old = myDropdown
    console.log('dubl-'+dubl)
    // не работает 2-й клик подряд на 1 drop
    
  });
}
clickDrop()
