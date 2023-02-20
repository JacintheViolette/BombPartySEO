package tools

import (
	"database/sql"
	"net/http"
	"text/template"
)

func RenderTemplate(w http.ResponseWriter, tmpl string) {
	t, err := template.ParseFiles("./template/" + tmpl + ".html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	t.Execute(w, nil)
}

func CheckUsernameExists(username string, db *sql.DB) bool {
	var count int
	err := db.QueryRow("SELECT COUNT(*) FROM user WHERE username = ?", username).Scan(&count)
	if err != nil {
		return false
	}

	return count > 0
}

func SetCookie(name, username string, duration int, w http.ResponseWriter, r *http.Request) {
	cookie := http.Cookie{
		Name:     name,
		Value:    username,
		MaxAge:   duration,
		Path:     "/",
	}
	http.SetCookie(w, &cookie)
}

func GetPassword(username string, db *sql.DB) (string, error) {
	// Prépare la requête pour la recherche d'un username
	row := db.QueryRow(`SELECT password FROM user WHERE username = ?`, username)
	var password string
	// Analyse les résultats et sauvegarde la password dans password
	err := row.Scan(&password)
	if err != nil {
		return "", err
	}
	return password, nil
}
