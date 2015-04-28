var app = angular
	.module('appIdea', []);
	
app.controller('PlaceCtrl', PlaceCtrl);
app.filter('TagFilter', TagFilter);
app.filter('HighlightFilter', HighlightFilter);
app.directive('filterButton', filterButton);

function PlaceCtrl() {
	var vm = this;
	vm.places = places;
	vm.tag = 'Все';
	vm.onClick = function(tag) {
		vm.tag = tag;		
		vm.searchText = '';
		console.log("Tag=", tag);
	}
}

function TagFilter() {
	return function(places, tag) {
		return places.filter( function(place) {
			if (tag=="Все") {
				return true;
			} else {
				return place.Tag == tag;
			}
		})
	}
}

function HighlightFilter($sce) {
	return function(text, exp) {
		if (exp) text = text.replace(exp, '<span class="highlighted">'+exp+'</span>');
		return $sce.trustAsHtml(text);
	}
}

function filterButton($document) {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: {
			active: '=',
			click: '&'
		},
		link: function(scope, element, attrs) {
			if (scope.active==true) element.addClass('active');
			element.bind('click', function() {
				getElementByClass('btn btn-default active').removeClass('active');
				element.addClass('active');
				scope.$apply(function() {
					scope.click({tag:element.text()});
                });
			});
			function getElementByClass(className) {
				return angular.element(document.getElementById('filter-buttons').getElementsByClassName(className)[0]);
			}
		},
		template: [
				'<a type="button" class="btn btn-default" ng-transclude></a>'
		].join('')
	}
}