import bananImg from "../../images/banan.jpg";
import papayaImg from "../../images/pa.jpg";
import appleImg from "../../images/apple.jpg";

const initialState = {
  1: {
    title: "Бананы",
    price: 10,
    image: bananImg,
    discount: false
  },
  2: {
    title: "Яблоки",
    price: 8,
    image: appleImg,
    discount: false
  },
  3: {
    title: "Папайя",
    price: 10,
    image: papayaImg,
    discount: true,
    discountAmountPercent: 50
  }
}

export default function productListReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
