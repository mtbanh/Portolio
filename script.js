$(document).ready(function(){
  $(".navbar-burger").click(function(){
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  })

// var carousels = bulmaCarousel.attach('.carousel', options);

// // Loop on each carousel initialized
// for(var i = 0; i < carousels.length; i++) {
// 	// Add listener to  event
// 	carousels[i].on('before:show', state => {
// 		console.log(state);
// 	});
// }

// // Access to bulmaCarousel instance of an element
// var element = document.querySelector('#my-element');
// if (element && element.bulmaCarousel) {
// 	// bulmaCarousel instance is available as element.bulmaCarousel
// 	element.bulmaCarousel.on('before-show', function(state) {
// 		console.log(state);
// 	});
// }
})