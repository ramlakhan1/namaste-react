import React from 'react';
import { CLOUDINARY_IMAGES_URL } from '../.parcel-cache/utility/Constants';

function RestrorentCard(props) {
  console.log(props.resData)
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={CLOUDINARY_IMAGES_URL.concat(props.resData.info.cloudinaryImageId)}
        alt={props.resData.info.name}
      />
      <div className="restaurant-info">
        <h3>{props.resData.info.name}</h3>
        <p className="cuisines">{props.resData.info.cuisines.join(", ")}</p>
        <p className="rating">{props.resData.info.avgRating} ★</p>
        <p className="delivery-time">{props.resData.info.sla.deliveryTime} mins</p>
      </div>
    </div>

  )
}


export default RestrorentCard
