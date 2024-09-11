import React, { useState } from "react";
import "./form.css";
import qrcode from "../../assets/qrcode.png";

const RequestForm = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  // Handle topic change
  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  return (
    <div className="reqform-detail-container">
      <div className="reqform-detail-header">
        <p className="reqform-header-label">เขียนคำร้องขอ</p>
      </div>

      <div className="reqform-detail-topic">
        <p className="reqform-topic-label">หัวข้อ</p>
        <div className="rf-topic-dropdown">
          <select name="topic" id="rf-topic-choices" onChange={handleTopicChange}>
            <option value="">เลือกหัวข้อ</option>
            <option value="1">แจ้งซ่อม</option>
            <option value="2">แจ้งเลื่อนชำระหนี้</option>
            <option value="3">แจ้งต่อสัญญา</option>
            <option value="4">แจ้งออก</option>
          </select>
        </div>
      </div>

      {selectedTopic === "1" && (
        <div className="reqform-detail-broken">
          <p className="reqform-broken-label">อุปกรณ์ที่ชำรุด</p>
          <div className="rf-broken-dropdown">
            <select name="broken" id="rf-broken-choices">
              <option value="">เลือกอุปกรณ์</option>
              <option value="1">เครื่องปรับอากาศ</option>
              <option value="2">เครื่องซักผ้า</option>
            </select>
          </div>
        </div>
      )}

      {selectedTopic === "3" && (
        <div className="reqform-detail-lease">
          <p className="reqform-lease-label">รูปแบบสัญญา</p>
          <div className="rf-lease-dropdown">
            <select name="lease" id="rf-lease-choices">
              <option value="">เลือกรูปแบบ</option>
              <option value="1">รายเดือน</option>
              <option value="2">รายปี</option>
            </select>
          </div>
        </div>
      )}

      {selectedTopic === "2" && (
        <div className="reqform-topic-postpone">
        <div className="reqform-detail-postpone">
          <p className="reqform-postpone-label">เดือนที่เลื่อนชำระ</p>
          <div className="rf-lease-dropdown">
            <select name="topic" id="rf-postpone-choices">
              <option value="">เลือกหัวข้อ</option>
              <option value="1">แจ้งซ่อม</option>
              <option value="2">แจ้งเลื่อนชำระหนี้</option>
              <option value="4">แจ้งต่อสัญญา</option>
              <option value="5">แจ้งออก</option>
            </select>
          </div>
        </div>
        <div className="reqform-detail-ppdate">
          <p className="reqform-ppdate-label">ชำระภายในวันที่</p>
          <div className="rf-lease-dropdown">
            <input type="date" name="date" id="rf-postpone-date" />
          </div>
        </div>
      </div>
      )}

      {selectedTopic === "4" && (
      <div className="reqform-detail-out">
      <p className="reqform-out-label">วันที่ย้ายออก</p>
      <input type="date" name="date" id="rf-postpone-date" />
    </div>
      )}

      {/* Always visible fields */}
      <div className="reqform-detail-tel">
        <p className="reqform-tel-label">เบอร์โทร</p>
        <input type="tel" id="rf-input-tel" />
      </div>

      <div className="reqform-detail-des">
        <p className="reqform-des-label">คำอธิบาย</p>
        <textarea id="rf-input-des"></textarea>
      </div>

      <div className="reqform-detail-submit">
        <button>ยืนยัน</button>
      </div>
    </div>
  );
};

export default RequestForm;
