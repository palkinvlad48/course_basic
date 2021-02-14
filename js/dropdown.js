/* переключает между скрытие и отображение раскрывающегося содержимого */
function myFunction() {
  let dd = ""
  const btn = document.querySelectorAll('.dropbtn');
  // btn.lastChild.classList.toggle("show")
  // console.log('new: ' btn + '-' + btn.lastChild);
  // + btn.lastChild.classList
  let old = Object
  btn.forEach((elem) => {

    elem.addEventListener('click', function (e) {
      let et = e.target
      let ei = et.dataset.id
      //et.classList.toggle("show");
      // console.log('et: ' + et)
      //console.log('new: ' + et.classList + '-' + et.childNodes[0].textContent)
      //.css({'display': ''})// classList.toggle("show")
      //if (!e.target.matches('.dropbtn')) {
      let myDropdown = document.getElementById(ei) // + va);
      //if (!e.target.matches('.dropbtn')) {
      myDropdown.classList.toggle('show')
      if (old != myDropdown) {
        //  old.classList.toggle('show') 
        old = myDropdown
      }
      console.log('new: ' + old.classList + '-' + et.childNodes[0].textContent)
      //}
      // if (myDropdown.classList.contains('show')) {
      // myDropdown.classList.remove('show');
      // }
    })
  })
}