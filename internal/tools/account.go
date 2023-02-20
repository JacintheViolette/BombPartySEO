package tools

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func CreateSQLTableUser() {
	// CREATE TABLE user(id INTEGER PRIMARY KEY, username TEXT, mail TEXT, password TEXT);
	db, err := sql.Open("sqlite3", "data.db") // ouvre la connexion
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close() // ferme la connexion
	sts := `CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY, username TEXT, password TEXT);`
	_, err = db.Exec(sts) // execution de la commande
	if err != nil {
		log.Fatal(err)
	}
}

func InsertDataUser(username, password string) error {
	db, err := sql.Open("sqlite3", "data.db")
	if err != nil {
		return err
	}
	checkUsername := CheckUsernameExists(username, db)
	defer db.Close()

	if !checkUsername {
		_, err = db.Exec("INSERT INTO user(username, password) VALUES (?, ?)", username, password)
		return err
	} else {
		return err
	}
}
