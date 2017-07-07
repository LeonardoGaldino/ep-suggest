import { EpSuggestFrontPage } from './app.po';

describe('ep-suggest-front App', () => {
  let page: EpSuggestFrontPage;

  beforeEach(() => {
    page = new EpSuggestFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
