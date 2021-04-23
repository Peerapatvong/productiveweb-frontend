import React, { useState, useContext } from 'react'
import Navbar from '../constitutive/Navbar'
import { useHistory } from 'react-router-dom'

function Editconsultantpage() {
  const history = useHistory()
  const handlerallconsultant = () => history.push('/allconsultant')

  return (
    <div>
      <Navbar />
      <div className="divpage">
        <div className="consultantcard">
          <img src="https://picsum.photos/200" alt="logo" />
          <div style={{ marginTop: '20px' }}>
            <h1 style={{ marginBottom: '0px' }}>Steve job</h1>
          </div>
          <div>
            <h2 style={{ marginBottom: '0px' }}>ceo at apple</h2>
          </div>
        </div>

        <div className="pricecard">
          <div
            style={{
              backgroundColor: '#EFEFEF',
              height: '80%',
              padding: '5%',
              borderRadius: '15px',
              marginBottom: '20px'
            }}
          >
            <div>
              <div>
                <h1>get consult about business</h1>
              </div>
            </div>

            <div className="interesttag">
              <div className="bluetag" style={{ marginRight: '15px' }}>
                business
              </div>
              <button className="bluetag">Add</button>
            </div>
            <div className="totalcard">
              <div>
                <h2>price: 20,000 THB/Hr</h2>
              </div>
            </div>
          </div>
          <div className="pricebutton">
            <button
              className="minibluebutton"
              type="button"
              style={{ marginRight: '15px' }}
            >
              Edit
            </button>
            <button
              className="minigreenbutton"
              type="button"
              onClick={handlerallconsultant}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editconsultantpage
