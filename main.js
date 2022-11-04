var lisaaTehtavaNappi = document.getElementById('lisaaTehtava');
var tehtavaKentta = document.getElementById('tehtavaKentta');
var tekstiKentta = document.getElementById('tekstiKentta');
var minimiPituus = 4;

tekstiKentta.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        var paragraph = document.createElement('p')
        paragraph.classList.add('paragraph-styling')
        paragraph.innerText = tekstiKentta.value;
        if (!tekstiKentta.value) {
            tekstiKentta.classList.add("error-text");
            alert("Tekstikenttä tyhjä. Lisää kenttään tehtäväsi!");
            return;
        }
        if (tekstiKentta.value.length < minimiPituus) {
            tekstiKentta.classList.add("error-text");
            alert("Liian lyhyt teksti!");
            return;
        }
        tekstiKentta.classList.remove("error-text");
        tehtavaKentta.appendChild(paragraph);
        tekstiKentta.value = "";
        paragraph.addEventListener('click', function () {
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('dblclick', function () {
            tehtavaKentta.removeChild(paragraph);
        })
    }
})

lisaaTehtavaNappi.addEventListener('click', function () {
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = tekstiKentta.value;
    if (!tekstiKentta.value) {
        tekstiKentta.classList.add("error-text");
        alert("Tekstikenttä tyhjä. Lisää kenttään tehtäväsi!");
        return;
    }
    if (tekstiKentta.value.length < minimiPituus) {
        tekstiKentta.classList.add("error-text");
        alert("Liian lyhyt teksti!");
        return;
    }
    tekstiKentta.classList.remove("error-text");
    tehtavaKentta.appendChild(paragraph);
    tekstiKentta.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function () {
        tehtavaKentta.removeChild(paragraph);
    })
})

tekstiKentta.addEventListener('keydown', e => {
    const teksti = e.target.value;

    if (teksti.length + 1 == minimiPituus) {
        tekstiKentta.classList.remove("error-text");
    }
});