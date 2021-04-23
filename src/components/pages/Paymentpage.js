import React from 'react'
import Navbar from '../constitutive/Navbar'
import { useHistory } from 'react-router-dom'
import {
  DatePicker,
  TimePicker,
  Menu,
  Dropdown,
  Upload,
  message,
  Button,
  Result
} from 'antd'
import { DownOutlined, UploadOutlined } from '@ant-design/icons'
import swal from 'sweetalert'

function Paymentpage() {
  function onChange(date, dateString) {
    console.log(date, dateString)
  }
  const history = useHistory()

  const successpayment = () =>
    swal('Payment Sucess', 'Thankyou for Booking!', 'success').then((Result) =>
      history.push('/allconsultant')
    )

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a>Kbank</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a>SCB</a>
      </Menu.Item>
      <Menu.Item key="3">TMB</Menu.Item>
    </Menu>
  )

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  return (
    <div>
      <Navbar />
      <div style={{ padding: '3% 15%' }}>
        <div className="divcart" style={{ marginBottom: '30px' }}>
          <div className="headercart" style={{ padding: '3px 10px' }}>
            <h2>Your Order</h2>
            <h2>Time</h2>
            <h2>Total</h2>
          </div>

          <div className="ordercard" style={{ marginBottom: '10px' }}>
            <div className="orderlist">
              <div>
                <img src="https://picsum.photos/60" alt="consultantpic" />
              </div>
              <div className="infoordercard">
                <h2>steve job</h2>
              </div>
              <div>
                <DatePicker onChange={onChange} />
                <TimePicker.RangePicker
                  format={'HH:mm'}
                  minuteStep={30}
                  style={{ width: '60%' }}
                />
              </div>
              <div className="infoordercard">
                <h2>20,000</h2>
              </div>
            </div>
          </div>
          <div className="ordercard" style={{ marginBottom: '10px' }}>
            <div className="orderlist">
              <div>
                <img src="https://picsum.photos/60" alt="consultantpic" />
              </div>
              <div className="infoordercard">
                <h2>steve job</h2>
              </div>
              <div>
                <DatePicker onChange={onChange} />
                <TimePicker.RangePicker
                  format={'HH:mm'}
                  minuteStep={30}
                  style={{ width: '60%' }}
                />
              </div>
              <div className="infoordercard">
                <h2>20,000</h2>
              </div>
            </div>
          </div>
          <div className="ordercard" style={{ marginBottom: '10px' }}>
            <div className="orderlist">
              <div>
                <img src="https://picsum.photos/60" alt="consultantpic" />
              </div>
              <div className="infoordercard">
                <h2>steve job</h2>
              </div>
              <div>
                <DatePicker onChange={onChange} />
                <TimePicker.RangePicker
                  format={'HH:mm'}
                  minuteStep={30}
                  style={{ width: '60%' }}
                />
              </div>
              <div className="infoordercard">
                <h2>20,000</h2>
              </div>
            </div>
          </div>

          <div className="sumprice">
            <h1
              style={{
                textDecoration: 'underline',
                color: '#69B293',
                fontWeight: 'bold',
                marginBottom: '0px'
              }}
            >
              60,000 THB
            </h1>
          </div>
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
              style={{ marginRight: '10px' }}
              src="https://picsum.photos/60"
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
                  Bank <DownOutlined />
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
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
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
  )
}

export default Paymentpage
