import { ContentLayout } from '@/components/layout';
import { AppProvider } from './provider';
import Posts from './app/routes/posts/posts';


function App() {
  return (
    <AppProvider>
      <ContentLayout>
          <Posts />
      </ContentLayout>
    </AppProvider>
  );
}

export default App;
