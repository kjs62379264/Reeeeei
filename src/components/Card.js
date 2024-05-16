import React from 'react'
import CardItem from './CardItem'
import './Card.css';

function Card() {
  return (
    <div className='cards'>
      <h1>아아아아아</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem 
              src = 'images/img-9.jpg'
              text = 'vhjbhvjh'
              label = 'Adventure'
              path = '/services'
            />
            <CardItem 
              src = 'images/img-2.jpg'
              text = 'vhjbhvjh'
              label = 'Adventure'
              path = '/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
