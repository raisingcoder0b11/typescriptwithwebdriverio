import { When, Then } from 'cucumber';
import { SearchPage } from '../pages/SearchPage';
import { browser } from 'webdriverio';

const searchPage = new SearchPage();

When('I check the first brand checkbox', async () => {
    await searchPage.checkFirstBrandCheckbox();
});

When('I check the second brand checkbox', async () => {
    await searchPage.checkSecondBrandCheckbox();
});

When('I apply a three-star rating', async () => {
    await searchPage.applyThreeStarRating();
});

When('I select the first result', async () => {
    const parentWindowHandle = await browser.getWindowHandle();
    await searchPage.selectFirstResult();
    await selectFirstResultAndWait(parentWindowHandle);
});

Then('I handle the newly opened result window and perform scroll and print the tech specification',async() => {
async function selectFirstResultAndWait(parentWindowHandle) {
    await browser.waitUntil(async () => {
        const windowHandles = await browser.getWindowHandles();
        const newWindowHandle = windowHandles.find(handle => handle !== parentWindowHandle);

        if (newWindowHandle) {
            await browser.switchToWindow(newWindowHandle);
            await searchPage.scrollupToAElement();
            const manufacturerDetailsElement = await $('(//td[@class="a-size-base prodDetAttrValue"])[2]');
            const manufacturerDetails = await manufacturerDetailsElement.getText();
            console.log('Manufacturer Details:', manufacturerDetails);
            return true;
        }
        return false;
    }, {
        timeout: 15000,
        interval: 500
    });
    await browser.switchToWindow(parentWindowHandle);
}});

export { selectFirstResultAndWait };
