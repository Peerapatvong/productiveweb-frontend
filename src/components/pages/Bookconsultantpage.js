import React from "react";
import Navbar from "../constitutive/Navbar";
import { DatePicker, TimePicker } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

function Bookconsultantpage() {
  const history = useHistory();
  const handlercart = () => history.push("/cart");
  const handlerpayment = () => history.push("/payment");

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div>
      <Navbar />
      <div className="divpage">
        <div className="consultantcard">
          <img src="https://picsum.photos/200" alt="logo" />
          <div style={{ marginTop: "20px" }}>
            <h1 style={{ marginBottom: "0px" }}>Steve job</h1>
          </div>
          <div>
            <h2 style={{ marginBottom: "0px" }}>ceo at apple</h2>
          </div>
        </div>

        <div className="pricecard">
          <div
            style={{
              backgroundColor: "#EFEFEF",
              height: "100%",
              padding: "5%",
              borderRadius: "15px",
              marginBottom: "20px",
            }}
          >
            <div>
              <h1>get consult about business</h1>
            </div>
            <div className="interesttag">
              <div className="bluetag" style={{ marginRight: "15px" }}>
                business
              </div>
            </div>
            <div className="totalcard">
              <div>
                <DatePicker onChange={onChange} />
                <TimePicker.RangePicker format={"HH:mm"} minuteStep={30} style={{ width: "60%" }} />
              </div>
              <div>
                <div className="total">
                  <h1 style={{ marginBottom: "0px" }}>Total</h1>
                </div>
                <div>
                  <h2 className="greentext">3000000THB/hr</h2>
                </div>
              </div>
            </div>
            <div className="statusconsultant">
              <div style={{ padding: "2.5% 1%" }}>
                <CheckCircleFilled style={{ color: "#69b293", fontSize: "25px" }} />
              </div>
              <h1 className="greentext">available</h1>
            </div>
          </div>
          <div className="pricebutton">
            <button className="minibluebutton" type="button" style={{ marginRight: "15px" }} onClick={handlercart}>
              Add Cart
            </button>
            <button className="minigreenbutton" type="button" onClick={handlerpayment}>
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookconsultantpage;
