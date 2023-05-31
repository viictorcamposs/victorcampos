import type { LabelHTMLAttributes } from 'react'

interface ILabel extends LabelHTMLAttributes<unknown> {}

export default function Label({ children, ...props }: ILabel) {
  return (
    <label
      {...props}
      className="block mb-2 font-body text-sm xl:text-base text-[#464444] dark:text-[#cdcedf]"
    >
      {children}
    </label>
  )
}
