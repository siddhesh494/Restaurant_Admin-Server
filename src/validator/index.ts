import { VALIDATE_MODULE_NAMES } from "../config/validator-config";
import restaurantSchema from "./restaurant";

export default function getSchema(moduleName: string, routeName: string) {

  switch(moduleName) {
    case VALIDATE_MODULE_NAMES.restaurant.module:
      return restaurantSchema(routeName)
  }
}