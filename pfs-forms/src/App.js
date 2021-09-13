import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

function App() {
  return (
    <Grid
      container
      direction='column'
      style={{ minHeight: '100vh' }}
    >
      <header id='top'>
        This is a header.
      </header>

      {/* Main Content */}
      <Grid item id='content' style={{ flex: 1 }}>
        <Container>
          Main content here
        </Container>
      </Grid>

      <footer id='bottom'>
        This is a footer.
      </footer>

    </Grid>
  );
}

export default App;
