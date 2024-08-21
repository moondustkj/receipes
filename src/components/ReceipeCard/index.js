import React from 'react';
import './index.css';
import { useNavigate } from 'react-router';

const ReceipeCard = ({ recipe, handleBookmark }) => {
    const navigate = useNavigate();

    const handleNavigate = (item) => {
        console.log('navigate called');
        navigate(`/recipe/${item.id}`);
    }
    return <div className='card relative block' onClick={() => handleNavigate(recipe)}>
        <img src={recipe.img} alt='recipe-image'
            className='w-full' />
        <div className='bottom'>
            <div className='flex justify-between'>
                <h4>{recipe.title}</h4>
                <span className='flex items-center gap-[5px]'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5">
                            <path d="M10 7.33333H8.66666V4.66666C8.66666 4.48985 8.59643 4.32028 8.4714 4.19526C8.34638 4.07023 8.17681 3.99999 8 3.99999C7.82319 3.99999 7.65362 4.07023 7.52859 4.19526C7.40357 4.32028 7.33333 4.48985 7.33333 4.66666V8C7.33333 8.17681 7.40357 8.34638 7.52859 8.4714C7.65362 8.59642 7.82319 8.66666 8 8.66666H10C10.1768 8.66666 10.3464 8.59642 10.4714 8.4714C10.5964 8.34638 10.6667 8.17681 10.6667 8C10.6667 7.82318 10.5964 7.65361 10.4714 7.52859C10.3464 7.40357 10.1768 7.33333 10 7.33333ZM8 1.33333C6.68146 1.33333 5.39252 1.72432 4.2962 2.45686C3.19987 3.18941 2.34539 4.2306 1.8408 5.44877C1.33622 6.66695 1.20419 8.00739 1.46143 9.3006C1.71866 10.5938 2.3536 11.7817 3.28595 12.714C4.2183 13.6464 5.40619 14.2813 6.6994 14.5386C7.9926 14.7958 9.33305 14.6638 10.5512 14.1592C11.7694 13.6546 12.8106 12.8001 13.5431 11.7038C14.2757 10.6075 14.6667 9.31854 14.6667 8C14.6667 7.12452 14.4942 6.25761 14.1592 5.44877C13.8242 4.63993 13.3331 3.90501 12.714 3.28595C12.095 2.66689 11.3601 2.17583 10.5512 1.8408C9.74238 1.50577 8.87548 1.33333 8 1.33333V1.33333ZM8 13.3333C6.94516 13.3333 5.91402 13.0205 5.03696 12.4345C4.15989 11.8485 3.47631 11.0155 3.07264 10.041C2.66897 9.06643 2.56336 7.99408 2.76914 6.95951C2.97493 5.92495 3.48288 4.97464 4.22876 4.22876C4.97464 3.48288 5.92495 2.97493 6.95952 2.76914C7.99408 2.56335 9.06644 2.66897 10.041 3.07264C11.0155 3.4763 11.8485 4.15989 12.4345 5.03695C13.0205 5.91402 13.3333 6.94516 13.3333 8C13.3333 9.41448 12.7714 10.771 11.7712 11.7712C10.771 12.7714 9.41449 13.3333 8 13.3333V13.3333Z" fill="#3A3A3B" />
                        </g>
                    </svg>
                    <p className='fs-14'>{recipe.time / 60} min</p>
                </span>
            </div>
            <div className='ingredients-wrapper'>
                {
                    recipe.ingredients.slice(0, 3)?.map((ing, i) => (
                        <>
                            <span className='ingredients' key={ing}>{ing}</span>
                            {i === recipe.ingredients.slice(0, 3).length - 1 ? '' : <span className='seperator'>
                                <svg width="2" height="15" viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1" y1="13.5" x2="1" y2="1.5" stroke="#2EACAA" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>}
                        </>
                    )) || ''
                }
            </div>
        </div>

        <label className='ui-bookmark btn'>
            <input type="checkbox"
                onClick={(e) => handleBookmark(e, recipe)}
                checked={recipe?.isBookmarked}/>
            <div className='bookmark'></div>
        </label>
    </div>
}

export default ReceipeCard;