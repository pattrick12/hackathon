package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

type phonex struct {
	country_code int    `validate:"required, min=1, max=999"`
	phone_number uint64 `validate:"required, min 1000000000,max=9999999999"`
}
type User struct {
	ID            primitive.ObjectID `bson:"_id"`
	First_name    *string            `json:"fname" validate:"required, min=2, max=100"`
	Last_name     *string            `json:"lname" validate:"min=2, max=100"`
	Email         *string            `json:"email" validate:"email, required"`
	Password      *string            `json:"pssword" validate:"required, min 6"`
	Phone         *phonex            `json:"phone" validate:"required,dive"`
	Token         *string            `json:"token"`
	User_type     *string            `json:"user_type" validate:"required, eq=ADMIN|eq=INVESTOR|eq=STARTUP|eq=JOBSSEEKER|eq=EMP"`
	Refresh_token *string            `json:"refresh_token"`
	Created_at    time.Time          `json:"created_at"`
	Updated_at    time.Time          `json:"updated_at"`
	User_id       string             `json:"user_id"`
}
