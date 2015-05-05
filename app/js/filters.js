(function() {
    'use strict';
	
	angular.module('ideaFilters', []);
	
	angular
		.module('ideaFilters')
		.filter('tagFilter', tagFilter);

	function tagFilter() {
		return function(places, tag) {
			return places.filter(function(place) {
				if (tag == 'Все') {
					return true;
				} else {
					return place.Tag == tag;
				}
			})
		}
	}
	
	angular
		.module('ideaFilters')
		.filter('highlightFilter', highlightFilter);	

	function highlightFilter($sce) {
		return function(text, exp) {
			if (exp) text = text.replace(exp, '<span class="highlighted">'+exp+'</span>');
			return $sce.trustAsHtml(text);
		}
	}

})();