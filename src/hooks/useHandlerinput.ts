import React, { useEffect, useState } from "react";
import { InputValue } from '../types/componets/input-text-types'

export default function useHandlerInput (initialState: InputValue, clear: boolean) {
  const [value, setValue] = useState(initialState)

  const onChange = ({ target }: React.ChangeEvent <HTMLInputElement>) => {
    setValue(target.value)
  }

  useEffect(()=>{
      setValue('')
  },[clear])

  return { value, onChange}
}
