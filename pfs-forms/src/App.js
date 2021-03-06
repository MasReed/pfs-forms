import {
  Switch,
  Route,
} from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Header from './Header'
import About from './About'
import FormDisplay from './FormDisplay'
import Footer from './Footer'

function App() {

  const pages = {
    basicInfo: {
      pageRoute: '/create-form',
      pageComponent: FormDisplay,
    },
    landing: {
      pageRoute: '/',
      pageComponent: About,
    },
    notFound: {
      pageRoute: '*',
      pageComponent: About,
    },
  }

  return (
    <Grid
      container
      direction='column'
      style={{ minHeight: '100vh' }}
    >
      <Header />

      {/* Routes generated from pages object */}
      <Switch>
        {
          Object.values(pages).map(page => (
            <Route key={page.pageRoute} path={page.pageRoute}>
              <Grid item id='content' style={{ flex: 1 }}>
                <Container>
                  <Box
                    style={{ backgroundColor: 'lightblue' }}>
                    <page.pageComponent />
                  </Box>
                </Container>
              </Grid>
            </Route>
          ))
        }
      </Switch>

      <Footer />

    </Grid>
  );
}

export default App;


// {/* Basic Info Form */}
// <Route path='/basic-info'>
//   <Container>
//     <Box
//       style={{ backgroundColor: 'lightblue', height: '50rem' }}>
//   <h2>Basic Info</h2>
//   </Box>
//   </Container>
// </Route>
//
// {/* Landing Content */}
// <Route path='/'>
//   <Grid item id='content' style={{ flex: 1 }}>
//     <Container>
//       <Box
//         style={{ backgroundColor: 'lightblue', height: '50rem' }}>
//         <About />
//       </Box>
//     </Container>
//   </Grid>
// </Route>
//
// {/* Page Not Found */}
// <Route path='*'>
//   <h2>Page Not Found</h2>
// </Route>
