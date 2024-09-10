import React from "react";
import "./item.css";
import invoice from "../../assets/invoice.png";

const BillsItem = ({ bill, onClick, isSelected }) => {
  return (
    <div
      className={`bill-item-container ${isSelected ? "bill-item-container-selected" : ""}`}
      onClick={onClick}
    >
      <div className="bill-item-icon">
        <img src={invoice} alt="" />
      </div>
      <div className="bill-item-detail">
        <div className="bill-item-tl">
          <p className="bill-item-month">{bill.month}</p>
          <p
            className="bill-item-status"
            style={{
              color: bill.status === "ค้างชำระ" ? "#FF2D2D" : "#29D281",
            }}
          >
            {bill.status}
          </p>
        </div>
        <div className="bill-item-btl">
          <p className="bill-item-total">ยอดเงินสุทธิ</p>
          <p className="bill-item-price">{bill.amount} บาท</p>
        </div>
      </div>
    </div>
  );
};

export default BillsItem;
