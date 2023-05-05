import { useCallback, useState } from 'react'

export const useCouter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback((e) => {
    if(count < 10) {
      console.log(count);
      setCount(count => count +1);
      // setCount(count => count +1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow(isShow => !isShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay }

}