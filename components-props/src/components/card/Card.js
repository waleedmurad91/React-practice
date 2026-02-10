
import './styles.css'
const Card = (props) => {
  return (
    <>
    <li class="feature-card">
                    <div class="card-no color">{props.index}</div>
                    <div class="card-icon">
                        <img src={props.image} alt="" />
                    </div>
                    <div class="card-heading">
                        <h3>{props.title}</h3>
                    </div>
                    <div class="card-desc">
                        {props.desc}
                    </div>
                </li>
    </>
  );
}

export default Card;
