import React from "react";
import "./detail.css";

const RequestDetail = ({ req }) => {
  if (!req) {
    return <p>No req selected</p>; // Display this if no req is selected
  }

  console.log(req); // Print req in console log

  return (
    <div className="req-topic-container">
      {/* req Header */}
      <div className="req-topic-header">
        <p>
          {req.typeid === "1"
            ? "แจ้งซ่อม"
            : req.typeid === "2"
            ? "แจ้งเลื่อนชำระหนี้"
            : req.typeid === "3"
            ? "แจ้งต่อสัญญา"
            : req.typeid === "4"
            ? "แจ้งออก"
            : ""}
        </p>
      </div>

      {/* req Status */}
      <div className="req-topic-status">
        <p className="req-status-label">สถานะ</p>
        <p
          className="req-status-value"
          style={{
            color:
              req.status === "ไม่ดำเนินการ"
                ? "#FF2D2D"
                : req.status === "ดำเนินการแล้ว"
                ? "#29D281"
                : req.status === "รอดำเนินการ"
                ? "#E0D933"
                : "",
          }}
        >
          {req.status}
        </p>
      </div>

      {/* Always show */}
      <div className="req-topic-id">
        <p className="req-id-label">เลขที่</p>
        <p className="req-id-value">{req.id}</p>
      </div>

      <div className="req-topic-date">
        <p className="req-date-label">วันที่ทำรายการ</p>
        <p className="req-topic-date-value">{req.timestamp}</p>
      </div>

      {/* Conditionally rendered based on req.typeid */}
      {req.typeid === "1" && (
        <div className="req-topic-broken">
          <p className="req-topic-broken-label">อุปกรณ์ที่ชำรุด</p>
          <p className="req-topic-broken-value">{req.broken}</p>
        </div>
      )}

      {req.typeid === "2" && (
        <>
          <div className="req-topic-month">
            <p className="req-topic-month-label">เดือนที่เลื่อนชำระ</p>
            <p className="req-topic-month-value">{req.ppmonth}</p>
          </div>
          <div className="req-topic-paydate">
            <p className="req-topic-paydate-label">ชำระภายในวันที่</p>
            <p className="req-topic-paydate-value">{req.paydate}</p>
          </div>
        </>
      )}

      {req.typeid === "3" && (
        <div className="req-topic-lease">
          <p className="req-topic-lease-label">รูปแบบสัญญา</p>
          <p className="req-topic-lease-value">{req.leasetype}</p>
        </div>
      )}

      {req.typeid === "4" && (
        <div className="req-topic-out">
          <p className="req-topic-out-label">วันที่ย้ายออก</p>
          <p className="req-topic-out-value">{req.exitdate}</p>
        </div>
      )}

      <div className="req-topic-tel">
        <p className="req-topic-tel-label">เบอร์โทร</p>
        <p className="req-topic-tel-value">{req.tel}</p>
      </div>

      <div className="req-topic-des">
        <p className="req-topic-des-label">คำอธิบาย</p>
        <p className="req-topic-des-value">{req.des}</p>
      </div>

    </div>
  );
};

export default RequestDetail;
