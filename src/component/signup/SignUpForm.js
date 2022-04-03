import { useEffect, useState } from 'react';
import * as Yup from 'yup';//tác dụng để xác thực values của initialValues
import { useFormik } from 'formik';
import './signupform.css'

function SignUpForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmedPass, setConfirmedPass] = useState('')
    const [phone, setPhone] = useState('')

    //use Formik
    const formik = useFormik({
        //khởi tạo giá trị ban đầu cho formik
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmedPassword: '',
            phoneNumber: '',
        },
        //Tạo ra các điều kiện để form hoạt động
        validationSchema: Yup.object({
            name: Yup.string().required('Trống').min(6, 'Phải dài hơn 6 kí tự'),
            //required bắt lỗi để trống và in ra lỗi 'Required'
            email: Yup.string().required('Trống'),
            password: Yup.string().required('Trống').min(6, 'Phải dài hơn 6 kí tự'),
            confirmedPassword: Yup.string().required('Trống').oneOf([Yup.ref('password'), null], "Sai mật khẩu"),
            phoneNumber: Yup.string().required('Trống').matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Sai phone number'),
        }),

        onSubmit: (values) => {
            alert("Thành công")
            console.log(values)
        }
    })
    console.log('errors: ', formik.errors)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            pass,
            confirmedPass,
            phone,
        }
    }
    // useEffect(()=>{
    //     if(name.length < 4){
    //         console.log('Name is to short')
    //     }
    // },[name])




    return (
        <section>
            Sign Up
            <br/>
            <form
                className="infoform"
                //  onClick={handleSubmit}
                onSubmit={formik.handleSubmit}
            >
                <label >Name </label>
                <input
                    type="text"
                    id='name'
                    name='name'
                    placeholder="Enter name..."
                    // onChange={(e) => setName(e.target.value)}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && (
                    <p className='errorMsg'>{formik.errors.name}</p>
                )}
                <label >Email </label>
                <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder="Enter email..."
                    // onChange={(e) => setEmail(e.target.value)}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && (
                    <p className='errorMsg'>{formik.errors.name}</p>
                )}
                <label >Password </label>
                <input
                    type="text"
                    id='password'
                    name='password'
                    placeholder="Enter password..."
                    // onChange={(e) => setPass(e.target.value)}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                {formik.errors.password && (
                    <p className='errorMsg'>{formik.errors.password}</p>
                )}
                <label >Confirmed Password </label>
                <input
                    type="text"
                    id='confirmedPassword'
                    name='confirmedPassword'
                    placeholder="Enter Confirmed Password..."
                    // onChange={(e) => setConfirmedPass(e.target.value)}
                    value={formik.values.confirmedPassword}
                    onChange={formik.handleChange}
                />
                {formik.errors.confirmedPassword && (
                    <p className='errorMsg'>{formik.errors.confirmedPassword}</p>
                )}
                <label >Phone number</label>
                <input
                    type="text"
                    id='phoneNumber'
                    name='phoneNumber'
                    placeholder="Enter Phone Number..."
                    // onChange={(e) => setPhone(e.target.value)}
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                />
                {formik.errors.phoneNumber && (
                    <p className='errorMsg'>{formik.errors.phoneNumber}</p>
                )}
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default SignUpForm;