const initialState = {
    csvData: [],
    error: ""
}

const csvReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'STORE_CSV_DATA':
            return {
                ...state,
                csvData: actions.payload
            }
        case 'CSV_DATA_FAILURE':
            return {
                ...state,
                error: actions.error
            }
        default:
            return state;
    }
}

export default csvReducer;