Задание:
	Дан объект:
``` const userProfileData = {
  userName: "Алексей",  // обязательное свойство
  userDescription: "Любитель React и фронтенд разработки",  // обязательное свойство
  openForWork: true,  // необязательное свойство
  contactInfo: {
    email: "alexey@example.com",  // может быть null
    phone: "+1234567890"  // может быть null
  },
  location: {
    city: "Москва",  // необязательное свойство
    country: "Россия" 
  },
  interests: ["программирование", "путешествия", "фотография"],  // может быть null
}
```




Нужно реализовать компонент UserProfile, который будет принимать props согласно данным из userProfileData  и отображать информацию о пользователе: его имя и описание и т.д.
