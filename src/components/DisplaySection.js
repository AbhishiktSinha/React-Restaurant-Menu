import React from 'react';
import {filterItems} from '../data/itemData.js';
import ItemCard from './ItemCard.js';

const DisplaySection = ({searchCategory})=>{

    const itemResults = filterItems(searchCategory);

    return (
        <div className="display-cards-section">

            {
                itemResults.map((itemDetails)=>{
                    return <ItemCard
                        key={`${itemDetails.title}#${itemDetails.id}`}
                        title={itemDetails.title}
                        category = {itemDetails.category}
                        price = {itemDetails.price}
                        img = {itemDetails.img}
                        desc = {itemDetails.desc}
                    />
                })
            }
        </div>
    )
}
export default DisplaySection;