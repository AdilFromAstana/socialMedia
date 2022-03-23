import $api from "./index";

export const fetchOneDevice = async (_id) => {
    const {data} = await $api.get('/' + _id)
    return data
}