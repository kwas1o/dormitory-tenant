import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../componants/sidebar/sidebar";
import "../css/request.css";
import BillsItem from "../componants/item/billsitem";
import { Link } from "react-router-dom";
import BillsDetail from "../componants/itemdetail/billsdetail";
import Modal from "../componants/modal/modal";
import PaymentDetail from "../componants/payment/paymentdetail";
import RequestForm from "../componants/form/requestform";

const Request = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedBillId, setSelectedBillId] = useState(null);
  const [billsData, setBillsData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("userKey");

    const fetchUserBills = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getBills", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBillsData(response.data.bill);
      } catch (error) {
        console.error("Failed to fetch data");
      }
    };

    const fetchUserName = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getUser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data.username);
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

  const handleRequestClick = () => {
    setShowRequestModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowRequestModal(false);
  };

  const handleBillClick = (billId) => {
    setSelectedBillId(billId);
    setSelectedBill(billsData.find((bill) => bill.id === billId));
  };

  return (
    <div className="request-container">
      <div className="r-sidebar">
        <Sidebar />
      </div>

      <div className="r-main-content">
        <div className="r-mbt-content">
          <div
            className={`${
              selectedBillId ? "r-mbtl-content-selected" : "r-mbtl-content"
            }`}
          >
            <div className="r-text-header-l">
              <p className="r-bill-label">ส่งคำร้องขอ</p>
              <Link className="r-to-request" onClick={handleRequestClick}>
                เขียนคำร้อง
              </Link>
            </div>
            <div className="r-filter">
              <p className="r-filter-label">จัดเรียงโดย</p>
              <div className="r-gof-filter">
                <div className="r-filter-dropdown">
                  <p className="r-filter-type-label">สถานะ:</p>
                  <select name="status" id="r-filter-status">
                    <option value="all">ทั้งหมด</option>
                    <option value="rill">ใบแจ้งหนี้</option>
                    <option value="request">คำร้องขอ</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="r-bills-list">
              {billsData.map((bill) => (
                <BillsItem
                  key={bill.id}
                  bill={bill}
                  onClick={() => handleBillClick(bill.id)}
                  isSelected={bill.id === selectedBillId}
                />
              ))}
            </div>
          </div>

          {selectedBill && (
            <div className="r-mbtr-content">
              <div className="r-text-header-r">
                <p className="r-detail-label">รายละเอียด</p>
                <Link className="r-to-pdf" to="/all-bills">
                  PDF
                </Link>
              </div>
              <div className="r-bills-detail">
                <BillsDetail bill={selectedBill} />
                {selectedBill.status === "ค้างชำระ" && (
                  <Link className="r-to-payment" onClick={handlePaymentClick}>
                    ชำระเงิน
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal show={showModal} handleClose={handleCloseModal}>
        <PaymentDetail bill={selectedBill} />
      </Modal>

      <Modal show={showRequestModal} handleClose={handleCloseModal}>
        <RequestForm  />
      </Modal>
    </div>
  );
};

export default Request;
