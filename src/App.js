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
                                <Route path="/admin-dashboard-ui" element={<Ecommerce />} />
                                <Route path="/admin-dashboard-ui/ecommerce" element={<Ecommerce />} />


                                {/* Pages */}
                                <Route path="/admin-dashboard-ui/orders" element={<Orders />} />
                                <Route path="/admin-dashboard-ui/employees" element={<Employees />} />
                                <Route path="/admin-dashboard-ui/customers" element={<Customers />} />


                                {/* Apps */}
                                <Route path="/admin-dashboard-ui/calendar" element={<Calendar />} />
                                <Route path="/admin-dashboard-ui/editor" element={<Editor />} />
                                <Route path="/admin-dashboard-ui/color-picker" element={<ColorPicker />} />
                                <Route path="/admin-dashboard-ui/kanban" element={<Kanban />} />


                                {/* Charts */}
                                <Route path="/admin-dashboard-ui/line" element={<Line />} />
                                <Route path="/admin-dashboard-ui/area" element={<Area />} />
                                <Route path="/admin-dashboard-ui/bar" element={<Bar />} />
                                <Route path="/admin-dashboard-ui/pie" element={<Pie />} />
                                <Route path="/admin-dashboard-ui/financial" element={<Financial />} />
                                <Route path="/admin-dashboard-ui/color-mapping" element={<ColorMapping />} />
                                <Route path="/admin-dashboard-ui/pyramid" element={<Pyramid />} />
                                <Route path="/admin-dashboard-ui/stacked" element={<Stacked />} />

                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App