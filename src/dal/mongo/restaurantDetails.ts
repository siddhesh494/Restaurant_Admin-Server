import { Collection, ObjectId } from "mongodb";
import { Database } from "../../boot/databases"

// import { Database } from "../../boot/databases";
const mongo = Database.getMongoInstance();

export class RestaurantDetailsDA {
  private RestaurantDetailsCollection: Collection
  constructor() {
    // super()
    this.RestaurantDetailsCollection = mongo.collection("restaurantDetails")
  }

  public async findAllRestaurant() {
    return this.RestaurantDetailsCollection.find({active: true}).toArray()
  }
  public async create(data:any) {
    return this.RestaurantDetailsCollection.insertOne(data)
  }

  public async delete(id: string) {
    const obj = { $set: {active: false } };
    return this.RestaurantDetailsCollection.updateOne({_id: new ObjectId(id)}, obj)
  }

  public async update(id: string, data:any) {
    const obj = { $set: data };
    return this.RestaurantDetailsCollection.updateOne({_id: new ObjectId(id)}, obj)
  }
}

