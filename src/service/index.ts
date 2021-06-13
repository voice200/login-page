export default class WorkService {
  //there is should be request for server

  resetPasswordTest = async (email: string)=>{
    return new Promise( (resolve: (value: any) => void) => {
      setTimeout(()=>{
        console.log(`message send to ${email} `)
        resolve(`message send to ${email} `)
      }, 4000)
    })
  }
}
