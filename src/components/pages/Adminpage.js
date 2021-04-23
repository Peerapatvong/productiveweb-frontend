import React from "react";
import Navbar from "../constitutive/Navbar";
import { DatePicker, TimePicker } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";
function Adminpage() {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div>
      <Navbar />
      <div style={{ padding: "3% 15%" }}>
        <div className="divcart">
          <div className="admincart">
            <div className="admincart-bookingno">
              <h1>Booking No.</h1>
            </div>
            <div className="admincart-bank">
              <h1>Bank</h1>
            </div>
            <div className="admincart-total">
              <h1>Total</h1>
            </div>
          </div>
          <div className="ordercard">
            <div className="deleteorder">
              <CloseCircleFilled style={{ color: "#E25C22" }} />
            </div>
            <div className="adminlist">
              <div className="adminlist-no">
                <h1>1</h1>
              </div>
              <div className="adminlist-pic">
                <img src="https://picsum.photos/60" alt="consultantpic" />
              </div>
              <div className="adminlist-bank">
                <h2>KBank</h2>
              </div>
              <div className="adminlist-amount">
                <h2>20,000</h2>
              </div>
              <div className="adminlist-button">
                <button className="adminconfirmbutton">confirm</button>
              </div>
            </div>
            <div className="deleteorder">
              <CloseCircleFilled style={{ visibility: "hidden" }} />
            </div>
          </div>
          <div className="ordercard">
            <div className="deleteorder">
              <CloseCircleFilled style={{ color: "#E25C22" }} />
            </div>
            <div className="adminlist">
              <div className="adminlist-no">
                <h1>2</h1>
              </div>
              <div className="adminlist-pic">
                <img src="https://picsum.photos/60" alt="consultantpic" />
              </div>
              <div className="adminlist-bank">
                <h2>scb</h2>
              </div>
              <div className="adminlist-amount">
                <h2>300,000</h2>
              </div>
              <div className="adminlist-button">
                <button className="adminconfirmbutton">confirm</button>
              </div>
            </div>
            <div className="deleteorder">
              <CloseCircleFilled style={{ visibility: "hidden" }} />
            </div>
          </div>
          <div className="ordercard">
            <div className="deleteorder">
              <CloseCircleFilled style={{ color: "#E25C22" }} />
            </div>
            <div className="adminlist">
              <div className="adminlist-no">
                <h1>3</h1>
              </div>
              <div className="adminlist-pic">
                <img src="https://picsum.photos/60" alt="consultantpic" />
              </div>
              <div className="adminlist-bank">
                <h2>Bangokok Bank</h2>
              </div>
              <div className="adminlist-amount">
                <h2>2,000,000</h2>
              </div>
              <div className="adminlist-button">
                <button className="adminconfirmbutton">confirm</button>
              </div>
            </div>
            <div className="deleteorder">
              <CloseCircleFilled style={{ visibility: "hidden" }} />
            </div>
          </div>

          <div className="sumprice">
            <div className="adminlist-total">
              <h1 style={{ textDecoration: "underline", color: "#69B293", fontWeight: "bold" }}>60,000 THB</h1>
            </div>
          </div>
        </div>
        <div className="buttoncartpage">
          <button className="minibluebutton">Edit</button>
        </div>
      </div>
    </div>
  );
}

export default Adminpage;
