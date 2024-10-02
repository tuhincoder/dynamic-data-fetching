'use client'

import { useEffect, useState } from "react";

const Meals = () => {
    const [search, setSearch] = useState('b')
    const [error, setError] = useState("")
    const [meals, setMeals] = useState([])


    // const loadMealsData = async () => {
    //     try {
    //         const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
    //         const data = await res.json()
    //         console.log(data.meals);
    //         setMeals(data.meals)

    //     } catch (error) {
    //         setError('No Data Found')
    //         console.log(error);
    //     }
    // }


    // useEffect(() => {
    //     loadMealsData()
    // }, [search])

    // const handleSearch = (e) => {
    //     setSearch(e.target.value)

    // }

    const loadMealsData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            const data = await res.json()
            setMeals(data?.meals)
            setError('')
        } catch (error) {
            setError('No Data Found')
            console.log(error);
        }
    }

    useEffect(() => {
        loadMealsData()
    }, [search])

    const handleSearch = (e) => {
        // console.log(e.target.value);
        setSearch(e.target.value)
    }





    return (
        <div className='p-12 bg-gray-50'>
            <input type="text"
                onChange={handleSearch}
                className='p-2 outline-none text-lg border-transparent text-slate-500'
                placeholder='Search Meals' />
            <button className='bg-red-300  p-2 text-lg text-white'>Search</button>
            {/* --------- */}
            <div className="mt-12 grid grid-cols-3 gap-8 ">
                {
                    meals?.length > 0 && !error && meals?.map((meal) => (
                        <div key={meal.idMeal} className=" border-2 p-5">
                            <h1 className="text-2xl">{meal.strMeal}</h1>
                            <p>{meal.strInstructions}</p>
                        </div>
                    ))
                }
            </div>
            <h2 className="text-red-500 text-xl">{error}</h2>

        </div>
    );
};

export default Meals;