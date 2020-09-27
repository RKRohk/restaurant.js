import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./booktable.css";
import { bookTable, fetchTables, selectTable } from "../reducers/TableReducer";
import { submitTable } from "../actions/FormActions";

const initTables = [
    { tablenumber: 1, capacity: 5 },
    { tablenumber: 2, capacity: 6 },
    { tablenumber: 3, capacity: 4 },
    { tablenumber: 4, capacity: 2 },
    { tablenumber: 5, capacity: 5 },
    { tablenumber: 6, capacity: 6 },
    { tablenumber: 7, capacity: 1 }
];
const SelectTable = () => {
    const dispatch = useDispatch();
    const occupied = useSelector((state) => state.tables.occupied) || [];
    const loading = useSelector((state) => state.tables.loading);
    const date = useSelector((state) => state.formdata.text.date);
    const time = useSelector(state => state.formdata.text.time);
    const tables = initTables.filter(
        (table) => !occupied.find(item => item.tablenumber == table.tablenumber)
    );
    const formik = useFormik({
        initialValues: {
            tablenumber: undefined,
            capacity: 0
        },
        onSelect: (values) => {
            console.log(values);
        },
        onSubmit: (values) => {
            console.log(values);
            alert(values);
            //Select the table
            dispatch(selectTable(values));

            //Move to the next page
            dispatch(bookTable({date,time,table:values,occupied:[...occupied]}))
            dispatch(submitTable());
        }
    });

    useEffect(() => {
        dispatch(fetchTables({ date, time }));
    }, [dispatch]);

    return (
        <div className="formbg">
            {loading ? (
                <Spinner animation="grow" variant="info" />
            ) : (
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Label>Select Your Table</Form.Label>
                    {tables.map((table) => (
                        <Form.Check
                            sm={2}
                            md={4}
                            type="radio"
                            name="tablenumber"
                            value={formik.tablenumber}
                            onChange={() =>
                                formik.setFieldValue(
                                    "tablenumber",
                                    table.tablenumber
                                )
                            }
                            key={table.tablenumber}
                            label={table.tablenumber}
                        />
                    ))}
                    <Button type="submit">Next</Button>
                </Form>
            )}
        </div>
    );
};

export default SelectTable;
