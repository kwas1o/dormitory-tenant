import React from "react";
import "./item.css";
import invoice from "../../assets/invoice.png";

const BillsItem = () => {
  return (
    <div className="bill-item-container">
      <div className="bill-item-icon">
        <img src={invoice} alt="" />
      </div>
      <div className="bill-item-detail">
        <div className="bill-item-tl">
          <p className="bill-item-month">กุมภาพันธ์</p>
          <p className="bill-item-status">ชำระแล้ว</p>
        </div>
        <div className="bill-item-btl">
          <p className="bill-item-total">ยอดเงินสุทธิ</p>
          <p className="bill-item-price">7000.36 บาท</p>
        </div>
      </div>
    </div>
  );
};

export default BillsItem;
