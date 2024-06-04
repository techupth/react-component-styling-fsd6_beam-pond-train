// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Alert(props) {
  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        background-color: ${props.color};
        display: flex;
        align-items: center;
        justify-content: start;
        color: #444444;
        font-size: 20px;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
      `}
    >
      <div
        css={css`
          display: flex;
          gap: 20px;
        `}
      >
        {props.logo}
        {props.name}
      </div>
    </div>
  );
}
