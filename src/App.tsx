import './index.css';
import { Contents } from './components/Contents';
import { ContentInfoTop } from './lib/const/ContentsInfoTop';
import { Button } from './components/Button/Button';
function App() {
  return (
    <>
      <Contents contentsInfoArray={ContentInfoTop} />
      <Button />
    </>
  );
}

export default App;
