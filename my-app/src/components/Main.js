import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';

export const Main = () => {
    const [desc, setDesc] = useState('')
    const [pos, setPos] = useState('Software Engineering')
    const [summary, setSummary] = useState('')
    const [loading, setLoading] = useState(false)

    function handleChange(e){
        e.preventDefault();
        const rawdata = e.target.value;
        const linesArray = rawdata.split('\n');
        const escapedLines = linesArray.map(line => `${line} \\n.`);
        setDesc(escapedLines);
    }
    function handlePosChange(e){
        e.preventDefault();
        if (e.target.value !== ''){
            setPos(e.target.value);
        }

    }
    function handleSubmit(e){
        e.preventDefault();
        setLoading(true)
        const dataToSend = {
            data: desc,
            position: pos
        };

        fetch('http://localhost:8000/summary', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        })
        .then((response) => response.json())
        .then((data) => {
            setLoading(false)
            setSummary(data["data"])
        })
        .catch((error) => {
            setLoading(false)
            console.error('Error:', error);
            setSummary(error)
        });
    }

  return (
    <React.Fragment>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Position:</Form.Label>
                <Form.Control type='text' onChange={handlePosChange} value={pos}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Job Description:</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleChange}/>
            </Form.Group>
            <Button type='submit'>Summarize</Button>
        </Form>
        <p>{loading ? "Summarizing..." : summary}</p>
    </React.Fragment>
  )
}
