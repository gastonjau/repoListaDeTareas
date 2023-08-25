//item, agregar
document.addEventListener("DOMContentLoaded",()=>{
    let inicio = localStorage.getItem("agregoItem");
    var contenedor = document.getElementById("contenedor");
    console.log("Esta null");
    inicio = "Primer Tarea";
    inicio.innerHTML = `<h2>Commit Inicial</h2>`;
    contenedor.innerHTML = `<h2>${inicio}</h2>`;
    const agregar = document.getElementById("agregar");
    agregar.addEventListener("click", ()=> {
        
        const item = document.getElementById("item").value;
        localStorage.setItem("agregoItem", item)
        let crearI = localStorage.getItem("agregoItem");
                var clave = `clave`;
                const valor = `valor`;
                localStorage.setItem(clave, valor);
            let li = document.createElement("li");
            li.innerHTML = `<h2>${item}</h2>`
            contenedor.appendChild(li);
    })
    const limpiar = document.getElementById("limpiar");

        limpiar.addEventListener("click", ()=>{
        localStorage.removeItem("agregoItem");
        contenedor.textContent = " ";
    
    })
    
    
})