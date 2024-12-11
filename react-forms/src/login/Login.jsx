import FormInput from "../common/FormInput"

const Login = () => {

    const formItems = [
        {
            label: "Firstname",
            name: "firstname",
            type: "text",
            placeholder: "Enter your firstname"
        },
        {
            label: "Lastname",
            name: "lastname",
            type: "text",
            placeholder: "Enter your lastname"
        },
        {
            label: "Phone",
            name: "Phone",
            type: "phone",
            placeholder: "Enter your phone"
        },
        {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter your email"
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            placeholder: "Enter your password"
        },
    ]

    const buttons = [
        {
            title: "Login",
            style: "bg-green-700 text-white py-3 rounded-md",
            action: () => {}
        },
        {
            title: "Don't have an account?",
            style: "",
            action: () => {}
        },
        {
            title: "Forgot password?",
            style: "text-red-600",
            action: () => {}
        },
    ]



    return (
        <form formItems={formItems} buttons={buttons}></form>
    )
}

export default Login