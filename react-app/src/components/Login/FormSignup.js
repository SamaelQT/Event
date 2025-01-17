import React from 'react'
import styled from 'styled-components';
import UseForm from './UseForm';
import validate from './validateInfo'
import { Link } from 'react-router-dom';
const FormSignup = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = UseForm(submitForm, validate);

    return (
        <FormContentRight>
            <Form>
                <h1>Đăng ký</h1>
                <FormInputs>
                    <FormLabel htmlFor='username'>
                        Tên tài khoản
                    </FormLabel>
                    <FormInput
                        id='username'
                        type='text'
                        name='username'
                        placeholder='Nhập tên tài khoản'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </FormInputs>
                <FormInputs>
                    <FormLabel htmlFor='email'>
                        Email
                    </FormLabel>
                    <FormInput
                        id='email'
                        type='email'
                        name='email'
                        placeholder='Nhập email của bạn'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </FormInputs>
                <FormInputs>
                    <FormLabel htmlFor='password'>
                        Mật khẩu
                    </FormLabel>
                    <FormInput
                        id='password'
                        type='password'
                        name='password'
                        placeholder='Nhập mật khẩu'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </FormInputs>
                <FormInputs>
                    <FormLabel htmlFor='password2'>
                        Xác nhận mật khẩu
                    </FormLabel>
                    <FormInput
                        id='password2'
                        type='password'
                        name='password2'
                        placeholder='Nhập lại mật khẩu'
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </FormInputs>
                <FormInputButton
                    onClick={handleSubmit}
                >
                    Đăng ký
                </FormInputButton>
                <FormInputLogin>
                    Bạn đã có tài khoản ?
                    <Link to ="/">Đăng nhập</Link>
                </FormInputLogin>
            </Form>
        </FormContentRight>
    )
}

const FormContentRight = styled.div`
    border-radius: 0 10px 10px 0;
    position: relative;
    background: #fff;
`;

const Form = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1{
        font-size: 2rem;
        text-align: start;
        width: 80%;
        margin-bottom: 1rem;
        color: #000000;
    }
`;

const FormInputs = styled.div`
    margin-bottom: 0.5rem;
    width: 80%;

    & p {
        color: red;        
    }
`;

const FormLabel = styled.label`
display: inline-block;
font-size: 0.8rem;
margin-bottom: 6px;
color: #000000;
`;

const FormInput = styled.input`
padding-left: 10px;
outline: none;
border-radius: 2px;
height: 40px;
width: 100%;
border-top-style:none;
border-right-style:none;
border-left-style:none;
border-bottom-style: 2px solid black;
   
&:placeholder{
    color: #595959;
    font-size: 12px;
}
`;

const FormInputButton = styled.button`
width: 350px;
height: 40px;
margin-top: 10px;
border-radius: 32px;
background-color:#1C2A3A;
outline: none;
border: none;
color: #fff;
font-size: 1rem;

&:hover{
    cursor: pointer;
}`;

const FormInputLogin = styled.span`
font-size: 0.8rem;
margin-top: 10px;
color: #000000;
width: 80%;
text-align: center;

& a{
    text-decoration: none;
    color: #1C2A3A;
    font-weight: 600;
    cursor: pointer;
}
`;


export default FormSignup
