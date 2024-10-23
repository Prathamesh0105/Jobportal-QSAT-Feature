

import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'

export default function Main() {
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    function startQuiz() {
        const username = inputRef.current?.value;
        if (username) {
            dispatch(setUserId(username))
        } else {
            alert('Please enter a username')
        }
    }

    return (
        <div className='container'>
            <h1 className='title text-light'>Jobportal QSAT Feature</h1>

            <ol>
                <li>You will be asked 10 questions one after another.</li>
                <li>10 points are awarded for the correct answer.</li>
                <li>Each question has three options. You can choose only one option.</li>
                <li>You can review and change answers before the quiz finishes.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>

            <form id="form">
                <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
            </form>

            <div className='start'>
                <Link className='btn' to={'/quiz'} onClick={startQuiz}>Start Quiz</Link>
            </div>
        </div>
    )
}
