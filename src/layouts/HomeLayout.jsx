import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Homepage from '../pages/Homepage';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../components/Loading';

const HomeLayout = () => {
    const { state } = useNavigation()
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <section>
                    {state == 'load' ? <Loading></Loading> : <Outlet></Outlet>}

                </section>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;