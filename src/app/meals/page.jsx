import Meals from '@/components/Meals';
import React from 'react';

const mealsPage = () => {
    return (
        <div className='p-12'>
            <h1 className='text-2xl font-semibold text-red-500'>Choose your meals</h1>
            <h1>Choose meals of choice by searching......</h1>
            <Meals></Meals>

        </div>
    );
};

export default mealsPage;