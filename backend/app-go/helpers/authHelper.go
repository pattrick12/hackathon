package helpers

import (
	"errors"
	"github.com/gin-gonic/gin"
)

func CheckUserType(c *gin.Context, role string) (err error) {
	err = nil
	userType := c.GetString("user_type")
	if userType != role {
		err = errors.New("You are not authorized to access this resource")
		return err
	}
	return err
}

func MatchUserTypeToUid(c *gin.Context, userID string) (err error) {
	userType := c.GetString("user_type")
	uid := c.GetString("uid")
	err = nil

	if (userType == "STARTUP" || userType == "INVESTOR" || userType == "JOBSEEKER" || userType == "EMP") && userID != uid {
		err = errors.New("You are not authorized to access this resource")
		return err
	}

	err = CheckUserType(c, userType)
	return err
}
