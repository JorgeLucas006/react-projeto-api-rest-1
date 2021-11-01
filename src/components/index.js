import './style.css'

const Card = ({name, img}) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;