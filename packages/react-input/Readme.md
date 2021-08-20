# Minimalistic React input component with phone number validation

- <2kB
- Utilizes validatephonenumber.com free API
- Compatible with all modern browsers

## Install

```
npm i @validate-phone/react-input
```

## How to use

```ts
import { PhoneInput } from '@validate-phone/react-input'

export function MyApp() {
  const [valid, setValid] = useState(false)

  return (
    <>
      <PhoneInput onValidation={(isValid) => setValid(isValid)} />
      <div>{String(valid)}</div>
    </>
  )
}
```

```ts
export interface PhoneInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onValidation?: (isValid: boolean) => void
  // default: false
  validateOnChange?: boolean
  // default: true
  // if true, defaults to 400 (400ms delay)
  validateOnChangeDelayed?: boolean | number
  // default: true
  // false if validateOnChange is true
  validateOnBlur?: boolean
}
```
