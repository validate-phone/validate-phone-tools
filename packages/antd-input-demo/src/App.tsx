import { PhoneInput, PhoneInputFormItem } from '@validate-phone/antd-input'
import { Col, Form, Row, Typography } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import './App.css'

function App() {
  return (
    <Row style={{ marginTop: '40px' }}>
      <Col span={6} offset={9}>
        <Form>
          <PhoneInputFormItem
            name="phone"
            label="Phone number"
            errorMessage="Please provide a valid phone number"
            hasFeedback
          >
            <PhoneInput />
          </PhoneInputFormItem>
        </Form>
      </Col>
      <Col span={8} offset={8}>
        <Typography.Link href="https://github.com/validate-phone">
          https://github.com/validate-phone/validate-phone-tools
        </Typography.Link>
      </Col>
    </Row>
  )
}

export default App
