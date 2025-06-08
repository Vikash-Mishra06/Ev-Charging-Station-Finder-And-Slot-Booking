import axios from "axios";

const BASE_URL="https://places.googleapis.com/v1/places:searchNearby";
const API_KEY="AIzaSyCzh6m5xYbhlOTy4MkUe-sr8lmZfpZUcCo";
const CLERK_API_KEY='pk_test_Y3VkZGx5LWhvcnNlLTczLmNsZXJrLmFjY291bnRzLmRldiQ';
const config={
    headers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask':['places.displayName',
            'places.formattedAddress',
            'places.location',
            'places.evChargeOptions',
            'places.shortFormattedAddress',
            'places.photos','places.id']

    }
}

const NewNearByPlace=(data)=>axios.post(BASE_URL,data,config);

export default{
    NewNearByPlace,
    API_KEY,
    CLERK_API_KEY
}