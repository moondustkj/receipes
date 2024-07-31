import React, { useEffect, useState } from 'react';
import './index.css';
import { filters, receipesList } from '../../helper/data';
import clsx from 'clsx';
import ReceipeCard from '../ReceipeCard';
import { useDispatch } from 'react-redux';
import { show } from '../../slice/receipe';

const Page1 = () => {

    const [selectedFilter, setselectedFilter] = useState('breakfast');
    const [receipeList, setReceipeList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedFilter) {
            const list = receipesList.filter(item => item.type === selectedFilter);
            if (Array.isArray(list) && list.length) {
                setReceipeList(list);
                dispatch(show());
            }
        }
    }, [selectedFilter]);

    const bookmarkReceipe = (event, item) => {
        event.stopPropagation();
        console.log('item-------', item);
    }


    return (
        <div id='Page1'>
            <header className='flex justify-between items-center'>
                <img src='assets/account.png' alt='account' />
                <img src='assets/logo.png' alt='logo' />
                <img src='assets/Zoom In.png' alt='zoom-in' />
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

            <section id='receipeList'>
                {
                    receipeList?.length ? receipeList.map(item => (<ReceipeCard receipe={item} handleBookmark={bookmarkReceipe} />)) : ''
                }
            </section>
        </div>
    )
}

export default Page1;