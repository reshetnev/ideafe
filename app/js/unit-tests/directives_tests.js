describe('directives unit testing', function(){
	var $compile,
		$rootScope;
	
	beforeEach(module('ideaDirectives'));
	
	beforeEach(inject(function(_$compile_, _$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));
	
	it('Replace the element with the appropriate content', function() {
		var element = $compile('<tag-button active="true">Все</tag-button>')($rootScope);
		expect(element.text()).toContain('Все');
		expect(element.hasClass('active')).toBe(true);
	});

});

	