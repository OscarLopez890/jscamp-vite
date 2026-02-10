import { useEffect, useState } from "react";
import { useRouter } from "../hooks/useRouter.jsx";

export function useFilters() {
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const page = Number(params.get('page') || 1);
    return page;
  });

  const [filters, setFilters] = useState(() => {
    try {
      const savedFilters = localStorage.getItem('filters');
      const params = new URLSearchParams(window.location.search);
      const text = params.get('text') || "";
      const technology = params.get('technology') || "";
      const location = params.get('location') || "";
      const experience = params.get('experience') || "";

      if (text === "" && technology === "" && location === "" && experience === "") {
        return savedFilters ? JSON.parse(savedFilters) : {
          text: "",
          technology: "",
          location: "",
          experience: ""
        };
      } else {
        return {
          text: text,
          technology: technology,
          location: location,
          experience: experience
        }
      }
    } catch (error) {
      console.log("Error loading filters from localStorage:", error);
      setErrorStatus(true);
    }
  });
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [errorStatus, setErrorStatus] = useState(false);

  const maxResultsPage = 10;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  const handleSearch = (searchParams) => {
    setFilters(searchParams);
    setCurrentPage(1);
  }

  const { navigateTo } = useRouter();

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
            setErrorStatus(true);
        } finally {
            setLoading(false);
        }
    }
    fetchData();
  }, [filters, currentPage]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.text) params.append('text', filters.text);
    if (filters.technology) params.append('technology', filters.technology);
    if (filters.location) params.append('location', filters.location);
    if (filters.experience) params.append('level', filters.experience);
    if (currentPage > 1) params.append('page', currentPage);

    const newURL = params.toString()
    ? `${window.location.pathname}?${params.toString()}` : window.location.pathname;
    
    navigateTo(newURL);
  }, [filters, currentPage, navigateTo]);

  useEffect(() => {
    try {
      const saveFilters = {}

      saveFilters.text = filters.text;
      saveFilters.technology = filters.technology;
      saveFilters.location = filters.location;
      saveFilters.experience = filters.experience;

      localStorage.setItem('filters', JSON.stringify(saveFilters));

    } catch(error){
      console.log("Error saving filters to localStorage:", error);
    }
  }, [filters]);

  const totalPages = Math.ceil(total / maxResultsPage);

  return {
    jobs,
    totalPages,
    currentPage,
    loading,
    filters,
    errorStatus,
    handlePageChange,
    handleSearch
  };  
};