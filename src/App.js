import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState('default');


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX - 17.5,
        y: e.clientY - 17.5
      });
    }

    document.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, []);


  const variants = {
    default: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      backgroundColor: "green",
    },
    text: {
      height: 150,
      width: 150,

      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "brown",
      mixBlendMode: "difference"
    },
  }

  const enterCur = () => {
    setCursorVariant("text");
  }


  const leaveCur = () => {
    setCursorVariant("default");
  }
  return (
    <div className="App">
      <h1 onMouseEnter={enterCur}
        onMouseLeave={leaveCur}
        className='title'
      >Hello World</h1>

      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
    </div>
  );
}

export default App;
