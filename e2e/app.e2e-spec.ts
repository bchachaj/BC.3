import { AngwebsitePage } from './app.po';

describe('angwebsite App', function() {
  let page: AngwebsitePage;

  beforeEach(() => {
    page = new AngwebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
