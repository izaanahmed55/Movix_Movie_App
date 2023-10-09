import {useState} from "react"
import "./style.scss"
import { useNavigate } from "react-router-dom"

const HeroBanner = () => {
    const [background, setBackground] = useState("")
    const [query, setQuery] = useState("")
    const nav = useNavigate()

    const searchQueryHandler = (e) => {
        if(e.key == "Enter" && query.length > 0) {
            nav(`/search/${query}`)
        }
    }

  return (
    <div className="heroBanner">
        <div className="wrapper">
            <div className="heroBannerContent">
                <span className="title">Welcome.</span>
                <span className="subTitle">Millions of movies, TV shows and people to discover. Explore Now.</span>
            </div>
            <div className="searchInput">
                <input 
                    type="text"
                    placeholder="Search for a movie or TV show..."
                    onKeyUp={searchQueryHandler}
                    onChange={(e) => setQuery(e.target.value)}/>
                <button> Search </button>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner