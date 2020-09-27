import { bookTable } from "./TableReducer";

const { createReducer } = require("@reduxjs/toolkit");
const { submitDetails } = require("../actions/FormActions");


const fragmentReducer = createReducer('FORM_SCREEN',{
    [submitDetails]:(state,action) => 'SELECT_TABLE',
    [bookTable.fulfilled]:(state,action) => 'SUBMIT'
})

export default fragmentReducer