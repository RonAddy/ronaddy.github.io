console.log("jQuery loaded !")

// function logoAnimate() {
//
//   $(window).on('load', function() {
//     $("#white_outline").delay(2000).slideUp(3000)
//   });
//
//   function move() {
//     var elem = document.getElementById('loading_progress')
//     var width = 10;
//     var id = setInterval(frame, 45);
//
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//       } else {
//         width++;
//         elem.style.width = width + '%';
//         elem.innerHTML = width * 1 + '%';
//       }
//     }
//   }
//
//   move()
// }
//
// logoAnimate()

//
// function simpleParallax(intensity, element) {
//   $(window).scroll(function() {
//     var scrollTop = $(window).scrollTop();
//     var imgPos = scrollTop / intensity + 'px';
//     element.css('transform', 'translateY(' + imgPos + ')');
//   });
// }
//
// simpleParallax(1.2, $('about'));
