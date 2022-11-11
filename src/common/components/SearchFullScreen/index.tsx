import React, { useRef } from 'react'
import { SearchFullScreenStyles } from './SearchFullScreen.style'
import Input from 'antd/lib/input/Input'
import { SearchOutlined, CloseOutlined } from '@ant-design/icons'
import useOutsideAlerter from '@hooks/useOutsideAlerter'

type SearchFullScreenProps = {
  className?: string
  closeModal?: () => void
}

const SearchFullScreen: React.FC<SearchFullScreenProps> = (props) => {
  const { className, closeModal } = props

  const inputContainerRef = useRef(null)
  useOutsideAlerter(inputContainerRef, closeModal)

  return (
    <SearchFullScreenStyles className={className}>
      <div className='overlay'></div>
      <CloseOutlined className='search-full__icon-close' onClick={closeModal} />
      <div className='search-full__container' ref={inputContainerRef}>
        <Input
          size='large'
          placeholder='Search posts and tags'
          prefix={<SearchOutlined />}
          className='search-full__input-search animate-popup'
        />
      </div>
    </SearchFullScreenStyles>
  )
}

export default SearchFullScreen
