import React from 'react'
import { useSelector } from 'react-redux'
import BookTableForm from './booktableform'
import SelectTable from './SelectTable'


const BookTable = () => {
    const screen = useSelector(state => state.visible)

    switch(screen){
        case "FORM_SCREEN": return <BookTableForm />
        case "SELECT_TABLE": return <SelectTable/>
        case "SUBMIT": return <div style={{color:"white"}}>Thenks for booking your table</div>
        default: return <BookTableForm />
    }
}

export default BookTable