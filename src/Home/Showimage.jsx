import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import {getImage} from '../utils/api'

const Showimage = () => {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        // Fetch image data from the API
        fetchImageData()
            .then(data => setImageData(data))
            .catch(error => console.error('Error fetching image data:', error));
    }, []);

    const fetchImageData = async () => {
        try {
            // Fetch image data from API
            const response = await fetch('http://localhost:8000/getImage');
            const data = await response.json();

            // Assuming 'data' is the image data object
            const imageBuffer = Buffer.from(data.result[0].image.data);
            const imageUrl = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;

            return imageUrl;
        } catch (error) {
            throw error;
        }
    };

    return (
        <div>
            {imageData ? (
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Image
                        </Typography>
                        <img src={imageData} alt="Image" style={{ maxWidth: '100%' }} />
                    </CardContent>
                </Card>
            ) : (
                <Typography>Loading...</Typography>
            )}
        </div>
    );
};

export default Showimage;
