export interface CreateRestaurant {
  restaurantName: string
  description: string
  location: string
  priceFor2: string
  active : boolean
  createdAt: Date
  updatedAt: Date
  menu?: MenuRestaurant[]
}

export interface MenuRestaurant {
  categoryName: string
  foodList : {
    foodName: string
    isVeg: boolean
    price: number | string
  }[]
}

export interface UpdateRestaurant {
  restaurantName: string
  description: string
  location: string
  priceFor2: string
  updatedAt: Date
  menu?: MenuRestaurant[]
}