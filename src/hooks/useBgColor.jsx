import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react'

export const useBgColor = () => {

  const router = useRouter();

  console.log(router);

  const bgColor = useMemo(() => {
    // return router.pathname === '/' ? "lightblue" : 'beige';
    switch(router.pathname) {
      case '/' : {
        return 'lightblue';
      }

      case '/about': {
        return 'beige';
      }

      default: {
        return '';
      }

    }
  }, [router.pathname]);

  useEffect(() => {
    // console.log('まうんと時');
    // console.log(`マウント時：${count}`);
    // document.body.style.backgroundColor = "lightblue";
    document.body.style.backgroundColor = bgColor
    
    return () => {
      // console.log('あんまうんと時');
      // console.log(`アンマウント時：${count}`);
      document.body.style.backgroundColor = "";

    }
  }, [bgColor]);
}