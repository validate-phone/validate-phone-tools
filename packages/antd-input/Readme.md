# antd phone number validation input

- Extends ant's **FormItem** and **Input** components
- Utilizes validatephonenumber.com free API

## Install

```
npm i @validate-phone/antd-input
```

## How to use

```ts
import { PhoneInput, PhoneInputFormItem } from '@validate-phone/antd-input'
import { Form } from 'antd'

export function MyApp() {
  return (
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
  )
}
```

```ts
export interface PhoneInputFormItemProps extends FormItemProps {
  skipValidityCheck?: boolean
  errorMessage?: string
  // Recognise local phone numbers in country
  // default: US
  countryCode?: string
}
```

```ts
export interface PhoneInputProps extends InputProps {}
```
