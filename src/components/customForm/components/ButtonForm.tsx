import './ButtonForm.css'

interface Props {
  label           : string;
  styleVariation ?: string;
}

export const ButtonForm = ( {label, styleVariation} : Props ) => {

  return (
    <button type="submit" className={`button-elegante ${styleVariation && styleVariation}`} >
      {label}
    </button>
  )
}

