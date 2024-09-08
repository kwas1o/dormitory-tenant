import React from "react";
import "./item.css";
import notification from "../../assets/notification.png";

const NotificationItem = () => {
  return (
    <div className="notification-item-container">
      <div className="notification-item-icon">
        <img src={notification} alt="" />
      </div>
      <div className="notification-item-detail">
        <div className="notification-item">
          <p className="notification-item-label">การแจ้งย้ายออกดำเนินการแล้ว</p>
        </div>
        <div className="notification-item-timestamp">
          <p className="notification-timestamp-date">02 มีนาคม 2567</p>
          <p className="notification-timestamp-time">16:50</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
