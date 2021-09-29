
function modifyCsvStructure(csvData) {
    let arrangedCSVdata = {
        round_one_group: [],
        round_two_group: [],
        round_three_group: [],
        round_four_group: [],
        round_five_group: [],
        round_six_group: [],
        round_seven_group: [],
        round_eight_group: [],
        more_than_eight_rounds: []
    }
    let createNewCompanyObject = true
    let companyDataObject = {}

    for (let i = 1; i < csvData.length; i++) {
        let currentRound = csvData[i]
        let nextRound = csvData[i + 1]

        if (createNewCompanyObject) {
            //creating new data object for company.
            companyDataObject.name = currentRound.data[1];
            companyDataObject.established = currentRound.data[2];
            companyDataObject.numberOfRounds = 1;
            companyDataObject.totalRaised = currentRound.data[18];
            companyDataObject.CEO = currentRound.data[4];
            companyDataObject.description = currentRound.data[13];
            companyDataObject.subSector = currentRound.data[12];
            companyDataObject.employees = currentRound.data[3];
            companyDataObject.rounds = [{
                invesetment: currentRound.data[15],
                date: currentRound.data[0],
                leadInvestor: currentRound.data[5],
                investors: currentRound.data[6],
                IGR: "Need to be caculated"
            }];
            companyDataObject.companyValuation = currentRound.data[17]
            companyDataObject.fundingPaceScore = "Need to be caculated";
            companyDataObject.financeScore = "Need to be caculated";
            companyDataObject.CEOscore = currentRound.data[7];
            companyDataObject.leadScore = currentRound.data[8];
            companyDataObject.previousLeadScore = currentRound.data[9]
        }
        if (nextRound && currentRound.data[1] === nextRound.data[1]) {
            companyDataObject.numberOfRounds += 1;
            companyDataObject.rounds.push({
                invesetment: nextRound.data[15],
                date: nextRound.data[0],
                leadInvestor: nextRound.data[5],
                investors: nextRound.data[6],
                IGR: "Need to be caculated"
            })
            createNewCompanyObject = false
        } else {
            let orderedCompanyDataObject = arrangedRoundsByDates(companyDataObject)

            switch (orderedCompanyDataObject.numberOfRounds) {
                case 1:
                    arrangedCSVdata.round_one_group.push(orderedCompanyDataObject);
                    break;
                case 2:
                    arrangedCSVdata.round_two_group.push(orderedCompanyDataObject);
                    break;
                case 3:
                    arrangedCSVdata.round_three_group.push(orderedCompanyDataObject);
                    break;
                case 4:
                    arrangedCSVdata.round_four_group.push(orderedCompanyDataObject);
                    break;
                case 5:
                    arrangedCSVdata.round_five_group.push(orderedCompanyDataObject);
                    break;
                case 6:
                    arrangedCSVdata.round_six_group.push(orderedCompanyDataObject);
                    break;
                case 7:
                    arrangedCSVdata.round_seven_group.push(orderedCompanyDataObject);
                    break;
                case 8:
                    arrangedCSVdata.round_eight_group.push(orderedCompanyDataObject);
                    break;
                default:
                    arrangedCSVdata.more_than_eight_rounds.push(orderedCompanyDataObject)
            }
            companyDataObject = {}
            createNewCompanyObject = true
        }
    }

    return arrangedCSVdata;
}

const arrangedRoundsByDates = companyObject => {

    let rounds = companyObject.rounds;
    let roundsNewFormat = rounds.map(round => {
        const dateArray = round.date.split("/");
        const newDateFormat = new Date(dateArray[2], dateArray[1], dateArray[0])
        round.date = newDateFormat
        return round;
    })
    let roundsOrderedByDate = roundsNewFormat.sort((a, b) => a.date - b.date);

    let roundsWithSimpleDate = roundsOrderedByDate.map(round => {
        const simpleDate = round.date.toLocaleDateString('en-GB')
        round.date = simpleDate
        return round;
    })
    companyObject.rounds = roundsWithSimpleDate;
    return companyObject;
}

export default modifyCsvStructure;
