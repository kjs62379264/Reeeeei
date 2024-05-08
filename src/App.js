
import './App.css';
import {useState} from 'react';
function App() {

  let post = '으dk으으으으';
  let [글제목, 글제목변경] = useState(['남자 코트 추천' ,'코트 추천', '아동 코트 추천']);
  let [따봉, 따봉변경]= useState(0);

  function 함수(){
    console.log(1);
  }

  return (
    <div className="App">
     <div className="black-nav">
      <h4>리액트 블로그</h4>
     </div>

    <button>가나다순 정렬</button>

     <button onClick={()=>{

     
     let copy = [...글제목];
     copy[0] = '여자코트 추천';
        글제목변경(copy);
     }}>글 수정</button>

     <div className ="list">
      <h4>{글제목[0]}<span onClick={()=> {따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
      <p>4월 7일자</p>
     </div>



     <div className ="list">
      <h4>{글제목[1]}</h4>
      <p>4월 7일자</p>
     </div>

     <div className ="list">
      <h4>{글제목[2]}</h4>
      <p>4월 7일자</p>
     </div>

     <Model></Model>

    </div>
  );
}

function Model(){
  return(
    <div className="model">
     <h4>제목</h4>
     <p>날짜</p>
     <p>상세내용</p>
     </div>
  )
}

export default App;
