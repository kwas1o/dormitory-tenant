import React from "react";
import "./detail.css";


const BillsDetail = () => {
  return (
    <div className="bill-detail-container">
        <div className="bill-detail-header">
          <p className="bill-header-label">ค่าหอพักประจำเดือน</p>
          <p className="bill-header-month">มีนาคม 2567</p>
        </div>
        <div className="bill-detail-status">
          <p className="bill-status-label">สถานะ</p>
          <p className="bill-status-value">ค้างชำระ</p>
        </div>
        <div className="bill-detail-id">
          <p className="bill-id-label">เลขที่</p>
          <p className="bill-id-value">35515451548451</p>
        </div>
        <div className="bill-detail-tenant">
          <p className="bill-tenant-label">ผู้เช่า</p>
          <p className="bill-tenant-value">ดุจอัปสร เทวพรหม</p>
        </div>
        <div className="bill-detail-phase">
          <p className="bill-phase-label">ตึก</p>
          <p className="bill-phase-value">นารา</p>
        </div>
        <div className="bill-detail-roomnumber">
          <p className="bill-roomnumber-label">ห้องพัก</p>
          <p className="bill-roomnumber-value">606</p>
        </div>
        <div className="bill-detail-date">
          <p className="bill-date-label">จดค่าน้ำและค่าไฟเมื่อ</p>
          <p className="bill-date-value">27 มีนาคม 2567</p>
        </div>
        {/* section 2 */}
        <div className="bill-detail-room">
          <p className="bill-room-label">ค่าห้องพัก</p>
          <p className="bill-room-value">4500 บาท</p>
        </div>
        <div>
        <div className="bill-detail-ele">
          <p className="bill-ele-label">ค่าไฟ</p>
          <p className="bill-ele-value">1500 บาท</p>
        </div>
        <div className="bill-detail-eleper">
          <p className="bill-eleper-label">จำนวนหน่วยที่ใช้</p>
          <p className="bill-eleper-value">60 หน่วย</p>
        </div>
        </div>
        <div className="bill-detail-water">
          <p className="bill-water-label">ค่าน้ำ</p>
          <p className="bill-water-value">150 บาท</p>
        </div>
        <div className="bill-detail-total">
          <p className="bill-total-label">ยอดเงินสุทธิ</p>
          <p className="bill-total-value">8000.36 บาท</p>
        </div>
    </div>
  );
};

export default BillsDetail;