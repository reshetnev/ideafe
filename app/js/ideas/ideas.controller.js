(function(){
    'use strict';
    angular
        .module('ideaControllers')
        .controller('ideasCtrl', ['Rating', ideasCtrl]);

	function ideasCtrl(Rating) {
		var vm = this;
		vm.ideasList = places;
		vm.tag = 'Все';
		vm.clickTagButton = function(tag) {
			vm.tag = tag;		
			vm.searchText = '';
		}
		vm.changeRating = function (mark, idea) {
			idea = Rating.changeRating(mark, idea);
  };
	}
	
})();