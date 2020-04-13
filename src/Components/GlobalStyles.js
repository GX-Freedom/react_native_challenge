import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
    ${reset};
    a{
        list-style:none;
        text-decoration:none;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        font-size:16px;
    }
    body{
        font-size:14px;
        background-color:#130f40;
        color:white;
        padding-top:55px;
        height:100%;
        width:100%;
    }
`;

export default GlobalStyled;