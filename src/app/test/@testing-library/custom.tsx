import type { FC, ReactElement } from 'react'
import React from 'react'

import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import fs from 'fs'

const wrapper: FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  const view = render(ui, { wrapper, ...options })

  const style = document.createElement('style')
  style.innerHTML = fs.readFileSync('src/app/test/globals.css', 'utf8')
  document.head.appendChild(style)

  return view
}

export * from '@testing-library/react'
export { customRender as render }
