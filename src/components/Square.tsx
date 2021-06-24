import React, { FC, useEffect, useState } from 'react'

interface SquareProps {
    value: number
}


const Square: FC<SquareProps> = ({ value }) => {
    const [data, setData] = useState(1)

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => setData(data.total));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div>
            {value}
            {data}
        </div>
    )
}

export default Square;
