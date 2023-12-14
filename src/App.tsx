import './index.css';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const handleCampain = () => {
    navigate('/Campain');
  };
  const handleRegion = () => {
    navigate('./Region');
  };
  return (
    <div className='text-center'>
      <h1 className='text-23'>ページ遷移</h1>
      <p className='text-18' onClick={handleCampain}>
        キャンペーンページへ
      </p>
      <p className='text-18' onClick={handleRegion}>
        Regionページへ
      </p>
    </div>
  );
}

export default App;
