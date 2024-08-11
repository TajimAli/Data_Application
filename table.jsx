import React, { useEffect, useState } from 'react';

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Retrieve data from local storage
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        setData(storedData);
    }, []);

    return (
        <div>
            <h1>Job Application Data</h1>
            <div className="tableData">
                <table border="1">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Coures</th>
                            <th>Experience HTML,CSS</th>
                            <th>JavaScript Experience</th>
                            <th>React Experience</th>
                            <th>Other Experience</th>
                            <th>Company Name</th>
                            <th>Resume</th>
                            <th>About</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.fname}</td>
                                    <td>{item.lname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.number}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.country}</td>
                                    <td>{item.state}</td>
                                    <td>{item.city}</td>
                                    <td>{item.coures}</td>
                                    <td>{item.exHtmlcss}</td>
                                    <td>{item.exJavaScript}</td>
                                    <td>{item.exReact}</td>
                                    <td>{item.exOther}</td>
                                    <td>{item.companyn}</td>
                                    <td>{item.resume}</td>
                                    <td>{item.about}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;