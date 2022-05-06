import './App2.css';
import { useState } from 'react';

//-----------------------------------------------------Bài tập 2---------------------------------------------------------//

function App2() {
  const [userInputValue, setUserInputValue] = useState('')
  const [firstInputValue, setFirstInputValue] = useState('')
  const [secondInputValue, setSecondInputValue] = useState('')
  const [text, setText] = useState('')

  const handleUserInputChange = (e) => {
    setUserInputValue(e.target.value)
  }
  const handleFirstInputChange = (e) => {
    setFirstInputValue(e.target.value)
  }
  const handleSecondInputChange = (e) => {
    setSecondInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (userInputValue.trim()==='' || firstInputValue.trim()==='' || secondInputValue.trim()==='') {
      setText('Không được để trống!')
    } else {
      firstInputValue === secondInputValue ? setText(`Welcome, ${userInputValue}`) : setText('Bạn và tôi không giống nhau, con đường tôi bước đi, chỉ tôi mới hiểu được')
    }
    setFirstInputValue('')
    setSecondInputValue('')
  }

  return (
    <div className='App'>
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='username' value={userInputValue} onChange={handleUserInputChange} pattern='[a-zA-Z0-9]{1,}' title='Chỉ bao gồm chữ (cả chữ hoa, chữ thường) và số' required></input>
        <input type='text' placeholder='password' value={firstInputValue} onChange={handleFirstInputChange} pattern='[a-Z]{6,}' title='Chiều dài trên 6 kí tự' required></input>
        <input type='text' placeholder='confirm password' value={secondInputValue} onChange={handleSecondInputChange} required></input>
        <button type='submit'>Submit</button>
      </form>
      <p>{text}</p>
    </div>
  );
}

export default App2;