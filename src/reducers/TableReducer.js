const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchTables = createAsyncThunk(
    'tables/get',
    async () => {
        await new Promise( resolve => setTimeout(resolve,1000))
        return [6]
    }
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
        [fetchTables.rejected]:(state,action) => {}
    }
})

const {actions,reducer} = tableSlice

export const {selectTable} = actions

export default reducer
