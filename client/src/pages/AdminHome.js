import React, {useState,useEffect} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import Spinner from '../components/Spinner'
import { useSelector , useDispatch } from 'react-redux'
import { deleteCar,getAllCars } from '../redux/actions/carsActions'
import { Button, Row, Col, Edit } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {  message, Popconfirm } from 'antd';
function AdminHome() {
    const {cars} = useSelector(state=>state.carsReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const dispatch = useDispatch()
   

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

   

    
return (
    <DefaultLayout>

<Row justify="center" gutter={16} className="mt-2">
        <Col lg={20} sm={24}>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mt-1 mr-2">Admin Panel</h3>
            <button className="btn1">
              <a href="/addcar">ADD CAR</a>
            </button>
          </div>
        </Col>
      </Row>


      
      {loading == true && (<Spinner/>)}


       
<Row justify='center' gutter={16} className='mt-5'>

  {cars.map(car=>{
    return <Col lg={5} sm={24} xs={24}>
         <div className="car p-2 bs1 mt-3">
            <img src={car.image} className="carimg"/>
                {/* button */}
            <div className="car-content d-flex align-items-center justify-content-between">

                 <div>
                     <p>{car.name}</p>
                     <p> Rent Per Hour {car.rentPerHour} /-</p>
                 </div>
                 {/* <div>
                    <Button className="btn1 mr-2">Book Now</Button>
                 </div> */}


                 <div className="mr-4">
                 <Link to={`/editcar/${car._id}`}>
                      <EditOutlined
                        className="mr-3"
                        style={{ color: "green", cursor: "pointer" }}
                      />
                    </Link>

              
                    <Popconfirm
                      title="Are you sure to delete this car?"
                      onConfirm={()=>{dispatch(deleteCar({carid : car._id}))}}
                      
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteOutlined
                        style={{ color: "red", cursor: "pointer" }}
                      />
                    </Popconfirm>
                      
                 </div>

            </div>
         </div> 
    </Col>
})}

</Row>
          {/* <h1>Home page</h1>
          <h1>The length of cars array is  {cars.length}</h1>
          <Button type='primary'>Andt Button</Button> */}

    </DefaultLayout>
)





}
export  default AdminHome