package handlers

import (
	"bombparty/internal/tools"
	"database/sql"
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func Start(w http.ResponseWriter, r *http.Request) {
	tools.CreateSQLTableUser()
	tools.RenderTemplate(w, "start")
}

func Menu(w http.ResponseWriter, r *http.Request) {
	tools.RenderTemplate(w, "menu")
}

func CreateAccount(w http.ResponseWriter, r *http.Request) {
	tools.RenderTemplate(w, "create_account")
}

func LoginAccount(w http.ResponseWriter, r *http.Request) {
	tools.RenderTemplate(w, "login_account")
}

func LoginForm(w http.ResponseWriter, r *http.Request) {
	username := r.FormValue("username")
	password := r.FormValue("password")

	db, err := sql.Open("sqlite3", "data.db")
	if err != nil {
		log.Fatal(err)
	}

	checkUsername := tools.CheckUsernameExists(username, db)
	checkPassword, _ := tools.GetPassword(username, db)

	fmt.Println(username)
	fmt.Println(password)
	fmt.Println(checkPassword)

	fmt.Println("check username = ", checkUsername)
	fmt.Println("password == checkPassword", password == checkPassword)

	if checkUsername && password == checkPassword {
		tools.SetCookie("username", username, 600, w, r)
	}
	http.Redirect(w, r, "/", http.StatusFound)
	/*
		fmt.Fprintln(w, "Current Username Login\n")
		fmt.Fprintln(w, "	Username: "+username)
		fmt.Fprintln(w, "	Password: "+password)
	*/
}

func CreateForm(w http.ResponseWriter, r *http.Request) {
	username := r.FormValue("username")
	password := r.FormValue("password")
	repeatPassword := r.FormValue("repeatpassword")

	db, err := sql.Open("sqlite3", "data.db") // ouvre la connexion
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	if password == repeatPassword {
		check := tools.CheckUsernameExists(username, db)

		if !check {
			tools.InsertDataUser(username, password)
			http.Redirect(w, r, "/login_account", http.StatusFound)
		}
	}
	http.Redirect(w, r, "/login_account", http.StatusFound)

	/*
		fmt.Fprintln(w, "Current Username Login\n")
		fmt.Fprintln(w, "	Username: "+username)
		fmt.Fprintln(w, "	Password: "+password)
		fmt.Fprintln(w, "	Repeat Password: "+repeatPassword)
	*/
}

func Game(w http.ResponseWriter, r *http.Request) {
	db, err := sql.Open("sqlite3", "data.db") // ouvre la connexion
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	cookie, _ := r.Cookie("username")

	if cookie.Value != "" && tools.CheckUsernameExists(cookie.Value, db) {
		tools.RenderTemplate(w, "game")
		tmpl := template.Must(template.ParseFiles("./static/notConnected.html"))
		tmpl.Execute(w, 45)
	} else {
		http.Redirect(w, r, "/", http.StatusFound)
	}
}
