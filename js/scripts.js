	$(document).ready(function(){
		generateStars(10);

		/*smoothScroll.init();*/

		$(".sub-title").typed({
        strings: ["Front-End Developer","Web Enthusiast"],
        typeSpeed: 0,
        loop:true,
        backDelay: 3000
      	});

      	$(document).on('click','.navigation-menu>a',function(){
      		var target = $(this).data('target');
      		$('.navigation-menu>a').removeClass('active');
      		$('.navigation-menu>a[data-target="'+target+'"]').addClass('active');
      		$('.dynamic-content').hide();
      		$('#'+target).show();
      	});

      	$('.close').click(function(){
      		hideOverlayedSection();
      	});


/*      	window.sr = ScrollReveal({ reset: true });

		// Customizing a reveal set
		sr.reveal('.about-text-container', { duration: 500 });
		sr.reveal('.profile-pic', { duration: 500});
		sr.reveal('#clean-code', { duration: 1000,origin: 'left' });
		sr.reveal('#responsive-ui', { duration: 1000 ,origin: 'right'});
		sr.reveal('#cloud-development', { duration: 1000 ,origin: 'left'});
		sr.reveal('#fast-performance', { duration: 1000 ,origin: 'right'});
		sr.reveal('#expertise', { duration: 1000 ,origin: 'right'});
		sr.reveal('.projects a', { duration: 800 });
		sr.reveal('.resume', { duration: 800 });
		sr.reveal('.contact-me', { duration: 800 });*/
	});
    function showOverlayedSection(){
		$('#overlayed-section').addClass('shown');
		$('#nav-main').hide();
	}

	function hideOverlayedSection(){
		$('#overlayed-section').removeClass('shown');
		$('#nav-main').show();
	}


	function generateStars(count){
		for(i=0;i<=count;i++){
			var x = new Glowingstars();
			x.showStar();
		}
	}

	function Glowingstars(){
		var frame = $(document).find('#section-main');

		var starCounts = function(){
			return $(document).find('.star-glowing').length;
		}

		var generateStars = function(){	
			var top = Math.floor((Math.random() * frame.innerHeight()-100) + 1);
			var left = Math.floor((Math.random() * frame.innerWidth()-100) + 1);
			var $glowingStar = $('<div class="star-glowing" style="top:'+top+'px;left:'+left+'px;"></div>');
			frame.append($glowingStar);
			$glowingStar.css('opacity','1');
			setTimeout(function(){
				$glowingStar.remove();
			},2000);
			
		};

		this.showStar = function(){		
			setInterval(function(){ 
				generateStars();
			}, 1000);
		};

	};