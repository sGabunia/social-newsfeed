import { AppProvider } from './provider';
import Posts from './app/routes/posts/posts';

function App() {
  return (
    <AppProvider>
      <Posts />
    </AppProvider>
  );
}

export default App;
