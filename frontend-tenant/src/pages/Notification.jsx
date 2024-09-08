import React, { useState } from "react";
import "../css/notification.css";
import Sidebar from "../componants/sidebar/sidebar";
import BillsItem from "../componants/item/billsitem";
import { Link } from "react-router-dom";
import BillsDetail from "../componants/itemdetail/billsdetail";
import NotificationItem from "../componants/item/notificationitem";

const Notification = () => {
  return (
    <div className="notification-container">
      <div className="n-sidebar">
        <Sidebar />
      </div>

      <div className="n-main-content">
        <div className="n-m-top">
          <div className="n-text-header">
            <p className="n-notification-label">การแจ้งเตือน</p>
          </div>
          <div className="n-filter">
            <p className="n-filter-label">จัดเรียงโดย</p>
            <div className="n-filter-dropdown">
              <p className="n-filter-type-label">สถานะ:</p>
              <select name="status" id="n-filter-status">
                <option value="all">ทั้งหมด</option>
                <option value="bill">ใบแจ้งหนี้</option>
                <option value="request">คำร้องขอ</option>
              </select>
            </div>
          </div>
          <div className="h-bills-list">
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
