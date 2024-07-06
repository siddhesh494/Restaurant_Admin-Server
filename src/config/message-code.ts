const MESSAGE_CODE = {
  // success series -2000
  "SUCCESS": {
    success: true,
    statusCode: "RES-2000",
    status: 200,
    message: "Success"
  },

  // client side error
  "BAD_REQUEST": {
    success: false,
    statusCode: "RES-4000",
    status: 400,
    message: "Bad Request"
  },
  "VALIDATION_ERROR": {
    success: false,
    statusCode: "RES-4002",
    status: 422,
    message: "Validation Error"
  },
  "NOT_FOUND": {
    success: false,
    statusCode: "RES-4004",
    status: 404,
    message: "Not Found"
  },
  "ALREADY_EXIST": {
    success: false,
    statusCode: "RES-4004",
    status: 404,
    message: "Data is already exist"
  },

  // auth error
  "UNAUTHORIZED_ERROR": {
    success: false,
    statusCode: "RES-4001",
    status: 401,
    message: "Unauthorized Access"
  },

  // internal error - 5000
  "INTERNAL_ERROR": {
    success: false,
    statusCode: "RES-5000",
    status: 500,
    message: "Failed"
  }
}

export {
  MESSAGE_CODE
}