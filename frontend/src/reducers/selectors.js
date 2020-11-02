
export const allBusiness = function (business) {
    let arr = [];
    business.forEach(bus => {
        arr.push([bus.id, bus.name]);
    });
    return arr;
};

export const findStopId = (lat, lng, stops) => {
    let stopId;
    let stopName;
    for (let i = 0; i < stops.length - 1; i++) {
        if (stops[i].lat === lat && stops[i].lng === lng) {
            stopId = stops[i]._id;
            stopName = stops[i].name;
            break;
        }
    }
    return [stopId, stopName];
};

export const findComment = (state, id) => {
    let index;
    let newState = Object.values(state)
    for (let i = 0; i < newState.length; i++) {
        const comment = newState[i];
        if (comment._id === id) {
            index = i;
            break;
        }
    }
    return index;
}