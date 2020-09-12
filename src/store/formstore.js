import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import logger from 'redux-logger'

import formReducer from '../reducers/formreducer'

const middleware = [...getDefaultMiddleware(),logger]

const preloadedState = {
    formdata:{},
    visible:"FORM_SCREEN"
}

const store = configureStore({
    reducer:formReducer,
    middleware,
    preloadedState,
})

export default store