import { JobResults } from "../components/JobResults.jsx";
import { SearchFormSection } from "../components/SearchFormSection.jsx";
import { useFilters } from "../hooks/useFilters.jsx";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import styles from "../components/Spinner.module.css";

export function Search() {
  const {
    jobs,
    loading,
    totalPages,
    currentPage,
    filters,
    errorStatus,
    handlePageChange,
    handleSearch
  } = useFilters();

  return (
    <>
        <main className="main-empleos">
            <SearchFormSection
              onSubmitSearch={(handleSearch)}
              filters={filters}
            />
            {
              errorStatus ? <ErrorMessage message="Error al cargar los datos, por favor intente más tarde." /> :
              loading ? <div className={styles.spinner}></div> : <JobResults 
              data={jobs}
              totalPages={totalPages}
              currentPage={currentPage}
              pageChangeFunction={handlePageChange}
            />
            }
        </main>
    </>
  )
}