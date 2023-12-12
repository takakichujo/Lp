import './index.css';
import { useNavigate } from 'react-router-dom';
import { Regions } from './components/Regionpage/Regions';
import { SimpleRegionTitle } from './components/Regionpage/SimpleRegionTitle';
import { SimpleRegions } from './components/Regionpage/SimpleRegions';
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
      <SimpleRegionTitle title='北海道、東北地方' />
      <Regions />
      <SimpleRegions />
    </div>
  );
}

export default App;
