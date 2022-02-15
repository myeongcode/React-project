/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

	let [title, set_title] = useState( ['강남 고기 맛집', '강남 치킨 맛집'] );
  let [likes, set_likes] = useState(0);

  function change_title() {
    var newTitle = [...title];
    newTitle[0] = '남자 코트 추천';
    set_title(newTitle);
  }


  return (
    <div className="App">
      <div className='block-nav'>
        <div>개발 blog</div>
      </div>
      <div className='list'>
        <h3>{ title[0] } <span onClick={ () => { set_likes(likes + 1) } }>👍</span> { likes } </h3>
        <p>2월 10일</p>
        <button onClick={change_title} className='btn-style'>글 수정</button>
        <hr />
      </div>
			<div className='list'>
        <h3>{ title[1] } <span onClick={ () => { set_likes(likes + 1) } }>👍</span> { likes } </h3>
        <p>2월 11일</p>
        <button className='btn-style'>글 수정</button>
        <hr />
      </div>

      <Modal/>

    </div>
  );
}


function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
