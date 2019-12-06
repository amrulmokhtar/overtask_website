
function parallax() {
	
	var scrolled = $(window).scrollTop();
	var featuresTop = $('#features').offset().top -70;
	var pressTop = $('#press').offset().top -70;
	var downloadTop = $('#download').offset().top - 70;
	var contactTop = $('#contact').offset().top - 70;


	if(scrolled>=featuresTop){
		$("#header").addClass('scrolldown');

		if(scrolled<pressTop){
			removeActiveLi();
			$("#lifeatures a").addClass('active');
		}
		else if(scrolled>=pressTop && scrolled<downloadTop){
			removeActiveLi();
			$("#lipress a").addClass('active');
		}
		else{
			removeActiveLi();
			$("#licontact a").addClass('active');
		}
		
	}
	else{
		$("#header").removeClass('scrolldown');
		removeActiveLi();
		$("#lihome a").addClass('active');
	}

}


/*function parallax() {
	var scrolled = $(window).scrollTop();
	if (scrolled>300) {
		$('#header').addClass('scrolldown');
	}
	else{
		$('#header').removeClass('scrolldown');
	}
	
	if (scrolled<300) {
		removeActiveLi();
		$("#lihome a").addClass('active');
	}
	else if (scrolled>300 && scrolled<1100) {
		removeActiveLi();
		$("#lifeatures a").addClass('active');
	}
	else if (scrolled>1300 && scrolled<1700) {
		removeActiveLi();
		$("#lipress a").addClass('active');
	}
	else if (scrolled>1700) {
		removeActiveLi();
		$("#licontact a").addClass('active');
	}
}*/

function removeActiveLi() {
	var nav = ['home', 'features', 'press', 'contact'];
	for (var i=0;i<4;i++) {
		$("#li" + nav[i]+ " a").removeClass('active');
	}
}

$(window).scroll(function(e){
	parallax();
});

