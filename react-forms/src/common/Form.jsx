import FormInput from "../common/FormInput"
import { useEffect, useState } from "react"

const Form = ({formItems, buttons}) => {

    const [formData, setFormData] = useState({})

    const handleInputChange = (name, value) =>{
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
        <form className="flex flex-col gap-5 max-w-[400px] mx-auto mt-12">
            {
                formItems.map(item => <FormInput handleInputChange={handleInputChange} label={item.label} name={item.name} type={item.type} placeholder={item.placeholder} />)
            }
            {
                buttons.map(button => <button onClick={button.action} className={button.style}>{button.title}</button>)
            }
        </form>
    )
}

export default Form