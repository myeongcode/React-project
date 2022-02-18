/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Data from './data.js'; //mbti 데이터를 Data란 이름으로 import 

function App() {
  let [mbti, setMbti] = useState(Data); //import한 Data를 mbti라는 state로 저장
  let [inputData, setInputData] = useState('');
  let [title, setTitle] = useState(['코트','바지','후드티','양말']);

  function addTitle() {
    var copyTitle = [...title];
      copyTitle.unshift(inputData);
      setTitle(copyTitle);
  }

  return (
    <div className="App">
      {/* <div className="black-nav">
        <h1>MBTI LAB</h1>
      </div>
      <div className='mbti-list'>
      {
        mbti.map((value,i) => {   //첫 번째 value는 각 배열에 데이터가 모두 들어가는 것, 두 번째 i는 0,1,2 ... 이렇게 순차적으로 올라가는 index
          return (
            <Card mbti={mbti[i]} key={i}></Card> //Card라는 Component 만들어서 map으로 반복 이때 인덱스까지 props해줌
          )
        })
      }
      </div>
      
       */}
      {
        title.map( (value, i) => {
          return (
            <div key={i}>
              <h2>{ title[i] }</h2>
            </div>
          )
        })
      }
      
      <input className='input-style' onChange={ (e) =>{ setInputData(e.target.value) }}/>
      <button onClick={ addTitle }>제품 등록</button>
    </div >
  )
}

function Card(props) { //Card라는 Component 따로 만들어서 리스트와 모달 분리
  let [modal, setModal] = useState(false); //모달창 state

  return(
    <div> 
      <div className='item'>
        <h2 className='title-hover' onClick={ () => {setModal(!modal)}}>{ props.mbti.name }</h2>
      </div>
      {
        modal === true
        ? <Modal mbti={props.mbti}/>
        : null
      }
    </div>
  )
}

function Modal(props) {
  return(
    <div className='modal'>
      <h2>{props.mbti.name}</h2>
      <p>{props.mbti.mean}</p>
    </div>
  )
}

export default App;
