import { Angular2ExpressDockerClientPage } from './app.po';

describe('angular2-express-docker-client App', () => {
  let page: Angular2ExpressDockerClientPage;

  beforeEach(() => {
    page = new Angular2ExpressDockerClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
