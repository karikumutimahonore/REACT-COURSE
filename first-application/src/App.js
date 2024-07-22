const App = () => {
  return (
    <div>
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
      <ul>
        <li>Coding</li>
        <li>Hiking</li>
        <li>Traveling</li>
      </ul>
    </div>
  );
};

export default App;
