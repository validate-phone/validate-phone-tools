# Minimalistic React input with phone number validation

- <1Kb
- Utilizes validatephonenumber.com free API
- Compatible with all modern browsers

## How to use

```ts
import { PhoneInput } from '@validate-phone/react-input'

export function MyApp() {
  const [valid, setValid] = useState(false)

  return (
    <>
      <h2>Phone number</h2>
      <PhoneInput onValidation={(isValid) => setValid(isValid)} />
    </>
  )
}
```
