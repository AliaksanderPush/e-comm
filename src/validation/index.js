export const loginValidate = {
  required: 'Please enter your login',
  validate: value => {
    if (!value.match(/^[a-zA-Z](.[a-zA-Z0-9_-]*)$/)) {
      return 'Please check the entered data again';
    } else if (value.length > 14) {
      return 'The login is too long';
    }
    return true;
  },
};

export const passwordValidate = {
  required: 'Please enter your password',
  validate: value => {
    if (!value.match(/^[a-zA-Z0-9]{3,20}$/)) {
      return 'The password must contain Letters + digits!';
    } else if (value.length > 20) {
      return 'The password is too long';
    }
    return true;
  },
};

export const emailValidate = {
  required: 'Enter your email',
  validate: value => {
    if (!value.match(/^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/)) {
      return "Sorry, we don't recognize this email";
    } else if (value.length > 20) {
      return 'The email is too long';
    }
    return true;
  },
};

export const sendCodeValidate = {
  required: 'Enter code',
  validate: value => {
    if (!value.match(/^[0-9]{4}$/)) {
      return 'Sorry,the code must consist 4 of integer';
    }
    return true;
  },
};

export const confirmNewPassword = {
  required: 'Enter code',
  validate: (value1, value2) => {
    console.log('val1=>', value1);
    console.log('val2=>', value2);
    if (value1 !== value2) {
      return 'Sorry, passwords do not match';
    } else if (passwordValidate(value1)) {
      console.log('validate=>', passwordValidate(value1));
    }
    return true;
  },
};
