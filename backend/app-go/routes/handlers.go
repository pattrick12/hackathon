package routes

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func MentorHandler(c *gin.Context) {

	c.JSON(http.StatusOK, gin.H{"message": "mentor handler"})
}

func MybHandler(c *gin.Context) {

	c.JSON(http.StatusOK, gin.H{"message": "myb handler"})
}

func BoostHandler(c *gin.Context) {

	c.JSON(http.StatusOK, gin.H{"message": "boost handler"})
}

func BookAConsultHandler(c *gin.Context) {

	c.JSON(http.StatusOK, gin.H{"message": "book a consult handler"})
}

func CalculatorHandler(c *gin.Context) {

	c.JSON(http.StatusOK, gin.H{"message": "calculator handler"})
}

func PredictionHandler(c *gin.Context) {

	c.JSON(http.StatusOK, gin.H{"message": "prediction handler"})
}

func ReachOutHandler(c *gin.Context) {

	c.JSON(http.StatusOK, gin.H{"message": "reach out handler"})
}
