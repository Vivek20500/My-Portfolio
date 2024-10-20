import React from 'react'

function Title(props) {
  return (
    <>
      <p className=' text-2xl font-bold w-full text-sky-950 h-fit'>
          {props.title}
      </p>
      <div className='bg-sky-950 w-full h-[2px]'></div>
    </>
  )
}

export default Title