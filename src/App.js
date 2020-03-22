import React from "react";
import { Layout, Header, Scrollable, Card, Player } from "./components";
import { SONGS } from "./mock";
function App() {
  const [theme, setTheme] = React.useState(true);
  return (
    <>
      <Layout theme={theme}>
        <Header theme={theme} handleTheme={() => setTheme(!theme)} />
        <Scrollable>
          {SONGS.map((value, index) => (
            <Card
              key={index}
              title={value.name}
              subtitle={value.singer}
              theme={theme}
            />
          ))}
        </Scrollable>
        <Player theme={theme} />
      </Layout>
    </>
  );
}

export default App;
