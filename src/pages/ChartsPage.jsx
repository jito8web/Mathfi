import React, { useState } from 'react'
import { scheduleConstant, scheduleAnnuity } from '../utils/amort'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ChartsPage() {
  const [capital, setCapital] = useState('')
  const [rate, setRate] = useState('')
  const [years, setYears] = useState('')
  const [ppy, setPpy] = useState(12)
  const [data, setData] = useState(null)

  const make = () => {
    const s1 = scheduleConstant(Number(capital), Number(rate), Number(years), Number(ppy))
    const s2 = scheduleAnnuity(Number(capital), Number(rate), Number(years), Number(ppy))

    const chart = s1.map((r, i) => ({
      period: r.period,
      remaining_constant: r.remaining,
      remaining_annuity: s2[i]?.remaining ?? null,
      interest_constant: r.interest,
      interest_annuity: s2[i]?.interest ?? null,
    }))

    setData(chart)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Graphiques</h1>

      {/* === FORMULAIRE === */}
      <div className="grid grid-cols-4 gap-3 max-w-2xl">

        <div>
          <label className="text-sm text-gray-700">Capital (Ar)</label>
          <input
            className="border p-2 w-full"
            value={capital}
            onChange={e => setCapital(e.target.value)}
            placeholder="TSY SY LC BRO"
          />
        </div>

        <div>
          <label className="text-sm text-gray-700">Taux (%)</label>
          <input
            className="border p-2 w-full"
            value={rate}
            onChange={e => setRate(e.target.value)}
            placeholder="YAMETE"
          />
        </div>

        <div>
          <label className="text-sm text-gray-700">Durée (ans)</label>
          <input
            className="border p-2 w-full"
            value={years}
            onChange={e => setYears(e.target.value)}
            placeholder="Mofo BE"
          />
        </div>

        <div>
          <label className="text-sm text-gray-700">Périodicité</label>
          <select
            className="border p-2 w-full"
            value={ppy}
            onChange={e => setPpy(Number(e.target.value))}
          >
            <option value={12}>Mensuel</option>
            <option value={4}>Trimestriel</option>
            <option value={1}>Annuel</option>
          </select>
        </div>

      </div>

      {/* BOUTON */}
      <div className="mt-3">
        <button
          className="bg-sky-600 text-white px-4 py-2 rounded"
          onClick={make}
        >
          Générer graphiques
        </button>
      </div>

      {/* === GRAPHIQUES === */}
      {data && (
        <div className="mt-6 bg-white p-4 rounded shadow">

          {/* CAPITAL RESTANT */}
          <h3 className="font-semibold mb-2">Capital restant</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="remaining_constant" name="Restant (constant)" stroke="#1e40af" />
              <Line type="monotone" dataKey="remaining_annuity" name="Restant (annuité)" stroke="#0ea5a4" />
            </LineChart>
          </ResponsiveContainer>

          {/* INTÉRÊTS */}
          <h3 className="font-semibold mt-6 mb-2">Intérêts par période</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="interest_constant" name="Intérêt (constant)" stroke="#f97316" />
              <Line type="monotone" dataKey="interest_annuity" name="Intérêt (annuité)" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>

        </div>
      )}
    </div>
  )
}
