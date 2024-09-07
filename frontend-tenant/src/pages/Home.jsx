import React, { useState } from "react";
import Sidebar from "../componants/sidebar/sidebar";
import "../css/home.css";
import BillsItem from "../componants/item/billsitem";
import { Link } from "react-router-dom";
import BillsDetail from "../componants/itemdetail/billsdetail";
import Modal from "../componants/modal/modal"; // Import Modal component
import PaymentDetail from "../componants/payment/paymentdetail";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePaymentClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="home-container">
      <div className="h-sidebar">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="h-main-content">
        <div className="h-mt-content">
          <p className="h-hello-mes">สวัสดี</p>
          <p className="h-username">คุณ วรรธนะ เสี้ยมแหลม</p>
        </div>
        <div className="h-mbt-content">
          <div className="h-mbtl-content">
            <div className="h-text-header-l">
              <p className="h-bill-label">ใบแจ้งหนี้</p>
              <p className="h-years-label">ปี 2567</p>
            </div>
            <div className="h-bills-list">
              <BillsItem />
              <BillsItem />
              <BillsItem />
              <BillsItem />
              <BillsItem />
            </div>
            <Link className="h-to-allbills-link" to="/all-bills">
              ดูทั้งหมด...
            </Link>
          </div>
          <div className="h-mbtr-content">
            <div className="h-text-header-r">
              <p className="h-detail-label">รายละเอียด</p>
              <Link className="h-to-pdf" to="/all-bills">
                PDF
              </Link>
            </div>
            <div className="h-bills-detail">
              <BillsDetail />
              <Link className="h-to-payment" onClick={handlePaymentClick}>
                ชำระเงิน
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for payment */}
      <Modal show={showModal} handleClose={handleCloseModal}>
        <PaymentDetail />
      </Modal>
    </div>
  );
};

export default Home;
