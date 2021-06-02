import React from 'react'

const Review = ({name,image,location,testimonial,interaction}) => {
   
    return (
        <>
          <div className="review">
              <img src={image} alt={name} />
              <h3>{name}</h3>
              <div className="locasplit">
                  <p>{location}</p>
                  <p className="interaction">{interaction}</p>
              </div>
              <p>{testimonial}</p>
          </div> 
        </>
    )
}

export default Review
