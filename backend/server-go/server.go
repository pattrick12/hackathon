package server_go

import (
	"net/http"
	"fmt"
	"log"
)

func main() {
	fileServer := http.FileServer(http.Dir("../"))
	http.Handle=("/",fileServer)
	http.HandleFunc("/form",formHandler)
	http.HandleFunc("/Hello", helloHandler)

	fmt.printf("Staring server at port 8080\n")
	if err:= http.ListenAndServe(":8080",nil); err!=nil{
		log.Fatal(err)
	}
}
