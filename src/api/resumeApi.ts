import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"

export const resumeApi = {
    getResume: async()=>{
        const token = localStorage.getItem('token')
        const res = await fetch(`${API_URL}/resume`,{
            headers: {
                'Authorization' : `Bearer ${token}`,
                'Content-type' : 'application/json'
            }
        })

        if(!res.ok) throw new Error("Failed to load resume")
            return res.json()
    },
    updateResume: async (updates: any) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_URL}/resume`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });

    if (!res.ok) throw new Error('Failed to save');
    return res.json();
  },
}

