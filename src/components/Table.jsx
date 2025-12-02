import React, { useState } from 'react'


export default function Table({ data }) {
    const [page, setPage] = useState(1)
    const perPage = 12
    const totalPages = Math.max(1, Math.ceil((data?.length || 0) / perPage))
    const pageData = data.slice((page - 1) * perPage, page * perPage)
    return (
        <div className="mt-4 bg-white p-3 rounded shadow">
            <div className="overflow-x-auto"> 
                <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2">Période</th>
                            <th className="p-2">Amortissement</th>
                            <th className="p-2">Intérêts</th>
                            <th className="p-2">Annuité</th>
                            <th className="p-2">Restant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageData.map(r => (
                            <tr key={r.period} className="border-b">
                                <td className="p-2 text-center">{r.period}</td>
                                <td className="p-2 text-center">{r.principal}</td>
                                <td className="p-2 text-center">{r.interest}</td>
                                <td className="p-2 text-center">{r.payment}</td>
                                <td className="p-2 text-center">{r.remaining}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-3 flex justify-between items-center">
                <div>Page {page} / {totalPages}</div>
                <div className="flex gap-2">
                    <button disabled={page <= 1} onClick={() => setPage(p => p - 1)} className="px-3 py-1 border rounded">Prev</button>
                    <button disabled={page >= totalPages} onClick={() => setPage(p => p + 1)} className="px-3 py-1 border rounded">Next</button>
                </div>
            </div>
        </div>
    )
}