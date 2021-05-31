import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../constitutive/Navbar'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { Menu, Dropdown, Upload, message, Button, Row, Col } from 'antd'
import { DownOutlined, UploadOutlined } from '@ant-design/icons'
import swal from 'sweetalert'

function PaymentPage() {
  async function getDataCourse() {
    const dataCourse = await axios.get('/course/getcourse/' + courseId)
    // console.log(dataCourse)
    // console.log(dataCourse.data.course)
    setShowSingle(dataCourse.data.course)
  }
  // console.log(showSingle)
  const [showSingle, setShowSingle] = useState()
  const { courseId } = useParams()

  useEffect(() => {
    getDataCourse()
  }, [])

  function onChange(date, dateString) {
    console.log(date, dateString)
  }
  const history = useHistory()

  const successpayment = () =>
    swal('Payment Sucess', 'Thankyou for Booking!', 'success').then((Result) =>
      history.push('/')
    )

  function handleChangeType(event) {
    const { id } = event.target
    setNameBank({ name: id })
  }
  const [bankname, setNameBank] = useState({
    name: 'Bank'
  })

  const menu = (
    <Menu>
      <Menu.Item>
        <a id="Kbank" onClick={(e) => handleChangeType(e)}>
          KBank
        </a>
      </Menu.Item>
      <Menu.Item>
        <a id="SCB" onClick={(e) => handleChangeType(e)}>
          SCB
        </a>
      </Menu.Item>
      <Menu.Item>
        <a id="Bangkok" onClick={(e) => handleChangeType(e)}>
          Bangkok Bank
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <div>
      <Navbar />
      <div style={{ padding: '3% 15%' }}>
        <div className="divcart" style={{ marginBottom: '30px' }}>
          <div className="headercart" style={{ padding: '3px 10px' }}>
            <Row justify="center" align="middle">
              <h1>Your Order</h1>
            </Row>
          </div>

          <div className="ordercard">
            <Row
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              justify="space-between"
              align="middle"
            >
              <Col className="gutter-row" span={7}>
                <Row justify="center" align="middle">
                  <img
                    src={showSingle?.coursePicture}
                    alt="consultantpic"
                    style={{ height: '120px', width: '200px' }}
                  />
                </Row>
              </Col>

              <Col className="gutter-row" span={7}>
                <Row justify="start" align="start">
                  <h2>{showSingle?.courseName}</h2>
                  <p>{showSingle?.courseTeacher}</p>
                </Row>
              </Col>

              <Col className="gutter-row" span={7}>
                <Row justify="center" align="middle">
                  <h2>{showSingle?.coursePrice}</h2>
                </Row>
              </Col>
            </Row>
          </div>

          <div
            className="divpayment"
            style={{ marginBottom: '15px', width: 'auto' }}
          >
            <div className="headercart" style={{ padding: '3px 10px' }}>
              <div>
                <h2>Payment</h2>
              </div>
            </div>
            {/* <div style={{ backgroundColor: "green", display: "flex", flexDirection: "column", justifyContent: "center" }}> */}
            <div
              style={{
                marginBottom: '15px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <img
                style={{ marginRight: '10px', width: '60px', height: '60px' }}
                src="https://res.cloudinary.com/dpacp5tew/image/upload/v1621489831/kbank_c0yvht.png"
                alt="accountpic"
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <h2 style={{ marginBottom: '5px' }}>
                  Accountname Peerapat Vongvanitch{' '}
                </h2>
                <h2> KBank 222-222-222</h2>
              </div>
            </div>
            <div
              style={{
                marginBottom: '5px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <div>
                <h2 style={{ marginBottom: '0px' }}>Your Bank</h2>
              </div>
              <div
                style={{
                  marginLeft: '10px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Dropdown overlay={menu} trigger={['click']}>
                  <a
                    className="ant-dropdown-link"
                    style={{
                      backgroundColor: 'white',
                      outline: 'default',
                      width: '120px',
                      borderRadius: '15px',
                      border: '2px solid',
                      borderColor: '#a6a6a6',
                      padding: '5px',
                      marginRight: '5px',
                      color: '#a6a6a6',
                      textAlign: 'center'
                      // backgroundColor: "#f8edac",
                    }}
                    onClick={(e) => e.preventDefault()}
                  >
                    {bankname.name} <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </div>
            {/* </div> */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '10px'
              }}
            >
              <Upload>
                <Button
                  icon={<UploadOutlined />}
                  // // onChange={(e) => {
                  // //   console.log(e)
                  // }}
                >
                  Click to Upload
                </Button>
              </Upload>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <button className="minigreenbutton" onClick={successpayment}>
              confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
