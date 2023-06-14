import "../styles/Tina.css";
import {useNavigate} from 'react-router-dom';

export function Button(props) {
    const navigate = useNavigate();
  return (
    <button
      style={{
        background: props.bg,
        width: props.width,
        color: props.color,
      }}
      type="submit"
      onClick={()=> navigate('/Landing')}
    >
      {props.img && <img src={props.img} alt="logo" />}
     <span> {props.label}</span>
    </button>
  );
}