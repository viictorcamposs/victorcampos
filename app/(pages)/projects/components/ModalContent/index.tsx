'use client'

import Link from 'next/link'
import Image from 'next/image'

import { ArrowUpRight } from '@phosphor-icons/react'

import type { IProject } from '../../page'

interface IModalContent {
  project: IProject
}

export default function ModalContent({ project }: IModalContent) {
  return (
    <div
      className={`
        w-full max-w-[350px] md:max-w-[500px]
        py-5 md:py-20
        overflow-y-auto no-scrollbar
      `}
    >
      <div
        className={`
          relative aspect-video
          overflow-hidden rounded-lg
        `}
      >
        <Image
          fill
          priority
          sizes="50vw"
          src={project.image}
          alt={project.title}
          className="object-cover"
        />
      </div>

      <h3
        className={`
          mt-6 mb-4
          md:mt-7 md:mb-5
          font-semibold font-body
          text-lg md:text-2xl 
          text-[#f7f5f9]
        `}
      >
        {project.title}
      </h3>

      <p
        dangerouslySetInnerHTML={{ __html: project.description }}
        className={`
          mt-4 mb-6
          md:mt-5 md:mb-7
          font-body text-sm md:text-base 
          text-[#cdcedf]
        `}
      />

      <h4
        className={`
          mt-6 mb-4
          md:mt-7 md:mb-5
          font-semibold font-body
          text-base md:text-xl
          text-[#f7f5f9]
        `}
      >
        Tech:
      </h4>

      <ul
        className={`
          mt-4 md:mt-5
          mb-20 pl-8
          list-disc
        `}
      >
        {project.techs.map(tech => (
          <li
            key={tech}
            className={`
              font-body 
              text-sm md:text-base 
              text-[#cdcedf]
            `}
          >
            {tech}
          </li>
        ))}
      </ul>

      <Link
        href={project.github}
        target="_blank"
        className={`
          flex items-center gap-1 md:gap-1.5
          text-[#f7f5f9]
        `}
      >
        <span className="font-body text-sm md:text-base underline">See on GitHub</span>
        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
      </Link>
    </div>
  )
}