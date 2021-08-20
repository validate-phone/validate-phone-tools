import { isValidPhoneNumber } from '@validate-phone/web'
import { Form, FormItemProps, Input, InputProps } from 'antd'
import { NamePath, Rule, RuleRender } from 'rc-field-form/lib/interface'
import React, { useCallback, useMemo } from 'react'

interface PhoneInputProps extends InputProps {}

export const PhoneInput: React.FC<PhoneInputProps> = (props) => {
  return <Input {...props} />
}

export interface PhoneInputFormItemProps extends FormItemProps {
  name: NamePath
  skipValidityCheck?: boolean
  errorMessage?: string
}

export const PhoneInputFormItem: React.FC<PhoneInputFormItemProps> = ({
  errorMessage,
  ...props
}) => {
  const validatePhoneNumberRule: RuleRender = useCallback(() => {
    return {
      validator: async (_, value) => {
        if (props.skipValidityCheck) {
          return
        }
        if ((await isValidPhoneNumber(value)) !== true) {
          throw new Error(errorMessage ? errorMessage : 'Incorrect phone number')
        }
      },
      type: 'string'
    }
  }, [])

  const rules = useMemo(
    () => [validatePhoneNumberRule as Rule].concat(props.rules ? props.rules : []),
    [props.rules, validatePhoneNumberRule]
  )

  return (
    <Form.Item {...props} rules={rules}>
      {props.children}
    </Form.Item>
  )
}
