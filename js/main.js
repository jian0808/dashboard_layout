$(document).ready(function(){

    // sidebar toggle
    $('.btn-sidebar-toggle').click(function(){
        $('.sidebar').toggleClass('hide');
        $('.main').toggleClass('slide-left');
    })

    // sidebar lnb
    var lnbUI = {
        clickE: function(target, speed) {
            // var _self = this;
            var $target = $(target);
            // _self.speed = speed || 300;
            
            $target.each(function() {
                if($(this).find('> ul').length > 0) {
                    return true;
                } 
                $(this).addClass('noDepth');
            });
            
            $target.on('click', 'a', function() {
            
                var $this = $(this);
                var $depthTarget = $this.next(); // ul
                var $siblings = $this.parent().siblings(); // li
                
                if(!$this.parent('li').hasClass('noDepth')) {    

                    $this.parent('li').find('ul li').removeClass('on');
                    $siblings.removeClass('on');
					$this.parent('li').find('ul').slideUp();
                    $siblings.find('ul').slideUp();
					
                    if($depthTarget.css('display') == 'none') {
                        $depthTarget.slideDown();
                        $this.parent().addClass('on');
                    } else {
                        $depthTarget.slideUp();
                        $this.parent().removeClass('on');
                    }
                } else {             
                    $this.parent('li').addClass('on');
                    $siblings.removeClass('on');
                    // console.log('noDepth');
                }
                return false;
            });            
        }          
    }   
    lnbUI.clickE('.lnb li', 300);


    // dropdown menu
    $('.dropdown-menu').hide();

    $(document).on('click', function(e) {
        e.preventDefault();
        var target = $(e.target);
        var dropdown = target.closest('.dropdown');

        if (!target.closest('.dropdown').length) {
            $('.dropdown').removeClass('active');
        }

        $('.dropdown-menu').not(dropdown.find('.dropdown-menu')).hide();
    });

    $('.dropdown').on('click', function() {
        var menu = $(this).find('.dropdown-menu');
        menu.toggle();
        $(this).toggleClass('active');
        $('.dropdown').not(this).removeClass('active');
    });   

    // fullscreen
    var toggleFullscreenBtn = $('.fullscreen');
    var container = $('.container');

    toggleFullscreenBtn.on('click', function(e) {
        toggleFullScreen(container.get(0));
    });

    function toggleFullScreen(element) {
        if (!document.fullscreenElement) {
            if (element.requestFullscreen) {
                return element.requestFullscreen();
            }
            if (element.webkitRequestFullscreen) {
                return element.webkitRequestFullscreen();
            }
            if (element.mozRequestFullScreen) {
                return element.mozRequestFullScreen();
            }
            if (element.msRequestFullscreen) {
                return element.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                return document.exitFullscreen();
            }
            if (document.webkitExitFullscreen) {
                return document.webkitExitFullscreen();
            }
            if (document.mozCancelFullScreen) {
                return document.mozCancelFullScreen();
            }
            if (document.msExitFullscreen) {
                return document.msExitFullscreen();
            }
        }
    }    




});
