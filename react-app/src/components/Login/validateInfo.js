export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Bạn chưa nhập tài khoản ';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Bạn chưa nhập email';
    } 
    if (!values.password) {
      errors.password = 'Bạn chưa nhập mật khẩu';
    } 
    if (!values.password2) {
      errors.password2 = 'Bạn chưa nhập mật khẩu';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Mật khẩu không trùng khớp';
    }
    return errors;
  }