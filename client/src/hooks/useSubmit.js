import { useState } from "react";
import { send } from 'emailjs-com';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const submit = async (url, data) => {
        const random = Math.random();
        setLoading(true);
        try {
            await wait(2000);
            if (random < 0.5) {
                throw new Error("Something went wrong");
            }
            send(
                'service_ak-projects',
                'template_me0gf7v',
                data,
                'agJWxeoZ_cB9hOqCK'
            )
            setResponse({
                type: 'success',
                message: `Thanks for your submission ${data.from_name}, we will get back to you shortly!`,
            })
        } catch (error) {
            setResponse({
                type: 'error',
                message: 'Something went wrong, please try again later!',
            })
        } finally {
            setLoading(false);
        }
    };
    return { isLoading, response, submit };
}

export default useSubmit;