import { AlertBox } from './components/AlertBox/AlertBox'
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard'
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay'
import "./App.css"
import profileImage from "../src/assets/profileimage.png"
import headphone from "../src/assets/headphone.png"


const user = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'Developer',
  profileImage: profileImage
};

const product = {
  id: '1',
  name: 'Wireless Headphones',
  price: 199.99,
  description: 'High-quality wireless headphones with noise cancellation.',
  imageUrl: headphone,
  inStock: true
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

      <ProductDisplay
        product={product}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
      >
        <div className="text-sm text-gray-500">
          Free shipping available
        </div>
      </ProductDisplay>
    </div>
  )
}

export default App
