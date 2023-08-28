import { Given, When } from 'cucumber';
import { HomePage } from '../src/pageobjects/HomePage.ts';

const homePage = new HomePage();

Given('I am on the Amazon homepage', async () => {
    await homePage.open();
});

When('I search for {string}', async (searchTerm: string) => {
    await homePage.searchForProduct(searchTerm);
});
