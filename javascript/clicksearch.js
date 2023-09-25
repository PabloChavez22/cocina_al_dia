/*--------------search-----------------*/
const searchToggle = document.querySelector(".search-toggle");
const searchView = document.querySelector(".modobusqueda");

searchToggle.addEventListener('click', () => {
    searchView.classList.toggle("modobusqueda_visible");

    if ( searchView.classList.contains("modobusqueda_visible")) {
        searchToggle.setAttribute("arial-label", "Cerrar buscador");
    }else{
        searchToggle.setAttribute("arial-label", "Abrir buscador");
    }
    });
/*--------------search-Platos-----------------*/
document.addEventListener('keyup', e=>{

    /*e.target.matches("#buscador");
    console.log(e.target.value);*/

    if(e.target.matches('#buscador')){

        if(e.key === "Escape")e.target.value ="";

        document.querySelectorAll('.producto').forEach(plato=>{
            plato.textContent.toLowerCase().includes(e.target.value)
            ?plato.parentNode.parentNode.parentNode.classList.remove('hijoDisplay'):plato.parentNode.parentNode.parentNode.classList.add('hijoDisplay');
        });
    }
});