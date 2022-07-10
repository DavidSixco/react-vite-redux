import { MainProps } from '@root/types/props-types';
import { ReactElement } from 'react';
import Footer from './Footer';
import Header from './Header';
import SliderBar from './SliderBar';

const Main = ({ children }: MainProps): ReactElement => {
    return (
        <div>
            <SliderBar />
            <div className='container-main'>
                <Header />
                <div className='container-page'>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default Main;