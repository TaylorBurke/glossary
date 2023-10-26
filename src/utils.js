 
export const sortAlphabetic = (glossaryItems) => {
    return glossaryItems.sort((a, b) => {
        if (a.glossaryItem < b.glossaryItem) {
            return -1;
        }
        if (a.glossaryItem > b.glossaryItem) {
            return 1;
        }
        return 0;
    });
}


