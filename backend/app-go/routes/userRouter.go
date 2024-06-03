package routes

import (
	controller "app-go/controllers"
	"app-go/middleware"
	"github.com/gin-gonic/gin"
)

func UserRoutes(incomingRoutes *gin.Engine) {
	incomingRoutes.Use(middleware.Authenticate())
	incomingRoutes.GET("/users", controller.GetUsers())
	incomingRoutes.GET("/users/:id", controller.GetUser())
	incomingRoutes.POST("/users", controller.CreateUser())
	incomingRoutes.PUT("/users/:id", controller.UpdateUser())
	incomingRoutes.DELETE("/users/:id", controller.DeleteUser())
}
