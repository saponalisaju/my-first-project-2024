
const LoginValidation = (values) => {
  const errMsg = {}

  if(!values.email) {
    errMsg.email = "Email is required"
  }
  if(!values.email) {
    const emailPattarn = (/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if(!emailPattarn.test(values.email)) {
      errMsg.email = "Please enter valid email"
    }
  }

  if(!values.password) {
    errMsg.password = "Password is required"
  } 
  if(values.password.length < 8) {
   if(!values.password.match(/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/)) {
    errMsg.password = "Please enter strong password"
   }
  }

  return errMsg;
}

export default LoginValidation
