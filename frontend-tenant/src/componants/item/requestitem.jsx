import React from "react";
import "./item.css";
import request from "../../assets/request.png";

const RequestItem = ({ req, onClick, isSelected }) => {
return (
    <div
        className={`bill-item-container ${isSelected ? "bill-item-container-selected" : ""}`}
        onClick={onClick}
    >
        <div className="request-item-icon">
            <img src={request} alt="" />
        </div>
        <div className="bill-item-detail">
            <div className="bill-item-tl">
                <p className="bill-item-month">
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
                <p
                    className="bill-item-status"
                    style={{
                        color: req.status === "ไม่ดำเนินการ" ? "#FF2D2D" : req.status === "ดำเนินการแล้ว" ? "#29D281" : req.status === "รอดำเนินการ" ? "#E0D933" : "",
                    }}
                >
                    {req.status}
                </p>
            </div>
            <div className="bill-item-btl">
                <p className="bill-item-total">วันที่ทำรายการ</p>
                <p className="bill-item-price">{req.timestamp} น.</p>
            </div>
        </div>
    </div>
);
};

export default RequestItem;
