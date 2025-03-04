import React from 'react';


function MousePos() {
    const mousePosition = useMousePosition();
  
    return (
      <p>
        Your cursor position:
        <br />
        {JSON.stringify(mousePosition)}
      </p>
    );
  }
  
  const useMousePosition = () => {
    const [
      mousePosition,
      setMousePosition
    ] = React.useState({ x: null, y: null });
  
    React.useEffect(() => {
      const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      
      window.addEventListener('mousemove', updateMousePosition);
  
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);
  
    return mousePosition;
  };
  
export default MousePos;