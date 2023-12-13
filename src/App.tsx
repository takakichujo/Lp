import './index.css';
import { useNavigate } from 'react-router-dom';
import { Regionpage } from './Pages/RegionPage';
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
      <Regionpage />
    </div>
  );
}

export default App;
