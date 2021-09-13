import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <Grid
      container
      direction='column'
      style={{ minHeight: '100vh' }}
    >
      <Header />

      {/* Main Content */}
      <Grid item id='content' style={{ flex: 1 }}>
        <Container>
          Main content here
        </Container>
      </Grid>

      <Footer />

    </Grid>
  );
}

export default App;
