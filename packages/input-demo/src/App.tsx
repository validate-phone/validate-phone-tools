import { PhoneInput as AntdPhoneInput, PhoneInputFormItem } from '@validate-phone/antd-input'
import { PhoneInput } from '@validate-phone/react-input'
import { Col, Form, Row, Space, Typography } from 'antd'
import 'antd/dist/antd.css'
import { useState } from 'react'
import './App.css'

function App() {
  const [valid, setValid] = useState<boolean>()

  function handleValidation(isValid: boolean) {
    setValid(isValid)
  }

  return (
    <Row style={{ marginTop: '40px' }}>
      <Col span={6} offset={9}>
        <Form>
          <PhoneInputFormItem
            name="phone"
            label="Phone number"
            errorMessage="Please provide a valid phone number"
            hasFeedback
            countryCode="HU"
          >
            <AntdPhoneInput />
          </PhoneInputFormItem>
        </Form>
      </Col>
      <Col span={6} offset={9}>
        <Space direction="vertical" size={40}>
          <div>
            <h4>validateOnBlur</h4>
            <PhoneInput onValidation={handleValidation} validateOnBlur />
          </div>
          <div>
            <h4>validateOnChange</h4>
            <PhoneInput onValidation={handleValidation} validateOnChange />
          </div>
          <div>
            <h4>validateOnChangeDelayed</h4>
            <PhoneInput onValidation={handleValidation} validateOnChangeDelayed />
          </div>
        </Space>

        <div>{`isValid: ${String(valid)}`}</div>
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
