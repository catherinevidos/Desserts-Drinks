
export const allBusiness = function (business) {
    let arr = [];
    business.forEach(bus => {
        arr.push([bus.id, bus.name]);
    });
    return arr;
};

export const findStopId = (lat, lng, stops) => {
    let stopId;
    for (let i = 0; i < stops.length - 1; i++) {
        if (stops[i].lat === lat && stops[i].lng === lng) {
            stopId = stops[i]._id;
            return stopId;
        }
    }
    return stopId;
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