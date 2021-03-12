class LocalStorageNumberPage {

    constructor() {
        this.keyName = 'numberPage';
    }

    getPageNumber() {
        const numberPage = localStorage.getItem(this.keyName);

        if (localStorage.getItem(this.keyName) === null) {
            return 1;
        } else {
            return JSON.parse(numberPage);
        }
    }

    putPageNumber(selectedPageNumber) {
        localStorage.setItem(this.keyName, JSON.stringify(selectedPageNumber));
    }
}

export default new LocalStorageNumberPage();