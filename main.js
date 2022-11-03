let lisaaTehtavaNappi = document.getElementById('lisaaTehtava');
let tehtavaKentta = document.getElementById('tehtavaKentta');
let tekstiKentta = document.getElementById('tekstiKentta');

lisaaTehtavaNappi.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = tekstiKentta.value;
    tehtavaKentta.appendChild(paragraph);
    tekstiKentta.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        tehtavaKentta.removeChild(paragraph);
    })
})