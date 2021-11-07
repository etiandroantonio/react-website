import React from 'react'
import './Card.css'


function Card() {
    return (
        <main className="card" id='card'>
            <h1>Serviço</h1>
            <div className="card__container">
                <div className="card__images">
                    <img src="/images/img-1.jpg" alt="" />
                </div>
                <div className="card__images">
                    <img src="/images/img-2.jpg" alt="" />
                </div>
                <div className="card__images">
                    <img src="/images/img-1.jpg" alt="" />
                </div>
                <div className="card__images">
                    <img src="/images/img-5.jpg" alt="" />
                </div>
            </div>
            

            
        </main>
    )
}



export default Card

