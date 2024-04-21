import React, { useState } from "react";
import "./Upload.scss";
import { Link, useNavigate } from "react-router-dom";
import publish from "../../assets/icons/publish.svg";
import axios from "axios";
import { API_KEY, baseUrl } from "../../utils/utils";

export const Upload = ({ reRender }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const videoData = {
            title: title,
            description: description
        };
        const endpoint = `${baseUrl}videos?api_key=${API_KEY}`;

        try {
            const response = await axios.post(endpoint, videoData);
            reRender(response.data)
            navigate(`/video/${response.data[response.data.length - 1].id}`)
        } catch (error) {
            console.error('Error posting data:', error);
            alert('Failed to upload video.');
        }
    };

    return (
        <section className="upload">
            <h1 className="upload__header">Upload Video</h1>
            <div className="upload__box">
                <div className="upload__wrapper-thumbnail">
                    <h2 className="upload__thumbnail-title">VIDEO THUMBNAIL</h2>
                    <img className="upload__thumbnail" src="http://localhost:5050/assets/kazanindibi.jpg" alt="a person getting ready to run" />
                </div>
                <div className="upload__wrapper-info">
                    <form
                        onSubmit={handleSubmit}
                    >
                        <label className="upload__info-title">TITLE YOUR VIDEO</label>
                        <input
                            className="upload__title"
                            placeholder="Add a title to your video"
                            value={title}
                            onChange={handleTitleChange}
                        />
                        <label className="upload__info-title">ADD A VIDEO DESCRIPTION</label>
                        <textarea
                            className="upload__description"
                            placeholder="Add a description to your video"
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                        <button
                            type="submit"
                            className="upload__button"
                        >
                            <img
                                src={publish}
                                alt="upload icon"
                                className="upload__button-image"
                            />
                            PUBLISH
                        </button>
                    </form>
                </div>
            </div>
            <Link
                to="/"
                className="upload__cancel"
            >
                <span>CANCEL</span>
            </Link>
        </section>
    );
};
