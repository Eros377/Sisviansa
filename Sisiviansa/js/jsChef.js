window.addEventListener("load", inicio);

function inicio(){
    let url = "php/tienda.php"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for(let i = 0; i < data.length;i++){
            $("#tablaChef").append(`
            <tr id="${data[i].id_menu}">
                <td class="bordeMenu col-1 col-sm-1 col-md-1 col-lg-1">${data[i].id_menu}</td>
                <td class="bordeMenu col-1 col-sm-1 col-md-1 col-lg-1">${data[i].nombre}</td>
                <td class="bordeMenu col-2 col-sm-2 col-md-2 col-lg-2">${data[i].tiempo_elaboracion}</td>
                <td class="bordeMenu col-1 col-sm-1 col-md-1 col-lg-1">${data[i].tipo}</td>
                <td class="bordeMenu col-1 col-sm-1 col-md-1 col-lg-1">${data[i].precio}</td>
                <td class="bordeMenu col-1 col-sm-1 col-md-1 col-lg-1">${data[i].stock_min}</td>
                <td class="bordeMenu col-1 col-sm-1 col-md-1 col-lg-1">${data[i].stock_max}</td>
                <td class="bordeMenu col-1 col-sm-1 col-md-1 col-lg-1">${data[i].stock_real}</td>
                <td class="bordeMenu col-1 col-sm-1 col-md-1 col-lg-1"><input type="number"  id="txt${data[i].id_menu}" max="${data[i].stock_max}" min="1"></td>
                <td class="bordeMenu col-1 col-sm-1 col-md-1 col-lg-1"><input type="button" class="btnAgregar py-1 my-1" value="agregar" id="btn${data[i].id_menu}"></td>
            </tr>
            `)
            $(`#btn${data[i].id_menu}`).click(() => {
                let stock = $(`#txt${data[i].id_menu}`).val();
                agregarStock(data[i].id_menu, stock);
            });
        }
    })
}
function agregarStock(id_menu,stock){
    console.log(id_menu,stock)
    data = {
        id: id_menu,
        stock: stock
    }
    $.post("php/agregarStock.php",data,function(res){
        location.reload();
    })
}