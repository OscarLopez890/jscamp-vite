import { useEffect, useState } from "react";

export function useFilters() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    text: "",
    technology: "",
    location: "",
    experience: ""
  });
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const maxResultsPage = 10;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  const handleSearch = (searchParams) => {
    setFilters(searchParams);
    setCurrentPage(1);
  }

  useEffect(() => {
    async function fetchData() {
        try {
            const params = new URLSearchParams();
            if (filters.text) params.append('text', filters.text);
            if (filters.technology) params.append('technology', filters.technology);
            if (filters.location) params.append('location', filters.location);
            if (filters.experience) params.append('level', filters.experience);

            const offset = (currentPage - 1) * maxResultsPage;
            params.append('limit', maxResultsPage);
            params.append('offset', offset);

            setLoading(true);
            const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${params.toString()}`);
            const json = await response.json();
            setTotal(json.total);
            setJobs(json.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }
    fetchData();
  }, [filters, currentPage]);

  const totalPages = Math.ceil(total / maxResultsPage);

  return {
    jobs,
    totalPages,
    currentPage,
    loading,
    handlePageChange,
    handleSearch
  };  
};