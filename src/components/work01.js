// work01.js
import React from 'react';
import ReactDOM from 'react-dom';

// 以降のコードを続ける


// Greetingコンポーネントの定義
function Greeting(human) {
    // propsから名前を受け取り、Hello, [名前]と表示する
    return <h3>Hello, {human.name}</h3>;
  }

  ReactDOM.render(
    <div>
        <h4>work01</h4>
        <p>
        </p>
    </div>,
    document.getElementById('root')
);

export default Greeting;



// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';


// function Greeting({name}){
//     return <h3>Hello, {name}</h3>;
// }

// function App(){
//     const[name, setName] = useState('');

//     const handleChange = (event) => {
//         setName(event.target.value);
//     };

//     return(
//         <div>
//             <h4>work01</h4>
//             <input 
//             type = "text"
//             placeholder="名前を入力"
//             value = {name}
//             onChande = {handleChange}
//             />
//             <Greeting name = {name}/>
//         </div>
//     );
// }

// export default App;