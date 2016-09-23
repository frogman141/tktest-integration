describe('LobbyCtrl', function() {
    beforeEach(function() {
        //open the browser at the lobby
        browser.get('/#/');
    });
    
    // this test is counting the buttons on the lobby page
    it('should have 2 buttons', function() {
        expect(element.all(protractor.By.css('button.button.button-block')).count()).toEqual(2);
    });
    
    // tests the take test button navigates to the question state and the first question is question1
    it('should navigate to first question', function() {
        element(protractor.By.css('.ptor-lobby-go-question')).click()
        expect(browser.getLocationAbsUrl()).toMatch('/question1');
    });
    
    //this test will check we can navigate to the history state.
    it('should navigate to first question', function() {
        element(protractor.By.css('.ptor-lobby-go-history')).click()
        expect(browser.getLocationAbsUrl()).toMatch('/history');
    });
    
});