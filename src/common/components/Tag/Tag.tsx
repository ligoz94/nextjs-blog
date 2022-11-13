import React from 'react'
import styled from 'styled-components'
import { tag } from '@styles/_mixins'
import Link from 'next/link'
import { TagI } from '@interfaces/post'
import { colorMap } from '@utils/constants'

type TagProps = {
  tag: TagI
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <TagStyles>
      <Link href={'/tags/[tag]'} as={`/tags/${tag.slug}`} key={tag.slug}>
        <span className='tag' style={{ backgroundColor: `${colorMap[tag.slug]}` }}>
          {tag.name}
        </span>
      </Link>
    </TagStyles>
  )
}

export default Tag

export const TagStyles = styled.span`
  .tag {
    ${tag};
  }
`
