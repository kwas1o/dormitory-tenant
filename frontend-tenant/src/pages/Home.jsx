import React from 'react';
import Sidebar from '../componants/sidebar/sidebar';
import '../css/home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="h-sidebar">
                <Sidebar />
            </div>

            {/* Main content */}
            <div className="h-main-content">
               <div className="h-mt-content">
                <p className='h-hello-mes'>สวัสดี</p>
                <p className='h-username'>คุณ วรรธนะ เสี้ยมแหลม</p>
               </div>
               <div className="h-mbt-content">
                <div className="h-mbtl-content">
                    <div className="h-text-header-l">
                        <p className='h-bill-label'>บิลล์ของฉัน</p>
                        <p className='h-years-label'>ปี 2567</p>
                    </div>
                </div>
                <div className="h-mbtr-content">
                <div className="h-text-header-r">
                        <p className='h-detail-label'>รายละเอียด</p>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Home;
