import React ,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import '../../App.css'
import { Gents, Ladies  }  from '../components/data'
import  WomanCollection from '../components/WomanCollection'

const Mainpage = () => {
  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [ladiesFashion, setLadiesFashion] = useState(Ladies)
  console.log(Gents)
  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsFashion={gentsFashion} />
        <WomanCollection ladiesFashion={ladiesFashion} />
        <Footer />
    </div>
  )
}

export default Mainpage