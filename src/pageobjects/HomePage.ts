import { Page } from './Page';
import { browser, Element } from 'webdriverio';
import { AmazonURL } from './URLs';

class HomePage extends Page {
private searchInput: Element;

constructor() {
        super();
        this.searchInput = $('input[type="text"]');
    }

    async open() {
        await browser.url(AmazonURL);
    }

    async searchForProduct(searchTerm: string) {
        await this.searchInput.setValue(searchTerm);
        await browser.keys('Enter');
    }

}

const homePage = new HomePage();
export { homePage as HomePage };
