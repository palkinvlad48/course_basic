/* работает */
!function (pics, b, current, delay) {
  !function bar(current) {
    var i = new Image();
    i.src = pics[current++ % pics.length];

    i.onload = function () {
      b.style.backgroundImage = 'url(' + this.src + ')';
      setTimeout(bar, delay, current);
    };
  }(current)
}
  (['../img/birmingham_unsplash_2.jpg', '../img/birmingham_unsplash_1.jpg', '../img/birmingham_unsplash_3.jpg'],
    document.querySelector('.hero'), 0, 5 * 1000);