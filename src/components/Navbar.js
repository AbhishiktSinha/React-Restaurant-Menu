import React, { useState } from "react";
import { itemCategories } from "../data/itemData";
import CategoryButton from "./CategoryButton";
import "../styles/Navbar.css"

const Navbar = ({setSearchCategory})=> {

    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
    const [markerStyle, setMarkerStyle] = useState({left: '8px', width: '40px'});
    

    function handleButtonClick(e) {
        setSearchCategory(e.target.getAttribute('data-category'));  

        const buttonIndex = e.target.id.slice(-1);
        setSelectedButtonIndex(Number(buttonIndex));

        const button = e.target;    
        
        setMarkerStyle({left : `${button.offsetLeft}px`, width: `${button.clientWidth}px`})     
    }
    return (
        <nav>
            <div className="page-title-container">
                <h1 className="page-title">Our Menu</h1>
                <div className="underline"></div>
            </div>

            <div className="category-buttons-container">
                {
                    itemCategories.map((category, index)=>{
                        return <CategoryButton 
                            key={`${category}-button`}
                            id={`filter-btn-${index}`}
                            category={category}     
                            onClickHandler = {handleButtonClick}
                            selected = {(index===selectedButtonIndex)? true : false}
                        />
                    })
                }
                <div className="marker" style={markerStyle}></div>
            </div>
        </nav>
    )
}

export default Navbar;