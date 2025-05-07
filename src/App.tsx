import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';

function App() {
  return (
    <>
      <Button variant="primary" size="medium" rounded="small" label="버튼입니다" />
      <Input size="medium" placeholder="인풋 텍스트필드입니다." />
    </>
  );
}

export default App;
