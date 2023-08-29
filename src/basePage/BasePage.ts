import { BrowserObject, Element } from 'webdriverio';

export class BasePage {
protected browser: BrowserObject;

constructor(browser: BrowserObject) {
    this.browser = browser;
  }

  async click(element: Element): Promise<void> {
    await element.waitForClickable();
    await element.click();
  }

  async type(element: Element, text: string): Promise<void> {
    await element.waitForDisplayed();
    await element.setValue(text);
  }


}
