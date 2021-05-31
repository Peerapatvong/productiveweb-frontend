import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../constitutive/Navbar'
import { useHistory, useParams } from 'react-router-dom'

function InfoCoursePage() {
  const history = useHistory()

  const handleGotoPayment = (e, courseId) => {
    console.log(courseId)
    history.push('/payment/' + courseId)
  }

  const [showSingle, setShowSingle] = useState()

  const { courseId } = useParams()
  // console.log(courseId)

  async function getDataCourse() {
    const dataCourse = await axios.get('/course/getcourse/' + courseId)
    console.log(dataCourse)
    // console.log(dataCourse.data.course)
    setShowSingle(dataCourse.data.course)
  }
  // console.log(showSingle)

  useEffect(() => {
    getDataCourse()
  }, [])

  return (
    <div>
      <Navbar />
      <div>
        <div className="divpage">
          <div
            className="pricecard-course"
            style={{
              backgroundColor: '#EFEFEF'
            }}
          >
            <img
              src={showSingle?.coursePicture}
              alt="logo"
              style={{ width: '600px' }}
            />

            <div className="information-course">
              <div className="interesttag">
                <div className="orangetag" style={{ marginBottom: '3%' }}>
                  {showSingle?.TypeCourse.nameTypeCourse}
                </div>
              </div>
              <div>
                <h1>{showSingle?.courseName}</h1>
              </div>
              <div>
                <h3>{showSingle?.courseInfo}</h3>
              </div>
              <div>
                <h3>{showSingle?.courseTeacher}</h3>
              </div>
              <div style={{ marginBottom: '4%' }}>
                <h1>{showSingle?.coursePrice} บาท</h1>
              </div>

              <div className="pricebutton-course">
                <button
                  className="minigreenbutton"
                  type="button"
                  onClick={(e) => handleGotoPayment(e, showSingle?.id)}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCoursePage
