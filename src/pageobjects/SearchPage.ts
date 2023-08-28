import { Page } from './Page';
import { browser, Element } from 'webdriverio';

class SearchPage extends Page {
private firstBrandCheckbox: Element;
private secondBrandCheckbox: Element;
private starRatingFilter: Element;
private firstResult: Element;

constructor() {
        super();
        this.firstBrandCheckbox = $('(//input[@type="checkbox"])[3]');
        this.secondBrandCheckbox = $('(//input[@type="checkbox"])[4]');
        this.starRatingFilter = $('[data-star-ratings="3"]');
        this.firstResult = $('(//span[@class="a-price-whole"])[1]');
    }

    async checkFirstBrandCheckbox() {
        await this.firstBrandCheckbox.click();
    }

    async checkSecondBrandCheckbox() {
        await this.secondBrandCheckbox.click();
    }

    async applyThreeStarRating() {
        await this.starRatingFilter.click();
        await browser.keys('Enter');
    }

    async selectFirstResult() {
        await this.firstResult.click();
    }

    async scrollupToAElement() {
        const productInformation = $('//h2[text()[normalize-space()="Product information"]]');
        await this.scrollUpToElement(productInformation);
    }
}

const searchPage = new SearchPage();
export { searchPage as SearchPage };
