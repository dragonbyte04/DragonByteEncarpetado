console.log("Welcome Riders!");

function iniciarSesion() {
    let intentos = 3;
    while (intentos > 0) {
        let username = prompt("Type your username: ");
        let password = prompt("Type your password: ");
        
        if (username === "Dragonbyte04" && password === "dragonbyte123@") {
            console.log("Welcome Rider!");
            intentos = 0; 
            let userRank = prompt("Select: \n1 - Player\n2 - Admin");
            
            if (userRank === "1") {
                console.log("Welcome Player!");
              mostrarMenuPlayer ()


            } else if (userRank === "2") {
                console.log("Welcome Admin!");
                mostrarMenuAdmin ()
                
            } else {
                console.log("Invalid selection.");
            }
            
        } else {
            intentos--;
            
            if (intentos > 0) {
                console.log("Credentials error, please try again. You have " + intentos + " more attempt(s).");
            } else {
                console.log("All attempts have been used. The application will close.");
            }
        }
             
        }
    }

    function mostrarMenuPlayer (){
        let option = prompt ("Select an option: \n1 - Go to your profile\n2 - Settings\n 3 - My courses")

    }

    function mostrarMenuAdmin (){
        let option = prompt ("Select an option: \n1 - Player management\n2 - Server management\n 3 - Dev options")
     

    }


iniciarSesion();