
import { Main } from './components/Main'
import { Hears } from './components/Hears'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Mision } from './components/Mision'
import { Services } from './components/Services'
import { Infoservices } from './components/Infoservices'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hears />
      <Main />
      <Gallery />
      <Mision />
      <Services />
      <Infoservices />
      <Footer />
    </div>
  )
}
