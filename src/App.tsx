import './index.css';
import { Contents } from './components/Contents';
import { ContentInfoTop } from './lib/const/ContentsInfoTop';
function App() {
  return (
    <>
      <Contents contentsInfoArray={ContentInfoTop} />
    </>
  );
}

export default App;
