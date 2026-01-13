import style from './NavigationTitle.module.css'

type NavigationTitlePropsType = {
    title : string
    subClass? : string
}

export const NavigationTitle = ({title, subClass} : NavigationTitlePropsType) => {
  return (
    <p className={`${style.navLink} ${subClass ? style.subClass : ''}` }>{title}</p>
  )
}
