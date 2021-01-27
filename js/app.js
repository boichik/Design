//hi
$('.btn-main').on('click', function(e){
	$('.btn-main.active').removeClass('active')
	$(e.currentTarget).addClass('active')

	$('img.active').removeClass('active')
	$Data = $(e.currentTarget).data('img')
	$(`#m-${$Data}`).addClass('active')
})

$('.m-link').on('click', function(e){
	$('.m-link.active').removeClass('active')
	$(e.currentTarget).addClass('active')

	$('.section-three .items.active').removeClass('active')
	$Data = $(e.currentTarget).data('item')
	$(`#i-${$Data}`).addClass('active')
})


$countElement = 0
$nowComment = 1

jQuery(document).ready(function(e){
	$countElement = $('.comment').length;
	$(`#c-item-${$nowComment}`).addClass('active')	
});



$('.next').on('click', function(e) {
	$(`#c-item-${$nowComment}`).removeClass('active')
	if($nowComment < $countElement){
		$nowComment++
		$(`#c-item-${$nowComment}`).addClass('active')	
	}
	else{
		$nowComment = 1
		$(`#c-item-${$nowComment}`).addClass('active')	
	}	
});

$('.back').on('click', function(e) {
	$(`#c-item-${$nowComment}`).removeClass('active')
	if($nowComment == 1){
		$nowComment = 3
		$(`#c-item-${$nowComment}`).addClass('active')	
	}
	else{
		if($nowComment <= $countElement){
			$nowComment--
			$(`#c-item-${$nowComment}`).addClass('active')
		}
	}
});

$('.nav-menu-btn').on('click', function(e){
	$('.nav-menu-btn').removeClass('active')
	$('.navbar-mobile').addClass('active')
})
$('.btn-close').on('click', function(e){
	$('.nav-menu-btn').addClass('active')
	$('.navbar-mobile').removeClass('active')
})