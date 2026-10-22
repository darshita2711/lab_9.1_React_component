import { AlertBox } from './components/AlertBox/AlertBox'
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard'
import "./App.css"
import profileImage from "../src/assets/profileimage.png"


const user = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'Developer',
  profileImage: profileImage
};

function App() {
  return (
     <div>
      <AlertBox
        type="success"
        message="Your profile was updated successfully!"
        onClose={() => alert('Alert closed')}>
        <p>You can continue using the application.</p>
      </AlertBox>

     <UserProfileCard
      user={user}
      onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
    </UserProfileCard>
    </div>
  )
}

export default App
