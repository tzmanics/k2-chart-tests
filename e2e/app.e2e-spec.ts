import { ChartTestsPage } from './app.po';

describe('chart-tests App', function() {
  let page: ChartTestsPage;

  beforeEach(() => {
    page = new ChartTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
