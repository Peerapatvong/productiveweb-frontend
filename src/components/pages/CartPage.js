import React from 'react'
import Navbar from '../constitutive/Navbar'
import { DatePicker, TimePicker } from 'antd'
import { CloseCircleFilled } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

function CartPage() {
  function onChange(date, dateString) {
    console.log(date, dateString)
  }
  const history = useHistory()
  const handlerallconsultant = () => history.push('/allconsultant')
  const handlerpayment = () => history.push('/payment')

  return (
    <div>
      <Navbar />
      <div style={{ padding: '3% 15%' }}>
        <div className="divcart">
          <div className="headercart">
            <h1>Your Order</h1>
            <h1>Time</h1>
            <h1>Total</h1>
          </div>

          <div className="ordercard">
            <div className="deleteorder">
              <CloseCircleFilled style={{ color: '#E25C22' }} />
            </div>
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
            <div className="deleteorder">
              <CloseCircleFilled style={{ visibility: 'hidden' }} />
            </div>
          </div>

          <div className="ordercard">
            <div className="deleteorder">
              <CloseCircleFilled style={{ color: '#E25C22' }} />
            </div>
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
            <div className="deleteorder">
              <CloseCircleFilled style={{ visibility: 'hidden' }} />
            </div>
          </div>

          <div className="ordercard">
            <div className="deleteorder">
              <CloseCircleFilled style={{ color: '#E25C22' }} />
            </div>
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
            <div className="deleteorder">
              <CloseCircleFilled style={{ visibility: 'hidden' }} />
            </div>
          </div>

          <div className="sumprice">
            <h1
              style={{
                textDecoration: 'underline',
                color: '#69B293',
                fontWeight: 'bold'
              }}
            >
              60,000 THB
            </h1>
          </div>
        </div>
        <div className="buttoncartpage">
          <button className="minibluebutton" onClick={handlerallconsultant}>
            Update Cart
          </button>
          <button className="minigreenbutton" onClick={handlerpayment}>
            confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
