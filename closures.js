// closure Function

function createCounter(val) {
  let count = val;
  return {
    increment: () => count + 1,
    decrement: () => count - 1,
  };
}

const counter = createCounter(7);
console.log(counter.increment());
console.log(counter.decrement());

//validation using closure

const formValidation = (type) => {
  if (type === "email") {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (validateEmail = (email) => regex.test(email));
  }

  if (type === "password") {
    const regex =
      /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;
    return (validatePassword = (password) => regex.test(password));
  }
  if (type === "phone") {
    const regex = /^\+?[0-9]{10,12}$/;
    return (validatePhone = (phoneNo) => regex.test(phoneNo));
  }
};

const emailValidation = formValidation("email");
console.log(emailValidation("meena@gmail.com"));

const passwordValidation = formValidation("password");
console.log(passwordValidation("1234rjkkkkS"));

const phoneNoValidation = formValidation("phone");
console.log(phoneNoValidation(9087654387));

// session Manager
const sessionManager = () => {
  let currentUser = null;
  return {
    loginUser: (user) => {
      if (!user || !user.id || !user.name || !user.email) {
        return "Invalid user object";
      }
      currentUser = user;
      return `${user.name} logged in successfully`;
    },
    logOutUser: () => {
      if (!currentUser) {
        return "No user is currently logged in";
      }
      const name = currentUser.name;
      currentUser = null;
      return `${name} logged out successfully`;
    },
    getUser: () => (currentUser ? currentUser : "No Active Session"),
  };
};

const session = sessionManager();
console.log(
  session.loginUser({ id: 1, name: "meena", email: "dfjdj@gmail.com" })
);
console.log(session.getUser());
console.log(session.logOutUser());
console.log(session.getUser());
console.log(
  session.loginUser({ id: 2, name: "john", email: "duuhj@gmail.com" })
);
console.log(session.getUser());
