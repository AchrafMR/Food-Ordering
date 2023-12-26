import React from "react";
import "../styles/contact.css"
import { Container, Row, Col } from "reactstrap";
// import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return <>
<Container>
    <Row>
    <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <form className="form mb-5">
    <div>
      <h1>contact Us</h1>
      <p>feel free us any time . We will get back to you as soon as we can</p>
      <div className="orm__group">
      <input type="text" name="" id="" placeholder="name"/>
      </div><br />
      <div className="orm__group">
      <input type="text" name="" id="" placeholder="Email"/>
     
      </div><br /><div className="orm__group">
      <input type="text" name="" id="" placeholder="Message"/>
      </div><br />
      <button className="addTOCart__btn">Send</button>
    </div>
    <div className="info">
      <h4><i class="ri-email-line"></i> achrafmechhour01@gmail.com</h4>
      <h4> <i class="ri-phone-line"></i> 0615363002</h4>
      <h4> sidi jaberv beni mellal morocco</h4>
      <h4>Sunday - Thursday 10:00am - 11:00pm</h4>
      <h4>Friday - Saturday Off day</h4>

    </div>
  </form>
            </Col>
          </Row>
        </Container>
     
  </>
};

export default Contact;
