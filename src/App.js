import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from './contexts/ContextProvider';
import "./App.css";

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
    Ecommerce, Orders, Kanban, Employees, Calendar, Editor, ColorPicker,
    Stacked, Pyramid, Customers, Area, Bar, Pie, Financial, ColorMapping, Line,
} from './pages';

const App = () => {
    const { activeMenu } = useStateContext();
    return (
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className="fixed right-4 bottom-4" style={{ zIndex: "100" }}>
                        <TooltipComponent content="Settings" position='Top'>
                            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: "blue", borderRadius: "50%" }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'><Sidebar /></div>) :
                        <div className='w-0 dark:bg-secondary-dark-bg'><Sidebar /></div>}
                    <div className={activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full' : 'dark:bg-main-bg bg-main-bg min-h-screen flex-2 w-full'}>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>
                        <div>
                            <Routes>
                                {/* DashBoard */}
                                <Route path="/" element={<Ecommerce />} />
                                <Route path="/ecommerce" element={<Ecommerce />} />


                                {/* Pages */}
                                <Route path="/orders" element={<Orders />} />
                                <Route path="/employees" element={<Employees />} />
                                <Route path="/customers" element={<Customers />} />


                                {/* Apps */}
                                <Route path="/calendar" element={<Calendar />} />
                                <Route path="/editor" element={<Editor />} />
                                <Route path="/color-picker" element={<ColorPicker />} />
                                <Route path="/kanban" element={<Kanban />} />


                                {/* Charts */}
                                <Route path="/line" element={<Line />} />
                                <Route path="/area" element={<Area />} />
                                <Route path="/bar" element={<Bar />} />
                                <Route path="/pie" element={<Pie />} />
                                <Route path="/financial" element={<Financial />} />
                                <Route path="/color-mapping" element={<ColorMapping />} />
                                <Route path="/pyramid" element={<Pyramid />} />
                                <Route path="/stacked" element={<Stacked />} />

                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App