const listaTintas = document.querySelectorAll('[tipo]');



function mostraTintas()
{
    listaTintas.forEach(element => {
        element.classList.remove("escondido")
    });
}
function escondeTintas()
{
    listaTintas.forEach(element => {
        element.classList.add("escondido")
    });
}