import { UserProfile } from "./components/PersonPropsComponent";

const userProfileData = {
  userName: "Алексей",
  userDescription: "Любитель React и фронтенд разработки",
  contactInfo: {
    email: "alexey@example.com",
    phone: "+1234567890",
  },
  location: {
    city: "Москва",
    country: "Россия",
  },
  interests: ["программирование", "путешествия", "фотография"],
};

const App = () => <UserProfile userData={userProfileData} />;

export default App;
