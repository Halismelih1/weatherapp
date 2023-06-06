import React from 'react'

const city = ({city}) => {
    console.log(city)
  return (
    <div className=' p-1 flex flex-col'>
    <h1 className='m-3 bg-black text-yellow-200'>{city?.main.temp} &#8451;</h1>
    <h1 className='m-3 bg-sky-600 text-white'>{city?.weather[0].main}</h1>
    </div>
    
    

    
  );
}

export default city