package main

import (
	routes "app-go/routes"
	"github.com/gin-gonic/gin"
	"os"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "8090"
	}

	router := gin.New()
	router.Use(gin.Logger())

	routes.AuthRoutes(router)
	routes.UserRoutes(router)

	router.GET("/api-1", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"success": "Hello from api-1"})
	})
	router.GET("/api-2", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"success": "Hello from api-2"})
	})

	// Define new routes
	router.GET("/api/mentor", handlers.MentorHandler)
	router.GET("/api/myb", handlers.MybHandler)
	router.GET("/api/boost", handlers.BoostHandler)
	router.POST("/api/bookaconsult", handlers.BookAConsultHandler)
	router.GET("/api/calculator", handlers.CalculatorHandler)
	router.GET("/api/prediction", handlers.PredictionHandler)
	router.POST("/api/reachout", handlers.ReachOutHandler)

	router.Run(":" + port)
}
