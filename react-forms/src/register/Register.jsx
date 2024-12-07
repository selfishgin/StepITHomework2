import FormInput from "../common/FormInput"
import Form from "../common/Form"

const Register = () => {

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
            title: "Register",
            style: "bg-green-600 py-3 rounded-md",
            action: () => {}
        },
        {
            title: "Already have an account?",
            style: "",
            action: () => {}
        }
    ]


    return (
        <Form formItems={formItems} buttons={buttons}/>
    )
}

export default Register