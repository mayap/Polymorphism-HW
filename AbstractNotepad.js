var AbstractNotepad = {



    addTextToPage: function (text, indexOfPage) {
        if (this.setIndexOfPage(indexOfPage).getText() == '') {
            this.setIndexOfPage(indexOfPage).addText(text);
        } else {
            this.addTextToPageIfFull();
        }
    },

    addTextToPageIfFull: function () {
        if (this.setIndexOfPage(indexOfPage).getText() != '') {
            this.setIndexOfPage(indexOfPage).deleteText().setText(text);
        }
    },

    deleteTextFromPage: function (indexOfPage) {
        this.setIndexOfPage(indexOfPage).deleteText();
    },

    viewAllPages: function () {
        return this.getHeading() + '\n' + this.getText();
    }

};