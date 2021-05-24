$(document).ready(function() { 

      $('.center').slick({
      	  dots: true,
      	  arrows: false,
  		  infinite: true,
          centerMode: true,
          autoplay: true,
  		  autoplaySpeed: 2000,
		  centerPadding: '60px',
		  slidesToShow: 3,
		  responsive: [
		  	{
		    	breakpoint: 992,
		    	settings: {
			    	arrows: false,
			        centerMode: true,
			        centerPadding: '40px',
			        slidesToShow: 2
		    	}
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    },

		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
      });

       $('.photo-gallery').slick({
      	  arrows: true,
      	  infinite: true,
      	   centerMode: true,
		  slidesToShow: 3,
		  responsive: [
		  	{
		    	breakpoint: 992,
		    	settings: {
			    	arrows: true,
			        centerMode: true,
			        slidesToShow: 2
		    	}
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: true,
		        centerMode: true,
		        slidesToShow: 1
		      }
		    },

		    {
		      breakpoint: 480,
		      settings: {
		        arrows: true,
		        centerMode: true,
		        slidesToShow: 1
		      }
		    }
		  ]
      });

       $('.reviews .slick-cloned').show('.text');
       
		$('button.radio-btn').click(function(){
		$('button.radio-btn').removeClass('active-btn');
		$(this).addClass('active-btn');
	});

	$("button[name='individual']").click(function(){
		$("div[data-target='individual']").addClass('active-block');
		$("div[data-target='company']").removeClass('active-block');
	});
	$("button[name='company']").click(function(){
		$("div[data-target='individual']").removeClass('active-block');
		$("div[data-target='company']").addClass('active-block');
	});



	
});