function displayPlayers() {
    var cookies = document.cookie.split(";");
    var username = "";
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith("username=")) {
        username = cookie.substring("username=".length);
        break;
      }
    }
  
    var player = document.createElement("div");
    player.innerHTML = "Nom d'utilisateur : " + username;
  
    var array = document.getElementById("test");
    if (array) { // Vérifie que l'élément "test" existe
      array.appendChild(player);
    } else {
      console.log("L'élément 'test' n'existe pas.");
    }
  }

    $(function() {
    $.get("/get-value", function(data) {
        // Utilisez la valeur renvoyée par l'API REST
        
        console.log(test);
    });
});
  
  displayPlayers();
  