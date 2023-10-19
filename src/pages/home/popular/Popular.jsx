import { useState } from 'react'
import ContentWrapper from '../../../compoenents/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../compoenents/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../compoenents/carousel/Carousel'

const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie")

    const {data, loading} = useFetch(`/${endpoint}/popular`)

    const onTabChange = (tab) => {
        setEndpoint(tab == "Movie" ? "movie" : "tv")
    }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'> What's Popular</span>
            <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Popular