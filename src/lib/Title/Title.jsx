import React, { memo } from 'react'
import './Title.scss'

const Title = ({title='page title',subtitle='page substitle'}) => {
  return (
    <section className='page-title'>
        <h1 >{title}</h1>
        <p >{subtitle}</p>
    </section>
  )
}

export default memo(Title)
