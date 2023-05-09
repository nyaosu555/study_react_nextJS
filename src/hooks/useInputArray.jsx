import { useCallback, useState } from 'react'

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback(e => {
    if(e.target.value.length > 5) {
      alert('5文字以内にしてください。');
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if(text === '') {
        alert('1文字以上の文字を入れてください。')
        return prevArray;
      }
        // [[label]:'foo', [label]:'bar', [label]:'hoge']・・・配列の中にobjで入っているときはsome()を使う
      // if(prevArray.some(item => item === text)) {
        // ['foo', 'bar', 'hoge']・・・配列に直で文字列が入ってるときはincludesが使える
      if(prevArray.includes(text)) {
        alert('同じ要素が既に存在しています。');
        return prevArray;
      }
      // const newArray = prevArray;
      // newArray.push(1);
      // const newArray = [...prevArray, text];
      // return newArray;
      return [...prevArray, text];
    })
    setText('');
  }, [text]);

  return { text, array, handleChange, handleAdd }

}