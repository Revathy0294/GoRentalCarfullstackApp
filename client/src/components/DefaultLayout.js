import React from 'react'
import { Menu, Dropdown, Button , Row, Col} from 'antd';
import { DownOutlined } from '@ant-design/icons';

function DefaultLayout(props) {

  const user = JSON.parse(localStorage.getItem('user'))
  const isAdmin = user && user.username === 'admin';
  const menu = (
    <Menu>
      <Menu.Item key="1"> <a href="/userbookings"></a>Bookings</Menu.Item>
      <Menu.Item key="2">
      <a href="/">Home</a>
      
      </Menu.Item>
      {/* <Menu.Item key="3">Profile</Menu.Item> */}
      <Menu.Item onClick={()=>{
         localStorage.removeItem('user');
         window.location.href='/login' 

      }} key="4"><li>Logout  </li></Menu.Item>
     {isAdmin && (
        <Menu.Item>
          <a href="/admin">Admin</a>
        </Menu.Item>
      )}
    </Menu>
  );

return (
    <div>
          <div className="header bs1">

          <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
              <h1>GoRental</h1>

             <Dropdown overlay={menu}>
      <Button>
        {user.username} <DownOutlined />
      </Button>
    </Dropdown>
        </div>
              </Col>
          </Row>
          {/* <Row gutter={16} justify='center'>
              
            <Col lg={20} sm={24} xs={24}>
            </Col> 
               </Row>
            <div className="d-flex justify-content-between">

              <h1>GoRental</h1>
              <Dropdown overlay={menu}>
      <Button>
        {user.username} <DownOutlined />
      </Button>
    </Dropdown>
           
             </div> */}

          </div>
          <div className="content">
            {props.children}
             
          </div>


          
          


    </div>
)





}
export  default DefaultLayout