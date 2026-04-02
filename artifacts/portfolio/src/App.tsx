import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProfileCard from "@/components/ProfileCard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileCard />
    </QueryClientProvider>
  );
}

export default App;
