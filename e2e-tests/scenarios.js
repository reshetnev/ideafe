describe('my app', function() {

  browser.get('index.html');

  it('should filter results places list', function() {

    // Find the element with ng-model="searchText" and type "Ф" into it
    element(by.model('ideas.searchText')).sendKeys('ф');
    // Verify that there are 4 places
    expect(element.all(by.repeater('idea in ideas.ideasList')).count()).toEqual(4);	

    // Find the all and get second (and only) button on the page and click it
    element.all(by.css("a[type='button']")).get(1).click();
    // Verify that there are 3 places
    expect(element.all(by.repeater('idea in ideas.ideasList')).count()).toEqual(3);
    // Find the element with ng-model="searchText" and type "Ф" into it
    element(by.model('ideas.searchText')).sendKeys('ф');
    // Verify that there are 3 places
    expect(element.all(by.repeater('idea in ideas.ideasList')).count()).toEqual(3);		

    // Find the all and get third (and only) button on the page and click it
    element.all(by.css("a[type='button']")).get(2).click();
    // Verify that there are 1 places
    expect(element.all(by.repeater('idea in ideas.ideasList')).count()).toEqual(1);
    // Find the element with ng-model="searchText" and type "Ф" into it
    element(by.model('ideas.searchText')).sendKeys('ф');
    // Verify that there are 0 places
    expect(element.all(by.repeater('idea in ideas.ideasList')).count()).toEqual(0);		

    // Find the all and get fourth (and only) button on the page and click it
    element.all(by.css("a[type='button']")).get(3).click();
    // Verify that there are 1 places
    expect(element.all(by.repeater('idea in ideas.ideasList')).count()).toEqual(1);
    // Find the element with ng-model="searchText" and type "Ф" into it
    element(by.model('ideas.searchText')).sendKeys('ф');
    // Verify that there are 1 places
    expect(element.all(by.repeater('idea in ideas.ideasList')).count()).toEqual(1);	
	
    // Find the all and get first (and only) button on the page and click it
    element.all(by.css("a[type='button']")).get(0).click();
    // Verify that there are 5 places
    expect(element.all(by.repeater('idea in ideas.ideasList')).count()).toEqual(5);	
  });

});
