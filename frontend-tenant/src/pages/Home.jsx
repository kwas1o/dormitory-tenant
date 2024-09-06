import React from 'react';
import Sidebar from '../componants/sidebar/sidebar';

const Home = () => {
    return (
        <div>
            {/* Sidebar */}
            <div className="sidebar">
                <Sidebar />
            </div>

            {/* Main content */}
            <div className="main-content">
                {/* Main content goes here */}
            </div>
        </div>
    );
};

export default Home;
