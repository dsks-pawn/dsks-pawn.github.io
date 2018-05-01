
$(document).on("click", ".btn-buy-product", function(e) {
	var self = $(this);
	if( self.hasClass('disable') ){
		return false;
	}

	$('.btn-buy-product').addClass('disable');

	var parent = $(this).parent('p').parent('.card-buy').parent('.card-general');
	var cart = $(document).find('#nav-cart-top');

	$("<img/>", {
		class: "item-fly-product",
		src: "images/salad/1.png"
	}).appendTo("body").css({
		'top':parent.offset().top,
		'left':parent.offset().left+parent.width()-50,
	});

	setTimeout(function(){
		$(document).find('.item-fly-product').css({
			'top': cart.offset().top,
			'left': cart.offset().left
		});
		setTimeout(function(){
			$(document).find('.item-fly-product').remove();
			var oldItem = parseInt(cart.find('a span').text());
			oldItem += 1;
			cart.find('a span').html(oldItem);
			$('.btn-buy-product').removeClass('disable');
		},1200)
	}, 500);
});
