import { Table } from './components/Table'
import { referrals } from './data/table'

function App() {
  return (
    <>
    <div className='container'>
      <h2>Referrals - 345</h2>
      { <Table referrals={referrals} />}
    </div>
    </>
  )
}

export default App
