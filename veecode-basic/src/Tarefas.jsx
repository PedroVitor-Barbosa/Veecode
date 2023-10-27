import { 
    useState
} from "react"

export function Tarefas() {
    const [nome, setNome] = useState('')
    const [tarefas, setTarefas] = useState([])

    function handleChangeValue(e) {
        setNome(e.target.value)
    }

    function handleAddTarefa() {
        setTarefas([...tarefas, nome])
    }

    return (
      <>
        Tarefa: 
            <input 
                type="text" 
                value={nome} 
                onChange={handleChangeValue}
            />
            <button onClick={handleAddTarefa}>
                Adicionar
            </button>
      </>
    )
  }
  