import { projectFirestore } from "../config/firebaseConfig";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchTables = createAsyncThunk(
    'tables/get',
    async (arg, thunkAPI) => {
        const date = arg.date
        const time = arg.time.substr(0,2).trim()
        console.log("trying")
        try{
            console.log(time)
            const dateMap = await projectFirestore.collection('tables').doc(date).get()
            // await new Promise( resolve => setTimeout(resolve,1000))
            console.log(dateMap.data().booked[time])
            const data = dateMap.data()
            return data.booked[time.toString()]
        }
        catch (e) {
            console.error(e.toString())
            return []
        }
    },
)

const tableSlice = createSlice({
    name:'selectedTable',
    initialState:{occupied:[],selected:'',loading:true},
    reducers:{
        // selectTable(state,action){
        //     state.selected = action.payload
        // },
        selectTable:{
            reducer(state,action) {
                state.selected = action.payload.text
            },
            prepare(text){
                return {payload:{text,createdAt:new Date().toISOString()}}
            }
        }
    },
    extraReducers:{
        [fetchTables.fulfilled]:(state,action) => {
            return {...state,occupied:action.payload,loading:false}
        },
        [fetchTables.rejected]:(state,action) => {
            return {...state,occupied:[],loading:false}
        }
    }
})

const {actions,reducer} = tableSlice

export const {selectTable} = actions

export default reducer
