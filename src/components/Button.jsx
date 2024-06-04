// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Button(props) {
    return <div>
        <button 
        css={css`
        
        background-color: ${props.color}`}>{props.name}</button>
    </div>
            


    
}

export default Button

