import { BasePage } from './BasePage';
import { browser, Element } from 'webdriverio';
import { AmazonURL } from './URLs';

export class HomePage extends BasePage {
private searchInput: Element;

constructor(browser: BrowserObject) {
        super(browser);
        this.searchInput = $('input[type="text"]');
    }

async open(): Promise<void> {
    await this.browser.url(AmazonURL);
  }

    async searchForProduct(searchTerm: string) {
        await this.searchInput.setValue(searchTerm);
        await browser.keys('Enter');
    }

}

const homePage = new HomePage();
export { homePage as HomePage };
