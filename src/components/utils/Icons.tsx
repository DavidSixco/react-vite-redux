import { ReactElement } from 'react';
import { IconType, GlobalColor } from '../../enum';

type IconsProps = {
    icon: IconType;
    color?: GlobalColor,
};

const Icons = ({ icon, color = GlobalColor.Primary }: IconsProps): ReactElement => {

    const getIcon = (): JSX.Element => {
        switch (icon) {
            case IconType.Universal:
                return (
                    <>
                        'Universal'
                    </>
                );
            case IconType.Login:
                return (
                    <>
                        'Universal'
                    </>
                );
            default:
                return (
                    <>
                        'Universal'
                    </>
                );
        }
    }
    return (
        getIcon()
    )
}

export default Icons