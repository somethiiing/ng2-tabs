import { Ng2TabsPage } from './app.po';

describe('ng2-tabs App', () => {
  let page: Ng2TabsPage;

  beforeEach(() => {
    page = new Ng2TabsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
