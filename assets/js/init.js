/**
 * Initialization for the Slide Deck
 */
(function($){
	$.deck('.slide', {
		selectors: {
			container: 'body > article'
		}
	});

	$('pre code').each( function(i, e){
		hljs.highlightBlock(e);
	});
})(jQuery);
