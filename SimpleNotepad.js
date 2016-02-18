
function SimpleNotepad() {

    AbstractNotepad.call(this);
    //Page.call(this);

    var pages = [];
    var page1 = new Page('first page', '', 1);
    var page2 = new Page('second page', 'avb', 2);
    var page3 = new Page('third page', 'wffs', 3);
    pages.push(page1, page2, page3);
    console.log(pages);

}

AbstractNotepad.addTextToPage();


var notepad = new SimpleNotepad();
