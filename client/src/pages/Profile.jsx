import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadSpin from '../components/LoadSpin'
import { getMyProds } from '../JS/actions/prodAction'
import ProdsList from '../components/ProdsList'
import AddProd from '../components/AddProd'

const Profile = () => {
  const user = useSelector((state) => state.authReducer.user)
  const isLoad = useSelector(state => state.authReducer.isLoad)
  const myProducts = useSelector(state => state.prodReducer.myProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyProds())
  }, [dispatch])

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '40px' }}>
      {isLoad && <LoadSpin />}
      

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: '80px',
        padding: '40px',
        gap: '100px',
        flexWrap: 'wrap'
      }}>
      
        <div style={{ textAlign: 'center' }}>
          <h3>Hello {user.name}</h3>
          <img
            src="https://img.freepik.com/free-vector/boy-diving-gears-white_1308-41201.jpg?t=st=1746489642~exp=1746493242~hmac=d8f2ad9a12960a7201e408fb6f79d9606b9135c6b303666a12ef67626de4c04e&w=740"
            alt="profile"
            width="130px"
            style={{ borderRadius: '20%', marginTop: '10px' }}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <AddProd />
          
          <img
            src="https://i.etsystatic.com/20162739/r/il/bdad22/1910170242/il_1080xN.1910170242_c3ga.jpg"
            alt="robot"
            width="300px"
            style={{ marginTop: '20px',borderRadius: '20%' }}
            
          />
        </div>
      </div>


      <h4 style={{ marginBottom: '20px' }}> Scuba-Diving</h4>
      
      <ProdsList products={myProducts} all={false} />
    </div>
  )
}

export default Profile
