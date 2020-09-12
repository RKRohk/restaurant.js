const { createAction, createReducer } = require("@reduxjs/toolkit");

const submitDetails = createAction("form/submitdetails", (text) => ({
    payload: {
        text,
        createdAt: new Date().toISOString(),
    },
}));

const submitTable = createAction("form/submittable",text => ({
    payload:{
        text,
        createdAt: new Date().toISOString()
    }
}))

const formReducer = createReducer(
    {},
    {
        [submitDetails]: (state, action) => {
            state.formdata = action.payload;
            state.visible = "SELECT_TABLE";
        },
        [submitTable]:(state,action) => {
            state.selectedTable = action.payload;
            state.visible = "SUBMIT";
        }
    }
);

export { submitDetails,submitTable };

export default formReducer;
