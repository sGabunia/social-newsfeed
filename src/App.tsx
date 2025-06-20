import { AppProvider } from './provider';
import MainRoute from './app/routes/posts/MainRoute';

function App() {
  return (
    <AppProvider>
      <MainRoute />
    </AppProvider>
  );
}

export default App;
