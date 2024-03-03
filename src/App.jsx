/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import Loading from './components/loading';
import Stute from './models/stute';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState([0, 1, 9]);
  const [isClick, setIsClick] = useState(1)

useEffect(() => {
  AOS.init();
},[])

  useEffect(() => {

    const handleMouseMove = (e) => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      e.stopPropagation();
      e.preventDefault();

      let X = (e.pageX - window.innerWidth / 2) / 100;

      let Y = (e.pageY - (scrollY + windowHeight / 2)) / 100;

      if (Y < 0) {
        Y = Math.abs(Y);
      } else if (Y > 0) {
        Y = -Math.abs(Y);
      }

      setCount([X, Y, 9]);
    };


    const handleCursorMove = (e) => {
      let Y = e.pageY;
      let X = e.pageX;

      cursor.style.left = X + "px";
      cursor.style.top = Y + "px";
    };

    const canvas = document.querySelector("canvas");


    const scrollCek = () => {
      const scrollY = window.scrollY;
     console.log(screen1.offsetHeight + screen1.offsetHeight + screen1.offsetHeight / 1.5 , scrollY)
      if(screen1.offsetHeight + screen1.offsetHeight + screen1.offsetHeight / 1.5 < scrollY){
        setIsClick(4)
      }else if (screen1.offsetHeight + screen1.offsetHeight / 1.5 < scrollY) {
        setIsClick(3)
      }else if( screen1.offsetHeight / 1.5 < scrollY){
        setIsClick(2)
      }else if (screen1.offsetHeight > scrollY){
        setIsClick(1)
      }
    }

    const cursor = document.querySelector("#cursor");
    const screen1 = document.querySelector("#screen-1");

    document.addEventListener("scroll", scrollCek)
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mousemove", handleCursorMove);

    return () => {
      document.removeEventListener("scroll", scrollCek)
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mousemove", handleCursorMove);
    };
  }, []);

  const Greek = ["G","r", "e", "e", "k"];
  const Kingdom = ["K", "i", "n", "g", "d", "o", "m"]
  console.log(isClick, "click")
  return (
    <main className='w-full h-full overflow-x-hidden relative bg-black'>
      <section className='border-2 absolute bottom-16 left-16 z-20 cursor-pointer border-white rounded-full h-11 w-36 flex items-center justify-center'>
        <a target="_blank" href='https://sketchfab.com/3d-models/cemetery-angel-miller-3b7e4e4a84f94f0d876e21e853eb8db8' className='kalnia text-black text-base bg-white h-9 flex items-center justify-center w-[133px] rounded-full'>Link Asset 3D</a>
      </section>
      <section className='absolute h-16 w-16 border-2 p-1 border-white rounded-xl top-8 left-8'>
        <p className=' kalnia text-white text-xl font-semibold'>His<br/>tory</p>
      </section>
      <section className='absolute  flex items-center h-screen w-8  justify-center right-10 '>
        <main className='h-[80%] w-[1px] absolute bg-white'/>
        <p className='kalnia text-base text-white z-10 bg-black py-4'>Scroll Down</p>
      </section>
      <section className=' kalnia absolute right-10 bottom-[70rem]'>
        <main className='text-[9rem] text-slate-400 flex absolute right-0 top-[-7rem]'>
          {Greek.map((item, index) => (
            <h1 key={item} data-aos="fade-up" data-aos-delay={`${100 * index}`}>{item}</h1>
            ))
          }
        </main>
        <main className='text-[12rem] flex text-slate-700 '>
          {Kingdom.map((item, index) => (
            <h1 key={item} data-aos="fade-up" data-aos-delay={`${100 * index}`}>{item}</h1>
            ))
          }
        </main>
      </section>
      <section className={` fixed  h-full w-screen`}>
        <Canvas
          className="h-full w-screen"
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loading />}>
            <spotLight position={count} intensity={150} />
            <Stute
              position={[0, -6, 0]}
              scale={[3, 3, 3]}
              positionCursor={isClick}
            />
          </Suspense>
        </Canvas>
      </section>
      <div className='h-full'>
        <section className=' h-screen my-28 kalnia  text-white  flex justify-center items-end' id='screen-1'>
          <main className='mb-56 z-10 w-[60%] text-center'>
          <h1 className='text-6xl mb-6'>Ancient Greek kingdom</h1>
          <p >The Kingdom of Ancient Greece refers to the period of history in which the various kingdoms and city states of ancient Greece were established and flourished. This was a very important period in the history of Europe and the Western world because many aspects of political, social, cultural, and intellectual life that emerged during this period still influence modern society.</p>
          </main>
        </section>
        <div className=' h-screen relative w-full' id='screen-2'>
        <section className='absolute text-white  kalnia  flex top-8 left-40 justify-center items-end w-96' id='screen-1'>
          <main className='mb-56 z-50 '>
          <h1 className='text-4xl mb-6'>Mycenaean Period (1600-1100 BC):</h1>
          <p>This was the early period of the Ancient Greek Kingdom, dominated by the Mycenaean civilization. They were known for their magnificent fortresses and extensive maritime trade in the Mediterranean.</p>
          </main>
        </section>
        <section className='absolute text-white   kalnia  flex bottom-44 right-16 justify-center items-end w-96' id='screen-1'>
          <main className=' z-10 '>
          <h1 className='text-4xl mb-6'>Geometric Period (1100-700 BC):</h1>
          <p>After the fall of the Mycenaean civilization, Greece experienced a dark period called the Dark Age. However, it then reappeared with a period called the Geometric period, which was marked by the rebuilding of society and their culture.</p>
          </main>
        </section>
        </div>
        <div className=' h-screen flex flex-col justify-center gap-8 pl-12' id='screen-3'>
        <section className=' text-white   kalnia  flex  justify-center items-center w-[50%]' id='screen-1'>
          <main className=' z-10 '>
          <h1 className='text-4xl mb-6'>Archaic Period (700-480 BC): </h1>
          <p>This period saw the formation of urban polises such as Athens, Sparta, and Corinth. The emergence of democracy in Athens and an oligarchic system of government in Sparta characterized this era. In addition, trade and colonization were important factors in the development of the ancient Greek economy.</p>
          </main>
        </section>
        <section className=' text-white   kalnia  flex  justify-center items-center w-[50%]' id='screen-1'>
          <main className=' z-10 '>
          <h1 className='text-4xl mb-6'>Classical Period (480-323 BC):</h1>
          <p>This was the heyday of ancient Greek culture. The golden age of philosophy with the thoughts of great figures such as Socrates, Plato and Aristotle. This period also saw the emergence of tragedy and comedy in drama, with great names such as Sophocles, Euripides, and Aristophanes. The Persian Wars and the Peloponnesian War occurred during this period, influencing politics and power in Greece.</p>
          </main>
        </section>
        </div>
        <div className=' h-screen  flex items-end justify-end' id='screen-4'>
        <section className=' text-white mb-32  kalnia  flex  justify-center items-center w-[50%]' id='screen-1'>
          <main className=' z-10 '>
          <h1 className='text-4xl mb-6'>Classical Period (480-323 BC):</h1>
          <p>This was the heyday of ancient Greek culture. The golden age of philosophy with the thoughts of great figures such as Socrates, Plato and Aristotle. This period also saw the emergence of tragedy and comedy in drama, with great names such as Sophocles, Euripides, and Aristophanes. The Persian Wars and the Peloponnesian War occurred during this period, influencing politics and power in Greece.</p>
          </main>
        </section>
        </div>
      </div>
    </main>
  );
}



export default App;
