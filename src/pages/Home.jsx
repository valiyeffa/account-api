import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='container'>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">Hello!</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <NavLink to='/acc' type="button" className="btn btn-outline-dark btn-lg px-4 gap-3">Get Your Account</NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home