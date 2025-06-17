import { ContentLayout } from '@/components/layout';
import { AppProvider } from './provider';

function App() {
  return (
    <AppProvider>
      <ContentLayout>
        <h1>News feed</h1>
      </ContentLayout>
    </AppProvider>
  );
}

export default App;
