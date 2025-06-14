import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function Viewstory() {
    const { id, tot } = useParams();
    const [story, setStory] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (Number(id) > Number(tot) || Number(id) <= 0 || isNaN(id) || isNaN(tot)) {
            navigate('/');
            return;
        }

        fetch(`http://localhost:3003/stories/${id}`)
            .then(res => {
                if (!res.ok) throw new Error('Story not found');
                return res.json();
            })
            .then(data => setStory(data))
            .catch(err => {
                console.log(err);
                navigate('/');
            });
    }, [id, tot, navigate]);

    return (
        <div>
            {/* Exit Icon Button */}
            <div className="d-flex justify-content-end p-3">
                <button
                    onClick={() => navigate('/')}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '2rem',
                        color: '#dc3545', // bootstrap danger red color
                    }}
                    aria-label="Exit"
                    title="Exit"
                >
                    <i className="bi bi-x-circle"></i>
                </button>
            </div>

            {story ? (
                <div className='d-flex justify-content-center align-items-center'>
                    {Number(id) > 1 && (
                        <Link to={`/stories/${Number(id) - 1}/${tot}`}>
                            <i className='bi bi-arrow-left-circle-fill' style={{ fontSize: '2rem', marginRight: '10px' }}></i>
                        </Link>
                    )}

                    <img className='vh-100' src={story.image_url} alt="story" />

                    {Number(id) < Number(tot) && (
                        <Link to={`/stories/${Number(id) + 1}/${tot}`}>
                            <i className='bi bi-arrow-right-circle-fill' style={{ fontSize: '2rem', marginLeft: '10px' }}></i>
                        </Link>
                    )}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default Viewstory;
