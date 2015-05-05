(function() {
    'use strict';
	
	angular
		.module('ideaServices')
		.service('Rating', Rating);

	function Rating() { 
		return {
			changeRating: function (mark, idea) {
			idea.rating = idea.rating + (+mark);
			alert(mark);
			return idea;
			}
		}
	}
	
})();

   
   
    
