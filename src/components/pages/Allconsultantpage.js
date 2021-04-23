import React from "react";
import Navbar from "../constitutive/Navbar";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Allconsultantpage() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a>Study</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a>Health</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a>Business</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a>Cooking</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Navbar />
      <div style={{ padding: "1% 15%" }}></div>
      <div className="searchbyinterest">
        <Dropdown overlay={menu} trigger={["click"]}>
          <a
            className="ant-dropdown-link"
            style={{
              backgroundColor: "white",
              outline: "default",
              borderRadius: "15px",
              border: "2px solid",
              borderColor: "#a6a6a6",
              padding: "10px 50px ",
              color: "#a6a6a6",
              textAlign: "center",
              fontSize: "15px",

              // backgroundColor: "#f8edac",
            }}
            onClick={(e) => e.preventDefault()}
          >
            Search by Interest <DownOutlined />
          </a>
        </Dropdown>
      </div>
      <div style={{ width: "100%", padding: "2%" }}>
        <Carousel showArrows={true} showThumbs={false} showStatus={false}>
          <div>
            <img src="https://picsum.photos/400/150" alt="logo" style={{ width: "80%" }} />
          </div>
          <div>
            <img src="https://picsum.photos/400/150" alt="logo" style={{ width: "80%" }} />
          </div>
          <div>
            <img src="https://picsum.photos/400/150" alt="logo" style={{ width: "80%" }} />
          </div>
          <div>
            <img src="https://picsum.photos/400/150" alt="logo" style={{ width: "80%" }} />
          </div>
        </Carousel>
      </div>
      <div>
        <div className="infoallconsultant" style={{ padding: "2% 5% 2% 5%" }}>
          <div className="infoallconsultant-card" style={{ marginRight: "15px" }}>
            <img src="https://picsum.photos/200" alt="logo" style={{ width: "100%" }} />
            <div className="cardbox-center" style={{ marginTop: "15px" }}>
              <h1 style={{ marginBottom: "0px" }}>Steve job</h1>
            </div>
            <div className="cardbox-center">
              <h2 style={{ marginBottom: "0px" }}>ceo at apple</h2>
            </div>
            <div className="cardbox-left">
              <div className="card-bluetag" style={{ marginBottom: "5px" }}>
                business
              </div>
            </div>
            <div className="cardbox-center">
              <h2 className="greentext">20000THB/hr</h2>
            </div>

            <div className="cardbox-center">
              <button className="minigreenbutton" type="button">
                Book
              </button>
            </div>
          </div>

          <div className="infoallconsultant-card" style={{ marginRight: "15px" }}>
            <img src="https://picsum.photos/200" alt="logo" style={{ width: "100%" }} />
            <div className="cardbox-center" style={{ marginTop: "15px" }}>
              <h1 style={{ marginBottom: "0px" }}>Steve job</h1>
            </div>
            <div className="cardbox-center">
              <h2 style={{ marginBottom: "0px" }}>ceo at apple</h2>
            </div>
            <div className="cardbox-left">
              <div className="card-bluetag" style={{ marginBottom: "5px" }}>
                business
              </div>
            </div>
            <div className="cardbox-center">
              <h2 className="greentext">20000THB/hr</h2>
            </div>

            <div className="cardbox-center">
              <button className="minigreenbutton" type="button">
                Book
              </button>
            </div>
          </div>

          <div className="infoallconsultant-card" style={{ marginRight: "15px" }}>
            <img src="https://picsum.photos/200" alt="logo" style={{ width: "100%" }} />
            <div className="cardbox-center" style={{ marginTop: "15px" }}>
              <h1 style={{ marginBottom: "0px" }}>Steve job</h1>
            </div>
            <div className="cardbox-center">
              <h2 style={{ marginBottom: "0px" }}>ceo at apple</h2>
            </div>
            <div className="cardbox-left">
              <div className="card-bluetag" style={{ marginBottom: "5px" }}>
                business
              </div>
            </div>
            <div className="cardbox-center">
              <h2 className="greentext">20000THB/hr</h2>
            </div>

            <div className="cardbox-center">
              <button className="minigreenbutton" type="button">
                Book
              </button>
            </div>
          </div>

          <div className="infoallconsultant-card" style={{ marginRight: "15px" }}>
            <img src="https://picsum.photos/200" alt="logo" style={{ width: "100%" }} />
            <div className="cardbox-center" style={{ marginTop: "15px" }}>
              <h1 style={{ marginBottom: "0px" }}>Steve job</h1>
            </div>
            <div className="cardbox-center">
              <h2 style={{ marginBottom: "0px" }}>ceo at apple</h2>
            </div>
            <div className="cardbox-left">
              <div className="card-bluetag" style={{ marginBottom: "5px" }}>
                business
              </div>
            </div>
            <div className="cardbox-center">
              <h2 className="greentext">20000THB/hr</h2>
            </div>

            <div className="cardbox-center">
              <button className="minigreenbutton" type="button">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="infoallconsultant" style={{ padding: "2% 5% 2% 5%" }}>
          <div className="infoallconsultant-card" style={{ marginRight: "15px" }}>
            <img src="https://picsum.photos/200" alt="logo" style={{ width: "100%" }} />
            <div className="cardbox-center" style={{ marginTop: "15px" }}>
              <h1 style={{ marginBottom: "0px" }}>Steve job</h1>
            </div>
            <div className="cardbox-center">
              <h2 style={{ marginBottom: "0px" }}>ceo at apple</h2>
            </div>
            <div className="cardbox-left">
              <div className="card-bluetag" style={{ marginBottom: "5px" }}>
                business
              </div>
            </div>
            <div className="cardbox-center">
              <h2 className="greentext">20000THB/hr</h2>
            </div>

            <div className="cardbox-center">
              <button className="minigreenbutton" type="button">
                Book
              </button>
            </div>
          </div>

          <div className="infoallconsultant-card" style={{ marginRight: "15px" }}>
            <img src="https://picsum.photos/200" alt="logo" style={{ width: "100%" }} />
            <div className="cardbox-center" style={{ marginTop: "15px" }}>
              <h1 style={{ marginBottom: "0px" }}>Steve job</h1>
            </div>
            <div className="cardbox-center">
              <h2 style={{ marginBottom: "0px" }}>ceo at apple</h2>
            </div>
            <div className="cardbox-left">
              <div className="card-bluetag" style={{ marginBottom: "5px" }}>
                business
              </div>
            </div>
            <div className="cardbox-center">
              <h2 className="greentext">20000THB/hr</h2>
            </div>

            <div className="cardbox-center">
              <button className="minigreenbutton" type="button">
                Book
              </button>
            </div>
          </div>

          <div className="infoallconsultant-card" style={{ marginRight: "15px" }}>
            <img src="https://picsum.photos/200" alt="logo" style={{ width: "100%" }} />
            <div className="cardbox-center" style={{ marginTop: "15px" }}>
              <h1 style={{ marginBottom: "0px" }}>Steve job</h1>
            </div>
            <div className="cardbox-center">
              <h2 style={{ marginBottom: "0px" }}>ceo at apple</h2>
            </div>
            <div className="cardbox-left">
              <div className="card-bluetag" style={{ marginBottom: "5px" }}>
                business
              </div>
            </div>
            <div className="cardbox-center">
              <h2 className="greentext">20000THB/hr</h2>
            </div>

            <div className="cardbox-center">
              <button className="minigreenbutton" type="button">
                Book
              </button>
            </div>
          </div>

          <div className="infoallconsultant-card" style={{ marginRight: "15px" }}>
            <img src="https://picsum.photos/200" alt="logo" style={{ width: "100%" }} />
            <div className="cardbox-center" style={{ marginTop: "15px" }}>
              <h1 style={{ marginBottom: "0px" }}>Steve job</h1>
            </div>
            <div className="cardbox-center">
              <h2 style={{ marginBottom: "0px" }}>ceo at apple</h2>
            </div>
            <div className="cardbox-left">
              <div className="card-bluetag" style={{ marginBottom: "5px" }}>
                business
              </div>
            </div>
            <div className="cardbox-center">
              <h2 className="greentext">20000THB/hr</h2>
            </div>

            <div className="cardbox-center">
              <button className="minigreenbutton" type="button">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allconsultantpage;
