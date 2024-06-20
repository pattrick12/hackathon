package routes

import (
	"app-go/middleware"
	"github.com/gorilla/mux"
)

func Router() *mux.Router{
	router:= mux.NewRouter()
	router.HandlerFunc("/api/hackathon", middleware. )
	return router
}