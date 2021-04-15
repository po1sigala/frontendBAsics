let matchRQ = () => {
    //get the string version of the rq number
    let currentRQ = document.getElementById("RQnum").textContent;
    //get the name of the file you uploaded
    let fileName = document.getElementById("exampleFormControlFile1").value;
    //get the index of just the file name by looking past fakepath
    const index = fileName.indexOf("fakepath") + 9;
    //convert the old filename to just the filename without the preceding BS
    fileName = fileName.substring(index);
    console.log(fileName);
    //this regex says to match you must begin with the file name listed at teh top of the page and end with it
    //or you can end with an underscore
    let regEx = new RegExp("\\b" + currentRQ + "(\\b|_)", "g");
    console.log(regEx);
    let match = regEx.test(fileName);

    if (match === true) {
        document.getElementById("paperworkdiv").setAttribute("class", "pass");
        console.log("should be green");
        return;
    } else {
        document.getElementById("paperworkdiv").setAttribute("class", "fail");
        console.log("should be red");
    }
};
document
    .getElementById("exampleFormControlFile1")
    .addEventListener("change", matchRQ);
