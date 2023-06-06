import { useRef, useEffect } from 'react';

// 指定秒(duration)後に任意の関数(callback)を実行する
export const useTimer = () => {
  
  const timerID = useRef(null);

  const startTimer = (callback, duration) => {
    // すでにタイマーがセットされていたらクリア
    if (timerID.current !== null) {
      clearTimeout(timerID.current);
    }
    // タイマー再セット
    timerID.current = setTimeout(() => {
      // コールバック関数を実行
      callback();
      // タイマーリセット
      timerID.current = null;
    }, duration * 1000);
  };

  // コンポーネントがアンマウントされたときにタイマーをクリア
  useEffect(() => {
    return () => {
      if (timerID.current !== null) {
        clearTimeout(timerID.current);
      }
    }
  }, []);

  return { startTimer };
}
