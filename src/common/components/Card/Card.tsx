import Image from 'next/image'
import './Card.module.scss'

interface CardProps {
  href: string
  title: string
  description: string
  image: string
}

export const Card: React.FC<CardProps> = ({ href, title, image, description }) => {
  return (
    <div className='card'>
      <a href={href}>
        <Image
          className='card_image'
          src={image}
          alt='Picture of the author'
          width={500}
          height={500}
        />
        <h2 className='card_title'>{title}</h2>
        <p className='card_description'>{description}</p>
      </a>
    </div>
  )
}
