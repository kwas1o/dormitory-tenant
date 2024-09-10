import React, { useState, useEffect } from "react";
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
  const [billsData, setBillsData] = useState([]); // State to hold JSON data
  const [userData, setUserData] = useState([]); // State to hold JSON data
  const [selectedBill, setSelectedBill] = useState(null); // State to hold the selected bill for payment

  // Fetch the JSON file on component mount
  useEffect(() => {
    fetch("http://localhost:3000/getBills") // Replace with your JSON file path
      .then((response) => response.json())
      .then((data) => setBillsData(data)) // Save JSON data in state
      .catch((error) => console.error("Error loading JSON:", error));

    fetch("http://localhost:3000/getUser") // Replace with your JSON file path
      .then((response) => response.json())
      .then((data) => setUserData(data)) // Save JSON data in state
      .catch((error) => console.error("Error loading JSON:", error));
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

  const selectedBillDetails = billsData.find(
    (bill) => bill.id === selectedBillId
  );

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
            <Link className="h-to-allbills-link" to="/all-bills">
              ดูทั้งหมด...
            </Link>
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
                <Link className="h-to-payment" onClick={handlePaymentClick}>
                  ชำระเงิน
                </Link>
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
