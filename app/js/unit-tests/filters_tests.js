describe('filters unit testing', function(){

	var tagFilter, highlightFilter;
	
	beforeEach(module('ideaFilters'));
	
	beforeEach(inject(function($filter) {
		tagFilter = $filter('tagFilter');
		highlightFilter = $filter('highlightFilter');
	}));
	
	// Verify that the filters can be instantiated
	it('should be instantiable', function () {
		expect(tagFilter).toBeDefined();
		expect(highlightFilter).toBeDefined();		
	});
	
	it('return size of filtered places', function() {
		var tag = 'Все';
		var filteredPlaces = tagFilter(places, tag);
		expect(filteredPlaces.length).toEqual(5);
	});
	
	it('return size of filtered places', function() {
		var tag = 'Спорт';
		var filteredPlaces = tagFilter(places, tag);
		expect(filteredPlaces.length).toEqual(3);
	});
	
	it('return highlighted text', function() {
		var text = 'амфитеатр';
		var exp = 'ф';
		var highlightedText = highlightFilter(text, exp);
		expect(highlightedText.$$unwrapTrustedValue()).toBe('ам<span class="highlighted">ф</span>итеатр');
	});

});

	