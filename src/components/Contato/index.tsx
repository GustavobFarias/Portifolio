import Email from '../assets/icons/icon/mail.svg'
import LinkedIn from '../assets/icons/icon/linkedin.svg'
import GitHub from '../assets/icons/icon/github.svg'
import phone from '../assets/icons/icon/phone.svg'

import * as S from './styles'

const Contato = () => {
  return (
    <S.Contato
      data-aos="fade-right"
      data-aos-delay="500"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      id="Contato"
    >
      <S.Container>
        <S.Title>Contatos</S.Title>
        <div className="container">
          <a
            href="mailto:gustavoburgerf@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="content">
              <S.ContainerImg>
                <img src={Email} alt="E-mail" />
              </S.ContainerImg>
              <div className="text">
                <h3>E-mail</h3>
                <p>gustavoburgerf@gmail.com</p>
              </div>
            </div>
          </a>

          <div className="container-links">
            <a
              href="https://api.whatsapp.com/send?phone=5514991029433"
              target="_blank"
              rel="noreferrer"
            >
              <div className="content">
                <S.ContainerImg>
                  <img src={phone} alt="Telefone" />
                </S.ContainerImg>
                <div className="text">
                  <h3>Telefone</h3>
                  <p>(14) 99102-9433</p>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/gustavo-farias-5b4b6827b/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="content">
                <S.ContainerImg>
                  <img src={LinkedIn} alt="LinkedIn" />
                </S.ContainerImg>
                <div className="text">
                  <h3>LinkedIn</h3>
                  <p>@GustavoFarias</p>
                </div>
              </div>
            </a>
          </div>

          <a
            href="https://github.com/GustavobFarias"
            target="_blank"
            rel="noreferrer"
          >
            <div className="content">
              <S.ContainerImg>
                <img src={GitHub} alt="GitHub" />
              </S.ContainerImg>
              <div className="text">
                <h3>GitHub</h3>
                <p>@GustavobFarias</p>
              </div>
            </div>
          </a>
        </div>
      </S.Container>
    </S.Contato>
  )
}

export default Contato
