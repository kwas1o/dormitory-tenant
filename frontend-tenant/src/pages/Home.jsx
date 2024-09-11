import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "../componants/sidebar/sidebar";
import "../css/home.css";
import BillsItem from "../componants/item/billsitem";
import { Link } from "react-router-dom";
import BillsDetail from "../componants/itemdetail/billsdetail";
import Modal from "../componants/modal/modal";
import PaymentDetail from "../componants/payment/paymentdetail";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBillId, setSelectedBillId] = useState(null);
  const [billsData, setBillsData] = useState([]); 
  const [userData, setUserData] = useState([]); 
  const [selectedBill, setSelectedBill] = useState(null); 

  useEffect(() => {

    localStorage.setItem('userKey', 'wasik0lv'); 
    const token = localStorage.getItem('userKey'); 
    
    const fetchUserBills = async () => {
      
      try {
        const response = await axios.get('http://localhost:3000/getBills', {
          headers: {
            'Authorization': `Bearer ${token}` // ส่งคีย์ไปยืนยันตัวตน
          }
        });
        
        // Store the data in the component's state
        setBillsData(response.data.bill);
  

      } catch (error) {
        console.error('Failed to fetch data');
      }
    };

    const fetchUsername = async () => {
      
      try {
        const response = await axios.get('http://localhost:3000/getUser', {
          headers: {
            'Authorization': `Bearer ${token}` // ส่งคีย์ไปยืนยันตัวตน
          }
        });
        
        // Store the data in the component's state
        setUserData(response.data.username);
  

      } catch (error) {
        console.error('Failed to fetch data');
      }
    };




    fetchUserBills();
    fetchUsername();

  }, []);


  const handlePaymentClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBillClick = (billId) => {
    setSelectedBillId(billId); // Set the selected bill ID
    setSelectedBill(billsData.find((bill) => bill.id === billId)); // Set the selected bill details
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
          {userData.map((bill) => (
            <p className="h-username">คุณ {bill.tenant}</p>
          ))}
        </div>
        <div className="h-mbt-content">
          <div
            className={`${
              selectedBillId ? "h-mbtl-content-selected" : "h-mbtl-content"
            }`}
          >
            <div className="h-text-header-l">
              <p className="h-bill-label">ใบแจ้งหนี้</p>
              {userData.map((bill) => (
                <p className="h-years-label">ปี {bill.year}</p>
              ))}
            </div>
            <div className="h-bills-list">
              {billsData.map((bill) => (
                <BillsItem
                  key={bill.id}
                  bill={bill} // Pass bill data to BillsItem component
                  onClick={() => handleBillClick(bill.id)} // Handle click by bill id
                  isSelected={bill.id === selectedBillId} // Pass isSelected prop
                />
              ))}
            </div>
            <div className="h-to-allbills-link">
              <Link to="/bills">ดูทั้งหมด...
              </Link>
            </div>
          </div>

          {/* Display right section if a bill is selected */}
          {selectedBill && (
            <div className="h-mbtr-content">
              <div className="h-text-header-r">
                <p className="h-detail-label">รายละเอียด</p>
                <Link className="h-to-pdf" to="/all-bills">
                  PDF
                </Link>
              </div>
              <div className="h-bills-detail">
                <BillsDetail bill={selectedBill} />
                {selectedBill.status === "ค้างชำระ" && (
                  <Link className="h-to-payment" onClick={handlePaymentClick}>
                    ชำระเงิน
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal for payment */}
      <Modal show={showModal} handleClose={handleCloseModal}>
        <PaymentDetail bill={selectedBill} />{" "}
        {/* Pass the selected bill to PaymentDetail */}
      </Modal>
    </div>
  );
};

export default Home;
