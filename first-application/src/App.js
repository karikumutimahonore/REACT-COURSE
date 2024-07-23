import "./UserProfile.css";
import style from './UserProfile.module.css';
const App = () => {
  //Inline style object for the container

  const containerStyle = {
    textAlign: "center",
    margin: "20px",
  };
  return (
    <div style={containerStyle}>
      <img
        src="https://cdn.pixabay.com/photo/2023/07/22/09/04/european-shorthair-8142967_1280.jpg"
        alt="Avatar"
        //Apply in-line styling directly
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <h2
        style={{
          color: "purple",
        }}
      >
        Emmanuel Tweneboah
      </h2>
      <p>FullStack Web Developer | React Enthisiast</p>
      <ul className={style.hobbies}>
        <li className={style.hobby}>Coding</li>
        <li className={style.hobby}>Hiking</li>
        <li className={style.hobby}>Traveling</li>
      </ul>
    </div>
  );
};

export default App;
