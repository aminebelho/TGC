import Navbar from '../components/navbar/navbar'
import Search from '../components/search/search'
import TodaysPicks from '../components/todaysPicks/todaysPicks'
import FindAlternatives from '../components/findAlternatives/findAlternatives';

function LandingPage() {

  return (
    <div className='LandingPage'>
      <Search />
      <TodaysPicks />
      <FindAlternatives />
    </div>
  )
}

export default LandingPage