import React, { useState } from "react";
import { InputValue } from '../types/componets/input-text-types'

export default function useHandlerInput (initialState: InputValue) {
  const [value, setValue] = useState(initialState)

  const onChange = ({ target }: React.ChangeEvent <HTMLInputElement>) => {
    setValue(target.value)
  }
  return { value, onChange}
}
