var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    const inputFields = document.querySelectorAll("input");
    const invalidInputs = Array.from(inputFields).filter( input => input.value == "");
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    if (invalidInputs.length > 0) {
        console.log("error"+invalidInputs);
        status.innerHTML = "¡Hay campos sin completar en el formulario!"
    } else {
        console.log("ok"+invalidInputs);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
            status.innerHTML = "¡Gracias por su contacto!";
            form.reset()
            } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                status.innerHTML = "Hubo un problema con el envío de su consulta..."
                }
            })
            }
        }).catch(error => {
            status.innerHTML = "Oops! Hubo un problema con el envío de su consulta..."
        });
    } 
}
form.addEventListener("submit", handleSubmit)