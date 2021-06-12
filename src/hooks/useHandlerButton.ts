import { HandlerEvent } from "../types/componets/button-types";
import React from "react";

const useHandlerButton  = ( handler: HandlerEvent) =>{

  const onClick = (e: React.MouseEvent <HTMLButtonElement>) =>{
      handler.handler(e)
  }
  const onSubmit = (e: React.FormEvent <HTMLButtonElement>) =>{
    e.preventDefault()
    // @ts-ignore
    handler.handler(e)
  }

  return handler.type === 'submit' ? { onSubmit } : { onClick }

}

export default useHandlerButton
