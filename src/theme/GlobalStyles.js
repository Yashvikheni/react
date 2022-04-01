
import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
body{
    background:${({theme})=>theme.body};
    color:${({theme})=>theme.text};
    transition:all .5s linear;
}
.btn-primary{
  background:${({theme})=>theme.body};
  color:${({theme})=>theme.text};
  width:auto;
  border: 1px solid #c3ccec;
  padding: 7px 14px;
  cursor: pointer;
  z-index: 1
}
nav ul{
  background:${({theme})=>theme.nav};
  display: flex;
  margin-block-start: 0;
  padding: 16px;
  box-shadow: 0 2px 4px rgb(78, 77, 151);
}
a{
    color:${({theme})=>theme.linkText};  
}
.sidebar{
    margin-top: 5px;
    padding: 0;
    width: 200px;
    background:${({theme})=>theme.nav};
    position: fixed;
    height: 100%;
    overflow: auto;
    list-style-type: none;
    margin-block-start: 0;
  }
  .form-outer-wrapper{
    width: 20%;
    margin: 50px auto;
    padding: 20px 20px 20px 25px;
    box-shadow: 0px 0pc 9px #c3ccec;
    border-radius: 10px;
    background:${({theme})=>theme.form}
  }

`;

export const lightTheme={

    body:'#fff',
    text:'#121212',
    primary:'#3B3838',
    secondary:'#c3ccec',
    nav:"#c3ccec",
    linkText:'#715495',
    form:'white'
   
};
export const darkTheme={

    body:'#615D5E',
    text:'#fff',
    primary:'#fff',
    secondary:'#6A666A',
    nav:"#715495",
    linkText:"#fff",
    form:'rgb(180, 176, 176)'

};