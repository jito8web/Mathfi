import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Compare from './pages/Compare'
import Export from './pages/Export'
import ChartsPage from './pages/ChartsPage'
import './App.css'

export default function App(){
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-4">Amortissement</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'p-2 rounded bg-sky-100' : 'p-2 rounded hover:bg-sky-50'}>Accueil</NavLink> 
          <NavLink to="/compare" className={({isActive}) => isActive ? 'p-2 rounded bg-sky-100' : 'p-2 rounded hover:bg-sky-50'}>Comparer</NavLink>
          <NavLink to="/charts" className={({isActive}) => isActive ? 'p-2 rounded bg-sky-100' : 'p-2 rounded hover:bg-sky-50'}>Graphiques</NavLink>
          <NavLink to="/export" className={({isActive}) => isActive ? 'p-2 rounded bg-sky-100' : 'p-2 rounded hover:bg-sky-50'}>Export</NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <Routes>
          <Route path="/Mathfi/" element={<Home/>} />
          <Route path="/Mathfi/compare" element={<Compare/>} />
          <Route path="/Mathfi/charts" element={<ChartsPage/>} />
          <Route path="/Mathfi/export" element={<Export/>} />
        </Routes>
      </main>
    </div>
  )
}
