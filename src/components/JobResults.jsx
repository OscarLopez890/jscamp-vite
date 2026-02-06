import { JobCard } from "./jobCard.jsx"
import { Pagination } from "./Pagination.jsx"

import styles from "./JobResults.module.css"

export function JobResults({ data, totalPages, currentPage, pageChangeFunction }) {

    const handlePageChangeInternal = (newPage) => {
        pageChangeFunction(newPage);
    }

    return(
        <section id = "job-results">
            <header>
                <h2>Resultados de búsqueda</h2>
            </header>
            <main>
                <div className = {styles.jobsListings}>
                    {
                        data.length === 0 && <p>No se encontraron resultados</p>
                    }
                    {data.map(job => (
                        <JobCard 
                            key={job.id}
                            job={job}
                        />
                    ))}
                </div>
            </main>
            <footer>
                <Pagination
                    currentPage={currentPage} 
                    totalPages={totalPages}
                    onPageChange={handlePageChangeInternal}
                />
            </footer>
        </section>
    )
}