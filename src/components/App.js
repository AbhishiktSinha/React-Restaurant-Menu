import React, { useState } from 'react';
import Navbar from './Navbar';
import DisplaySection from './DisplaySection';

const App = ()=> {
    const [searchCategory, setSearchCategory] = useState('all');

    return (
        <div className="main-container" id="main">

            <Navbar setSearchCategory={setSearchCategory}></Navbar>
            <DisplaySection searchCategory={searchCategory}></DisplaySection>
            
        </div>
    )
}

export default App;