
function Page(heading, text, indexOfPage) {
    var _indexOfPage = indexOfPage;
    var _heading = heading;
    var _text = text;

    this.getHeading = function () {
        return _heading;
    };

    this.setHeading = function (heading) {
        _heading = heading;
    };

    this.getText = function () {
        return _text
    };

    this.setText = function (text) {
        _text = text;
    };

    this.getIndexOfPage = function () {
        return _indexOfPage;
    };

    this.setIndexOfPage = function (indexOfPage) {
        _indexOfPage = indexOfPage;
    };
}

Page.prototype.addText = function (text) {
    this.setText(this.getText() + '\n' + text);
};

Page.prototype.deleteText = function () {
    this.setText('');
};

Page.prototype.viewPage = function () {
    return this.getHeading() + '\n' + this.getText();
};