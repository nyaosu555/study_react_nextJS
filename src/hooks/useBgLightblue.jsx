import { useEffect } from 'react'

export const useBgLightblue = () => {
  useEffect(() => {
    // console.log('まうんと時');
    // console.log(`マウント時：${count}`);
    document.body.style.backgroundColor = "lightblue";
    
    return () => {
      // console.log('あんまうんと時');
      // console.log(`アンマウント時：${count}`);
      document.body.style.backgroundColor = "";

    }
  }, []);
}