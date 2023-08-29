import Airtable from "airtable"
import { useEffect, useState } from "react"

const APP_ID = import.meta.env.VITE_APP_AIRTABLE_APP_ID || ""

const base = new Airtable({
  apiKey: import.meta.env.VITE_APP_AIRTABLE_API_TOKEN,
}).base(APP_ID)

interface ProjectRecord {
  id: string
  fields: {
    title: string
  }
}

export const useAirtableAnimal = () => {
  const [data, setData] = useState<ProjectRecord[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    base("projects")
      .select({
        maxRecords: 3,
        view: "Grid view",
      })
      .all()
      .then((records) => {
        const newRecords: ProjectRecord[] = records.map((record) => ({
          id: record.id,
          fields: record.fields as ProjectRecord["fields"], // Utilisez le type spécifique des champs
        }))
        setData(newRecords)
        setLoading(false)
      })
  }, [])
  return { data, loading }
}
