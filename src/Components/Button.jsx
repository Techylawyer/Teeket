import "../styles/main.css";

export function Button(props) {
  return (
    <button
      style={{
        background: props.bg,
        width: props.width,
        color: props.color,
      }}
      type="submmit"
    >
     {props.label}
    </button>
  );
}
