import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const baseUrl='https://0b749d41-35db-4a9a-9160-94e29b2c7a2f-00-1vp3zltms9cus.sisko.replit.dev/api'

const CheckQuizStatusStudent = (props) => {
    useEffect(()=>{
        document.title='LMS | All Quiz'
      })

      const [quizData, setQuizData]=useState([]);
      const studentId=localStorage.getItem('studentId');

      useEffect(()=>{
        try{
            axios.get(`${baseUrl}/fetch-quiz-attempt-status/${props.quiz}/${props.student}`)
            .then((res)=>{
                setQuizData(res.data)
            });
        }catch(error){
            console.log(error)
        }
    
    },[]);

  return (
    <td>
        {quizData.bool=true && 
            <Link className='btn btn-success btn-sm ms-2' to={`/take-quiz/${props.quiz}`}>Take Quiz</Link>
        }
    </td>
  )
}

export default CheckQuizStatusStudent

