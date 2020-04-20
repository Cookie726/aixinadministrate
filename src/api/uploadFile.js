import {
    post
} from "@/utils/request";

export function uploadImage(data) {
    return post("/upload", data)
}