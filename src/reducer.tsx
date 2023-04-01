export type InitialState={
    products:{id:number,title:string,price:number,rating:number,image:string}[],
    cart:number[],
    user:object|null
  }
 export const initialState = {
    products: [{ id: 1, title: 'Apple iPhone 14 (128 GB) - Blue', price: 794.00, rating: 4, image: './assets/p_1.jpg' },
    { id: 2, title: 'Panasonic LUMIX DC-S5 II Full Frame Mirrorless Camera with 20-60mm F3.5-5.6 Lens, 4K 60P and 6k 30P Unlimited Video Recording, Black', price: 2349.00, rating: 5, image: './assets/p_2.jpg' },
    { id: 3, title: 'TCL 55CF630K 139cm (55 inch) QLED Fire TV (4K Ultra HD, HDR 10+, Dolby Vision & Atmos, Smart TV), Black', price: 399, rating: 4, image: './assets/p_3.jpg' },
    { id: 4, title: 'Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours Of Listening Time - Rose Gold (Latest Model)', price: 139.99, rating: 5, image: './assets/p_4.jpg' },
    { id: 5, title: 'Blivener Soft Touch Area Rug Bedroom Anti- Skid Yoga Carpet Shaggy Rugs Fluffy Motley Tie - dye Carpets Light Grey 160 x 200 cm', price: 73.89, rating: 3, image: './assets/p_5.jpg' },
    { id: 6, title: 'YRPRSODF TV Game Console Built in 883 Games, Handheld Retro Video Game Machine with 2.4G Wireless Gamepad Somatosensory Control,Grey', price: 59.99, rating: 4, image: './assets/p_6.jpg' }],
    cart: [],
    user: null
  }
  export const enum REDUCER_ACTION_TYPE{
    ADD_PRODUCT,
    REMOVE_FROM_CART,
    SET_USER
  }
  type ReducerAction={
    type:REDUCER_ACTION_TYPE,
    id?:number,
    user?:object|null
  }
  export function reducer(state: InitialState, action:ReducerAction):InitialState {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD_PRODUCT: return { ...state, cart: [...state.cart,action.id!] }
        case REDUCER_ACTION_TYPE.REMOVE_FROM_CART: return { ...state, cart: state.cart.filter((p) => p !== action.id) }
        case REDUCER_ACTION_TYPE.SET_USER: return { ...state, user: action.user! }
        default: return state;
    }
  }
  