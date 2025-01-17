import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import logger from 'redux-logger'

import formReducer from '../reducers/formReducer'
import fragmentReducer from '../reducers/FragmentReducer'
import tableReducer from '../reducers/TableReducer'

const middleware = [...getDefaultMiddleware(),logger]

const preloadedState = {
    formdata:undefined,
    visible:"FORM_SCREEN"
}


const store = configureStore({
    reducer:{
        formdata:formReducer,
        tables:tableReducer,
        visible:fragmentReducer
    },
    middleware,
    preloadedState,
})

export default store