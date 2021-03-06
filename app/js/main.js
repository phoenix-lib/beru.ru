$(function() {
	
	/*каталог меню*/
	$('.h-catalog').on('click', function() {
		$(this).toggleClass('active');
		$('.header__catmenu').fadeToggle(200);
		$('.h-catmenu__hidden').masonry({
			itemSelector: '.h-catmenu__cat'
		});
		$(document).click(function(event) {
			if ($(event.target).closest('.header__catmenu').length) return;
				$('.header__catmenu').fadeOut(200);
				$('.h-catalog').removeClass('active');
				event.stopPropagation();
			});
		return false
	});

	/*список блоков каталога*/
	$('.h-catmenu__menuitem').hover(function() {
		var thblock = $(this).attr('name');
		$('.h-catmenu__menuitem').removeClass('active');
		$(this).addClass('active');
		$('.h-catmenu__hidden').hide();
		$('.'+thblock).show();
	});


	$('.p-filter__more-brend').text('Показать все');
	$('.p-filter__more-width').text('Показать все');
	$('.p-filter__more-memor').text('Показать все');
	$('.p-filter__more-opmemor').text('Показать все');
	$('.p-filter__more-acmemor').text('Показать все');
	/*фильтр сортировка*/
	$('.p-filter__more-brend').on('click', function() {
		$('.p-filter__listvisible-brend').toggle();
		$('.p-filter__listhidden-brend').toggle();
		var textbrend = $(this).text();

		if(textbrend == 'Показать все') {
			$(this).text('Свернуть');
			return false;
		}
		if(textbrend == 'Свернуть') {
			$(this).text('Показать все');
			return false;
		}
	});

	$('.p-filter__more-width').on('click', function() {
		$('.p-filter__listvisible-width').toggle();
		$('.p-filter__listhidden-width').toggle();
		var textbrend = $(this).text();

		if(textbrend == 'Показать все') {
			$(this).text('Свернуть');
			return false;
		}
		if(textbrend == 'Свернуть') {
			$(this).text('Показать все');
			return false;
		}
	});

	$('.p-filter__more-memor').on('click', function() {
		$('.p-filter__listvisible-memor').toggle();
		$('.p-filter__listhidden-memor').toggle();
		var textbrend = $(this).text();

		if(textbrend == 'Показать все') {
			$(this).text('Свернуть');
			return false;
		}
		if(textbrend == 'Свернуть') {
			$(this).text('Показать все');
			return false;
		}
	});

	$('.p-filter__more-opmemor').on('click', function() {
		$('.p-filter__listvisible-opmemor').toggle();
		$('.p-filter__listhidden-opmemor').toggle();
		var textbrend = $(this).text();

		if(textbrend == 'Показать все') {
			$(this).text('Свернуть');
			return false;
		}
		if(textbrend == 'Свернуть') {
			$(this).text('Показать все');
			return false;
		}
	});

	$('.p-filter__more-acmemor').on('click', function() {
		$('.p-filter__listvisible-acmemor').toggle();
		$('.p-filter__listhidden-acmemor').toggle();
		var textbrend = $(this).text();

		if(textbrend == 'Показать все') {
			$(this).text('Свернуть');
			return false;
		}
		if(textbrend == 'Свернуть') {
			$(this).text('Показать все');
			return false;
		}
	});

	$('.p-card__infobtn').on('click', function() {
		$(this).parent('.p-card__infotov').children('.p-card__infotovitem-hidden').show();
		$(this).hide();
		return false;
	});

	$('.p-filter__colorlink').hover(function() {
		$(this).parent().children('.p-filter__colortext').stop(false, true).fadeIn(200);
	}, function() {
		$(this).parent().children('.p-filter__colortext').stop(false, true).fadeOut(200);
	});

	$('.p-filter__colorlink').on('click', function() {
		$(this).parent().toggleClass('active');
		return false;
	});

	$('.p-filter__infbtn').on('click', function() {
		$(this).parent('.p-filter__subtitle').toggleClass('active');
		$(this).parent('.p-filter__subtitle').children('.p-filter__popup').fadeToggle(200);
		$(document).click(function(event) {
			if ($(event.target).closest('.p-filter__popup').length) return;
				$('.p-filter__popup').hide();
				$('.p-filter__subtitle').removeClass('active');
				event.stopPropagation();
			});
		return false
	});

	/*фильтр*/
	$('.p-filter__mobbutton').on('click', function() {
		$('.p-filter').toggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.p-filter').length) return;
				$('.p-filter').hide();
				event.stopPropagation();
			});
		return false;
	});

	/*Фильтр электроники*/
	$('.p-filtercat__more').on('click', function() {
		$(this).parent().children('.p-filtercat__list-hidden').toggle();
		var textbrend = $(this).text();

		if(textbrend == 'Показать все') {
			$(this).text('Свернуть');
			return false;
		}
		if(textbrend == 'Свернуть') {
			$(this).text('Показать все');
			return false;
		}
	});

	/*? - карточка*/
	$('.p-characteristics__info').on('click', function() {
		$(this).toggleClass('active');
		$(this).parent().children('.p-characteristics__popup').toggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.p-characteristics__popup').length) return;
				$('.p-characteristics__popup').hide();
				$('.p-characteristics__info').removeClass('active');
				event.stopPropagation();
			});
		return false;
	});

	/*скролл блока*/
	var h_hght = 125;
	var h_mrg = 0;
	var elem = $('.page__fixed');
	var top = $(this).scrollTop();

	if(top > h_hght){
		elem.css('top', h_mrg);
	}           

	$(window).scroll(function(){
		top = $(this).scrollTop();

		if (top+h_mrg < h_hght) {
			elem.css('top', (h_hght-top));
		} else {
			elem.css('top', h_mrg);
		}
	});

	/*анимация купона*/
	$('.p-basket__promo label').on('click', function() {
		$(this).parent().addClass('active');
		$(this).parent().children('input[type="text"]').focus();
		$(document).click(function(event) {
			if ($(event.target).closest('.p-basket__promo').length) return;
				$('.p-basket__promo').removeClass('active');
				event.stopPropagation();
			});
		return false;
	});

	/*фокус*/
	$('.p-checkout__input').focus(function() {
		$(this).parent().addClass('focus');
		$(this).parent().children('.p-checkout__del').fadeIn();
		return false;
	});
	$('.p-checkout__input').focusout(function() {
		$(this).parent().removeClass('focus');
		$(this).parent().children('.p-checkout__del').fadeOut();
		return false;
	});

	/*Мой профиль*/
	$('.h-come-btn').on('click', function() {
		$(this).parent().children('.h-come__popup').fadeToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.h-come__popup').length) return;
				$('.h-come__popup').fadeOut();
				event.stopPropagation();
			});
		return false;
	});

});