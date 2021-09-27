export const storeCSVdata = (data) => {
    return {
        type: 'STORE_CSV_DATA',
        payload: data
    }
}

export const csvDataFailure = (error) => {
    return {
        type: 'CSV_DATA_FAILURE',
        error
    }
}