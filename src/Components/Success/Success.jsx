import React from 'react'
import Container from '../Layout/Container'
import { Link } from 'react-router'

const Success = () => {
    return (
        <div className='bg-black text-white flex items-center justify-center h-screen'>
            <Container>
                <div className='w-[500px] border border-white mx-auto py-[40px] px-5'>
                    <h1 className='font-heading font-semibold text-[30px] leading-[60px] text-primary border-b border-white'>Thanks for submitting form</h1>
                    <p className='font-body py-5'>Thank you for filling out the form correctly.

                        We will contact you as soon as possible.</p>
                        <Link to='/'  className='bg-primary text-white font-body py-2 px-[25px] rounded'>Go Back</Link>
                </div>
            </Container>
        </div>
    )
}

export default Success