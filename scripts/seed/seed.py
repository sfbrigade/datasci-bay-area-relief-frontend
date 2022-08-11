import csv
import json


def csvToJson(csvPath: str, jsonPath: str) -> None:
    """
    Maps csv  to json
    :param csvPath: relative path to existing csv i.e. 'example/raw_data.csv'
    :param jsonPath: relative path to new json i.e. 'example/clean.json'
    :return: void
    """
    data = {'results': []}

    with open(csvPath, encoding='utf-8') as csvf:
        csvReader = csv.reader(csvf, delimiter=',')

        for id, row in enumerate(csvReader):
            idk = {
                "Name": row[0],
                "SanFranciscoCounty": row[1],
                "AlamedaCounty": row[2],
                "SanMateoCounty": row[3],
                "ContraCostaCounty": row[4],
                "SantaClaraCounty": row[5],
                "County": row[6],
                "Category": row[7],
                "BlackOwned": row[8],
                "LGBTQ": row[9],
                "Women": row[10],
                "WhoApplies": row[11],
                "100OrFewerEmployees": row[12],
                "500OrFewerEmployees": row[13],
                "750OrFewerEmployees": row[14],
                "750OrMore": row[15],
                "TypeOfRelief": row[16],
                "AwardType": row[17],
                "AwardAmountSpecified": row[18],
                "MaxAwardAmount": row[19],
                "InterestRateApplicable": row[20],
                "InterestRate": row[21],
                "TypeOfSupport": row[22],
                "PublicOrPrivate": row[23],
                "TypeEntityOfferingSupport": row[24],
                "NameOfEntity": row[25],
                "IsThereADeadline": row[26],
                "Deadline": row[27],
                "English": row[28],
                "Spanish": row[29],
                "Chinese": row[30],
                "Website": row[31],
                "OtherDetails": row[32],
                "DateAdded": row[33],
                "id": id,
            }
            data['results'].append(idk)
    csvf.close()

    jsonObj = json.dumps(data, indent=2)
    with open(jsonPath, 'w') as jsonf:
        jsonf.write(jsonObj)
