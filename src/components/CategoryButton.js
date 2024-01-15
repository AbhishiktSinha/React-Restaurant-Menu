import React from 'react';

const CategoryButton = ({id, category, onClickHandler, selected})=> {
    return (
        <button id={id}
            onClick={onClickHandler}
            data-category={category}
            className={`category-button ${selected?'selected':''}`}>
                {category}
            </button>
    )
}
export default CategoryButton;