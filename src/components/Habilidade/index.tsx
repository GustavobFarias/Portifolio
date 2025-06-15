import html from '../assets/icons/skills/html-5.png'
import css from '../assets/icons/skills/css-3.png'
import javaScript from '../assets/icons/skills/js.png'
import jquery from '../assets/icons/skills/jquery.png'
import bootstrap from '../assets/icons/skills/bootstrap.png'
import sass from '../assets/icons/skills/sass_logo.png'
import gulp from '../assets/icons/skills/gulp.png'
import less from '../assets/icons/skills/less.png'
import grunt from '../assets/icons/skills/grunt.png'
import typeScript from '../assets/icons/skills/typescript.png'
import vue from '../assets/icons/skills/vuejs.svg'
import react from '../assets/icons/skills/react-original.svg'
import redux from '../assets/icons/skills/redux.svg'
import jest from '../assets/icons/skills/jest.svg'
import git from '../assets/icons/skills/git.png'
import gitHub from '../assets/icons/skills/github.png'
import vscode from '../assets/icons/skills/vscode.svg'
import figma from '../assets/icons/skills/figma.svg'
import node from '../assets/icons/skills/nodejs.png'
import * as S from './styles'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const Habilidade = () => {
  return (
    <>
      <S.Habilidade
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        id="Habilidade"
      >
        <S.Container>
          <S.Title>Habilidade</S.Title>
          <S.List>
            <S.Item>
              <div>
                <span>HTML</span>
                <img src={html} alt="Icon HTML" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>CSS</span>
                <img src={css} alt="Icon CSS" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>JavaScript</span>
                <img src={javaScript} alt="Icon JavaScript" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>bootstrap</span>
                <img src={bootstrap} alt="Icon Bootstrap" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>Jquery</span>
                <img src={jquery} alt="Icon Jquery" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>Sass</span>
                <img src={sass} alt="Icon Sass" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>Gulp</span>
                <img src={gulp} alt="Icon Gulp" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>Less</span>
                <img src={less} alt="Icon Less" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>Grunt</span>
                <img src={grunt} alt="Icon Grunt" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>TypeScript</span>
                <img src={typeScript} alt="Icon TypeScript" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>Vue</span>
                <img src={vue} alt="Icon Vue" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>React</span>
                <img src={react} alt="Icon React" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>Node Js</span>
                <img src={node} alt="Icon Node" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>Redux</span>
                <img src={redux} alt="Icon Redux" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>Jest</span>
                <img src={jest} alt="Icon Jest" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>Git</span>
                <img src={git} alt="Icon Git" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>gitHub</span>
                <img src={gitHub} alt="Icon GitHub" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>VsCode</span>
                <img src={vscode} alt="Icon VsCode" />
              </div>
            </S.Item>
            <S.Item>
              <div>
                <span>Figma</span>
                <img src={figma} alt="Icon Figma" />
              </div>
            </S.Item>
          </S.List>
        </S.Container>
      </S.Habilidade>
    </>
  )
}

export default Habilidade
