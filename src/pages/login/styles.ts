import { styled } from '@/styles/global'

export const Container = styled('main', {
  maxWidth: '1196px',
  height: '100vh',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '$5',
})

export const LoginSection = styled('div', {
  maxWidth: 372,
  width: '100%',

  h1: {
    fontSize: '$2xl',
    lineHeight: 1.4,
  },

  span: {
    display: 'flex',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray200',
  },
})

export const LoginBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$10',
  gap: '$4',
})

export const LoginItem = styled('button', {
  all: 'unset',
  color: '$gray200',
  width: '100%',
  padding: '$5 $6',
  backgroundColor: '$gray600',
  borderRadius: '$md',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  fontWeight: '$bold',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray500',
  },
})
