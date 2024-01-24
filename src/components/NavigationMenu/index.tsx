import { Binoculars, ChartLineUp, SignIn } from '@phosphor-icons/react'
import Image from 'next/image'

import {
  Button,
  LoginBox,
  NavigationBox,
  NavigationLink,
  MenuContainer,
} from './styles'
import Logo from '../../assets/logo.svg'

export function NavigationMenu() {
  return (
    <MenuContainer>
      <Image src={Logo} alt="Book Wise Logo" />

      <NavigationBox>
        <NavigationLink active>
          <ChartLineUp size={24} /> Home
        </NavigationLink>
        <NavigationLink>
          <Binoculars size={24} /> Explore
        </NavigationLink>
      </NavigationBox>

      <LoginBox>
        <Button>
          Login <SignIn />
        </Button>
      </LoginBox>
    </MenuContainer>
  )
}