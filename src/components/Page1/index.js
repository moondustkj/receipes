import React, { useEffect, useState } from 'react';
import './index.css';
import { filters } from '../../helper/data';
import clsx from 'clsx';
import ReceipeCard from '../ReceipeCard';
import { useDispatch, useSelector } from 'react-redux';
import { updateList } from '../../slice/recipe';

const Page1 = () => {

    const [selectedFilter, setselectedFilter] = useState('breakfast');
    const [filteredRecipeList, setFilteredRecipeList] = useState([]);
    const { recipesList } = useSelector(state => state.recipe);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedFilter) {
            const list = recipesList.filter(item => item.type === selectedFilter);
            if (Array.isArray(list) && list.length) {
                setFilteredRecipeList(list);
            } else setFilteredRecipeList([]);
        }
    }, [selectedFilter]);

    const bookmarkReceipe = (event, item) => {
        event.stopPropagation();
        let currentList = [...recipesList];
        currentList = currentList.map(i => ({
            ...i, isBookmarked: i.id === item.id ? !item.isBookmarked : i.isBookmarked
        }));
        dispatch(updateList(currentList));
        setFilteredRecipeList(currentList.filter(i => i.type === selectedFilter));
    }


    return (
        <div id='Page1'>
            <header className='flex justify-between items-center'>
                <img src='./assets/account.png' alt='account' />
                <img src='./assets/logo.png' alt='logo' />
                <img src='./assets/Zoom In.png' alt='zoom-in' />
            </header>

            <section id='filters'>
                {
                    filters?.length ? filters.map(item => (
                        <span key={item.id} className={clsx({
                            'active': selectedFilter === item.value
                        })} onClick={() => {
                            setselectedFilter(item.value)
                        }}>{item.label}</span>
                    )) : ''
                }
            </section>

            <section id='filteredRecipeList'>
                {
                    filteredRecipeList?.length ? filteredRecipeList.map(item => (<ReceipeCard recipe={item} handleBookmark={bookmarkReceipe} />)) : 
                    <div className='flex flex-col items-center'>
                        <svg width="250" height="200" viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="250" height="200" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M207 65C210.866 65 214 68.134 214 72C214 75.866 210.866 79 207 79H167C170.866 79 174 82.134 174 86C174 89.866 170.866 93 167 93H189C192.866 93 196 96.134 196 100C196 103.866 192.866 107 189 107H178.826C173.952 107 170 110.134 170 114C170 116.577 172 118.911 176 121C179.866 121 183 124.134 183 128C183 131.866 179.866 135 176 135H93C89.134 135 86 131.866 86 128C86 124.134 89.134 121 93 121H54C50.134 121 47 117.866 47 114C47 110.134 50.134 107 54 107H94C97.866 107 101 103.866 101 100C101 96.134 97.866 93 94 93H69C65.134 93 62 89.866 62 86C62 82.134 65.134 79 69 79H109C105.134 79 102 75.866 102 72C102 68.134 105.134 65 109 65H207ZM207 93C210.866 93 214 96.134 214 100C214 103.866 210.866 107 207 107C203.134 107 200 103.866 200 100C200 96.134 203.134 93 207 93Z" fill="#F3F7FF" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M99.942 133.192L101.432 133.141V154.14C101.432 154.615 101.819 155 102.296 155H154.136C154.613 155 155 154.615 155 154.14V82.155C155 80.4126 153.582 79 151.832 79H104.6C102.85 79 101.432 80.4126 101.432 82.155V97.1227L99.942 97.0711C99.767 97.065 99.5917 97.062 99.416 97.062C90.3809 97.062 83 105.124 83 115.132C83 125.139 90.3809 133.202 99.416 133.202C99.5917 133.202 99.767 133.199 99.942 133.192ZM100.107 126.29C99.8778 126.309 99.6473 126.318 99.416 126.318C93.9625 126.318 89.6432 121.263 89.6432 115.132C89.6432 109.001 93.9625 103.946 99.416 103.946C99.6473 103.946 99.8778 103.955 100.107 103.973L101.432 104.079V126.184L100.107 126.29Z" fill="white" stroke="#2EACAA" stroke-width="2.5" stroke-linejoin="round" />
                            <path d="M147 85.1816V103.5M147 109.182V113.925V109.182Z" stroke="#ED6A32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M67.1279 147H74M181.128 147H184M161 147H176.428M80 147H97.4541" stroke="#2EACAA" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M128 35C125.333 39.2135 124 42.8802 124 46C124 51.5562 128.654 54.0444 128.654 60.063C128.654 63.1177 127.103 66.1507 124 69.1621" stroke="#ED6A32" stroke-width="2.5" stroke-linecap="round" />
                            <path d="M116 46C115.128 51.5127 119 52.5322 119 57.4746C119 59.9831 118 62.4915 116 65" stroke="#ED6A32" stroke-width="2.5" stroke-linecap="round" />
                            <path d="M134.795 43.4741C133.474 46.8933 134.216 48.9774 134.795 50.2041C136.033 52.8262 138 55.0896 138 57.7578C138 60.8568 136.932 63.8392 134.795 66.7051" stroke="#ED6A32" stroke-width="2.5" stroke-linecap="round" />
                            <path d="M105 84C105 83.4477 105.448 83 106 83L125 83V152H106C105.448 152 105 151.552 105 151V84Z" fill="#E8F0FE" />
                        </svg>
                        <h4>No Recipes Found !!</h4>
                    </div>
                }
            </section>
        </div>
    )
}

export default Page1;