package main

import (
	"bombparty/internal/handlers"
	"log"
	"net/http"
)

func main() {
	addr := "10.10.5.98:6969"

	http.Handle("/style/", http.StripPrefix("/style/", http.FileServer(http.Dir("./style"))))
	http.Handle("/script/", http.StripPrefix("/script/", http.FileServer(http.Dir("./script"))))
	http.HandleFunc("/", handlers.Start)
	http.HandleFunc("/menu", handlers.Menu)
	http.HandleFunc("/game", handlers.Game)
	http.HandleFunc("/create_account", handlers.CreateAccount)
	http.HandleFunc("/login_account", handlers.LoginAccount)
	http.HandleFunc("/login_account/form", handlers.LoginForm)
	http.HandleFunc("/create_account/form", handlers.CreateForm)

	//fmt.Println("Serveur lancé sur l'adresse http://localhost:6969")

	log.Printf("Démarrage du serveur sur l'adresse http://%s\n", addr)
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Fatalf("Erreur lors du démarrage du serveur : %v", err)
	}
}
