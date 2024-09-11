import React, { useState } from "react";
import "./payment.css";
import qrcode from "../../assets/qrcode.png";

const PaymentDetail = ({ bill }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Remove selected file
  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="payment-detail-container">
      <div className="payment-detail-header">
        <p className="payment-header-label">ใบแจ้งหนี้ประจำเดือน</p>
        <p className="payment-header-month">{bill.month} {bill.year}</p>
      </div>
      <div className="payment-detail-id">
        <p className="payment-id-label">เลขที่</p>
        <p className="payment-id-value">{bill.id}</p>
      </div>
      <div className="payment-detail-tenant">
        <p className="payment-tenant-label">ผู้เช่า</p>
        <p className="payment-tenant-value">{bill.tenant}</p>
      </div>
      {/* section 2 */}
      <div className="payment-detail-total">
        <p className="payment-total-label">ยอดเงินสุทธิ</p>
        <p className="payment-total-value">{bill.amount} บาท</p>
      </div>
      <div>
        <div className="payment-detail-method">
          <p className="payment-method-label">ช่องทางการชำระเงิน</p>
          <div className="payment-method-qrcode">
            <img src={qrcode} alt="QR Code" />
          </div>
          <p className="payment-method-qrcode-des">
            โปรดสแกนคิวอาร์โค้ดนี้ในแอพธนาคาร
            <br />
            ของท่านเพื่อชำระเงิน
          </p>
        </div>
      </div>
      <div className="payment-detail-receipt">
        <p className="payment-receipt-label">หลักฐานการชำระเงิน</p>
        <div className="relative payment-receipt-re">
          <input
            type="file"
            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
            onChange={handleFileChange}
          />
          <div className="payment-receipt-input text-white py-2 px-5 flex items-center">
            <span>เพิ่มหลักฐานการชำระเงิน</span>
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="#545454"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>
        </div>

        {/* Show selected file and option to remove */}
        {selectedFile && (
          <div className="selected-file">
            <p className="file-name">{selectedFile.name}</p>
            <button className="remove-file" onClick={handleRemoveFile}>
              ลบไฟล์
            </button>
          </div>
        )}
      </div>
      <div className="payment-detail-submit">
        <button
        // onClick={handleSubmit}
        >
          ยืนยันการชำระเงิน
        </button>
      </div>
    </div>
  );
};

export default PaymentDetail;
