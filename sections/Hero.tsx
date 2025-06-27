'use client'
import ModelSelection from '../components/ModelSelection'
import { useState } from 'react'
import { Zap } from "lucide-react"
import _ from "underscore"
import axios from "axios"
import { KeyboardEvent } from 'react'
import LoadingAnimation from '../components/LoadingAnimation'


const model_names = ["google", "facebook", "bart"]
const model_name = _.sample(model_names)

API_URL = "https://huggingface.co/spaces/DerrickMuturi/sira-backend/text"

const Hero = () => {
    const [input_text, setInput_text] = useState("")
    const [bot_reply, setBot_reply] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleKeyboardkey = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        try {
            setIsLoading(true)

            if (event.key === "Enter") {
                axios.post(API_URL, {
                    text: input_text,
                    model_name: model_name
                }, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(function (response) {
                        console.log(response.data)
                        setBot_reply(response.data.message)
                    })
                    .catch(function (error) {
                        console.error(error.response?.data || error.message)
                    });
            }
        } catch (error) {
            console.log(error)
            const error_message = "Sorry an error occured. Please try again."
            setBot_reply(error_message)

        } finally {
            setIsLoading(false)
        }

    }

    const handleOnClick = async () => {
        try {
            setIsLoading(true)
            console.log("is loading", isLoading)
            const response = await axios.post(API_URL, {
                text: input_text,
                model_name: model_name
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(response.data)
            setBot_reply(response.data.message)
        } catch (error) {
            console.log(error)
            const error_message = "Sorry an error occured. Please try again."
            setBot_reply(error_message)
        } finally {
            setIsLoading(false)
        }

    }



    return (
        <div>
            <h2 className="text-lg font-bold sm:mb-3 lg:mb-5 sm:ml-4">Hello, my name is Sira</h2>
            <div className='bg-input w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px]  rounded-2xl'>
                <div>
                    <textarea
                        name='user_input'
                        value={input_text}
                        onKeyDown={e => handleKeyboardkey(e)}
                        onChange={e => setInput_text(e.target.value)}
                        placeholder="How can I help you ..."
                        className="w-full border-none overflow-auto resize-none focus:outline-none focus:ring-0 p-3.5 pt-4.5 ml-2"
                    />
                </div>
                <div className="flex flex-row justify-between">
                    <div className='flex flex-col gap-5'>
                        <div className="flex space-x-3 p-5">
                            <ModelSelection
                                id={'facebook'}
                                name={'blenderbot-400'}
                                text={input_text}
                                key={1}
                                value={bot_reply}

                            />

                            <ModelSelection
                                id={'google'}
                                name={'flan-t5'}
                                text={input_text}
                                key={2}
                                value={bot_reply}
                            />

                            <ModelSelection
                                id={'bart'}
                                name={'Bart'}
                                text={input_text}
                                key={3}
                                value={bot_reply}
                            />
                        </div>
                    </div>
                    <div
                        className='flex rounded-full border-2 border-gray-200 w-10 h-10 items-center justify-center mt-6 mr-3 hover:cursor-pointer hover:bg-gray-400'
                        onClick={handleOnClick}
                    >
                        <Zap />
                    </div>
                </div>
            </div>
            {isLoading && (
                <div className='mt-6 pl-3'>
                    <LoadingAnimation />
                </div>
            )}
            {bot_reply.length > 0 && (
                <div className='mt-6 pl-3'>
                    <div>
                        <p>{bot_reply}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Hero
