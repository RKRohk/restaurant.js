import { projectFirestore } from "../config/firebaseConfig";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchTables = createAsyncThunk(
    "tables/get",
    async (arg, thunkAPI) => {
        const date = arg.date;
        const time = arg.time.substr(0, 2).trim();
        try {
            const dateMap = await projectFirestore.collection("tables").doc(date).get();
            console.log(dateMap.data().booked[time]);
            const data = dateMap.data();
            return data.booked[time.toString()];
        } catch (e) {
            console.error(e.toString());
            return [];
        }
    }
);

export const bookTable = createAsyncThunk(
    "bookTable",
    async (arg, ThunkAPI) => {
        const date = arg.date;
        let time = arg.time.substr(0, 2).trim();
        const table = arg.table;
        const occupied = arg.occupied || []

        //This is how the structure should look on firebase.
        //The keys here are the times
        const payload = {booked:{
                "12":[],
                "1":[],
                "2":[],
                "3":[],
                "4":[],
                "5":[]
            }};
        console.log(payload)
        try {
            console.log("Requesting")
            console.log(payload)
            //Checks if there are no reservations. If there are no reservations then we create new document
            if(!occupied.length){
                payload.booked[time] = [table];
                await projectFirestore.collection("tables").doc(date).set(payload, { merge: true });
            }
            //Else we update existing document
            else{
                //We add new table to list of occupied tables
                occupied.push(table)
                payload.booked[time] = occupied
                //And we push
                await projectFirestore.collection("tables").doc(date).update(payload);
            }
        } catch (e) {
            console.error(e);
            throw(Error("Book Table Error"));
        }
    }
);

const tableSlice = createSlice({
    name: "selectedTable",
    initialState: { occupied: [], selected: "", loading: true },
    reducers: {
        selectTable: {
            reducer(state, action) {
                state.selected = action.payload.text;
            },
            prepare(text) {
                return { payload: { text, createdAt: new Date().toISOString() } };
            }
        }
    },
    extraReducers: {
        [fetchTables.fulfilled]: (state, action) => {
            return { ...state, occupied: action.payload, loading: false };
        },
        [fetchTables.rejected]: (state, action) => {
            return { ...state, occupied: [], loading: false };
        },
        [bookTable.pending]:(state,action) => {
            state.loading = true;
        },
        [bookTable.fulfilled]: (state,action) => {
            state.loading = false;
        }
    }
});

const { actions, reducer } = tableSlice;

export const { selectTable } = actions;

export default reducer;
