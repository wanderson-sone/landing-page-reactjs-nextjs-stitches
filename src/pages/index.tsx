import * as S from '../styles/pages'

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <S.Container>
        <Head>
          <title>myOnix</title>
        </Head>
        <S.Logo>
          <S.Image src="/logo.svg" alt="" />
          <S.Title>myOnix</S.Title>
        </S.Logo>
        <S.Form>
          <S.Input type="text" />
          <S.Button>Pesquisar</S.Button>
        </S.Form>
        <S.Result>Resultado</S.Result>
      </S.Container>
    </>
  )
}
