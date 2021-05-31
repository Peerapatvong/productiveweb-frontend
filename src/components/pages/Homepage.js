import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../constitutive/Navbar'
import { Card, Row, Col, Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { Modal } from 'antd'
import { useAuthContext } from '../context/AuthContextProvider'

function Homepage() {
  const [show, setShow] = useState()

  async function getDataAllCourse() {
    const dataCourse = await axios.get('/course/getallcourse')
    console.log(dataCourse)
    setShow(dataCourse.data.allCourse)
  }

  useEffect(() => {
    getDataAllCourse()
    getTypeCourse()
    getUser()
  }, [])
  
  const history = useHistory()

  // Single Page Fn
  function handleSingleCourseToInfo(e, item) {
    // console.log(item)
    history.push('/infocourse/' + item.id)
  }

  // Modal Add Course Fn
  const [isModalAddCourseVisible, setIsModalAddCourseVisible] = useState(false)
  const [inputCourseAdd, setInputCourseAdd] = useState({})
  const [inputImgCourseAdd, setInputImgCourseAdd] = useState(null)
  const [typeCourseIdToAdd, setTypeCourseIdToAdd] = useState()

  const showModalAddCourse = () => {
    setIsModalAddCourseVisible(true)
  }

  const handleOkAddCourse = async () => {
    const formData = new FormData()
    formData.append('image', inputImgCourseAdd)
    const res = await axios.post('/upload/single', formData)

    await axios.post('/course/addcourse', {
      courseInfo: inputCourseAdd.courseInfo,
      courseName: inputCourseAdd.courseName,
      coursePrice: inputCourseAdd.coursePrice,
      courseTeacher: inputCourseAdd.courseTeacher,
      coursePicture: res.data.img,
      courseVideo: inputCourseAdd.courseVideo,
      TypeCourseId: +typeCourseIdToAdd
    })
    console.log(inputCourseAdd)
    getDataAllCourse()
    setIsModalAddCourseVisible(false)
  }

  const handleCancelAddCourse = () => {
    setInputCourseAdd({
      courseInfo: '',
      courseName: '',
      coursePrice: '',
      courseTeacher: '',
      coursePicture: '',
      courseVideo: '',
      TypeCourseId: ''
    })
    setInputImgCourseAdd(null)
    setIsModalAddCourseVisible(false)
    setShowTypeCourse('choose Type Course')
    setTypeCourseIdToAdd()
  }
  
  const handleInputCourseAddChange = (e) => {
    setInputCourseAdd((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value
    }))
  }
  // console.log(inputCourseAdd)

  const handleImgCourseAddChange = (e) => {
    console.log('image', e)

    if (e.target.files[0]) {
      setInputImgCourseAdd(e.target.files[0])
    } else {
      setInputImgCourseAdd(null)
    }
  }

  // Dropdown Fn
  const [typeCourseFromServer, setTypeCourseFromServer] = useState()

  async function getTypeCourse() {
    const resTypeCourse = await axios.get('/typecourse/findalltypecourse')
   
    setTypeCourseFromServer(resTypeCourse.data.findAllTypeCourse)
    console.log(resTypeCourse)
  }

  const [showTypeCourse, setShowTypeCourse] = useState('choose Type Course')
  function handleChangeType(e, item) {
    // console.log(e.target.id)
    // console.log(item)
    // console.log(e)
    setShowTypeCourse(e.target.id)
    setTypeCourseIdToAdd(item.id)
    // console.log('1', showTypeCourse)
    // console.log('2', typeCourseIdToAdd)
  }

  const menu = (
    <Menu>
      {typeCourseFromServer?.map((item, index) => {
        // console.log(item)
        return (
          <Menu.Item key={item?.id}>
            <a
              id={item.nameTypeCourse}
              title={item.id}
              onClick={(e) => handleChangeType(e, item)}
            >
              {item.nameTypeCourse}
            </a>
          </Menu.Item>
        )
      })}
    </Menu>
  )

  const { getUser, user } = useAuthContext()

  return (
    <>
      <div style={{ width: '100vw' }}>
        <Navbar />
        <div>
          {user?.status === 'ADMIN' ? (
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <button className="addcoursebutton" onClick={showModalAddCourse}>
                Add Course
              </button>
            </div>
          ) : (
            <div></div>
          )}

          <div className="allCourse">
            <Row
              // gutter={24}
              justify="row"
              align="middle"
              className="rowcourse"
              // style={{ margin: '3% 20% 3% 20%' }}
              style={{marginTop: '50px',marginBottom:'50px' }}
            >
              <Col className="gutter-row">
                <Row justify="center" align="middle">
                  {show?.map((item) => {
                    console.log(item)
                    return(
                    <Card
                      onClick={(e) => handleSingleCourseToInfo(e, item)}
                      hoverable
                      style={{ width: '30vw' }}
                      cover={<img src={item?.coursePicture} />}
                    >
                      <div className="interesttag">
                        <div
                          className="orangetag"
                          style={{ marginBottom: '3%' }}
                        >
                          {item.TypeCourse.nameTypeCourse}
                        </div>
                      </div>
                      <h2>{item.courseName}</h2>
                      <p>{item.courseInfo}</p>
                      <div className="cardbox-center">
                        <h2 className="greentext">{item.coursePrice}บาท</h2>
                      </div>
                    </Card>
                  )})}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <Modal
        title="Add Course"
        visible={isModalAddCourseVisible}
        onOk={handleOkAddCourse}
        onCancel={handleCancelAddCourse}
      >
        <div className="modal-addcourse">
          <label>Course Name</label>
          <input
            type="text"
            name="courseName"
            value={inputCourseAdd.courseName}
            onChange={handleInputCourseAddChange}
          />
        </div>
        <div className="modal-addcourse">
          <label>Course Info</label>
          <input
            type="text"
            name="courseInfo"
            value={inputCourseAdd.courseInfo}
            onChange={handleInputCourseAddChange}
          />
        </div>
        <div className="modal-addcourse">
          <label>Course Teacher</label>
          <input
            type="text"
            name="courseTeacher"
            value={inputCourseAdd.courseTeacher}
            onChange={handleInputCourseAddChange}
          />
        </div>
        <div className="modal-addcourse">
          <label>Course Price</label>
          <input
            type="text"
            name="coursePrice"
            value={inputCourseAdd.coursePrice}
            onChange={handleInputCourseAddChange}
          />
        </div>
        <div className="modal-addcourse">
          <label>Course Video</label>
          <input
            type="text"
            name="courseVideo"
            value={inputCourseAdd.courseVideo}
            onChange={handleInputCourseAddChange}
          />
        </div>
        <div className="modal-addcourse">
          <label>Course Picture</label>
          <input
            type="file"
            name="coursePicture"
            value={inputCourseAdd.coursePicture}
            onChange={handleImgCourseAddChange}
          />
        </div>
        <div className="modal-addcourse">
          <img
            src={
              inputImgCourseAdd ? URL.createObjectURL(inputImgCourseAdd) : null
            }
            style={{ maxWidth: '400px', maxHeight: '300px' }}
          />
        </div>
        <div>
          <div className="information-course" style={{ width: '50%' }}>
            <div>
              <Dropdown
                overlay={menu}
                trigger={['click']}
                style={{ width: '400px' }}
              >
                <a
                  className="ant-dropdown-link"
                  style={{
                    backgroundColor: '#dd8272',
                    outline: 'default',
                    width: '120px',
                    height: '30px',
                    borderRadius: '15px',
                    padding: '10px',
                    marginRight: '5px',
                    color: 'white',
                    textAlign: 'center'
                    // backgroundColor: "#f8edac",
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  {showTypeCourse} <DownOutlined />
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Homepage
