package main

import (
	"bombparty/internal/handlers"
	"log"

	//"log"
	"net/http"
)

func main() {
	addr := "your address here"

	http.Handle("/style/", http.StripPrefix("/style/", http.FileServer(http.Dir("./style"))))
	http.Handle("/script/", http.StripPrefix("/script/", http.FileServer(http.Dir("./script"))))
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("./assets"))))
	http.HandleFunc("/", handlers.Start)
	http.HandleFunc("/menu", handlers.Menu)
	http.HandleFunc("/game", handlers.Game)
	http.HandleFunc("/logout", handlers.LogOut)
	http.HandleFunc("/account", handlers.Account)
	http.HandleFunc("/create_account", handlers.CreateAccount)
	http.HandleFunc("/login_account", handlers.LoginAccount)
	http.HandleFunc("/login_account/form", handlers.LoginForm)
	http.HandleFunc("/create_account/form", handlers.CreateForm)

	log.Printf("Démarrage du serveur sur l'adresse http://%s\n", addr)
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Fatalf("Erreur lors du démarrage du serveur : %v", err)
	}

}
