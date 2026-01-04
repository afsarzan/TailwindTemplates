import './App.css'
import Navigation from './components/navigation';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import MaximizeValue from './components/MaximizeValue';
import MileStones from './components/MileStones';
import Statistic from './components/Statistic';
import TeamVibe from './components/TeamVibe';

function App() {

  return (
    <>
      <Navigation></Navigation>
      <HeroSection></HeroSection>
      <Services></Services>
      <MaximizeValue></MaximizeValue>
      <MileStones></MileStones>
      <Statistic></Statistic>
      <TeamVibe></TeamVibe>
    </>
  )
}

export default App
