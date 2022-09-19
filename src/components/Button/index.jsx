import './styles.scss';

export function Button({
  title,
  buttonColor,
  textColor,
  transparent = false,
  height = 37
}) {
  if (transparent) {
    return (

      <button
        className="btn transparent"
        onClick={_ => { console.log('Butão') }}
        style={{ height }}
      >
        <span>{title}</span>
      </button>
    );
  } else {
    return (
      <button
        className="btn"
        onClick={_ => { console.log('Butão') }}
        style={{ backgroundColor: buttonColor, height }}
      >
        <span style={{ color: textColor }}>
          {title}
        </span>
      </button>
    );
  }
}