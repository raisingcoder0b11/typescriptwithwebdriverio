import { BasePage } from './BasePage';
import { browser, Element } from 'webdriverio';

class SearchPage extends Page {
private firstBrandCheckbox: Element;
private secondBrandCheckbox: Element;
private starRatingFilter: Element;
private firstResult: Element;

export class SearchPage extends BasePage {

constructor(browser: BrowserObject) {
        super(browser);
        //checkbox under Brands filter
        this.checkboxBrand = "(//div[@id='brandsRefinements']//div[@class='a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left'])";
       //Requirement is to click the 3-star rating filter
        this.starRatingFilter = $('.a-star-medium-3');
       //Requirement is to click the first populated result
        this.firstResult = $('(//div[@class="sg-col-inner"]//div[@class="a-row a-size-base a-color-base"])[1]');
    }

static async selectBrandFilter(checkboxNumber: number): Promise<void> {

  const dynamicXPath = `${this.checkboxBrand}[${checkboxNumber}]`;

  checkbox = await browser.$(dynamicXPath);
//Performing Assertion
    expect(await checkbox.isClickable(), 'Brand checkbox is not clickable').to.be.true;
    await checkbox.click();
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
