import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ItemComponent = (props) => {

    const { hancleDecreaseBtn } = props
    const { hancleIncreaseBtn } = props

    // console.log(hancleDecreaseBtn);
    
    

    const {data} = props
   
    



    return ( 
        <div className='h-[130px] flex justify-between'>
            <div className='datailsDiv  h-full  flex'>
                <img
                    src={ data.image }
                    className='h-full w-[130px]'
                />
                <div className='p-[15px]'>
                    <h1 className='text-2xl font-semibold'>{data.name}</h1>
                    <h1 className='text-xl '>${data.price}</h1>
                    <button className='hover:text-sky-500'> 
                        Remove
                    </button>
                </div>
            </div>

            <div className='increasedecrease-div w-[100px] h-[full] flex flex-col items-center justify-center'>
                <KeyboardArrowUpIcon
                    onClick={()=>hancleIncreaseBtn(data.id)}
                    sx={{ fontSize: '50px', color: 'black', '&:hover': { color: 'blue' } }} />
                <h1>{ data.numberCount }</h1>
                <KeyboardArrowDownIcon
                    onClick={()=>hancleDecreaseBtn(data.id)}
                    sx={{ fontSize: '50px', color: 'black', '&:hover': { color: 'blue' } }} />
            </div>
        </div>
    )
}

export default ItemComponent;
