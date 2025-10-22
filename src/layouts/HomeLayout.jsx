import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Homepage from '../pages/Homepage';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
               <Navbar></Navbar>
            </header>
            <main>
                <section>
                    <Outlet></Outlet>
                </section>
                
            </main>
             <footer>
                <Footer></Footer>
             </footer>
        </div>
    );
};

export default HomeLayout;