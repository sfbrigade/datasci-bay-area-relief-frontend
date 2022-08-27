import csv
import json


def formatMoney(money: str) -> int:
    temp = money.strip('$')
    temp = temp.replace(',', '')
    if temp != '':
        return int(temp)
    return 0


def formatInterestRate(interest: str) -> float:
    if interest != '':
        return float(interest)
    return 0.0


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
            if id == 0:
                continue
            idk = {
                "name": row[0],
                "sfCounty": row[1],
                "alamedaCounty": row[2],
                "sanMateoCounty": row[3],
                "contraCostaCounty": row[4],
                "santaClaraCounty": row[5],
                "county": row[6],
                "category": row[7],
                "blackOwned": row[8],
                "lgbtq": row[9],
                "womenOwned": row[10],
                "nonProfit": row[11],
                "lte100": row[12],
                "lte500": row[13],
                "lte750": row[14],
                "gt750": row[15],
                "reliefType": row[16],
                "awardType": row[17],
                "awardAmountSpecified": row[18],
                "maxAwardAmount": formatMoney(row[19]),
                "interestRateApplicable": row[20],
                "interestRate": formatInterestRate(row[21]),
                "supportType": row[22],
                "sectorType": row[23],
                "supportedEntity": row[24],
                "entityName": row[25],
                "deadlineApplicable": row[26],
                "deadline": row[27],
                "additionalStage": row[28],
                "english": row[29],
                "spanish": row[30],
                "chinese": row[31],
                "websiteUrl": row[32],
                "description": row[33],
                "dateAdded": row[34],
                "expired": row[39],
                "archived": row[40],
                "id": id,
            }
            data['results'].append(idk)
    csvf.close()

    jsonObj = json.dumps(data, indent=2)
    with open(jsonPath, 'w') as jsonf:
        jsonf.write(jsonObj)
