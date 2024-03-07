import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --MEDIUM: 'Medium';
        --BOLD: 'Bold';
        --REGULAR: 'Regular';
        --DEMILIGHT: 'DemiLight';
        --text_primary: #000000;
        --text_secondary: #5c5c5c;
        --text_tertiary: #888888;
        --text_quaternary: #bbbbbb;
        --text_filledBtn: #ffffff;
        --surface_primary: #ffffff;
        --surface_secondary: #f8f8f8;
        --background_primary: #f0f1f2;
        --primary_fill: #325EB5;
        --primary_hover: #5B7EC4;
        --primary_actived: #284B91;
        --primary_disabled: #D7D7D7;
        --negative_fill: #c83b38;
        --negative_hover: #f4d8d7;
        --negative_actived: #E9B1AF;
        --week_fill: #ffffff;
        --week_hover: #f8f8f8;
        --week_actived: #f0f1f2;
        --border: #d7d7d7;
        --accent_primary: #2276dc;
        --accent_secondary: #cceaff;
        --accent_hover: #4e91e3;
        --accent_actived: #1b5eb0;
        --reportState_cheating: #c83b38;
        --reportState_warning: #f5c363;
        --reportState_right: #3c9c9c;
        --state_cheating: #c83b38;
        --state_warning: #ed893e;
        --state_ing: #63b0b0;
        --state_completion: #b1d7d7;
        --state_hover: #8ac4c4;
        --state_actived: #3c9c9c;
    }
    html{
        -ms-touch-action: manipulation;
        touch-action: manipulation;
    }
    body{
        font-family: 'Regular';
        font-size: 16px;
        -webkit-overflow-scrolling : touch !important;
        
    }
    input{
        -webkit-border-radius: 0;
    }
`;

export default GlobalStyle;
