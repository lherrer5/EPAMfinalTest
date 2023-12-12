const { $ } = require('@wdio/globals');

class SearchPage {
    get searchBar() { 
        return $('[data-testid="search-input"]'); }


    async search(bandName) {
        await this.searchBar.setValue(bandName);
    }
}


module.exports = new SearchPage();
