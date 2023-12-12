const { expect } = require('@wdio/globals');
const SearchPage = require('../pageObjects/search.page');

describe('Test Search', () => {
    beforeEach(async () => {
        await browser.url('https://open.spotify.com/search');
    });

    describe('search for a band', () => {
        it('should display the  band name', async () => {
            await SearchPage.search('morat');

            const bandName = await $('a[title="Morat"] div').getText();
            expect(bandName).toContain('Morat');
        });
    });
});
