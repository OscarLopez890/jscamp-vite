import { useId, useState } from "react"
import styles from "./SearchFormSection.module.css"

let timeOut = null;

const useSearch = ({idSearch, idTechFilter, idLocationFilter, idExperienceFilter, onSubmitSearch}) => {
    const [isActiveClear, setIsButtonClear] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const searchParams = {
            text: formData.get(idSearch),
            technology: formData.get(idTechFilter),
            location: formData.get(idLocationFilter),
            experience: formData.get(idExperienceFilter),
        }
        if (!searchParams.text && !searchParams.technology && !searchParams.location && !searchParams.experience) {
            setIsButtonClear(false);
        } else {
            setIsButtonClear(true);
        }

        if (event.target.name === idSearch) {
            if (timeOut) clearTimeout(timeOut);
            timeOut = setTimeout(() => {
                onSubmitSearch(searchParams);
            }, 500);
        } else {
            onSubmitSearch(searchParams);
        }
    }

    const handleClear = (event) => {
        event.preventDefault()
        const form = event.currentTarget.form
        form.reset()
        onSubmitSearch({
            text: "",
            technology: "",
            location: "",
            experience: "",
        })
        setIsButtonClear(false);
    }

    return {handleSubmit, handleClear, isActiveClear}
}


export function SearchFormSection({ onSubmitSearch , filters}) {
    const idSearch = useId()
    const idTechFilter = useId()
    const idLocationFilter = useId()
    const idExperienceFilter = useId()

    const {handleSubmit, handleClear, isActiveClear} = useSearch({idSearch, idTechFilter, idLocationFilter, idExperienceFilter, onSubmitSearch})

    return (
        <section>
            <h1>Encuentra tu próximo trabajo</h1>
            <p>Explora miles de oportunidades en el sector tecnológico</p>
            <form onChange={handleSubmit}>
                <div className={styles["search-container"]}>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                    <input name = {idSearch} type="text" placeholder="Escribe el nombre del puesto" defaultValue={filters.text}/>
                </div>
                <div className = {styles["select-container"]}>
                    <select name = {idTechFilter} defaultValue={filters.technology}>
                        <option value="">Tecnología</option>
                        <optgroup label="Lenguajes">
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                            <option value="Java">Java</option>
                            <option value="Ruby">Ruby</option>
                            <option value="Php">PHP</option>
                            <option value="Csharp">C#</option>
                            <option value="Go">Go</option>
                            <option value="Typescript">TypeScript</option>
                            <option value="Swift">Swift</option>
                            <option value="Kotlin">Kotlin</option>
                            <option value="Rust">Rust</option>
                        </optgroup>

                        <option value="Css">CSS</option>
                        <option value="Html">HTML</option>
                        <option value="Sql">SQL</option>
                        <option value="Nodejs">Node.js</option>
                        <option value="React">React</option>
                    </select>
                    <select name = {idLocationFilter} defaultValue={filters.location}>
                        <option value="">Ubicación</option>
                        <option value="Remoto">Remoto</option>
                        <option value="Presencial">Presencial</option>
                        <option value="Hibrido">Híbrido</option>
                    </select>
                    <select name = {idExperienceFilter} defaultValue={filters.experience}>
                        <option value="">Nivel de experiencia</option>
                        <option value="Junior">Junior</option>
                        <option value="Mid-level">Mid-Level</option>
                        <option value="Senior">Senior</option>
                        <option value="Lead">Lead</option>
                    </select>
                </div>
                <button onClick={handleClear} className={`${styles["clear-button"]} ${!isActiveClear ? styles.isNotActive : ""}`}>Limpiar filtros</button>
            </form>
          </section>
    )
}