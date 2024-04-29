// カスタムフックとuseDebugValue p110

import React, { useState, useCallback, useDebugValue } from "react";

const useInput = () => {
  const [state, setState] = useState('');
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);

  useDebugValue(`Input: ${state}`);

  // as constにすることで呼び出し元で
  return [state, onChange] as const;
}

export const InputWithUseInput = () => {
  const [text, onChangeText] = useInput();

  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <p>Input: {text}</p>
    </div>
  );
}