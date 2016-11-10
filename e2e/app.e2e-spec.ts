import { SwsPage } from './app.po';

describe('sws App', function() {
  let page: SwsPage;

  beforeEach(() => {
    page = new SwsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
