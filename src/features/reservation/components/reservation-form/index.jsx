import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './ReservationForm.css';
import TableIllustration from '../../../../shared/assets/images/Table illustration.png';
import MultiTablesIllustration from '../../../../shared/assets/images/Multy tables.png';
import RestaurantIllustration from '../../../../shared/assets/images/Resaurant illustration.png';
import EventIllustration from '../../../../shared/assets/images/Event illustration.png';

const MOCK_RESERVATION_TYPES = [
  {
    id: 1,
    title: 'Reserve a table',
    image: TableIllustration
  },
  {
    id: 2,
    title: 'Reserve multiple tables',
    image: MultiTablesIllustration
  },
  {
    id: 3,
    title: 'Reserve all restaurant',
    image: RestaurantIllustration
  },
  {
    id: 4,
    title: 'Reserve for Event',
    image: EventIllustration
  }
];

export function ReservationForm() {
  const [selectedType, setSelectedType] = useState(1); // Default to first type
  const [formData, setFormData] = useState({
    date: null,
    time: '',
    timeFrom: '',
    timeTo: '',
    guests: '',
    tablesNumber: '',
    eventType: '',
    decoration: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      date
    }));
  };

  return (
    <Container className="py-5">
      <h2 className="mb-5">
        <span className="text-danger">Reserve</span> Details
      </h2>

      {/* Reservation Types Selection */}
      <Row className="mb-5 g-4 justify-content-center">
        {MOCK_RESERVATION_TYPES.map((type) => (
          <Col key={type.id} xs={12} sm={6} md={3}>
            <Card 
              className={`h-100 text-center reservation-card ${selectedType === type.id ? 'selected' : ''}`}
              onClick={() => setSelectedType(type.id)}
            >
              <Card.Body>
                <Card.Title className="fs-6 mb-3">{type.title}</Card.Title>
                <Card.Img 
                  variant="bottom" 
                  src={type.image} 
                  className="reservation-img"
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Reservation Form */}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-4 row align-items-center">
            <Form.Label column sm={4}>Booking date</Form.Label>
            <Col sm={8}>
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                className="form-control"
                placeholderText="Select Date"
                dateFormat="dd/MM/yyyy"
              />
            </Col>
          </Form.Group>

          {/* Standard Booking Time (Hidden for Event) */}
          {selectedType !== 4 && (
            <Form.Group className="mb-4 row align-items-center">
              <Form.Label column sm={4}>Booking Time</Form.Label>
              <Col sm={8}>
                <Form.Select 
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                >
                  <option value="">Select Time</option>
                  <option value="18:00">06:00 PM</option>
                  <option value="19:00">07:00 PM</option>
                  <option value="20:00">08:00 PM</option>
                  <option value="21:00">09:00 PM</option>
                </Form.Select>
              </Col>
            </Form.Group>
          )}

          {/* Event Booking Time Range (Only for Event) */}
          {selectedType === 4 && (
            <Form.Group className="mb-4 row align-items-center">
              <Form.Label column sm={4}>Booking Time</Form.Label>
              <Col sm={8} className="d-flex align-items-center gap-2">
                <span>From</span>
                <Form.Control
                  type="time"
                  name="timeFrom"
                  value={formData.timeFrom}
                  onChange={handleInputChange}
                />
                <span>To</span>
                <Form.Control
                  type="time"
                  name="timeTo"
                  value={formData.timeTo}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>
          )}

          {/* Conditional Field: Tables Number (Only for "Reserve multiple tables") */}
          {selectedType === 2 && (
            <Form.Group className="mb-4 row align-items-center">
              <Form.Label column sm={4}>Tables number</Form.Label>
              <Col sm={8}>
                <Form.Select 
                  name="tablesNumber"
                  value={formData.tablesNumber}
                  onChange={handleInputChange}
                >
                  <option value="">Select Number</option>
                  <option value="2">2 tables</option>
                  <option value="3">3 tables</option>
                  <option value="4">4 tables</option>
                  <option value="5">5 tables</option>
                </Form.Select>
              </Col>
            </Form.Group>
          )}

          {/* Conditional Fields: Event Type & Decoration (Only for "Reserve for Event") */}
          {selectedType === 4 && (
            <>
              <Form.Group className="mb-4 row align-items-center">
                <Form.Label column sm={4}>Type of event</Form.Label>
                <Col sm={8}>
                  <Form.Select 
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Event</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Party">Party</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group className="mb-4 row align-items-center">
                <Form.Label column sm={4}>Decoration</Form.Label>
                <Col sm={8}>
                  <Form.Select 
                    name="decoration"
                    value={formData.decoration}
                    onChange={handleInputChange}
                  >
                    <option value="">Select decoration</option>
                    <option value="Wedding décor">Wedding décor</option>
                    <option value="Birthday décor">Birthday décor</option>
                    <option value="Graduation décor">Graduation décor</option>
                    <option value="Galaxy décor">Galaxy décor</option>
                    <option value="Old Europe décor">Old Europe décor</option>
                    <option value="Others">Others</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </>
          )}

          <Form.Group className="mb-4 row align-items-center">
            <Form.Label column sm={4}>Guests</Form.Label>
            <Col sm={8}>
              <Form.Control 
                type="number" 
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                placeholder="Enter number"
              />
            </Col>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-4 h-100">
            <Form.Label>Notes</Form.Label>
            <Form.Control 
              as="textarea" 
              className="h-75"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Enter your notes, important details or special request"
            />
          </Form.Group>
        </Col>
      </Row>

      <div className="text-center mt-4">
        <Button className="reserve-btn text-white" size="lg">
          Reserve Now
        </Button>
      </div>
    </Container>
  );
}
