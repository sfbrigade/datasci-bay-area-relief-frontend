package main

import (
	"encoding/json"
	"log"
	"os"
)

type Provider struct {
	Name                      string `json:"name"`
	SanFranciscoCounty        string `json:"sfCounty"`
	AlamedaCounty             string `json:"alamedaCounty"`
	SanMateoCounty            string `json:"sanMateoCounty"`
	ContraCostaCounty         string `json:"contraCostaCounty"`
	SantaClaraCounty          string `json:"santaClaraCounty"`
	County                    string `json:"county"`
	Category                  string `json:"category"`
	BlackOwned                string `json:"blackOwned"`
	LGBTQ                     string `json:"lgbtq"`
	Women                     string `json:"women"`
	WhoApplies                string `json:"whoApplies"`
	OrFewerEmployees          string `json:"lte100"`
	OrFewerEmployees1         string `json:"lte500"`
	OrFewerEmployees2         string `json:"lte750"`
	OrMore                    string `json:"gt750"`
	TypeOfRelief              string `json:"reliefType"`
	AwardType                 string `json:"awardType"`
	AwardAmountSpecified      string `json:"awardAmountSpecified"`
	MaxAwardAmount            string `json:"maxAwardAmount"`
	InterestRateApplicable    string `json:"interestRateApplicable"`
	InterestRate              string `json:"interestRate"`
	TypeOfSupport             string `json:"supportType"`
	PublicOrPrivate           string `json:"supportedEntity"`
	TypeEntityOfferingSupport string `json:"entityType"`
	NameOfEntity              string `json:"entityName"`
	IsThereADeadline          string `json:"deadlineApplicable"`
	Deadline                  string `json:"deadline"`
	English                   string `json:"english"`
	Spanish                   string `json:"spanish"`
	Chinese                   string `json:"chinese"`
	Website                   string `json:"websiteUrl"`
	OtherDetails              string `json:"otherDetails"`
	DateAdded                 string `json:"dateAdded"`
	Id                        int    `json:"id"`
}

func ReadCSV(data [][]string) []Provider {
	var providers []Provider
	for i, row := range data {
		var p Provider
		if i > 0 {
			p.Name = row[0]
			p.SanFranciscoCounty = row[1]
			p.AlamedaCounty = row[2]
			p.SanMateoCounty = row[3]
			p.ContraCostaCounty = row[4]
			p.SantaClaraCounty = row[5]
			p.County = row[6]
			p.Category = row[7]
			p.BlackOwned = row[8]
			p.LGBTQ = row[9]
			p.Women = row[10]
			p.WhoApplies = row[11]
			p.OrFewerEmployees = row[12]
			p.OrFewerEmployees1 = row[13]
			p.OrFewerEmployees2 = row[14]
			p.OrMore = row[15]
			p.TypeOfRelief = row[16]
			p.AwardType = row[17]
			p.AwardAmountSpecified = row[18]
			p.MaxAwardAmount = row[19]
			p.InterestRateApplicable = row[20]
			p.InterestRate = row[21]
			p.TypeOfSupport = row[22]
			p.PublicOrPrivate = row[23]
			p.TypeEntityOfferingSupport = row[24]
			p.NameOfEntity = row[25]
			p.IsThereADeadline = row[26]
			p.Deadline = row[27]
			p.English = row[28]
			p.Spanish = row[29]
			p.Chinese = row[30]
			p.Website = row[31]
			p.OtherDetails = row[32]
			p.DateAdded = row[33]
			p.Id = i
			providers = append(providers, p)
		}
	}
	return providers
}

func main() {
	p := ReadCSV("./path/to/file")
	j, err := json.MarshalIndent(p, "", " ")
	if err != nil {
		log.Fatal(err)
	}
	err = os.WriteFile("cleaned.json", j, 0666)
	if err != nil {
		log.Fatal(err)
	}

}
