import Sidebar from './Sidebar'
import Feeds from './Feeds'
import Suggestions from './Suggestions'



function App() {



  return (
    <div className='d-flex vh-100'>
        <div className='w-20'><Sidebar/></div>
        <div className='w-50 '><Feeds/></div>
        <div className='w-30'><Suggestions/></div>

    </div>
  )
}

export default App