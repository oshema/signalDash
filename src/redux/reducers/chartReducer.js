const initialState = {
    roundGroupData: [],
}

const chartReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'LOAD_GROUP_CHART':
            return {
                ...state,
                roundGroupData: actions.payload
            }
        default:
            return state;
    }
}

export default chartReducer;