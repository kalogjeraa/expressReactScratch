import React, { useEffect, useState } from 'react';

const Hello = () => {
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch('/api/').then(res => {
      if (res.ok)
        return res.json();
    }).then(jsonResponse => setInitialState(jsonResponse.hello));
  }, []);

  console.log(initialState);
  return (
    <div>
      {initialState.length > 0 && initialState.map((el, i) => <li key={i}>{el}</li>)}
    </div>
  );
};

export default Hello;