import React from 'react'
import './style.css'

const ShowData = ({data}) => {
  const render = data.map((d, index) => {
      const completedCheck = d.completed===false ? 'not finished' : 'done'
      return (
          <li key={index} className='todos'>
              <h3>{d.title}</h3>
              <p>No: {d.id}</p>
              <p>{completedCheck}</p>
          </li>
      )
  })
  return render;
}

export default ShowData