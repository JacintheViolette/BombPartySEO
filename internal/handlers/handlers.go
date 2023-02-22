package handlers

import (
	"bombparty/internal/tools"
	"database/sql"
	"fmt"
	"log"
	"net/http"
)

func Start(w http.ResponseWriter, r *http.Request) {
	tools.CreateSQLTableUser()
	tools.RenderTemplate(w, "start")
}

func Menu(w http.ResponseWriter, r *http.Request) {
	_, err := r.Cookie("username")
	if err != nil {
		tools.RenderTemplate(w, "menu")
	} else {
			tools.RenderTemplate(w, "menu_connected")
	}
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
		http.Redirect(w, r, "/menu", http.StatusFound)
	} else {
		http.Redirect(w, r, "/menu", http.StatusFound)
	}
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
		fmt.Println(err)
	}
	defer db.Close()

	cookie, errCookie := r.Cookie("username")

	if errCookie != nil {
		http.Redirect(w, r, "/menu", http.StatusFound)
	} else {
		if tools.CheckUsernameExists(cookie.Value, db) {			
			tools.RenderTemplate(w, "game")
		}
	}
}

func LogOut(w http.ResponseWriter, r *http.Request) {
	tools.SetCookie("username", "", -1, w, r)
	http.Redirect(w, r, "/menu", http.StatusFound)
}

func Account(w http.ResponseWriter, r *http.Request) {
	tools.RenderTemplate(w, "account")
}