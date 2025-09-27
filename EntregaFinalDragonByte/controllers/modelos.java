package login.models;

public class login {

    // Propiedades - Atributos
    private String username;
    private String password;
    private String role;

    // Constructores - Sobrecarga, porque son varios

    public login(){} // forma #1 vacio

    public login(String username, String password, String role){ // forma #2 con parametros
        this.username = username;
        this.password = password;
        this.role = role;
    }

    // Setters
    public void setUsername(String username){
        this.username = username;
    }

    public void setPassword(String password){
        this.password = password;
    }
    
    public void setRole(String role){
        this.role = role;
    }

    // Getters
    public String getUsername(){
        return this.username;
    }

    public String getPassword(){
        return this.password;
    }

    public boolean getRole(){
        return this.role;
    }
}