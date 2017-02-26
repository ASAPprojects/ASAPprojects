import { RideReminderPage } from './app.po';

describe('ride-reminder App', () => {
  let page: RideReminderPage;

  beforeEach(() => {
    page = new RideReminderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
