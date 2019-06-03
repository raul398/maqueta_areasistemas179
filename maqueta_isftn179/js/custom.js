/* Template: iPortfolio HTML5 | Author: eriktailor | Version: 1.0 */
/*----------------------------------------------------------------*/

$(document).ready(function(){
/* START DOCUMENT ------------------------------------------------*/


/*----------------------------------------------------------------*/
/* # Header */
/*----------------------------------------------------------------*/

/* Sticky Nav */
$('#navbar').waypoint('sticky', {
  stuckClass: 'sticked',
  offset: -10
});



/* Offsite Menu */
$(function(){
	var jPM = $.jPanelMenu({
		menu: '#mobile-menu-panel',
		trigger: '.mobilemenu-trigger'
	});

	jPM.on();
	
	$('html').removeClass('jPanelMenu');

});


/* Nav Scroll */
$(function(){

	var navBar = $("#navbar"),
		navBarHeight = navBar.outerHeight(),
		menuItems = $(".menu-items a");

	menuItems.click(function(e){
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top-navBarHeight+1;
			
		$('html, body').stop().animate({ 
				scrollTop: offsetTop
		}, 800);
		e.preventDefault();
	});

});

/* Cta Button */
$(function(){

	$('.cta-button').click(function(){

		$('html, body').animate({
			scrollTop: $("#services").offset().top-95
		}, 1000);
	
	});

});

/*----------------------------------------------------------------*/
/* # Motion Slider */
/*----------------------------------------------------------------*/
$(function(){

	// Effect for image
	var modelEffect = "fadeInUp";
	
		$('.model').addClass("animated " + modelEffect);

		$('#motion-next').click(function(){
			$('.model').removeClass("animated " + modelEffect);
			$('.cycle-slide-active').next('.cycle-slide').children('.model').addClass("animated " + modelEffect);
			if($('.motion-slider li:last').hasClass('cycle-slide-active')){
				$('.motion-slider li').eq(1).children('.model').addClass("animated " + modelEffect);
			}
		});
	
		$('#motion-prev').click(function(){
			$('.model').removeClass("animated " + modelEffect);
			$('.cycle-slide-active').prev('.cycle-slide').children('.model').addClass("animated " + modelEffect);
			if($('.motion-slider li').eq(1).hasClass('cycle-slide-active')){
				$('.motion-slider li').eq(3).children('.model').addClass("animated " + modelEffect);
			}		
		});
	
	// Effect for title
	var titleEffect = "fadeInRightBig";
	
		$('.motion-slider .title').addClass("animated " + titleEffect);

		$('#motion-next').click(function(){
			$('.motion-slider .title').removeClass("animated " + titleEffect);
			$('.cycle-slide-active').next('.cycle-slide').children('.title').addClass("animated " + titleEffect);
			if($('.motion-slider li:last').hasClass('cycle-slide-active')){
				$('.motion-slider li').eq(1).children('.title').addClass("animated " + titleEffect);
			}		
		});
	
		$('#motion-prev').click(function(){
			$('.motion-slider .title').removeClass("animated " + titleEffect);
			$('.cycle-slide-active').prev('.cycle-slide').children('.title').addClass("animated " + titleEffect);
			if($('.motion-slider li').eq(1).hasClass('cycle-slide-active')){
				$('.motion-slider li').eq(3).children('.title').addClass("animated " + titleEffect);
			}		
		});	

	// Effect for subtitle
	var subtitleEffect = "fadeInLeftBig";
	
		$('.motion-slider .subtitle').addClass("animated " + subtitleEffect);

		$('#motion-next').click(function(){
			$('.motion-slider .subtitle').removeClass("animated " + subtitleEffect);
			$('.cycle-slide-active').next('.cycle-slide').children('.subtitle').addClass("animated " + subtitleEffect);
			if($('.motion-slider li:last').hasClass('cycle-slide-active')){
				$('.motion-slider li').eq(1).children('.subtitle').addClass("animated " + subtitleEffect);
			}		
		});
	
		$('#motion-prev').click(function(){
			$('.motion-slider .subtitle').removeClass("animated " + subtitleEffect);
			$('.cycle-slide-active').prev('.cycle-slide').children('.subtitle').addClass("animated " + subtitleEffect);
			if($('.motion-slider li').eq(1).hasClass('cycle-slide-active')){
				$('.motion-slider li').eq(3).children('.subtitle').addClass("animated " + subtitleEffect);
			}		
		});		

	// Effect for button
	var btnEffect = "fadeInUpBig";
	
		$('.motion-slider .btn').addClass("animated " + btnEffect);

		$('#motion-next').click(function(){
			$('.motion-slider .btn').removeClass("animated " + btnEffect);
			$('.cycle-slide-active').next('.cycle-slide').children('.btn').addClass("animated " + btnEffect);
			if($('.motion-slider li:last').hasClass('cycle-slide-active')){
				$('.motion-slider li').eq(1).children('.btn').addClass("animated " + btnEffect);
			}		
		});
	
		$('#motion-prev').click(function(){
			$('.motion-slider .btn').removeClass("animated " + btnEffect);
			$('.cycle-slide-active').prev('.cycle-slide').children('.btn').addClass("animated " + btnEffect);
			if($('.motion-slider li').eq(1).hasClass('cycle-slide-active')){
				$('.motion-slider li').eq(3).children('.btn').addClass("animated " + btnEffect);
			}		
		});
});

/*----------------------------------------------------------------*/
/* # Services */
/*----------------------------------------------------------------*/
$(function(){

	var iconBox = $('#services .icon-box'),
		sDetail = $('.service-detail');


	iconBox.eq(0).click(function(){
		iconBox.removeClass('selected');
		$(this).addClass('selected');
		$('.service-detail .content').hide();
		$('.service-detail').hide();
		$('.service-detail').eq(0).slideDown(600).children('.content:first').show();
		$('.service-detail').eq(0).children('.submenus').children('li').removeClass('selected');
		$('.service-detail').eq(0).children('.submenus').children(' li:first').addClass('selected');
	});
	
	iconBox.eq(1).click(function(){
		iconBox.removeClass('selected');
		$(this).addClass('selected');
		$('.service-detail .content').hide();
		$('.service-detail').hide();
		$('.service-detail').eq(1).slideDown(600).children('.content:first').show();
		$('.service-detail').eq(1).children('.submenus').children('li').removeClass('selected');
		$('.service-detail').eq(1).children('.submenus').children(' li:first').addClass('selected');
	});
	
	iconBox.eq(2).click(function(){
		iconBox.removeClass('selected');
		$(this).addClass('selected');
		$('.service-detail .content').hide();
		$('.service-detail').hide();
		$('.service-detail').eq(2).slideDown(600).children('.content:first').show();
		$('.service-detail').eq(2).children('.submenus').children('li').removeClass('selected');
		$('.service-detail').eq(2).children('.submenus').children(' li:first').addClass('selected');
	});
	
	$('.service-detail .close').click(function(){
		$('.service-detail').slideUp(300);
		iconBox.removeClass('selected');
	});

	
	// CONTENTS --------

	var subMenu = $('.service-detail .submenus li');
	
	subMenu.click(function(){
		subMenu.removeClass('selected');
		$(this).addClass('selected');
		
		
		$('.service-detail .content').hide();
		
		var seData = $(this).data('service');
		
		$(this).parent().parent().find('.content[data-service=' + seData + ']').fadeIn(300);

	});
	
	$('.service-detail').eq(0).show();
	$('.service-detail .content').eq(0).show();

});

/*----------------------------------------------------------------*/
/* # Team Members */
/*----------------------------------------------------------------*/
$(function(){

	$('#team-next').click(function(){
		$('.team').find('.active').removeClass('active animated bounceIn').next().addClass('active animated bounceIn');
        $('.team-thumb:first').remove().appendTo($('.team'));
	});	
	
	$('#team-prev').click(function(){
		$('.team').find('.active').removeClass('active animated bounceIn').prev().addClass('active animated bounceIn');
        $('.team-thumb:last').remove().prependTo($('.team'));
	});	

});

/*----------------------------------------------------------------*/
/* # Portfolio */
/*----------------------------------------------------------------*/

/* Portfolio Details */
$(function(){

	var pfDetails = $('#portfolio-details'),
		pfDesc	  = $('.details .descr'),
		pfIcon	  = $('.details .icons i');
		
	pfIcon.click(function(){
		pfIcon.removeClass('selected');
		$(this).addClass('selected');
		
		pfDesc.slideUp();
		
		var pfData = $(this).data('detail');
		$(this).parent().parent().find('.descr.shown').show();
		$(this).parent().parent().find('.descr[data-detail=' + pfData + ']').slideDown();

	});
		
	var portfolioDetail = (function(a, b){
		$('.portfolio-item:eq(' + a +')').click(function(e){
			var pfSlider = $('.portfolio-details-wrapper.cycle-slideshow');
			$('.dark-overlay').fadeIn(300);
			pfDetails.addClass('visible');

			pfSlider.children('li').removeClass('cycle-slide-active');
			pfSlider.children('li').addClass('pfdetail-inactive');
			pfSlider.children('li:eq(' + b +')').removeClass('pfdetail-inactive').addClass('pfdetail-active');
			
			var w = $(window).width();
			
			// if(w < 760){
				var top = $(window).scrollTop(),
					scrollTop = top - 1250 + 'px';
				
				pfDetails.css({top:scrollTop});			
			// }
			
			$('#next, #prev').show();
		});		
	});
	
	portfolioDetail('0', '1');
	portfolioDetail('1', '2');
	portfolioDetail('2', '3');
	portfolioDetail('3', '4');
	portfolioDetail('4', '5');
	portfolioDetail('5', '6');
	
	$('.portfolio-item:eq(0)').click(function(){
		$('#prev').hide();
	});
	
	$('.portfolio-item:last').click(function(){
		$('#next').hide();
	});		
	
	$('.overlay').hide();
	$('#next').click(function(){
		$('.portfolio-details-wrapper').find('.pfdetail-active').removeClass('pfdetail-active').addClass('pfdetail-inactive').next().removeClass('pfdetail-inactive').addClass('pfdetail-active').show().css({'z-index':'99','opacity':'1'});
		$('.portfolio-details-wrapper li').find('.cycle-slide-active').removeClass('cycle-slide-active');
		$('.portfolio-details-wrapper.cycle-slideshow').css('overflow','visible');
		if($('.portfolio-details-wrapper li:last').hasClass('pfdetail-active')){
			$('#next').fadeOut(500);
		} else {
			$('#prev').fadeIn(500);
		}
	});
	
	$('#prev').click(function(){
		$('.portfolio-details-wrapper').find('.pfdetail-active').removeClass('pfdetail-active').addClass('pfdetail-inactive').prev().removeClass('pfdetail-inactive').addClass('pfdetail-active').show().css({'z-index':'99','opacity':'1'});
		$('.portfolio-details-wrapper li').find('.cycle-slide-active').removeClass('cycle-slide-active');
		$('.portfolio-details-wrapper.cycle-slideshow').css('overflow','visible');
		if($('.portfolio-details-wrapper li:eq(1)').hasClass('pfdetail-active')){
			$('#prev').fadeOut(500);
		} else {
			$('#next').fadeIn(500);
		}		
	});	
	

	


	$('#portfolio-details .close').click(function(){
		$('.dark-overlay').fadeOut(300);
		pfDetails.removeClass('visible');
		$('.details .descr.shown').show();
		$('.details .icons').each(function(){
			$(this).children("i:eq(0)").addClass("selected");
		});		
	});
	
});


/* Portfolio Filtering */
$(function(){
	var portfolio = (function() {
		var $container = $('#portfolio-wrapper');
				$select = $('#filters select');
				
		// initialize Isotope
		$container.isotope({
		  // options...
		  resizable: false, // disable normal resizing
		  // set columnWidth to a percentage of container width
		  masonry: { columnWidth: $container.width() / 12 }
		});

		// update columnWidth on window resize
		$(window).smartresize(function(){
		  $container.isotope({
			// update columnWidth to a percentage of container width
			masonry: { columnWidth: $container.width() / 12 }
		  });
		});
		
		$container.isotope({
			itemSelector : '.portfolio-item'
		});
	  
		$select.change(function() {
			var filters = $(this).val();
	
			$container.isotope({
				filter: filters
			});
		});
	  
		// Portfolio Filtering
		var $optionSets = $('#filters .option-set'),
			$optionLinks = $optionSets.find('a');

		$optionLinks.click(function(){
				var $this = $(this);
				// don't proceed if already selected
				if ( $this.hasClass('selected') ) {
				return false;
			}
			var $optionSet = $this.parents('.option-set');
			$optionSet.find('.selected').removeClass('selected');
			$this.addClass('selected');
	  
			// make option object dynamically, i.e. { filter: '.my-filter-class' }
			var options = {},
				key = $optionSet.attr('data-option-key'),
				value = $this.attr('data-option-value');
			// parse 'false' as false boolean
			value = value === 'false' ? false : value;
			options[ key ] = value;
			if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			  // changes in layout modes need extra logic
			  changeLayoutMode( $this, options )
			} else {
			  // otherwise, apply new options
			  $container.isotope( options );
			}
			return false;
		});

	});
	
	portfolio();
});

/*----------------------------------------------------------------*/
/* # Contact Form */
/*----------------------------------------------------------------*/

$(function() {
  $("#cform").on("submit",function(e){
    
    if($("#cform")[0].checkValidity()) {
      $.post("mailer.php", $("#cform").serialize(),  function(response) {
        $('#success').css('opacity','1').html(response);
        $("#cform")[0].reset(e);
		e.preventDefault();
      });
    } else console.log("invalid form");
	e.preventDefault(); // stop actual submission
  }); 
});


/* END DOCUMENT --------------------------------------------------*/
});