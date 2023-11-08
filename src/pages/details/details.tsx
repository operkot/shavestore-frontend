import { useParams } from 'react-router-dom'

import { Navbar } from '../../widgets'
import { useProductDetails } from '../../entities/product'

const Details = () => {
  const { id } = useParams()
  const { details, status } = useProductDetails(id)

  if (status === 'pending') {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="wrapper | grow py-4">
        <p>{details.attributes.title}</p>
      </main>
    </div>
  )
}

export default Details
