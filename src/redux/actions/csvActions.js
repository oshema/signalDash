import modifyCsvStructure from '../../utility/modifyCsvStructure';


export const storeCSVdata = (data) => {
    let modifiedDataStructure = modifyCsvStructure(data)
    return {
        type: 'STORE_CSV_DATA',
        payload: modifiedDataStructure
    }
}

export const csvDataFailure = (error) => {
    return {
        type: 'CSV_DATA_FAILURE',
        error
    }
}