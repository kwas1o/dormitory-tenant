import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../componants/sidebar/sidebar";
import "../css/request.css";
import { Link } from "react-router-dom";
import Modal from "../componants/modal/modal";
import PaymentDetail from "../componants/payment/paymentdetail";
import RequestForm from "../componants/form/requestform";
import RequestDetail from "../componants/itemdetail/requestdetail";
import RequestItem from "../componants/item/requestitem";

const Request = () => {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedReqId, setSelectedReqId] = useState(null);
  const [requestsData, setRequestsData] = useState([]);
  const [selectedReq, setSelectedReq] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("userKey");

    const fetchUserRequests = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getRequest", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRequestsData(response.data.request);
      } catch (error) {
        console.error("Failed to fetch data");
      }
    };

    fetchUserRequests();
  }, []);

  const handleRequestClick = () => {
    setShowRequestModal(true);
  };

  const handleCloseModal = () => {
    setShowRequestModal(false);
  };

  const handleReqClick = (reqId) => {
    setSelectedReqId(reqId);
    setSelectedReq(requestsData.find((req) => req.id === reqId));
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
              selectedReqId ? "r-mbtl-content-selected" : "r-mbtl-content"
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
                    <option value="rill">ดำเนินการแล้ว</option>
                    <option value="request">รอดำเนินการ</option>
                    <option value="request">ไม่ดำเนินการ</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="r-bills-list">
              {requestsData && requestsData.length > 0 ? (
                requestsData.map((req) => (
                  <RequestItem
                    key={req.id}
                    req={req}
                    onClick={() => handleReqClick(req.id)}
                    isSelected={req.id === selectedReqId}
                  />
                ))
              ) : (
                <p>No requests found.</p>
              )}
            </div>
          </div>

          {selectedReq && (
            <div className="r-mbtr-content">
              <div className="r-text-header-r">
                <p className="r-detail-label">รายละเอียด</p>
              </div>
              <div className="r-bills-detail">
                <RequestDetail req={selectedReq} />
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal show={showRequestModal} handleClose={handleCloseModal}>
        <RequestForm />
      </Modal>
    </div>
  );
};

export default Request;
