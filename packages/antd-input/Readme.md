# Validate phone numbers for web

- <1Kb
- Zero Dependency
- Fetch API
- Utilizes validatephonenumber.com free API
- Compatible with all major modern browsers

## How to use

### ES6

```ts
import { isValidPhoneNumber } from '@validate-phone/web'

const isValid = await validatePhoneNumber('+123456789')
```

### CommonJS

```js
const { isValidPhoneNumber } = require('@validate-phone/web')

const isValid = await validatePhoneNumber('+123456789')
```
