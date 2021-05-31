import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../constitutive/Navbar'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContextProvider'
import { useHistory } from 'react-router-dom'


function LearnPage() {
  const [ShowAllOrder, setShowAllOrder] = useState()
  const { userId } = useParams()
const history = useHistory()
  const{user}= useAuthContext()
  console.log(user)
  

  

  async function getUserOrder() {
   
    const infoOrder = await axios.get('/order/successorder/' + userId)

    setShowAllOrder(infoOrder.data.boughtCourse)
    console.log(infoOrder)
  }
  useEffect(() => {
    if (user?.id != userId){
     return history.push('/')
    }
    getUserOrder()
  }, [])

  return (
    <div>
      <Navbar />
      {ShowAllOrder?.map((item) => {
        console.log(item)
        return (
          <div>
            <div className="divpage" style={{ padding: '5%' }}>
              <div className="learncard-course">
                <div
                  className="learncard-info-course"
                  style={{ padding: '10px 10px' }}
                >
                  <div className="interesttag" style={{ marginRight: '40px' }}>
                    <div
                      className="orangetag-learn"
                      style={{ marginBottom: '3%' }}
                    >
                      {item.Course.TypeCourse.nameTypeCourse}
                    </div>
                  </div>
                  <div>
                    <h1>{item?.Course.courseName}</h1>
                    <h3>{item?.Course.courseTeacher}</h3>
                  </div>
                </div>
                <iframe
                  width="900"
                  height="500"
                  src={
                    item?.Course.courseVideo ||
                    'https://www.youtube.com/embed/68w2VwalD5w'
                  }
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LearnPage
