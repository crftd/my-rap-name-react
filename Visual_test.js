Feature('Visual');

Scenario('Compare Rap Name site @visual-test', async I => {
  I.amOnPage('/my-rap-name-react/');
  I.saveScreenshot('rap-name-index.png');
  I.seeVisualDiff('rap-name-index.png', {
    tolerance: 1,
    prepareBaseImage: false,
  });
});
