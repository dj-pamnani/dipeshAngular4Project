import { DipsAngular4Page } from './app.po';

describe('dips-angular4 App', function() {
  let page: DipsAngular4Page;

  beforeEach(() => {
    page = new DipsAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
