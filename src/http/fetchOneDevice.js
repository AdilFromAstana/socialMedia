import $api from "./index";

export const fetchOneDevice = async (id) => {
    let {data} = await $api.get('/' + id)
    return data
}