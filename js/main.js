$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pager: true,           // Boolean: Show pager, true or false
});

Visibility.onVisible(function(){
	setTimeout(function () {
		$(".introducao").addClass("animated fadeInDown");
	}, 400);
});
Visibility.onVisible(function(){
	setTimeout(function () {
		$(".rslides").addClass("animated fadeInDown");
	}, 400);
});
Visibility.onVisible(function(){
	setTimeout(function () {
		$(".sobre-img").addClass("animated fadeInDown");
	}, 400);
});