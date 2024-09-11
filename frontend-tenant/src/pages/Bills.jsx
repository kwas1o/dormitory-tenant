import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../componants/sidebar/sidebar";
import "../css/bills.css";
import BillsItem from "../componants/item/billsitem";
import { Link } from "react-router-dom";
import BillsDetail from "../componants/itemdetail/billsdetail";
import Modal from "../componants/modal/modal";
import PaymentDetail from "../componants/payment/paymentdetail";

const Bills = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBillId, setSelectedBillId] = useState(null);
  const [billsData, setBillsData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);

  useEffect(() => {
    // localStorage.setItem("userKey", "wasik0lv");
    const token = localStorage.getItem("userKey");

    const fetchUserBills = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getBills", {
          headers: {
            Authorization: `Bearer ${token}`, // ส่งคีย์ไปยืนยันตัวตน
          },
        });

        // Store the data in the component's state
        setBillsData(response.data.bill);
      } catch (error) {
        console.error("Failed to fetch data");
      }
    };

    const fetchUserName = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getUser", {
          headers: {
            Authorization: `Bearer ${token}`, // ส่งคีย์ไปยืนยันตัวตน
          },
        });

        // Store the data in the component's state
        setUserData(response.data.username);
        console.error("response.data: ", response.data);
      } catch (error) {
        console.error("Failed to fetch data");
      }
    };

    fetchUserBills();
    fetchUserName();
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
    <div className="bills-container">
      <div className="b-sidebar">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="b-main-content">
        {/* <div className="b-mt-content">
          <p className="b-hello-mes">สวัสดี</p>
          {userData.map((bill) => (
            <p className="b-username">คุณ {bill.tenant}</p>
          ))}
        </div> */}
        <div className="b-mbt-content">
          <div
            className={`${
              selectedBillId ? "b-mbtl-content-selected" : "b-mbtl-content"
            }`}
          >
            <div className="b-text-header-l">
              <p className="b-bill-label">ใบแจ้งหนี้</p>
            </div>
            <div className="b-filter">
              <p className="b-filter-label">จัดเรียงโดย</p>
              <div className="b-gof-filter">
                <div className="b-filter-dropdown">
                  <p className="b-filter-type-label">ปี:</p>
                  <select name="status" id="b-filter-status">
                    <option value="all">ทุกปี</option>
                    <option value="bill">2567</option>
                    <option value="request">2566</option>
                  </select>
                </div>
                <div className="b-filter-dropdown">
                  <p className="b-filter-type-label">สถานะ:</p>
                  <select name="status" id="b-filter-status">
                    <option value="all">ทั้งหมด</option>
                    <option value="bill">ใบแจ้งหนี้</option>
                    <option value="request">คำร้องขอ</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="b-bills-list">
              {billsData.map((bill) => (
                <BillsItem
                  key={bill.id}
                  bill={bill} // Pass bill data to BillsItem component
                  onClick={() => handleBillClick(bill.id)} // Handle click by bill id
                  isSelected={bill.id === selectedBillId} // Pass isSelected prop
                />
              ))}
            </div>
          </div>

          {/* Display right section if a bill is selected */}
          {selectedBill && (
            <div className="b-mbtr-content">
              <div className="b-text-header-r">
                <p className="b-detail-label">รายละเอียด</p>
                <Link className="b-to-pdf" to="/all-bills">
                  PDF
                </Link>
              </div>
              <div className="b-bills-detail">
                <BillsDetail bill={selectedBill} />
                {selectedBill.status === "ค้างชำระ" && (
                  <Link className="b-to-payment" onClick={handlePaymentClick}>
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

export default Bills;
