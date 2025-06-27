'use client'

import axios from 'axios'
import { useState } from 'react'

interface Model {
    name: string
    id: string
    text: string
    value: string
}

API_URL = "https://huggingface.co/spaces/DerrickMuturi/sira-backend/text"

const ModelSelection = (model: Model) => {
    const [bot_reply, setBot_reply] = useState("")

    const handleClick = async (model_name: string) => {
        try {
            const response = await axios.post(API_URL, {
                text: model.text,
                model_name: model_name
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(response.data)
            setBot_reply(response.data.message)

        } catch (error) {
            const bot_error = 'Sorry an error occured. Please try again!'
            console.log(error)
            setBot_reply(bot_error)
        }
    }

    return (
        <div>
            <button
                onClick={() => handleClick(model.id)}
                value={bot_reply}
                title="model_button"
                type="button"
                className="rounded-xl p-2 border-2 border-gray-400 hover:cursor-pointer"
                id='google'>
                {model.name}
            </button>
        </div>
    )
}

export default ModelSelection
