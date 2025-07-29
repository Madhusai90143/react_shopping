import React from 'react'


export const WomanCollection = (props) => {
    const {title,image1,image2,image3,image4,image5,image6} = props.ladiesFashion

  return (
    <div>
        
        <div className='collectionSection'>
            <h2>{title}</h2>
            <div className='LadiesBanner'>
            <img src='assets/LadiesBanner.gif' alt=""/>
            
       
        <div className='collectionImages'>
            <img src={image1} alt={title} />
            <img src={image2} alt={title} />
            <img src={image3} alt={title} />
            <img src={image4} alt={title} />
            <img src={image5} alt={title} />
            <img src={image6} alt={title} />
        </div>
    </div>
    </div>
    </div>
  )
}

export default WomanCollection