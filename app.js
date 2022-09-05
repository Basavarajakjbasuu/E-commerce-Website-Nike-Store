let sliderWrapper = document.querySelector('.sliderWrapper')
let menuItem = document.querySelectorAll('.menuItem')

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 1333,
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 1999,
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 2999,
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 899,
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 599,
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];



//Current product is first product
let choosenProduct = products[0];

//Selecting each element from DOM
const currentProductImg = document.querySelector('.productImg')
const currentProductTitle = document.querySelector('.productTitle')
const currentProductPrice = document.querySelector('.productPrice')
const currentProductColors = document.querySelectorAll('.color')
const currentProductSizes = document.querySelectorAll('.size')


menuItem.forEach((item, index) => {
  item.addEventListener('click', () => {

    //this line will change the current slide
    sliderWrapper.style.transform = `translateX(${-100 * index}vw)`
    // sliderWrapper.style.transform = 'translateX(-200vw)'

    //this code will change according to changed product/slide
    choosenProduct = products[index]

    //Manipulating DOM of TextContent
    currentProductTitle.textContent = choosenProduct.title
    currentProductPrice.textContent = '₹' + choosenProduct.price
    //Manipulating DOM of Image src
    currentProductImg.src = choosenProduct.colors[0].img
    
    //Assigning New Colors
    currentProductColors.forEach((color, index) => {

      //Manipulating background color
      color.style.backgroundColor = choosenProduct.colors[index].code
      
    })
  })
})

// Manipulating DOM of image source based on color click 
currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  })
})

//Changing the sizebutton backGround color

currentProductSizes.forEach((size, index) => {
  size.addEventListener('click', () => {
    currentProductSizes.forEach((size) => {
    size.style.backgroundColor = 'white'
    size.style.color = 'black'
    }) 
    size.style.backgroundColor = 'black'
    size.style.color = 'white'
  })
})

// Adding Floating form

const productButton = document.querySelector('.productButton')
const payButton = document.querySelector('.payButton')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')


productButton.addEventListener('click', () => {
  payment.style.display = 'flex'
})

close.addEventListener('click', () => {
  payment.style.display = 'none'
})

payButton.addEventListener('click', () => {
  payment.style.display = 'none'
})