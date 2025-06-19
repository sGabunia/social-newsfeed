import { ContentLayout } from '@/components/layout';
import { AppProvider } from './provider';
import Posts from './app/routes/posts/posts';
import { Flex } from '@mantine/core';

function App() {
  return (
    <AppProvider>
      <ContentLayout>
        <Flex>
        <Posts />
        <div style={{ border: '1px solid gray', width: '300px', height: '400px' }}>Sidebar</div>
        </Flex>
      </ContentLayout>
    </AppProvider>
  );
}

export default App;
