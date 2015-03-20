describe('Protractor Demo App', function() {
  it('should take the user input as search term', function() {
    browser.get('http://localhost:3000');
    element(by.model('searchTerm.text')).sendKeys("Aloha");
    element(by.id("searchbutton")).click();
    expect(element(by.class("searchresult"))).not.ToBeEmpty


  });


});