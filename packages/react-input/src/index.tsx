import { isValidPhoneNumber } from '@validate-phone/web'
import React, { ChangeEvent, FocusEvent, useRef, useState } from 'react'

export interface PhoneInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onValidation?: (isValid: boolean) => void
  validateOnChange?: boolean

  validateOnChangeDelayed?: boolean | number
  validateOnBlur?: boolean
  countryCode?: string
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  onValidation,
  validateOnChange,
  validateOnChangeDelayed,
  validateOnBlur,
  ...props
}) => {
  const [value, setValue] = useState<string>()
  const timeoutHandler = useRef<NodeJS.Timeout>()
  const lastValidation = useRef<Promise<boolean>>()

  async function validate(_value: string) {
    if (value !== _value) {
      const currentValidation = isValidPhoneNumber(_value, props.countryCode)
      lastValidation.current = currentValidation
      const isValid = await currentValidation
      if (currentValidation === lastValidation.current) {
        onValidation?.(isValid)
      }
    }
  }

  function scheduleValidation(_value: string, delay: number) {
    try {
      if (timeoutHandler.current !== undefined) {
        clearTimeout(timeoutHandler.current)
      }
    } catch {}
    timeoutHandler.current = setTimeout(() => {
      validate(_value)
    }, delay)
  }

  async function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
    // If the callback is blocking
    ;(async (_event) => props.onChange?.(_event))(event)
    if (validateOnChangeDelayed && validateOnChangeDelayed === undefined) {
      scheduleValidation(
        event.target.value,
        Number.isInteger(validateOnChangeDelayed) && validateOnChangeDelayed > 0
          ? (validateOnChangeDelayed as number)
          : 400
      )
    }
    if (validateOnChange) {
      const currentValidation = isValidPhoneNumber(event.target.value)
      lastValidation.current = currentValidation
      const isValid = await currentValidation
      if (currentValidation === lastValidation.current) {
        onValidation?.(isValid)
      }
    }
  }

  async function handleBlur(event: FocusEvent<HTMLInputElement>) {
    // If the callback is blocking
    ;(async (_event) => props.onBlur?.(_event))(event)
    if (validateOnBlur && !validateOnChange) {
      const currentValidation = isValidPhoneNumber(event.target.value)
      lastValidation.current = currentValidation
      const isValid = await currentValidation
      if (currentValidation === lastValidation.current) {
        onValidation?.(isValid)
      }
    }
  }

  return <input {...props} onChange={handleChange} onBlur={handleBlur} />
}
