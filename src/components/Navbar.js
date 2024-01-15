import React, { useState } from "react";
import { itemCategories } from "../data/itemData";
import CategoryButton from "./CategoryButton";

const Navbar = ({setSearchCategory})=> {

    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

    function handleButtonClick(e) {
        setSearchCategory(e.target.getAttribute('data-category'));  

        buttonIndex = e.target.id.slice(-1);
        setSelectedButtonIndex(Number(buttonIndex));
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
                            id={`category_button_${index}`}
                            category={category}     
                            onClickHandler = {handleButtonClick}
                            selected = {(index===selectedButtonIndex)? true : false}
                        />
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar;