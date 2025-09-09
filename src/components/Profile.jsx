import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector((state) => state.user.value);

  return (
    <div>
      <h1>User Info</h1>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>email: {user.email}</p>
    </div>
  )
}

export default Profile
