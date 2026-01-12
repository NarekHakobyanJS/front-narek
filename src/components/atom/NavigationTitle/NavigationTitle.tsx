import style from './NavigationTitle.module.css'

type NavigationTitlePropsType = {
    title : string
}

export const NavigationTitle = ({title} : NavigationTitlePropsType) => {
  return (
    <li className={style.navLink}>{title}</li>
  )
}
