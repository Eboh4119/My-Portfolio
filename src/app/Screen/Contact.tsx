import { useEffect, useState } from "react"

export default function Contact () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (emailRegex.test(email)) {
           setSuccess('Sent Successfully')
           setError('')
        }else if (!emailRegex.test(email) && email === "") {
            setError('This email is not valid')
        }
    }

    return(
        <div className="pt-16 media">
                <form action="" method="post" onSubmit={handleSubmit} className="py-9 px-6 grid justify-center items-center gap-5 text-white">
                <div className="mx-auto">
                    <input type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="inputs"/>
                </div>

                <div className="mx-auto">
                    <input type="text" 
                    placeholder="Enter PhoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="inputs"/>
                </div>

                <div className="mx-auto">
                    <input type="text" 
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputs"/>
                    {error && <div className="text-red-700 font-medium">{error}</div>}
                </div>

                <div>
                    <textarea className="inputs w-[500px] h-[200px] max-sm:w-[300px]"
                     placeholder="Enter Message"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     ></textarea>
                </div>
                
                <button className="bg-violet-700 py-3 px-3 font-bold rounded">Submit</button>

                {/* success message */}
                {success && <div className="bg-white py-6 px-6 mb-72 ml-30 absolute text-4xl text-green-500 text-center sent-text items-center font-bold rounded">{success}</div>}
                </form>
        </div>
    )
}