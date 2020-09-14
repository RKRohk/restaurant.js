import {useFormik } from "formik";
import React from "react";
import {useDispatch} from 'react-redux'
import { Button, Col, Form } from "react-bootstrap";

import {submitDetails} from '../reducers/FormReducer'

import './booktable.css'


const BookTableForm = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            date:"",
            time:""
        },

        onSubmit: (values) => {
            console.log(values);
            alert(JSON.stringify(values));
            dispatch(submitDetails(values))
        },
    });

    const today = new Date()

    const t = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`

    console.log(t)

    
    return (
        <Form className="formbg" onSubmit={formik.handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} sm="12" md="4">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} sm="12" md="4">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} sm="12" md="4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} sm="12" md="4">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} sm="12" md="4">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        name="date"
                        type="date"
                        min={t}
                        value={formik.values.date}
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} sm="12" md="4">
                    <Form.Label>Date</Form.Label>
                    <Form.Control as="select"
                        name="time"
                        type="time"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                    >
                        {["11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"].map( i => <option key={i}>{i}</option>)}
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Button type="submit">Submit Form</Button>
        </Form>
    );
};

export default BookTableForm
