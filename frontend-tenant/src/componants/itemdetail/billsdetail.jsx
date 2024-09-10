import React from "react";
import "./detail.css";

const BillsDetail = ({ bill }) => {
  if (!bill) {
    return <p>No bill selected</p>; // Display this if no bill is selected
  }

  console.log(bill); // Print bill in console log

  return (
    <div className="bill-detail-container">
      {/* Bill Header */}
      <div className="bill-detail-header">
        <p className="bill-header-label">ค่าหอพักประจำเดือน</p>
        <p className="bill-header-month">
          {bill.month} {bill.year}
        </p>
      </div>

      {/* Bill Status */}
      <div className="bill-detail-status">
        <p className="bill-status-label">สถานะ</p>
        <p className="bill-status-value" style={{ color: bill.status === "ค้างชำระ" ? "#FF2D2D" : "#29D281" }}>{bill.status}</p>
      </div>

      {/* Bill Information */}
      <div className="bill-detail-id">
        <p className="bill-id-label">เลขที่</p>
        <p className="bill-id-value">{bill.id}</p>
      </div>

      <div className="bill-detail-tenant">
        <p className="bill-tenant-label">ผู้เช่า</p>
        <p className="bill-tenant-value">{bill.tenant}</p>
      </div>

      <div className="bill-detail-building">
        <p className="bill-building-label">ตึก</p>
        <p className="bill-building-value">{bill.building}</p>
      </div>

      <div className="bill-detail-roomnumber">
        <p className="bill-roomnumber-label">ห้องพัก</p>
        <p className="bill-roomnumber-value">{bill.room}</p>
      </div>

      <div className="bill-detail-date">
        <p className="bill-date-label">จดค่าน้ำและค่าไฟเมื่อ</p>
        <p className="bill-date-value">{bill.timestamp}</p>
      </div>

      {/* Costs Section */}
      <div className="bill-detail-room">
        <p className="bill-room-label">ค่าห้องพัก</p>
        <p className="bill-room-value">{bill.roomprice} บาท</p>
      </div>

      <div className="bill-detail-ele">
        <p className="bill-ele-label">ค่าไฟ</p>
        <p className="bill-ele-value">{bill.eleprice} บาท</p>
      </div>

      <div className="bill-detail-eleper">
        <p className="bill-eleper-label">จำนวนหน่วยที่ใช้</p>
        <p className="bill-eleper-value">{bill.eleunitused} หน่วย</p>
      </div>

      <div className="bill-detail-water">
        <p className="bill-water-label">ค่าน้ำ</p>
        <p className="bill-water-value">{bill.waterprice} บาท</p>
      </div>

      {/* Total Amount */}
      <div className="bill-detail-total">
        <p className="bill-total-label">ยอดเงินสุทธิ</p>
        <p className="bill-total-value">{bill.amount} บาท</p>
      </div>
    </div>
  );
};

export default BillsDetail;
