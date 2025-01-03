import { jwtDecode } from 'jwt-decode';
import React, { useContext, useEffect, useRef, useState } from 'react'
import Cookies from 'universal-cookie'
import { UserContext } from '../../context/userContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const Account = () => {
    const cookies = new Cookies(null, { path: '/' });
    const decoded = jwtDecode(cookies.get('x-auth-token'));
    const [endPoint, header] = useContext(UserContext);
    // const [data, setData] = useState();
    // const selectedData = data && data.find(item => item._id === decoded._id);
    const editNameRef = useRef();
    const editSnameRef = useRef();
    const editNumRef = useRef();
    const editEmailRef = useRef();
    const editPassRef = useRef();

    useEffect(() => {
        axios.get(`${endPoint}/user/${decoded._id}`, {
            headers: {
                'matrix-access': '3fa3afc2aa0e5e2c1c17ee83f4c8fc76',
                'x-auth-token': cookies.get('x-auth-token')
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

    const deleteSubmit = (e) => {
        axios.delete(`${endPoint}/user/${decoded._id}`,  {
            headers: {
                'matrix-access': '3fa3afc2aa0e5e2c1c17ee83f4c8fc76',
                'x-auth-token': cookies.get('x-auth-token')
            }
        })
            .then(res => {
                if (res.status === 200) {
                    console.log(res)
                    Swal.fire({
                        text: "Account deleted!",
                        icon: "success"
                    })
                } else {
                    Swal.fire({
                        text: "Account deleted!",
                        icon: "error"
                    })
                    
                }
            })
            .catch(err => console.log(err))
    }

    const updateSubmit = (e) => {
        e.preventDefault();
        axios.put(`${endPoint}/user/${decoded._id}`, {
            name: editNameRef.current.value,
            surname: editSnameRef.current.value,
            phone: editNumRef.current.value,
            email: editEmailRef.current.value,
            password: editPassRef.current.value
        }, {
            headers: {
                'matrix-access': '3fa3afc2aa0e5e2c1c17ee83f4c8fc76',
                'x-auth-token': cookies.get('x-auth-token')
            }
        })
            .then(res => {
                if (res.status === 200) {
                    console.log(res)
                    Swal.fire({
                        text: "Account updated!",
                        icon: "success"
                    })
                } else {
                    Swal.fire({
                        text: "Account deleted!",
                        icon: "error"
                    })
                    
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className='my-5'>Welcome to your dashboard {decoded.name}!</h1>
            <form onSubmit={updateSubmit} className='col-4'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" ref={editNameRef} defaultValue={decoded && decoded.name} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Surname</label>
                    <input type="text" className="form-control" ref={editSnameRef} defaultValue={decoded && decoded.surname} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="phone" className="form-control" ref={editNumRef} defaultValue={decoded && decoded.phone} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" className="form-control" ref={editEmailRef} defaultValue={decoded && decoded.email} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" ref={editPassRef} defaultValue={decoded && decoded.password} id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-dark">Update</button>
                <button type="submit" onClick={deleteSubmit} className="btn btn-danger mx-2">Delete Account</button>
            </form>
        </div>
    )
}

export default Account