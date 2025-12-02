import React, { useState } from 'react'
import { scheduleAnnuity, scheduleConstant, totalsFromSchedule } from '../utils/amort'


export default function Calculator({onResult}){
const [capital,setCapital]=useState('')//eto vo hitako rah ito
const [rate,setRate]=useState('')
const [years,setYears]=useState('')
const [ppy,setPpy]=useState(12)
const [method,setMethod]=useState('annuity')


const compute = ()=>{
const sched = method==='annuity' ? scheduleAnnuity(capital,Number(rate),Number(years),ppy) : scheduleConstant(capital,Number(rate),Number(years),ppy)
const totals = totalsFromSchedule(sched)
onResult({sched,totals,meta:{capital,rate,years,ppy,method}})
}


return (
<div className="bg-white p-4 rounded shadow">
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-sm">Capital</label>
<input className="border p-2 rounded w-full" value={capital} onChange={e=>setCapital(e.target.value)} />
</div>
<div>
<label className="block text-sm">Taux annuel (%)</label>
<input className="border p-2 rounded w-full" value={rate} onChange={e=>setRate(e.target.value)} />
</div>
<div>
<label className="block text-sm">Durée (années)</label>
<input className="border p-2 rounded w-full" value={years} onChange={e=>setYears(e.target.value)} />
</div>
<div>
<label className="block text-sm">Périodes/an</label>
<select className="border p-2 rounded w-full" value={ppy} onChange={e=>setPpy(Number(e.target.value))}>
<option value={12}>Mensuel</option>
<option value={4}>Trimestriel</option>
<option value={1}>Annuel</option>
</select>
</div>
<div className="col-span-2">
<label className="block text-sm">Méthode</label>
<select className="border p-2 rounded w-full" value={method} onChange={e=>setMethod(e.target.value)}>
<option value="annuity">Annuités constantes</option>
<option value="constant">Amortissements constants</option>
</select>
</div>
</div>


<div className="mt-4 flex gap-2">
<button className="bg-sky-600 text-white px-4 py-2 rounded" onClick={compute}>Calculer</button>
</div>
</div>
)
}