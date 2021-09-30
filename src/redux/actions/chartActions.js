const loadGroupChart = (groupChartData) => {
    return {
        type: 'LOAD_GROUP_CHART',
        payload: groupChartData
    }
}

export default loadGroupChart;