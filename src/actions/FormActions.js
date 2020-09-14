const {createAction} = require('@reduxjs/toolkit')
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

export {submitDetails,submitTable}