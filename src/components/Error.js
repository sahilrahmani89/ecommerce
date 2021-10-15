import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function Error() {
    return (
        <div className='container my-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-12 align-item-center text-center'>
                    <h1 className='text-danger fs-80'>Oops Error 404</h1>
                </div>
            </div>
            <div className='row justify-content-center my-3'>
                <div className='col-lg-4 col-12 align-item-center text-center'>
                   <Link to ='/' className='btn btn-info'>Back To Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Error