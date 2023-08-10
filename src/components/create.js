import React from "react";
import {Form,Checkbox,Button} from 'semantic-ui-react'
export default function Create()
{
    return(<div>
        <h1>Create Page</h1>
        <div className="card mb-5 mb-lg-0">
            <div className="card-body">
            <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
            </div>
        </div>
        
        
   
    </div>)
}