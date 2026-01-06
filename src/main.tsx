import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ResumeProvider } from './context/ResumeContext.tsx';


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
      <ResumeProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </ResumeProvider>
  </AuthProvider>
)

