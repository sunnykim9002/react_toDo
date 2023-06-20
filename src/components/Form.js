import React from 'react'

export default function Form({ handleSubmit, value, setValue}) {

    

  const handleChange = (e) => {
    setValue(e.target.value);
  }


  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div className='flex gap-2 w-full content-center'>
            <input
              type="text"
              name="value"
              placeholder="해야할일을 입력하세요."
              value={value}
              onChange={handleChange}
              className='pl-2'
            />
            <input type="submit" name="입력" className=" text-blue-400 bg-blue-50 rounded border-2 p-2 border-blue"/>
        </div>


      </form>

    </div>
  )
}
