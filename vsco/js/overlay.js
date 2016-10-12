(function() {
	
	
	
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
			triggerBttn2 = document.getElementById( 'trigger-overlay-2' ),
			overlay = document.querySelector( 'div.overlay' ),
			closeBttn = overlay.querySelector( 'button.overlay-close' );
			
			transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			},
			transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
			support = { transitions : Modernizr.csstransitions };

	
	function toggleOverlay() {
		
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}
	
	
	function toggleOverlay2() {
		
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	triggerBttn2.addEventListener( 'click', toggleOverlay2 );
	closeBttn.addEventListener( 'click', toggleOverlay );
	
})();





$(document).ready(function () {
    var offsetY = window.pageYOffset,
        $body = $('body'),
        $win = $(window),
        $close = $('.overlay-close'),
        $open = $('#trigger-overlay'),
        $open2 = $('#trigger-overlay-2');
    
    // Close with 'esc' key
    $(document).keyup(function (e) {
        if (e.keyCode == 27) $close.trigger('click');
    });
    
    $open.click(function () {
        offsetY = window.pageYOffset;
        // Block scrolling
        $body.css({
            'position': 'fixed',
            'top': -offsetY + 'px'
        });
        
    });
    
    $open2.click(function () {
        offsetY = window.pageYOffset;
        // Block scrolling
        $body.css({
            'position': 'fixed',
            'top': -offsetY + 'px'
        });
        
    });

    $close.click(function () {
        // Allow scrolling again
        $body.css({
            'position': 'static'
        });

        // Make the page stay at the position it was at before the overlay
        $win.scrollTop(offsetY);
    
    });
});