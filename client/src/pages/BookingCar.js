import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars } from '../redux/actions/carsActions'
import DefaultLayout from '../components/DefaultLayout'
import Spinner from '../components/Spinner';
import { Row, Col, Divider , DatePicker, Space} from 'antd';
import moment from 'moment';
import { bookCar } from '../redux/actions/bookingActions';

 const {RangePicker} = DatePicker;
function BookingCar() {
  const { carid } = useParams();
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setCar] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if(cars.length==0) {
    dispatch(getAllCars());
}
    else  {
      setCar(cars.find((o) => o._id === carid));
    }
  }, [cars, carid, dispatch]);



  function selectTimeSlots(values) {
  
    console.log(moment(values[0]).format('MMM DD YYYY HH:mm'))
    console.log(moment(values[1]).format('MMM DD YYYY HH:mm'))
  }
 
  function bookNow(){
    const reqobj = {

     user : JSON.parse(localStorage.getItem('user'))._id,
     car :car._id

    }

    dispatch(bookCar(reqobj))
  }

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "90vh" }}>
        <Col lg={10} sm={24} xs={24}>
          <img src={car.image} className="carimg2 bs1" />
        </Col>
        <Col lg={10} sm={24} xs={24} className="text-right">
        <Divider type="horizontal" dashed>
            Car Info </Divider>
            <div style={{ textAlign: "right" }}>
            <p>{car.name}</p>
            <p>{car.rentPerHour} Rent Per hour /-</p>
            <p>Fuel Type : {car.fuelType}</p>
            <p>Max Persons : {car.capacity}</p>
          </div>
          <Divider type="horizontal" dashed>
            Select Time Slots </Divider>
            <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD YYYY HH:mm"
            onChange={selectTimeSlots}
          />

          <button className='btn1' onClick={bookNow}>Book Now</button>
        </Col>

      </Row>
    </DefaultLayout>
  );
}

export default BookingCar;
