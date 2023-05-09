import { useCallback, useMemo, useState } from 'react'

export const useCouter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  // const doubleCount = count * 2;
  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

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

  return { count, doubleCount, isShow, handleClick, handleDisplay }

}