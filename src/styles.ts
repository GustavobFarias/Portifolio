import { createGlobalStyle } from 'styled-components'

export const colors = {
  corPrincipal: '#022A26',
  corDoTexto: '#fff',
  corSecundaria: '#17EDD4',
  corSecundariaEscura: '#0e9585',
  corDofront: '#ccc',
  corDoDownload: '#000',
  corDoCard: '#212121'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colors.corPrincipal};
  }

  body::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
}

body::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

body::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

body::-webkit-scrollbar-thumb {
    background-color: ${colors.corSecundaria};
    border-radius: 10px;
}

body::-webkit-scrollbar-track {
    background: #000;
    border-radius: 10px;
}

  .container {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
  }
`
