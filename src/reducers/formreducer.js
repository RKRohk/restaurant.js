const { createReducer } = require("@reduxjs/toolkit");

const {submitDetails,submitTable} = require('../actions/FormActions')

const formReducer = createReducer(
    {},
    {
        [submitDetails]: (state, action) => {
            return action.payload;
        },
        [submitTable]:(state,action) => {
            state.selectedTable = action.payload;
        }
    }
);

export { submitDetails,submitTable };

export default formReducer;
