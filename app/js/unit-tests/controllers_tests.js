describe('controllers unit testing', function(){
	
	var vmIdeas;
	
	beforeEach(module('ideaControllers'));
	
	beforeEach(inject(function($controller) {
		vmIdeas = $controller('ideasCtrl');
	}));
	
	// Verify that the controllers can be instantiated
	it('should be instantiable', function () {
		expect(vmIdeas).toBeDefined();
	});

	it('select tag button', function() {
		expect(vmIdeas.tag).toEqual('Все');		
		vmIdeas.clickTagButton('Спорт');
		expect(vmIdeas.tag).toEqual('Спорт');
		expect(vmIdeas.searchText).toEqual('');
	});

});

	