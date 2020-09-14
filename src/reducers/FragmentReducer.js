const { createReducer } = require("@reduxjs/toolkit");
const { submitDetails, submitTable } = require("../actions/FormActions");


const fragmentReducer = createReducer('FORM_SCREEN',{
    [submitDetails]:(state,action) => 'SELECT_TABLE',
    [submitTable]:(state,action) => 'SUBMIT'
})

export default fragmentReducer