import React, {useState,useEffect} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import Spinner from '../components/Spinner'
import { useSelector , useDispatch } from 'react-redux'
import { getAllCars } from '../redux/actions/carsActions'
import { Button, Row, Col } from 'antd';
import {Link} from 'react-router-dom'
function Home() {
    const {cars} = useSelector(state=>state.carsReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

return (
    <DefaultLayout>
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

                 <div>
                     <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
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
export  default Home