import React from 'react'
import TagsInput from '@/TagsInput'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('TagsInput Component', () => {
  afterEach(jest.clearAllMocks)
  afterEach(cleanup)

  it('cria o snapshot do component', () => {
    const container = render(<TagsInput />)
    expect(container.asFragment()).toMatchSnapshot()
  })

  it('deve renderizar as tags enviadas por atributos', () => {
    const emails = ['contato@rarolabs.com.br', 'nao-responda@rarolabs.com.br']
    const { debug } = render(<TagsInput tags={emails} />)

    debug()
  })

  it('deve renderizar tags quando preencher o input e pressionar enter', () => {

    const emails = [];
    const container = render(<TagsInput inputProps={{ 'aria-label': 'tag' }} tags={emails} />)
    const input = container.getByRole('textbox', {name: /tag/i})

    userEvent.type(input, 'hire-me@email.com{enter}')

    const { debug } = container;

    debug()

  })

  it('deve renderizar tags quando preencher o input e pressionar tab', () => {
  
    const emails = [];
    const container = render(<TagsInput inputProps={{ 'aria-label': 'tag' }} tags={emails} />)
    const input = container.getByRole('textbox', {name: /tag/i});

    userEvent.type(input, 'hire-me@email.com{enter}')

    const { debug } = container;

    debug()


  })

  it('deve deletar a útima tag criada ao pressionar o botão de backspace', async () => {

    const emails = ['contato@rarolabs.com.br', 'nao-responda@rarolabs.com.br']
    const container = render(<TagsInput inputProps={{ 'aria-label': 'tag' }} tags={emails} />)
    const input = container.getByRole('textbox', {name: /tag/i});

    userEvent.type(input, '{backspace}')

    const { debug } = container;

    debug()

    expect(emails == ['contato@rarolabs.com.br'])
  })
})
