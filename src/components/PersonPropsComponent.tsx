
type UserProfileData = {
  userName: string;
  userDescription: string;
  contactInfo: {
    email: string | null;
    phone: string | null;
  }
  location: {
    city?: string;
    country: string;
  },
  interests: string[];
}

type UserProfileProps = {
  userData: UserProfileData;
}

export const UserProfile = ({ userData }: UserProfileProps) => {
  return (
    <div>
      <h1>Профиль пользователя: {userData.userName}</h1>
      <p>Описание: {userData.userDescription}</p>
      <h2>Контактная информация:</h2>
      <p>Email: {userData.contactInfo.email}</p>
      <p>Телефон: {userData.contactInfo.phone}</p>
      <h2>Местоположение:</h2>
      <p>Город: {userData.location.city}</p>
      <p>Страна: {userData.location.country}</p>
      <h2>Интересы:</h2>
      <ul>
        {userData.interests.length && userData.interests.map((interest, index) => <li key={index}>{interest}</li>
        )}
      </ul>
    </div>
  );
}
 






