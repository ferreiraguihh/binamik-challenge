import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import CardPerson from './CardPerson/CardPerson'
import './Persons.css'
import search from '../../assets/img/search-wars.png'
import { getPersons, filterPersons } from '../../store/action/persons'
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';

function Persons() {
    const [page, setPage] = useState(1)
    const [isFilter, setIsFilter] = useState(false)
    const [textFilter, setTextFilter] = useState('')
    const personsWar = useSelector((state) => state.persons.results);
    const qntPersons = useSelector((state) => state.persons.count);
    const loading = useSelector((state) => state.loading)

    const dispatch = useDispatch();

    useEffect(() => {
        if (!isFilter) {
            dispatch(getPersons(page))
        } else {
            dispatch(filterPersons(textFilter, page));
        }
    }, [page])

    const handlePageChange = e => {
        if (textFilter === '') {
            setIsFilter(false)
        }
        let selected = e;
        setPage(selected)
    }

    const handleSearch = (e) => {
        setIsFilter(true)
        setTextFilter(e.target.value)
        setTimeout(() => {
            dispatch(filterPersons(e.target.value, page));
        }, 1000);
    }

    return (
        <div className="container-person-page">
            <div className="container-input-search">
                <img src={search} />
                <input onChange={(e) => handleSearch(e)} />
            </div>
            <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={qntPersons}
                pageRangeDisplayed={5}
                onChange={(e) => handlePageChange(e)}
            />
            <div className="container-page-card-person">
                {loading ? <ReactLoading type="spin" color={'#231e39'} height={'20%'} width={130} /> :
                    <>
                        {personsWar?.map(starPersons => (
                            <CardPerson key={starPersons.name} starPersons={starPersons} />
                        ))}
                    </>
                }
            </div>

            <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={qntPersons}
                pageRangeDisplayed={5}
                onChange={(e) => handlePageChange(e)}
            />
        </div>
    );
}

export default Persons;