import * as Component from './styles'

import logo from '../../assets/logo.svg'

export function NavBar() {
    return (
        <Component.NavBar>
            <Component.LogoNav>
                <Component.ImageLogo src={logo.src} />
            </Component.LogoNav>
            <Component.User>
                <Component.UserImage >
                    <Component.InitialLetters>
                        LZ
                    </Component.InitialLetters>
                </Component.UserImage>
                <Component.DivNameUser>
                    <Component.NameUser>
                        Luiz Zlochevsky
                    </Component.NameUser>
                    <Component.MyData>
                        meus dados
                    </Component.MyData>
                </Component.DivNameUser>
            </Component.User>
        </Component.NavBar>
    )
}