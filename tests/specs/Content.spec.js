const Content = require('../../scripts/Content');


describe('Content', () => {
  it('Should render greetings', () => {
    const content = TestUtils.renderIntoDocument(<Content />);

    const h1 = TestUtils.findRenderedDOMComponentWithTag(content, 'h1');
    expect(TestUtils.isDOMComponent(h1)).toBeTruthy();
    expect(h1.getDOMNode().textContent.match('video')).toBeTruthy();
  });

});