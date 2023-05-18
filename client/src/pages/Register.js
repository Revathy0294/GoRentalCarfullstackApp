import React from 'react'
import {Row , Col , Form , Input} from 'antd'
import { Link } from "react-router-dom";
import {useDispatch , useSelector} from 'react-redux'
import { userRegister } from "../redux/actions/userActions";
// import DefaultLayout from '../components/DefaultLayout'

function Register() {
      
    const dispatch = useDispatch()

    function onFinish(values) {
         dispatch(userRegister(values))
        console.log(values)
 }

return (
    <div className='login'>
        <Row gutter={16} className='d-flex align-items-center' >


            <Col lg={16} style= {{position: 'relative'}}>
            <img 
                    // className='w-100'
                    // data-aos='slide-right'
                    // data-aos-duration='1500'
                    src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"/>
                       <h1 className='login-logo'>GoRental</h1>
            </Col>
            <Col lg={8} className='text-left p-5'>
            <Form layout='vertical' className='login-form p-5' onFinish={onFinish} >
                <h1>Register</h1>
                <Form.Item name='username' label='Username' rules={[{required: true}]}>
                    <Input></Input>
                </Form.Item>
                <Form.Item name='password' label='Password' rules={[{required: true}]}>
                             <Input type='password'/>
                         </Form.Item>
                <Form.Item name='cpassword' label='Confirm Password' rules={[{required: true}]}>
                             <Input type='password'/>
                         </Form.Item>
                         <button className='btn1 mt-2 mb-3'>Register</button>
                         <br />

                         <Link to="/login">Click Here to Login</Link>

            </Form>
            
            </Col>
        </Row>
         

    </div>
)





}
export  default Register;