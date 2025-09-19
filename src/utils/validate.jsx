
export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)

    if(email === "" || password === "") return "Fields cannot be empty"
    if (!isEmailValid) return "Invalid Email"
    if (!isPasswordValid) return "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number"
   

    return null
}