

// NavON
$(document).ready(function(){
	var menuButton = $('.mobtab-button');

	$('button').click(function(){
		$(this).parent().next(3).stop().slideToggle();
	});

// 모바일 메뉴 아코디언 작업

	var mobMenu = $('.mobile-nav-ul').children('li');
	var mobSubMenu = mobMenu.find('ul');
    
	function mobileMenu(){
		mobMenu.click(function(){
			mobSubMenu.hide();
			$(this).find('ul').show();
		});
		mobMenu.children('a').click(function(e){
			e.preventDefault();
		});
	}

// PC 메뉴 작업
    var pcNav = $('.pc-nav');
    var topNav = pcNav.children('ul');
    var subNav = topNav.find('ul');
    var topMenu = topNav.children('li');

    function pcMenu(){
	    topMenu.on({
	        'mouseenter focusin':function(){
	        	$(this).find('ul').stop().slideDown(200);
	        },
	        'mouseleave focusout':function(){
	        	$(this).find('ul').stop().slideUp(200);
	       	}
	    });
    }

// 실행
    if($(window).width() < 1280){
		mobileMenu();
	}else{
       pcMenu();
    }
    
// 리사이즈
    $(window).resize(function(){
        if($(this).width()< 1280){
            pcNav.off();
            $('.mobtab-button').show();
            mobileMenu();
        }else{
            $('.mobtab-button').hide();
            $('.mobile-nav-fill').hide();
            $('.mobile-nav-ul').off();
            pcMenu();
        }

    })
    

// 배경도형
	var showWindow = $(window).scrollTop();
	function moveAllShapes(){
		if (showWindow >= 0){
			$('#shapes').addClass('translateFirst');
		};
	}
	function rotateShapeR(){
		$('.zigzag').addClass('rotate180');
		$('.square').addClass('rotate180');
		$('.triangle').addClass('rotate180');
	}
	function rotateShapeL(){
		$('.half-circle').addClass('rotate-180');
		$('.wave').addClass('rotate-180');
	}
	function rotateShape360(){
		$('.pentagon').addClass('rotate360');
		$('.flower').addClass('rotate360');

	}

        moveAllShapes();
   	rotateShapeR();
   	rotateShapeL();
   	rotateShape360();


	
	//World - show
	var tab = $('.tab').find('a');
	var panel = $('.panel')
	var openTab = tab.filter('.show');
	var openPanel = $(openTab.attr('href'));

	panel.hide();
	openPanel.show();

	tab.click(function(e){
		e.preventDefault();
		var thisTab = $(this);
		var thisPanel = $(thisTab.attr('href'));

		openTab.removeClass('show');
		thisTab.addClass('show');
		openPanel.hide();
		thisPanel.show();
		openTab = thisTab;
		openPanel = thisPanel;
	});

	$('#faQ').addClass('visible');

	// 스크롤 탑
	
	
	$(window).scroll(function(){
		var section = $('section');
		var tsc = $(this).scrollTop();
		var iconic = $('#iconic');
		var iconicSec = iconic.children('section');
		var sectionBf = $(".before");
		var ourWorld = $('#our-world');
		var fragrances = $('#fragrances');
		var newCollect = $('#new-collection');
		var shape = $('#shapes').find('svg');

		// Cendrillon
		if(tsc > iconicSec.eq(0).offset().top-400){
			iconicSec.eq(0).css('opacity','1');
			iconicSec.eq(0).addClass('slideRight');
			shape.children().css('stroke','#ac4088');
		}else{
			iconicSec.eq(0).css('opacity','0');
			iconicSec.eq(0).removeClass('slideRight');
			shape.children().css('stroke','#fea1a1');
		}


		// Zizi section
		if(tsc > iconicSec.eq(1).offset().top-400){
			iconicSec.eq(1).css('opacity','1');
			iconicSec.eq(1).addClass('slideLeft');
			shape.children().css('stroke','#fac691');
		}else{
			iconicSec.eq(1).css('opacity','0');
			iconicSec.eq(1).removeClass('slideLeft');
		}
		
		// Michael section
		if(tsc > iconicSec.eq(2).offset().top-400){
			iconicSec.eq(2).css('opacity','1');
			iconicSec.eq(2).addClass('slideRight');
			shape.children().css('stroke','#001b64');
		}else{
			iconicSec.eq(2).css('opacity','0');
			iconicSec.eq(2).removeClass('slideRight');
		}


		// our-world
		var worldImg = ourWorld.find('.panel-img');
		var worldSvg = $('.panel-text > svg');

		if(tsc < ourWorld.offset().top-400){
			worldImg.hide();
			worldImg.removeClass('slideLeftImg');
			worldSvg.children('path').removeClass('showBg');

		}else if (tsc > ourWorld.offset().top-400){
			worldImg.show();
			worldImg.addClass('slideLeftImg');
			worldSvg.children('path').eq(0).addClass('showBg');
			worldSvg.children('path').eq(1).addClass('showBg2');
			worldSvg.children('path').eq(2).addClass('showBg3');
			worldSvg.children('path').eq(3).addClass('showBg4');
			shape.children().css('stroke','#c7b5ed');
		}else{
			worldImg.hide();
			worldImg.removeClass('slideLeftImg');
			worldSvg.children('path').removeClass('showBg');
			shape.children().css('stroke','#fea1a1');
		}

		// New Collection section
		var product2 = $('.product');

		if(tsc > iconicSec.eq(2).offset().top-400){
			newCollect.css('opacity','1');
			shape.children().css('stroke','#b085dc');
		}else{
			newCollect.css('opacity','0');
		}

		// Fragrances section
		if(tsc > fragrances.offset().top-450){
			fragrances.addClass('visible');
			shape.children().css('stroke','#ffcc66');
		}else{
			fragrances.removeClass('visible');
		}
	});
});














