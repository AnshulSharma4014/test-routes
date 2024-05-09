import { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/homePage.css';

export default function HomePage() {
    const [jobs] = useState([
        'Jobs for 12th Pass',
        'Jobs for Engineers',
        'Jobs for Doctors',
        'Jobs for Clerks'
    ]);

    const [results] = useState([
        'SSB Results are out. Check now!',
        'Army result is out. Check now!',
        'Airforce result is out. Check now!',
        'Navy result is out. Check now!'
    ]);

    return (
        <div className="sections">
            <div className="job-section box">
                <h2 className="section-header">Jobs</h2>
                <ul className="listing-section">
                    {jobs.map(job => (
                        <li key={job}>
                            <Link to={`/jobs?content=${encodeURIComponent(job)}`}>{job}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="results-section box">
                <h2 className="section-header">Results</h2>
                <ul className="listing-section">
                    {results.map(result => (
                        <li key={result}>
                            <Link to={`/results?content=${encodeURIComponent(result)}`}>{result}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
