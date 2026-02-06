import { useState } from 'react';
import styles from "./JobCard.module.css";

export function JobCard({id, job}) {
    const [
        isApplied, 
        setIsApplied
    ] = useState(false)
    const [aplicationMessage, setAplicationMessage] = useState("")

    const buttonText = isApplied ? 'Aplicado' : 'Aplicar';
    const buttonClassApplied = isApplied ? styles.isApplied : '';

    function handleClick(){
        setIsApplied(!isApplied);
        setAplicationMessage("");
    }

    return (
        <article className={styles.jobListingCard}
            data-id={id}
            data-title={job.titulo}
            data-level={job.data.nivel}
            data-location={job.ubicacion}
            data-contract={job.data.modalidad}
            data-technologies={job.data.technology.join(', ')}>
            <div>
                <h3>{job.titulo}</h3>
                <small>{job.company} | {job.ubicacion}</small>
                <small>{job.data.modalidad} | {job.data.nivel}</small>
                <p>{job.data.technology.join(', ')}</p>
                <p>{job.descripcion}</p>
            </div>
            <div className={styles.applySection}>
                <button 
                    disabled={isApplied}
                    onClick={handleClick} 
                    className={`${styles.buttonApplyJob} ${buttonClassApplied}`}>
                    {buttonText}
                </button>
                <p className={styles.aplicationMessage}>{aplicationMessage}</p>
            </div>
        </article>
    );
}