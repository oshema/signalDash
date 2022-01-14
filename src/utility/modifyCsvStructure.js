
function modifyCsvStructure(csvData) {
    let arrangedCSVdata = [
        { round_one_group: [], id: "1" },
        { round_two_group: [], id: "2" },
        { round_three_group: [], id: "3" },
        { round_four_group: [], id: "4" },
        { round_five_group: [], id: "5" },
        { round_six_group: [], id: "6" },
        { round_seven_group: [], id: "7" },
        { round_eight_group: [], id: "8" },
        { more_than_eight_rounds: [], id: "+" }
    ]
    let createNewCompanyObject = true
    let companyDataObject = {}
    for (let i = 1; i < csvData.length - 1; i++) {
        let currentRound = csvData[i]
        let nextRound = csvData[i + 1]
        if (createNewCompanyObject) {
            //creating new data object for company.
            companyDataObject.name = currentRound.data[0];
            companyDataObject.established = currentRound.data[6];
            companyDataObject.numberOfRounds = 1;
            companyDataObject.totalRaised = currentRound.data[7];
            companyDataObject.CEO = currentRound.data[15];
            companyDataObject.description = currentRound.data[2];
            companyDataObject.subSector = currentRound.data[3];
            companyDataObject.employees = currentRound.data[5];
            companyDataObject.rounds = [{
                roundNumber: "",
                investment: currentRound.data[12],
                date: currentRound.data[9],
                leadInvestor: currentRound.data[14],
                investors: currentRound.data[13],
                leadScore: currentRound.data[17],
                previousLeadScore: 0,
            }];
            companyDataObject.companyValuation = "";
            companyDataObject.CEOscore = currentRound.data[16];
            companyDataObject.score = ""
        }
        if (nextRound && currentRound.data[0] === nextRound.data[0]) {
            companyDataObject.numberOfRounds += 1;
            companyDataObject.rounds.push({
                roundNumber: "",
                investment: nextRound.data[12],
                date: nextRound.data[9],
                leadInvestor: nextRound.data[14],
                investors: nextRound.data[13],
                leadScore: nextRound.data[17],
                previousLeadScore: currentRound.data[17], // Taking the lead score from previous round
                TSLI: "",
                IGR: "Need to be caculated",
                finance: 0,
            })
            createNewCompanyObject = false
        } else {
            let orderedCompanyDataObject = arrangedRoundsByDates(companyDataObject);
            caculateTSLI(orderedCompanyDataObject.rounds);
            caculateRoundMultiple(orderedCompanyDataObject.rounds)

            switch (orderedCompanyDataObject.numberOfRounds) {
                case 1:
                    arrangedCSVdata[0].round_one_group.push(orderedCompanyDataObject);
                    break;
                case 2:
                    arrangedCSVdata[1].round_two_group.push(orderedCompanyDataObject);
                    break;
                case 3:
                    arrangedCSVdata[2].round_three_group.push(orderedCompanyDataObject);
                    break;
                case 4:
                    arrangedCSVdata[3].round_four_group.push(orderedCompanyDataObject);
                    break;
                case 5:
                    arrangedCSVdata[4].round_five_group.push(orderedCompanyDataObject);
                    break;
                case 6:
                    arrangedCSVdata[5].round_six_group.push(orderedCompanyDataObject);
                    break;
                case 7:
                    arrangedCSVdata[6].round_seven_group.push(orderedCompanyDataObject);
                    break;
                case 8:
                    arrangedCSVdata[7].round_eight_group.push(orderedCompanyDataObject);
                    break;
                default:
                    arrangedCSVdata[8].more_than_eight_rounds.push(orderedCompanyDataObject)
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

    companyObject.rounds = roundsOrderedByDate;

    for (let i = 0; i < companyObject.rounds.length; i++) {
        let simpleDate = companyObject.rounds[i].date.toLocaleDateString('en-GB')
        companyObject.rounds[i].date = simpleDate;
        companyObject.rounds[i].roundNumber = i + 1
    }
    return companyObject;
}

const caculateTSLI = (rounds) => {
    for (let i = 1; i < rounds.length; i++) {
        let currentRoundDateArray = rounds[i].date.split("/");
        let previousRoundDateArray = rounds[i - 1].date.split("/");
        let months = (currentRoundDateArray[2] - previousRoundDateArray[2]) * 12;
        months -= Number(previousRoundDateArray[1]);
        months += Number(currentRoundDateArray[1])
        rounds[i].TSLI = months;
    }
}

const caculateRoundMultiple = (rounds) => {
    for (let i = 1; i < rounds.length; i++) {
        let currentRoundInvestment = rounds[i].investment
        let previousRoundInvestment = rounds[i - 1].investment
        let multiplier = (currentRoundInvestment / previousRoundInvestment)
        rounds[i].multiplier = Math.round(multiplier * 100) / 100;
    }
}


export default modifyCsvStructure;
