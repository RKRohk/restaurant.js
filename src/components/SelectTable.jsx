import {useFormik } from 'formik'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import './booktable.css'
import {submitTable} from '../reducers/formreducer'

const tables = [
    {tablenumber:1,capacity:5},
    {tablenumber:2,capacity:6},
    {tablenumber:3,capacity:4},
    {tablenumber:4,capacity:2},
    {tablenumber:5,capacity:5},
    {tablenumber:6,capacity:6},
    {tablenumber:7,capacity:1}
]
const SelectTable = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues:{
            tablenumber:undefined,
            capacity:0
        },
        onSelect: values => {
            console.log(values)
        },
        onSubmit: values => {
            console.log(values)
            alert(values)
            dispatch(submitTable(values.tablenumber))
        }
    })

    
    return <div className="formbg">
        <Form onSubmit={formik.handleSubmit}>
            <Form.Label>Select Your Table</Form.Label>
            {tables.map( table => <Form.Check sm={2} md={4} type="radio" name="tablenumber" value={formik.tablenumber} onChange={() => formik.setFieldValue("tablenumber",table.tablenumber)} key={table.tablenumber} label={table.capacity}></Form.Check>)}
            <Button type="submit">Next</Button>
        </Form>
    </div>


}

export default SelectTable