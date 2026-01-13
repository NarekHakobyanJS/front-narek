import style from './BurgerMenu.module.css'
import { IoClose } from "react-icons/io5";
import { Arrow, Logo, NavigationTitle } from '../../atom';
import { navigations } from '../../../shared/data/navigation';
import { ArrowDirection } from '../../../shared/types/arrow.types';

 
type BurgerMenuPropsType = {
    closeBurgerMenu : () => void
}

export const BurgerMenu = ({closeBurgerMenu} : BurgerMenuPropsType) => {
    return (
        <div className={style.burger}>
            <div className={style.burgerMenu}>
                <div className={style.burgerMenuHeader}>
                    <Logo />
                    <IoClose 
                    onClick={closeBurgerMenu}
                    className={style.burgerMenuClose} />
                </div>

                <div className={style.burgerNavigation}>
                    {
                        navigations.map((navigation) => {
                            return (
                                <div className={style.burgerNav}>
                                    <NavigationTitle title={navigation.title} key={navigation.id} burgerTitleStyle='burgerTitleStyle' />
                                    {navigation.isIcon && <Arrow direction={ArrowDirection.bottom} />}
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}
