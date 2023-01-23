import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ProgressBar } from '../components/ProgressBar'
import { ShowHideMessage } from '../components/ShowHideMessage'
import { StopwatchTimer } from '../components/StopwatchTimer'


export const routesPublic =  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ShowHideMessage",
      element: <ShowHideMessage/>,
    },
    {
      path: "/ShowHideMessageMiPractica",
      element: <ShowHideMessage/>,
    },
    {
      path: "/ProgressBar",
      element: <ProgressBar/>,
    },
    {
      path: "/StopwatchTimer",
      element: <StopwatchTimer/>,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]