const ulProductos = document.getElementById("ul_variedades_destacadas");

const destacados = [1,3,5,8];

fetch("https://631b3538dc236c0b1ef028e8.mockapi.io/Cafe")
.then(res=> res.json())
.then(data=> {
    data.map(el=> {
        if(destacados.find(elem=>elem==el.id)){
            
            const li = document.createElement("li");
            li.setAttribute("id", `prod_${el.id}`);
            li.className = "li_productos";
            li.innerHTML = `<a href="./products.html"><h4> ${el.name} </h4>
                            <br>
                            <img src="${el.image}" alt="image_${el.name}">
                            <b>Precio: $ ${el.price}.-</b>
                            <br>
                            <span>Peso: ${el.weight}gr. -</span>
                            <span>Stock: ${el.stock} -</span>
                            <br>
                            <br>
                            <p> ${el.description} -</p></a>
                            `;
            ulProductos.appendChild(li);
        }

        })
        })

