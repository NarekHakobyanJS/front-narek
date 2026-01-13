import style from './NavigationTitle.module.css'

type NavigationTitlePropsType = {
    title : string
    subClass? : string
    burgerTitleStyle? : string
}

export const NavigationTitle = ({title, subClass, burgerTitleStyle} : NavigationTitlePropsType) => {
  return (
    <p className={`${style.navLink} ${subClass ? style.subClass : ''} ${ burgerTitleStyle ? style.burgerTitleStyle : ''}` }>{title}</p>
  )
}
