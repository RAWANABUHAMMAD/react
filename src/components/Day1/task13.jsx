import myimg from "../img/img.jpg";
export default function task13() {
  const cards = [
    {
      image: myimg,
      titel: "abdkakash",
      age: "25",
    },
    {
      image: myimg,
      titel: "raneem",
      age: "22",
    },
    {
      image: myimg,
      titel: "rawan",
      age: "35",
    },
    {
      image: myimg,
      titel: "mohamd",
      age: "19",
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      {cards.map((card) => (
        <div>
          <img
            src={card.image} alt="error" style={{ width: "100px", height: "100px" }} />
          <h3>{card.titel}</h3>
          <p>{card.age}</p>
        </div>
      ))}
    </div>
  );
}