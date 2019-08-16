//courses page
document.querySelector('.fetch-html').addEventListener('click', fetchHtml);

function fetchHtml() {
    fetch('client-data.html')
        .then(response => response.text())
        .then(html => document.querySelector('.html-container').innerHTML = html);
}

document.querySelector('.fetch-htmln').addEventListener('click', fetchHtmln);

function fetchHtmln() {
    fetch('offer.html')
        .then(response => response.text())
        .then(html => document.querySelector('.html-containern').innerHTML = html);
}
