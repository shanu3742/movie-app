import React ,{memo} from 'react'
import { Title } from '../../lib'
import './HomePageLayout.scss'

const HomePageLayout = ({children}) => {
  return (
    <>
        <header>
          <nav className='movie-home__nav'>
            <Title
                title="Movie App"
                subtitle="Are you looking for a movie"
            />
          </nav>
        </header>
        <section className='movie-home__section'>
            {children}
        </section>
   </>
  )
}

export default memo(HomePageLayout)
