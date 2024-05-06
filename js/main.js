document.addEventListener("DOMContentLoaded", function() {
    const nombreInput = document.getElementById("nombre");
    const cantidadInput = document.getElementById("cantidad");
    const categoriaSelect = document.getElementById("categoria");
    const sedeSelect = document.getElementById("sede");
    const agregarBtn = document.getElementById("agregar");
    const inventarioList = document.getElementById("inventario");
    const categoriasContainer = document.getElementById("categorias");
    let contadorProductos = 1;


    categorias.forEach(categoria => {
        const categoriaCard = document.createElement("div");
        categoriaCard.className = "categoria-card";

        const imagen = document.createElement("img");
        imagen.src = categoria.imagen;
        imagen.alt = categoria.tipoDeProducto;
        categoriaCard.appendChild(imagen);

        const titulo = document.createElement("h2");
        titulo.textContent = categoria.tipoDeProducto;
        categoriaCard.appendChild(titulo);

        const productosContainer = document.createElement("ul");
        productosContainer.id = `${categoria.tipoDeProducto.toLowerCase()}-productos`;
        categoriaCard.appendChild(productosContainer);

        categoriasContainer.appendChild(categoriaCard);
    });

    
    agregarBtn.addEventListener("click", function() {
        const nombre = nombreInput.value;
        const cantidad = cantidadInput.value;
        const categoria = categoriaSelect.value;
        const sede = sedeSelect.value;

       
        const nuevoProducto = document.createElement("li");
        nuevoProducto.textContent = `${contadorProductos}. ${nombre} - Cantidad: ${cantidad} - Categoría: ${categoria} - Sede: ${sede}`;

        
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.className = "btn-eliminar";

       
        btnEliminar.addEventListener("click", function() {
            nuevoProducto.remove();
        });

  
        nuevoProducto.appendChild(btnEliminar);

      
        const productosContainer = document.getElementById(`${categoria.toLowerCase()}-productos`);
        productosContainer.appendChild(nuevoProducto);

        
        contadorProductos++;

       
        nombreInput.value = "";
        cantidadInput.value = "";
        categoriaSelect.selectedIndex = 0;
        sedeSelect.selectedIndex = 0;
    });
});
