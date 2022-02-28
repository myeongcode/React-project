/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
    padding : 20px;
`;

let Title = styled.h4`
    font-size : 25px;
    color : ${ props => props.color }
`;


function Detail(props) {

    let [alert, setAlert] = useState(true);
    let [inputData, setInputData] = useState('');

    useEffect(() => {
        let timer = setTimeout(() => {
            setAlert(false)
        }, 2000);

        return () => {
            clearTimeout(timer)
        }
    },[]);

    

    let { id } = useParams();
    let history = useHistory();


    let itemId = props.shoesName.find((item) => {
        return item.id == id
    })

    return (
        <div className="container">
            {
                props.shoesName.map((data,i) => {
                    return (
                        <button onClick={() => {
                            history.push('/detail/'+i)
                        }}>{props.shoesName[i].id}</button>
                    )
                })
            }
            <Box>
                <Title className='red'>Detail</Title>
            </Box>
            {
                inputData
            }
            <input onChange={(e) => {
                setInputData(e.target.value)
            }}/>
            {
                alert === true
                ? (
                    <div className='detail-alert-yellow'>
                        <p>재고가 얼마 남지 않았습니다!!</p>
                    </div>
                )
                : null

            }
            
            <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+ (Number(id) + 1) +".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{ itemId.title }</h4>
                <p>{ itemId.content }</p>
                <p>￦{ itemId.price }</p>
                <button className="btn btn-danger">주문하기</button> 
                <button className="btn btn-danger" onClick={() => { history.push('/') }}>뒤로가기</button> 
                </div>
            </div>
            
        </div> 
    )
}

export default Detail;