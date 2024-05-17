// work01.js


// Greetingコンポーネントの定義
function Greeting(human) {
    // propsから名前を受け取り、Hello, [名前]と表示する
    return <h3>Hello, {human.name}</h3>;
  }

  ReactDOM.render(
    <div>
        <h4>work01</h4>
        <p>改造して、フォームに入力した名前に対して挨拶するようにしたかったのですが、うまくできませんでした。
            ずっと最初からimportを使っているのに「requierは使えません」というエラーが出続け、work01止まりになってしまいました…
        </p>
        <Greeting name="Honoka" />
    </div>,
    document.getElementById('root')
);

// import React, { useState } from 'react'; // ReactとuseStateをインポート
// import ReactDOM from 'react-dom';

// function Greeting() {
//   const [name, setName] = useState(""); // Stateとして名前を管理する

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleButtonClick = () => {
//     alert(`Hello, ${name}`); // 入力された名前をアラートで表示
//   };

//   return (
//     <div>
//       {/* 入力フォーム */}
//       <input type="text" value={name} onChange={handleNameChange} />
//       {/* 決定ボタン */}
//       <button onClick={handleButtonClick}>決定</button>
//     </div>
//   );
// }

// const message = "Hello, world!";

// ReactDOM.render(
//   <div>{message}</div>,
// // ReactDOM.render(
// //   <Greeting />,
//   document.getElementById('root')
// );
