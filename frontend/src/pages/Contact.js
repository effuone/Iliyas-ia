import React from 'react'
import { Container } from 'react-bootstrap'

function Contact() {
    return (
        <Container style={{ marginBottom: '10rem' }}>
            <h3 className='mt-5 fw-bold mb-3'>Our contacts</h3>
            <div className='shadow rounded-3 p-4'>
                <h4 className='lead fw-normal mb-4'>Contact methods</h4>
                <p className='lead'>Phone: +7 111 111 11 11</p>
                <p className='lead'>Email: emailik@gmail.com</p>
            </div>
        </Container>
    )
}

export default Contact