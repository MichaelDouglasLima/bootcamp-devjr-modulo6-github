
function search() {

    var username = document.getElementById("inputUserName").value;

    var url = `https://api.github.com/users/${username}`;

    $.getJSON(url, (user) => {

        // document.getElementById("error").innerHTML = "";
        clear();

        document.getElementById("name").innerHTML       = user.name;
        document.getElementById("html_url").innerHTML   = user.html_url;
        document.getElementById("company").innerHTML    = user.company;

        document.getElementById("avatar_url").innerHTML = `
        <img src="${user.avatar_url}" alt="Imagem Usuario" width="220" height="220" class="shadow rounded"></img> 
        `;

    }).fail( () => {
        
        clear();

        document.getElementById("error").innerHTML = "<div class='alert alert-danger mt-1' role='alert'>Não Encontrado!</div>";

        // document.getElementById("name").innerHTML       = "";
        // document.getElementById("html_url").innerHTML   = "";
        // document.getElementById("company").innerHTML    = "";
        // document.getElementById("avatar_url").innerHTML = "";
    });
}

function clear() {
        document.getElementById("error").innerHTML      = "";
        document.getElementById("name").innerHTML       = "";
        document.getElementById("html_url").innerHTML   = "";
        document.getElementById("company").innerHTML    = "";
        document.getElementById("avatar_url").innerHTML = "";
}