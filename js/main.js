jQuery(document).ready(function($) {

	$(window).resize(function() {

		$('.rent__list').children().removeClass('col-lg-4 offset-lg-2');
		$('.rent__list').children().addClass('col-lg-12');

		$('.rent__list').owlCarousel('destroy');

		$('.rent__list').after(`<nav class="rent__nav"></nav>`);

		$('.rent__list').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			navText: ["Назад", "Вперёд"],
			navElement: `button class="rent__nav-btn"`,
			navContainer: $(`.rent__nav`),
			responsive: {
				0: {
					items: 1
				},
				992: {
					items: 3
				}
			}
		});

		$(`.rent__nav-btn.owl-prev`).addClass(`rent__nav-btn--prev`);
		$(`.rent__nav-btn.owl-next`).addClass(`rent__nav-btn--next`);

		if ($(window).width() > 992) {
			$('.work-procent__carousel').owlCarousel('destroy');
			$('.work-procent__nav').remove();
			$('.work-procent__item').removeClass('col-lg-12');
			$('.work-procent__item').addClass('col-lg-4');
			$('.work-procent__item:first-child').addClass('offset-lg-2');
		} else {
			$('.work-procent__carousel').children().removeClass('col-lg-4 offset-lg-2');
			$('.work-procent__carousel').children().addClass('col-lg-12');

			$('.work-procent__carousel').owlCarousel('destroy');

			$('.work-procent__carousel').after(`<nav class="work-procent__nav"></nav>`);

			$('.work-procent__carousel').owlCarousel({
				loop: true,
				nav: true,
				dots: false,
				navText: ["Назад", "Вперёд"],
				navElement: `button class="work-procent__nav-btn"`,
				navContainer: $(`.work-procent__nav`),
				items: 1
			});

			$(`.work-procent__nav-btn.owl-prev`).addClass(`work-procent__nav-btn--prev`);
			$(`.work-procent__nav-btn.owl-next`).addClass(`work-procent__nav-btn--next`);
		}

		$('.owl-stage').css('display', 'flex');
		$('.owl-stage-outer').css('overflow', 'hidden');
	});

	$(window).resize();

	$('.header__nav-btn').click(function() {
		$('.header__nav-block').css('left', '0');
	});

	$('.header__close-btn').click(function() {
		$('.header__nav-block').css('left', '-100vw');
	});

	$('.header__nav-link').click(function() {
		$('.header__nav-block').css('left', '-100vw');
	});

	$('.header__call-btn').click(function() {
		$('.header__nav-block').css('left', '-100vw');
	});

	$('.header__call-btn').click(function() {
		$('.popup').css('top', '0');
	});

	$('.footer__call-btn').click(function() {
		$('.popup').css('top', '0');
	});

	$('.popup__close').click(function() {
		$('.popup').css('top', '-100vh');
	});

	$('.popup__form-submit').click(function() {
		$('.popup').css('top', '-100vh');
	});
});