import React from 'react'
import Navbar from '../constitutive/Navbar'
import { CloseCircleFilled } from '@ant-design/icons'
import swal from 'sweetalert'

function AdminPage() {
  function onChange(date, dateString) {
    console.log(date, dateString)
  }

  const successpayment = () =>
  swal('Payment Success!', 'correct Transfer', 'success')
  
  return (
    <div>
      <Navbar />
      <div style={{ padding: '3% 15%' }}>
        <div className="divcart">
          <div className="admincart">
            <div className="admincart-bookingno">
              <h1>Order No.</h1>
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
              <CloseCircleFilled style={{ color: '#E25C22' }} />
            </div>
            <div className="adminlist">
              <div className="adminlist-no">
                <h1>1</h1>
              </div>
              <div className="adminlist-pic">
                <img src="https://res.cloudinary.com/dpacp5tew/image/upload/c_scale,h_120,w_100/v1621879445/EEgmYqfU0AEoRhw_avm0yz.jpg" alt="consultantpic" />
              </div>
              <div className="adminlist-bank">
                <h2>KBank</h2>
              </div>
              <div className="adminlist-amount">
                <h2>2,900</h2>
              </div>
              <div className="adminlist-button">
                <button className="adminconfirmbutton" onClick={successpayment}>confirm</button>
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
            <div className="adminlist">
              <div className="adminlist-no">
                <h1>2</h1>
              </div>
              <div className="adminlist-pic">
                <img src="https://res.cloudinary.com/dpacp5tew/image/upload/c_scale,w_70/v1621879223/CYMERA_20180509_193912_052418_020247_PM_lkbfoh.jpg" alt="consultantpic" />
              </div>
              <div className="adminlist-bank">
                <h2>SCB</h2>
              </div>
              <div className="adminlist-amount">
                <h2>3,000</h2>
              </div>
              <div className="adminlist-button">
                <button className="adminconfirmbutton" onClick={successpayment}>confirm</button>
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
            <div className="adminlist">
              <div className="adminlist-no">
                <h1>3</h1>
              </div>
              <div className="adminlist-pic">
                <img src="https://res.cloudinary.com/dpacp5tew/image/upload/c_scale,h_120,w_100/v1621879222/qada4t1gpE3k5o9r15a-s_pfiy6e.jpg" alt="consultantpic" />
              </div>
              <div className="adminlist-bank">
                <h2>Bangkok Bank</h2>
              </div>
              <div className="adminlist-amount">
                <h2>3,200</h2>
              </div>
              <div className="adminlist-button">
                <button className="adminconfirmbutton" onClick={successpayment}>confirm</button>
              </div>
            </div>
            <div className="deleteorder">
              <CloseCircleFilled style={{ visibility: 'hidden' }} />
            </div>
          </div>

          <div className="sumprice">
            <div className="adminlist-total">
              <h1
                style={{
                  textDecoration: 'underline',
                  color: '#69B293',
                  fontWeight: 'bold',
                  paddingLeft:'35px'
                }}
              >
               9,100
              </h1>
            </div>
          </div>
        </div>
        {/* <div className="buttoncartpage">
          <button className="minibluebutton">Edit</button>
        </div> */}
      </div>
    </div>
  )
}

export default AdminPage
