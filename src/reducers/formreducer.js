const { createAction, createReducer } = require("@reduxjs/toolkit");

const submitDetails = createAction('form/submitdetails',text => ({payload:{
    text,
    createdAt: new Date().toISOString()
}}))


const formReducer = createReducer({},{
    [submitDetails]:(state,action) => {
        state.formdata = action.payload
        state.visible = "SELECT_TABLE"
    }
})

export {submitDetails}

export default formReducer