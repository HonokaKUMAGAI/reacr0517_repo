import React, { useState } from 'react'; // ReactとuseStateをインポート

function Greeting2() {
  const [name, setName] = useState(""); // Stateとして名前を管理する

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`Hello, ${name}`); // 入力された名前をアラートで表示
  };

  return (
    <div>
      {/* 入力フォーム */}
      <input type="text" value={name} onChange={handleNameChange} />
      {/* 決定ボタン */}
      <button onClick={handleButtonClick}>決定</button>
    </div>
  );
}

export default Greeting2;