
import React, { useState, useEffect } from 'react';
import { JournalRow, JournalType } from '../types';
import { Plus, Trash2 } from 'lucide-react';

interface JournalTableProps {
  type: JournalType;
  defaultDate: string;
  rows: JournalRow[];
  setRows: (rows: JournalRow[]) => void;
  readOnly?: boolean;
}

const EmptyRow = (id: string): JournalRow => ({
  id,
  accountNumber: '',
  declTva: '',
  codePopsy: '',
  label: '',
  debit: '',
  credit: ''
});

export const JournalTable: React.FC<JournalTableProps> = ({ 
  type, 
  defaultDate,
  rows, 
  setRows, 
  readOnly = false
}) => {
  const [journalDate, setJournalDate] = useState(defaultDate);

  useEffect(() => {
    setJournalDate(defaultDate);
  }, [defaultDate]);

  useEffect(() => {
    if (!readOnly && rows.length === 0) {
      setRows([EmptyRow('1'), EmptyRow('2'), EmptyRow('3')]);
    }
  }, []);

  const handleChange = (id: string, field: keyof JournalRow, value: string) => {
    if (readOnly) return;
    const newRows = rows.map(row => row.id === id ? { ...row, [field]: value } : row);
    setRows(newRows);
  };

  const addRow = () => {
    if (readOnly) return;
    setRows([...rows, EmptyRow(Date.now().toString())]);
  };

  const removeRow = (id: string) => {
    if (readOnly) return;
    setRows(rows.filter(r => r.id !== id));
  };

  const getJournalTitle = (t: JournalType) => {
    switch(t) {
      case JournalType.ACHAT: return "Journal : Achat";
      case JournalType.VENTE: return "Journal : Vente";
      case JournalType.CAISSE: return "Journal : Caisse";
      case JournalType.FINANCIER: return "Journal : Financier";
      case JournalType.OD: return "Journal : Opérations Diverses";
      default: return "Journal";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 my-6 break-inside-avoid">
      <div className="bg-slate-800 text-white p-3 flex justify-between items-center print:bg-white print:text-black print:border-b print:border-black">
        <h3 className="font-bold text-lg">{getJournalTitle(type)}</h3>
        <div className="flex items-center gap-2">
           <label className="text-sm font-light">Date :</label>
           <input type="text" value={journalDate} onChange={(e) => setJournalDate(e.target.value)} disabled={readOnly} className="bg-slate-700 text-white px-2 py-1 rounded w-32 text-center text-sm border border-slate-600 print:text-black print:border-black print:bg-transparent" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 font-semibold border-b">
            <tr>
              <th className="p-2 w-24 border-r">No de compte</th>
              <th className="p-2 w-16 border-r">DECL TVA</th>
              <th className="p-2 w-20 border-r">CODE POPSY</th>
              <th className="p-2 border-r text-left">Libellé</th>
              <th className="p-2 w-28 border-r text-right bg-yellow-50/50">Débit</th>
              <th className="p-2 w-28 text-right bg-blue-50/50">Crédit</th>
              {!readOnly && <th className="p-2 w-10"></th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={row.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-1 border-r"><input value={row.accountNumber} onChange={(e) => handleChange(row.id, 'accountNumber', e.target.value)} disabled={readOnly} className="w-full p-1 bg-yellow-100 font-bold text-center focus:ring-2 focus:ring-blue-400 focus:outline-none print:bg-transparent" /></td>
                <td className="p-1 border-r"><input value={row.declTva} onChange={(e) => handleChange(row.id, 'declTva', e.target.value)} disabled={readOnly} className="w-full p-1 bg-yellow-100 text-center font-bold focus:ring-2 focus:ring-blue-400 focus:outline-none print:bg-transparent" /></td>
                <td className="p-1 border-r"><input value={row.codePopsy} onChange={(e) => handleChange(row.id, 'codePopsy', e.target.value)} disabled={readOnly} className="w-full p-1 bg-yellow-100 text-center font-bold focus:ring-2 focus:ring-blue-400 focus:outline-none print:bg-transparent" /></td>
                <td className="p-1 border-r"><input value={row.label} onChange={(e) => handleChange(row.id, 'label', e.target.value)} disabled={readOnly} className="w-full p-1 bg-transparent focus:ring-2 focus:ring-blue-400 focus:outline-none" /></td>
                <td className="p-1 border-r bg-yellow-50/30"><input value={row.debit} onChange={(e) => handleChange(row.id, 'debit', e.target.value)} disabled={readOnly} className="w-full p-1 bg-yellow-100 text-right font-bold focus:ring-2 focus:ring-blue-400 focus:outline-none print:bg-transparent" /></td>
                <td className="p-1 bg-blue-50/30"><input value={row.credit} onChange={(e) => handleChange(row.id, 'credit', e.target.value)} disabled={readOnly} className="w-full p-1 bg-yellow-100 text-right font-bold focus:ring-2 focus:ring-blue-400 focus:outline-none print:bg-transparent" /></td>
                {!readOnly && <td className="p-1 text-center"><button onClick={() => removeRow(row.id)} className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button></td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!readOnly && (
        <div className="bg-gray-50 p-2 flex justify-start border-t">
          <button onClick={addRow} className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 px-3 py-1 rounded hover:bg-blue-100 transition-colors">
            <Plus size={14} /> Ajouter une ligne
          </button>
        </div>
      )}
    </div>
  );
};
