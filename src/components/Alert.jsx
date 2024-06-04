// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';



function Alert(props) {
    return (<div css={css`
    display: flex;
    align-items: center;
    height: 76px;
    width: 650px;
    font-size: 20px;
    border-radius: 10px;
    color: #444444; 
    gap: 20px;  
    background-color: ${props.color}`}><img src="./" alt="" />{props.logo}{props.text}</div>)
    
}

export default Alert
