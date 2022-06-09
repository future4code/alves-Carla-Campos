import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Carlinha'}
          fotoUsuario={'https://t4.ftcdn.net/jpg/03/75/02/61/360_F_375026186_J7gHblTeVAIoKpJhRWX4VGlHcjDAQdFa.jpg'}
          fotoPost={'https://i.pinimg.com/originals/72/05/99/720599c90ba6d33ee81297a67511655d.jpg'}
        />
        
        <Post
          nomeUsuario={'Flavinha'}
          fotoUsuario={'https://www.10wallpaper.com/wallpaper/2560x1600/1310/child_in_a_flower_field-cute_HD_wallpaper_2560x1600.jpg'}
          fotoPost={'https://1.bp.blogspot.com/-3CSFD-be65k/XoUgkvOtSqI/AAAAAAAAqtQ/1QmUtClM4d0D2RFPcDn1hO_kIF89t5wTwCLcBGAsYHQ/s2560/field_flowers_sunset_drome_france_116125_1080x1920.jpg'}
        />

        <Post
          nomeUsuario={'Lipe'}
          fotoUsuario={'https://pbs.twimg.com/profile_images/1730575806/dia-do-rock-13-de-julho_400x400.jpg'}
          fotoPost={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSoUcYB1XjZdhn9_abtLJ1cTZm2Tq6xRTpR0b2Cu8tNgUsopqsr_LCatPxU4QkZ_tjrE&usqp=CAU'}
        />
      </MainContainer>
    );
  }
}

export default App;