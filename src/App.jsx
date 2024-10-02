import { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemComponent from './Components/ItemComponent';
import LoadingComponent from './Components/LoadingComponent';

const mobileDetails = [
  {
    id: '10',
    name: 'Iphone 16',
    image: 'https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg',
    price: 150000,
    numberCount: 1,
  },
  {
    id: '12',
    name: "Samsung s23",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreScptKWl_thK5pVSs3Q7BjMA41hiort6aw&s',
    price: 130000,
    numberCount: 1,
  },
  {
    id: '20',
    name: "Redmi note 15",
    image: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1680031226.49084509!800x800!85.jpg',
    price: 70000,
    numberCount: 1,
  },
  {
    id: '24',
    name: 'Vivo V15',
    image: 'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1713954730435/2790d5c514e887f3b87a593b3c3532db.png',
    price: 40000,
    numberCount: 1,
  }
]






function App() {

  const [mobilesArray, setMobilesArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(560000);
  const [totalItems, setTotalItems] = useState(1);

  const hancleIncreaseBtn = (id) => {
    // console.log("increaseBtn clicked of ", id);
    const newArray = mobilesArray.map((item) => (
      item.id === id ? { ...item, numberCount: item.numberCount + 1 } : item
    ))

    setMobilesArray(newArray);
  }

  const hancleDecreaseBtn = (id) => {
    // console.log("decrease clicked of ", id);

    const theItem = mobilesArray.filter((item) => item.id === id)
    console.log(theItem);
    console.log(theItem[0].numberCount);
    

    if (theItem[0].numberCount > 1) {
      const newArray = mobilesArray.map((item) => (
        item.id === id ? { ...item, numberCount: item.numberCount - 1 } : item
      ))
      setMobilesArray(newArray);
    }
    else {
      const newArray = mobilesArray.filter((item) => item.id != id)
      setMobilesArray(newArray)
    }



  }


  //for the totalPrice of items
  useEffect(() => {
    const totalPayablePrice = mobilesArray.reduce((acc, curr) => acc = acc + curr.price * curr.numberCount, 0);
    setTotalPrice(totalPayablePrice);
  }, [mobilesArray]);


  // fot the total number of items in cart
  useEffect(() => {
    const totalItemsinCart = mobilesArray.reduce((acc, curr) => acc = acc + curr.numberCount, 0);
    setTotalItems(totalItemsinCart);
  }, [mobilesArray])


  useEffect(() => {
    setTimeout(() => {
      setMobilesArray(mobileDetails);
    }, 1000);
  }, [])


  if (mobilesArray.length === 0) {
    return <h1 className='text-2xl absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] '>Loading....</h1>
  }

  return (
    <>
      <div className='navbar relative w-full h-[100px] bg-sky-400 px-[200px] flex justify-between items-center'>

        <h1 className='text-[2rem] text-white'>Cart</h1>

        <ShoppingCartIcon sx={{ color: 'white', fontSize: '50px' }} />
        <div className=' bg-sky-500 h-[40px] w-[40px] absolute top-[10px] right-[180px] rounded-full text-white flex items-center justify-center text-lg'>
          {totalItems}
        </div>

      </div>


      <div className='min-h-[500px] w-full px-[250px] mt-[20px] mb-[20px] '>
        {mobilesArray.map((item) => (
          <ItemComponent key={item.id} data={item} hancleDecreaseBtn={hancleDecreaseBtn} hancleIncreaseBtn={hancleIncreaseBtn} />
        ))}
      </div>

      <hr className='bg-gray-400 h-[1px] ' />

      <div className='total h-[70px] px-[250px] flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Total</h1>
        <h1 className='text-2xl font-semibold'>${totalPrice}</h1>
      </div>

      <button className='bg-sky-500 text-lg text-white w-[100px] py-[6px] rounded hover:bg-sky-400 flex justify-center items-center mx-auto '>
        Clear
      </button>
    </>
  )
}

export default App
