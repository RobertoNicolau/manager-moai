import { DocumentList } from "./components/DocumentList";
import { SearchFilter } from "./components/Filter";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <SearchFilter />
      <DocumentList />
      <GlobalStyle />
    </>
  );
}

export default App;
