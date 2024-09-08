import React, { useState } from "react";
import "../css/about.css";
import Sidebar from "../componants/sidebar/sidebar";
// import "../css/home.css";
import BillsItem from "../componants/item/billsitem";
import { Link } from "react-router-dom";
import BillsDetail from "../componants/itemdetail/billsdetail";

const About = () => {
  return (
    <div className="about-container">
      <div className="a-sidebar">
        <Sidebar />
      </div>

      <div className="a-main-content">
        <div className="a-mbt-content">
          <div className="a-text-header">
            <p className="a-about-label">เกี่ยวกับฉัน</p>
          </div>
          
          <div className="a-detail-allabout">

            {/* tenant detail -> รายละเอียดผู้เช่า */}
            <div className="a-detail-tenant">
              <p className="a-header-name">ข้อมูลผู้เช่า</p>
              <div className="a-tenant-name">
                <p className="a-name-label">ชื่อผู้เช่า</p>
                <p className="a-name-value">ดุจอัปสร เทวพรหม</p>
              </div>
              <div className="a-tenant-tel">
                <p className="a-tel-label">เบอร์โทร</p>
                <p className="a-tel-value">0651687879</p>
              </div>
            </div>

            {/* room detail -> รายละเอียดห้องเช่า */}
            <div className="a-detail-room">
              <p className="a-header-name">ข้อมูลห้องเช่า</p>
              <div className="a-tenant-name">
                <p className="a-name-label">ตึก</p>
                <p className="a-name-value">นารา</p>
              </div>
              <div className="a-tenant-tel">
                <p className="a-tel-label">ห้องเลขที่</p>
                <p className="a-tel-value">606</p>
              </div>
            </div>
          </div>
          {/* lease detail -> รายละเอียดเกี่ยวกับสัญญา */}
          <div className="a-detail-lease">
                <p className="a-header-name">ข้อมูลสัญญาเช่า</p>
                <div className="a-lease-live">
                    <p className="a-live-label">อยู่อาศัยจำนวน</p>
                    <p className="a-live-value">1 คน</p>
                </div>
                <div className="a-lease-type">
                    <p className="a-type-label">รูปแบบสัญญาเช่า</p>
                    <p className="a-type-value">12 เดือน</p>
                </div>
                <div className="a-lease-start">
                    <p className="a-start-label">วันที่เริ่มทำสัญญาเช่า</p>
                    <p className="a-start-value">11 มกราคม 2567</p>
                </div>
                <div className="a-lease-end">
                    <p className="a-end-label">วันที่หมดสัญญาเช่า</p>
                    <p className="a-end-value">11 มกราคม 2568</p>
                </div>
                <div className="a-lease-pdf">
                    <Link className="view-lease-pdf">ดูสัญญา</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
