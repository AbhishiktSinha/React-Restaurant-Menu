import React from 'react';

const ItemCard = ({title, category, price, img, desc})=>{
    return (
        <div className="item-card" data-test-id={`menu-item-${category}`}>
            <div className="image-container"><img src={img} alt="menu-item" /></div>

            <div className="details-container">
                <div className="header-primary-details">
                    <span className="title">{title}</span>
                    <span className="price">$ {price}</span>
                </div>

                <div className="description-container">{desc}</div>
            </div>
        </div>
    )
}
export default ItemCard;