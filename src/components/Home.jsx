import React from 'react'
import { useState } from 'react';

function Home() {
     const [color1, setColor1] = useState('#d5a6bd');
     const changeColor1 = () => {
          setColor1('red');
     };
     const [color2] = useState('');
     const changeColor2 = () => {
          setColor1('blue');
     };
     const [color3] = useState('');
     const changeColor3 = () => {
          setColor1('#5eff18');
     };
     const [color4] = useState('');
     const changeColor4 = () => {
          setColor1('#ff0086');
     };
     const [color5] = useState('');
     const changeColor5 = () => {
          setColor1('#ffd700');
     };

     return (

          <>
               <h1 className='text-center mt-3'>Background Color Change</h1>
               <div className='border container' style={{ width: '100%', height: '60vh', marginTop: '120px', backgroundColor: color1 }}>
                    <div className='d-flex ms-1 justify-content-center' style={{ marginTop: '200px' }}>
                         <button style={{ marginRight: '400px', padding: '8px', borderWidth: '2px', borderRadius: '10px', fontWeight:'bold',fontSize:'25px' }} onClick={changeColor1}>RED</button>
                    </div>
               </div>
               <div className='border container' style={{ width: '100%', height: '60vh', marginTop: '-416px', backgroundColor: color2 }}>
                    <div className='d-flex ms-1 justify-content-center' style={{ marginTop: '200px' }}>
                         <button style={{ marginRight: '230px', padding: '8px', borderWidth: '2px', borderRadius: '10px', fontWeight:'bold',fontSize:'25px' }} onClick={changeColor2}>BLUE</button>
                    </div>
               </div>
               <div className='border container' style={{ width: '100%', height: '60vh', marginTop: '-417px', backgroundColor: color3 }}>
                    <div className='d-flex ms-1 justify-content-center' style={{ marginTop: '200px' }}>
                         <button style={{ marginRight: '40px', padding: '8px', borderWidth: '2px', borderRadius: '10px', fontWeight:'bold', fontSize:'25px' }} onClick={changeColor3}>GREEN</button>
                    </div>
               </div>
               <div className='border container' style={{ width: '100%', height: '60vh', marginTop: '-417px', backgroundColor: color4 }}>
                    <div className='d-flex ms-1 justify-content-center' style={{ marginTop: '200px' }}>
                         <button style={{ marginLeft: '150px', padding: '8px', borderWidth: '2px', borderRadius: '10px', fontWeight:'bold',fontSize:'25px' }} onClick={changeColor4}>PINK</button>
                    </div>
               </div>
               <div className='border container' style={{ width: '100%', height: '60vh', marginTop: '-417px', backgroundColor: color5 }}>
                    <div className='d-flex ms-1 justify-content-center' style={{ marginTop: '200px' }}>
                         <button style={{ marginLeft: '350px', padding: '8px', borderWidth: '2px', borderRadius: '10px', fontWeight:'bold', fontSize:'25px' }} onClick={changeColor5}>YELLOW</button>
                    </div>
               </div>
          </>
     )
}

export default Home