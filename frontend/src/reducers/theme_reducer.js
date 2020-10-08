import { DESSERTS_THEME, DRINKS_THEME} from '../actions/theme_actions';

const initialState = {
    theme: 'Desserts'
};

const themesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DESSERTS_THEME:
            return {
                theme: "Desserts"
            };
        case DRINKS_THEME:
            return {
                theme: "Drinks"
            };
        default:
            return state;
    }
};

export default themesReducer;