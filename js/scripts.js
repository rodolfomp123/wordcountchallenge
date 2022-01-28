function countWords(text) {
    text = clearText(text);
    if (isEmpty(text)) {
        showErrorMessage();
    } else {
        const wordCount = text.split(' ').length;
        showSuccessMessage(wordCount);
    }
}

function clearText(str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return str.replace(/\s+/g,' ').trim();
}

function isEmpty(str) {
    return str == '';
}

function showErrorMessage() {
    const element = document.getElementById('feedback');
    element.setAttribute("class", "text-center alert alert-danger");
    element.setAttribute("style", "width: 220px; height: 60px;");
    element.innerHTML = "Please insert a valid text!";
}

function showSuccessMessage(count) {
    Swal.fire({
        title: `The number of words is ${count}`,
        icon: 'success',
        confirmButtonText: 'Thanks!'
    });
}

function hideErrorMessage() {
    const element = document.getElementById('feedback');
    element.setAttribute("class", "");
    element.setAttribute("style", "");
    element.innerHTML = "";
}