const myBtn = $("#boton")
myBtn.click(function (params){
    if(list.innerHeight() === 0){
        $.get("http://localhost:5000/amigos", (response) =>{
        response.forEach(element => {
            list.append(<li>$(element.name)</li> )
        });
    });
} else {
    alert("lista llena")
}
});

const btnId = $("#search")
const input = $("#input")
btnId.click(()=>{
    const id = input.vaal()
    if(isNaN(Number())){
        $.get('http://localhost:5000/amigos/${id}', (response) => {
            $("#amigo").text(response.name)
        });
    }
});

$("#delete").click(() => {
    const id = $("#inputDelete").val();
    if(!isNaN(Number(id))) {
        $.ajax({
            urll: 'http://localhost:5000/amigos/${id}',
            type: "DELETE",
            success: () => {
                $("#success").text("Amigo borrado con exito")
            },
        });
    }
});