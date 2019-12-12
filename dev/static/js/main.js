jQuery(function ($) {
    
    $(document).ready(function () {
        svg4everybody({});
        var themuri = $("#themuri").attr("data-uri");

        // Burger menu
        $(".header__burgerbox").click(function () {
            var burger = $(this).find(".header__burger");
            if ($(burger).hasClass("header__burger--active")) {
                $(burger).removeClass("header__burger--active");
                $(".header__bottomline").slideUp();
            } else {
                $(burger).addClass("header__burger--active");
                $(".header__bottomline").slideDown();
            }
        });

        // FAQ accardeon
        $(".faq__item:first-child")
            .addClass("faq__item--active")
            .find(".faq__answer")
            .show();
        $(".faq__item:not(:first-child)")
            .find(".faq__btn")
            .text("+");
        $(".faq__btn").click(function () {
            if (
                $(this)
                .parent()
                .hasClass("faq__item--active")
            ) {
                $(this)
                    .text("+")
                    .parent()
                    .removeClass("faq__item--active")
                    .find(".faq__answer")
                    .slideUp();
            } else {
                $(".faq__items")
                    .find(".faq__item")
                    .removeClass("faq__item--active")
                    .find(".faq__answer")
                    .slideUp()
                    .next()
                    .text("+");
                $(this)
                    .text("–")
                    .parent()
                    .addClass("faq__item--active")
                    .find(".faq__answer")
                    .slideDown();
            }
        });

        // About-document slider
        $("#documents-carousel").owlCarousel({
            margin: 20,
            items: 5,
            dots: false,
            nav: true,
            navText: [
                '<div class="arrow-left"><svg class="icon icon-arrow-left"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-left"></use></svg></div>',
                '<div class="arrow-right"><svg class="icon icon-arrow-right"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-right"></use></svg></div>'
            ],
            navContainer: ".about__arrow-block",
            loop: false,
            responsive: {
                992: {
                    items: 5
                },
                720: {
                    items: 4,
                    stagePadding: 50
                },
                576: {
                    items: 3,
                    stagePadding: 50
                },
                0: {
                    items: 1,
                    stagePadding: 50
                }
            }
        });

        // Office slider
        $("#office-slider").owlCarousel({
            margin: 20,
            items: 3,
            nav: true,
            dots: false,
            navText: [
                '<div class="arrow-left"><svg class="icon icon-arrow-left"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-left"></use></svg></div>',
                '<div class="arrow-right"><svg class="icon icon-arrow-right"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-right"></use></svg></div>'
            ],
            navContainer: ".about__arrow-block",
            loop: true,
            responsive: {
                992: {
                    items: 3
                },
                720: {
                    items: 2
                },
                576: {
                    items: 3
                },
                0: {
                    items: 2
                }
            }
        });

        // Sber slider
        $("#sber-slider").owlCarousel({
            nav: true,
            navText: [
                '<div class="arrow-left"><svg class="icon icon-arrow-left"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-left"></use></svg></div>',
                '<div class="arrow-right"><svg class="icon icon-arrow-right"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-right"></use></svg></div>'
            ],
            navContainer: ".sber__arrow-block",
            loop: true,
            dots: false,
            responsive: {
                992: {
                    items: 3
                },
                720: {
                    items: 2
                },
                576: {
                    items: 2
                },
                0: {
                    items: 1
                }
            }
        });

        // Feedback slider
        $("#feedback-carousel").owlCarousel({
            margin: 20,
            items: 3,
            nav: true,
            navText: [
                '<div class="arrow-left"><svg class="icon icon-arrow-left"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-left"></use></svg></div>',
                '<div class="arrow-right"><svg class="icon icon-arrow-right"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-right"></use></svg></div>'
            ],
            navContainer: ".feedback__arrow-block",
            loop: true,
            dots: false,
            responsive: {
                992: {
                    items: 3
                },
                720: {
                    items: 3
                },
                576: {
                    items: 2
                },
                0: {
                    items: 1
                }
            }
        });

        // About-top slider
        $("#about-top-carousel").owlCarousel({
            items: 1,
            nav: true,
            navText: [
                '<div class="about-top__arrow-left arrow-left"><svg class="icon icon-arrow-left"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-left"></use></svg></div>',
                '<div class="about-top__arrow-right arrow-right"><svg class="icon icon-arrow-right"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-right"></use></svg></div>'
            ],
            navContainer: ".about-top__arrow-block",
            loop: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true
        });

        // Hero-slider
        $("#hero-slider").owlCarousel({
            items: 1,
            nav: false,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true
        });

        // Index-docs slider
        $("#index-doc-slider").owlCarousel({
            margin: 20,
            items: 5,
            nav: true,
            loop: false,
            dots: false,
            navText: [
                '<div class="arrow-left"><svg class="icon icon-arrow-left"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-left"></use></svg></div>',
                '<div class="arrow-right"><svg class="icon icon-arrow-right"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-right"></use></svg></div>'
            ],
            navContainer: ".about__arrow-block",
            responsive: {
                992: {
                    items: 5
                },
                720: {
                    items: 4,
                    stagePadding: 50
                },
                576: {
                    items: 3,
                    stagePadding: 50
                },
                0: {
                    items: 1,
                    stagePadding: 50
                }
            }
        });

        // About-document slider
        $("#index-part-slider").owlCarousel({
            nav: true,
            items: 1,
            dots: false,
            navText: [
                '<div class="arrow-left"><svg class="icon icon-arrow-left"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-left"></use></svg></div>',
                '<div class="arrow-right"><svg class="icon icon-arrow-right"><use xlink:href="' +
                themuri +
                'img/sprite.svg#arrow-right"></use></svg></div>'
            ],
            navContainer: ".part__arrow-block",
            loop: true,
            responsive: {
                720: {
                    items: 2
                }
            }
        });

        // Modals
        function closeModal() {
            $(".modal").fadeOut(700);
            $(".overlay").fadeOut(500);
            $("body").removeClass("show-modal");
            $(".target__img").removeClass("target__img");
        }

        $("[data-btn=modal-form]").click(function () {
            $(".overlay").show(500);
            $(".modal-1").show(700);
            $("body").addClass("show-modal");
        });
        $("[data-btn=diff]").click(function () {
            $(".overlay").fadeIn(500);
            $(".modal-2").fadeIn(700);
        });
        $("[data-btn=best-prog]").click(function () {
            $(".overlay").fadeIn(500);
            $(".modal-3").fadeIn(700);
        });
        $(".overlay").click(function () {
            closeModal();
        });
        $(".modal__close").click(function () {
            closeModal();
        });

        // Office lightbox

        lightbox.option({
            showImageNumberLabel: false
        });

        // Phone mask
        $(".phon").mask("+7 (999) 999-99-99");

        
        // Mobile text hide
        if ($(window).width() <= 576) {
            $('.about-block__text h2').first().nextUntil('.about-block__text h3').wrapAll('<div class="text-wrap"></div>');
            $('.about-block__text h3').nextAll('p').wrapAll('<div class="text-wrap"></div>');

            $('.text-wrap').click(function(e){
                $(this).toggleClass('text-wrap--active');
            })
            // console.log(title)
        }
    });
});

// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}