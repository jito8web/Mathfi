import React, { useState } from 'react'
import { compareTotals } from '../utils/amort'

export default function Compare() {

    const [capital, setCapital] = useState('')
    const [rate, setRate] = useState('')
    const [years, setYears] = useState('')
    const [ppy, setPpy] = useState(12)
    const [res, setRes] = useState(null)

    const run = () => {
        const c = compareTotals(
            Number(capital),
            Number(rate),
            Number(years),
            Number(ppy)
        )
        setRes(c)
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Comparer les méthodes</h1>

            <div className="grid grid-cols-4 gap-3 max-w-2xl">

                {/* CAPITAL */}
                <div>
                    <label className="text-sm text-gray-700">Capital (Ar)</label>
                    <input
                        className="border p-2 w-full"
                        value={capital}
                        onChange={e => setCapital(e.target.value)}
                        placeholder="capitaux"
                    />
                </div>

                {/* TAUX */}
                <div>
                    <label className="text-sm text-gray-700">Taux (%)</label>
                    <input
                        className="border p-2 w-full"
                        value={rate}
                        onChange={e => setRate(e.target.value)}
                        placeholder="Pourcentage"
                    />
                </div>

                {/* ANNÉES */}
                <div>
                    <label className="text-sm text-gray-700">Durée (ans)</label>
                    <input
                        className="border p-2 w-full"
                        value={years}
                        onChange={e => setYears(e.target.value)}
                        placeholder="ANNÉE"
                    />
                </div>

                {/* PÉRIODICITÉ */}
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
                    onClick={run}
                >
                    Comparer
                </button>
            </div>

            {/* RÉSULTATS */}
            {res && (
                <div className="mt-4 bg-white p-3 rounded shadow max-w-2xl">
                    <div>Intérêts (Amortissements constants): {res.constant.totalInterest}</div>
                    <div>Intérêts (Annuités constantes): {res.annuity.totalInterest}</div>
                    <div className="font-semibold mt-2">
                        Différence (annuité - constant) : {res.diff}
                    </div>
                </div>
            )}

        </div>
    )
}
