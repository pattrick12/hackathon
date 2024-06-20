package models

import (
	//"context"
	//"fmt"
	//"log"
	//"time"
	//
	//"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	//"go.mongodb.org/mongo-driver/mongo"
	//"go.mongodb.org/mongo-driver/mongo/options"
)

type InvestorProfile struct {
	Name                  string               `bson:"name"`
	InvestmentPrefs       []string             `bson:"investment_preferences"`
	MaxInvestmentCap      float64              `bson:"max_investment_cap"`
	Portfolio             []primitive.ObjectID `bson:"portfolio"`
	ValuationExpectations float64              `bson:"valuation_expectations"`
	MaxExitPercentage     float64              `bson:"max_exit_percentage"`
}

type Startup struct {
	ID               primitive.ObjectID   `bson:"_id,omitempty"`
	UserID           primitive.ObjectID   `bson:"user_id"`
	Name             string               `bson:"name"`
	Industry         string               `bson:"industry"`
	Founder          string               `bson:"founder"`
	TeamMembers      []string             `bson:"team_members"`
	FundingNeeds     float64              `bson:"funding_needs"`
	CurrentValuation float64              `bson:"current_valuation"`
	GrowthRate       float64              `bson:"growth_rate"`
	MentorshipNeeds  []string             `bson:"mentorship_needs"`
	JobOpenings      []primitive.ObjectID `bson:"job_openings"`
}

type Jobseeker struct {
	ID          primitive.ObjectID   `bson:"_id,omitempty"`
	UserID      primitive.ObjectID   `bson:"user_id"`
	Name        string               `bson:"name"`
	Skills      []string             `bson:"skills"`
	Education   string               `bson:"education"`
	Experience  int                  `bson:"experience"`
	Resume      string               `bson:"resume"`
	AppliedJobs []primitive.ObjectID `bson:"applied_jobs"`
}

type JobOpening struct {
	ID             primitive.ObjectID   `bson:"_id,omitempty"`
	StartupID      primitive.ObjectID   `bson:"startup_id"`
	Title          string               `bson:"title"`
	Description    string               `bson:"description"`
	RequiredSkills []string             `bson:"required_skills"`
	Salary         float64              `bson:"salary"`
	Location       string               `bson:"location"`
	Applicants     []primitive.ObjectID `bson:"applicants"`
}

type Mentorship struct {
	ID           primitive.ObjectID `bson:"_id,omitempty"`
	MentorName   string             `bson:"mentor_name"`
	Expertise    []string           `bson:"expertise"`
	Rating       float64            `bson:"rating"`
	Reviews      []Review           `bson:"reviews"`
	Availability []Availability     `bson:"availability"`
}

type Review struct {
	ReviewerID primitive.ObjectID `bson:"reviewer_id"`
	Comment    string             `bson:"comment"`
	Rating     float64            `bson:"rating"`
}

type Availability struct {
	Date     string `bson:"date"`
	TimeSlot string `bson:"time_slot"`
}

//functions to create collection
