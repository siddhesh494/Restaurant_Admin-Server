export interface AddReviewBody {
  collegeID: number
  parentReviewID?: number
  ratings?: {
    locality: number
    faculties: number
    bathrooms: number
    labs: number
    clubs: number
    placement: number
  }
  comment: string,
  userID: number
}

export interface InsertReview {
  UserID: number,
  CollegeID: number,
  parentReviewID?: number,
  Locality?: number
  Faculties?: number
  Bathrooms?: number
  Labs?: number
  Clubs?: number
  Placement?: number
  OverallRating?: number
  Comment: string
}