import { useState, useEffect } from "react";
import { useParams } from "react-router"

export function JobDetail(){
    const { jobId } = useParams();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Job not found");
            }
            return response.json();
        })
        .then(json => {
            setJob(json);
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => {setLoading(false)});
    }, [jobId]);

    if (loading) {
        return <div style={{maxWidth:'1280px', margin:'0 auto', padding:'0 1rem'}}>
            <div className="loader"></div>
        </div>
    }

    return (
        <>
            <h1>Job Detail</h1>
            <p>Job ID: {jobId}</p>
        </>
    )
}