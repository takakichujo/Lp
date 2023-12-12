import './index.css';
import { useNavigate } from 'react-router-dom';
import { RegionProducts } from './components/Regionpage/RegionProducts';
import { RegionHokkaidoTohokuInfo } from './lib/const/RegionHokkaidoTohokuInfo';
import { RegionTop } from './components/Regionpage/RegionTop';
function App() {
  const navigate = useNavigate();
  const handleCampain = () => {
    navigate('/Campain');
  };
  return (
    <div className='text-center'>
      <h1 className='text-23'>ページ遷移</h1>
      <p className='text-18' onClick={handleCampain}>
        キャンペーンページへ
      </p>
      <RegionTop
        RegionTopImgImg='../../src/img/Region/HokkaidoTohoku/top.webp'
        RegionTopImgTitle='北海道、東北地區'
        DescriptionRegionContent='在北海道、東北地區的遼闊大自然和寒冷氣候下，孕育出豐富的美食！由於北海道的農業和酪農業興盛，出產了許多馬鈴薯和乳製品伴手禮。至於山形、岩手和宮城等地所在的東北地區，則有充滿在地魅力的靈魂料理，以及特色各異的日本酒。'
      />
      <RegionProducts array={RegionHokkaidoTohokuInfo} />
    </div>
  );
}

export default App;
