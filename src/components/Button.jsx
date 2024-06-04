// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  return (
    <button
      css={css`
        width: 171px;
        height: 50px;
        color: white;
        background-color: ${props.color};
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
      `}
    >
      {props.name}
    </button>
  );
}
