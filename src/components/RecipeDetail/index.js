import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import './index.css';
import { updateList } from "../../slice/recipe";

const RecipeDetail = () => {
    const params = useParams();
    const { recipesList } = useSelector(state => state.recipe);
    const [currentRecipe, setCurrentRecipe] = useState({});
    const [noData, setNoData] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            const current = recipesList.find(i => i.id === parseInt(params.id));
            if (current) {
                setCurrentRecipe(current);
            } else {
                setNoData('No Data Found !!');
            }
        }
    }, []);

    const bookmarkReceipe = (event, item) => {
        event.stopPropagation();
        let currentList = [...recipesList];
        currentList = currentList.map(i => ({
            ...i, isBookmarked: i.id === item.id ? !item.isBookmarked : i.isBookmarked
        }));
        dispatch(updateList(currentList));
        setCurrentRecipe(prev => ({ ...prev, isBookmarked: !item.isBookmarked }))
    }

    useEffect(() => {
        console.log(currentRecipe, '-----');
    }, [currentRecipe]);

    const handleClose = () => {
        navigate('/page1');
    }

    return (
        <div id="recipe-detail">
            <div id="header"
                style={{
                    backgroundImage: `url(${currentRecipe?.img})`
                }}>
                <div className="flex justify-between mx-[16px] pt-[30px]">
                    <button className="btn btn-white white-bg" onClick={handleClose}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.41 8L15.71 1.71C15.8983 1.5217 16.0041 1.2663 16.0041 1C16.0041 0.733701 15.8983 0.478306 15.71 0.290002C15.5217 0.101699 15.2663 -0.00408936 15 -0.00408936C14.7337 -0.00408936 14.4783 0.101699 14.29 0.290002L8 6.59L1.71 0.290002C1.5217 0.101699 1.2663 -0.00408912 1 -0.00408912C0.733698 -0.00408912 0.478304 0.101699 0.29 0.290002C0.101696 0.478306 -0.0040915 0.733701 -0.0040915 1C-0.0040915 1.2663 0.101696 1.5217 0.29 1.71L6.59 8L0.29 14.29C0.196272 14.383 0.121877 14.4936 0.0711088 14.6154C0.0203401 14.7373 -0.00579834 14.868 -0.00579834 15C-0.00579834 15.132 0.0203401 15.2627 0.0711088 15.3846C0.121877 15.5064 0.196272 15.617 0.29 15.71C0.382963 15.8037 0.493564 15.8781 0.615423 15.9289C0.737282 15.9797 0.867988 16.0058 1 16.0058C1.13201 16.0058 1.26272 15.9797 1.38458 15.9289C1.50644 15.8781 1.61704 15.8037 1.71 15.71L8 9.41L14.29 15.71C14.383 15.8037 14.4936 15.8781 14.6154 15.9289C14.7373 15.9797 14.868 16.0058 15 16.0058C15.132 16.0058 15.2627 15.9797 15.3846 15.9289C15.5064 15.8781 15.617 15.8037 15.71 15.71C15.8037 15.617 15.8781 15.5064 15.9289 15.3846C15.9797 15.2627 16.0058 15.132 16.0058 15C16.0058 14.868 15.9797 14.7373 15.9289 14.6154C15.8781 14.4936 15.8037 14.383 15.71 14.29L9.41 8Z" fill="#3A3A3B" />
                        </svg>
                    </button>
                    <button className='white-bg btn' onClick={(e) => bookmarkReceipe(e, currentRecipe)}>
                        {!currentRecipe.isBookmarked ?
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2H7.99999C7.20434 2 6.44128 2.31607 5.87867 2.87868C5.31606 3.44129 4.99999 4.20435 4.99999 5V21C4.99929 21.1762 5.04517 21.3495 5.13297 21.5023C5.22077 21.655 5.34739 21.7819 5.49999 21.87C5.65201 21.9578 5.82446 22.004 5.99999 22.004C6.17553 22.004 6.34797 21.9578 6.49999 21.87L12 18.69L17.5 21.87C17.6524 21.9564 17.8248 22.0012 18 22C18.1752 22.0012 18.3476 21.9564 18.5 21.87C18.6526 21.7819 18.7792 21.655 18.867 21.5023C18.9548 21.3495 19.0007 21.1762 19 21V5C19 4.20435 18.6839 3.44129 18.1213 2.87868C17.5587 2.31607 16.7956 2 16 2ZM17 19.27L12.5 16.67C12.348 16.5822 12.1755 16.536 12 16.536C11.8245 16.536 11.652 16.5822 11.5 16.67L6.99999 19.27V5C6.99999 4.73478 7.10535 4.48043 7.29289 4.29289C7.48042 4.10536 7.73478 4 7.99999 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V19.27Z" fill="#3A3A3B" />
                            </svg>
                            :
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="6" fill="white" fillOpacity="0.8" />
                                <path d="M20 6H12C11.2043 6 10.4413 6.31607 9.87867 6.87868C9.31606 7.44129 8.99999 8.20435 8.99999 9V25C8.99929 25.1762 9.04517 25.3495 9.13297 25.5023C9.22077 25.655 9.34739 25.7819 9.49999 25.87C9.65201 25.9578 9.82446 26.004 9.99999 26.004C10.1755 26.004 10.348 25.9578 10.5 25.87L16 22.69L21.5 25.87C21.6524 25.9564 21.8248 26.0012 22 26C22.1752 26.0012 22.3476 25.9564 22.5 25.87C22.6526 25.7819 22.7792 25.655 22.867 25.5023C22.9548 25.3495 23.0007 25.1762 23 25V9C23 8.20435 22.6839 7.44129 22.1213 6.87868C21.5587 6.31607 20.7956 6 20 6ZM21 23.27L16.5 20.67C16.348 20.5822 16.1755 20.536 16 20.536C15.8245 20.536 15.652 20.5822 15.5 20.67L11 23.27V9C11 8.73478 11.1053 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V23.27Z" fill="#ED6A32" fillOpacity="0.8" />
                                <path d="M21.5 7.5H10.5V24.5L16.5 21.5L22 25L21.5 7.5Z" fill="#F0875A" />
                            </svg>
                        }
                    </button>
                </div>
            </div>
            <section className="card">
                <div className="flex justify-between">
                    <h4>{currentRecipe.title}</h4>
                    <span className="flex gap-1 items-center"
                        style={{
                            fontSize: '14px',
                            fontWeight: 'normal'
                        }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6.33333H7.66666V3.66666C7.66666 3.48985 7.59643 3.32028 7.4714 3.19526C7.34638 3.07023 7.17681 2.99999 7 2.99999C6.82319 2.99999 6.65362 3.07023 6.52859 3.19526C6.40357 3.32028 6.33333 3.48985 6.33333 3.66666V7C6.33333 7.17681 6.40357 7.34638 6.52859 7.4714C6.65362 7.59642 6.82319 7.66666 7 7.66666H9C9.17681 7.66666 9.34638 7.59642 9.4714 7.4714C9.59643 7.34638 9.66667 7.17681 9.66667 7C9.66667 6.82318 9.59643 6.65361 9.4714 6.52859C9.34638 6.40357 9.17681 6.33333 9 6.33333ZM7 0.333328C5.68146 0.333328 4.39252 0.724321 3.2962 1.45686C2.19987 2.18941 1.34539 3.2306 0.840801 4.44877C0.336217 5.66695 0.204195 7.00739 0.461429 8.3006C0.718664 9.5938 1.3536 10.7817 2.28595 11.714C3.2183 12.6464 4.40619 13.2813 5.6994 13.5386C6.9926 13.7958 8.33305 13.6638 9.55122 13.1592C10.7694 12.6546 11.8106 11.8001 12.5431 10.7038C13.2757 9.60747 13.6667 8.31854 13.6667 7C13.6667 6.12452 13.4942 5.25761 13.1592 4.44877C12.8242 3.63993 12.3331 2.90501 11.714 2.28595C11.095 1.66689 10.3601 1.17583 9.55122 0.840798C8.74238 0.505767 7.87548 0.333328 7 0.333328V0.333328ZM7 12.3333C5.94516 12.3333 4.91402 12.0205 4.03696 11.4345C3.15989 10.8485 2.47631 10.0155 2.07264 9.04097C1.66897 8.06643 1.56336 6.99408 1.76914 5.95951C1.97493 4.92495 2.48288 3.97464 3.22876 3.22876C3.97464 2.48288 4.92495 1.97493 5.95952 1.76914C6.99408 1.56335 8.06644 1.66897 9.04098 2.07264C10.0155 2.4763 10.8485 3.15989 11.4345 4.03695C12.0205 4.91402 12.3333 5.94516 12.3333 7C12.3333 8.41448 11.7714 9.77104 10.7712 10.7712C9.77104 11.7714 8.41449 12.3333 7 12.3333V12.3333Z" fill="#3A3A3B" />
                        </svg>
                        {currentRecipe.time / 60} min
                    </span>
                </div>
                <div className="mt-2">
                    <h4 className="mb-[10px]">Ingredients</h4>
                    <ul>
                        {
                            currentRecipe.ingredients?.map(ing => (
                                <li key={ing}>{ing}</li>
                            )) || ''
                        }
                    </ul>
                </div>
            </section>

            <section className="px-[16px] relative top-[-30px]">
                {
                    currentRecipe.steps?.map((step, i) => (
                        <div key={step} className="steps-wrapper">
                            <h5 className="step">Step {i + 1}</h5>
                            <p>{step}</p>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default RecipeDetail;