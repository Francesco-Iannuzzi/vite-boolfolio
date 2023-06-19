import { reactive } from 'vue'
import views from "./assets/data/views";

export const store = reactive({
    views,
    searchText: "",
    loading: true,
    api_url: 'http://127.0.0.1:8000/',
    projects_path: 'api/projects/',
    contacts_path: 'api/contacts',
    projects: [],
    error: null,
    url_linkedin: 'https://www.linkedin.com/in/francesco-iannuzzi-085778237/',
    url_instagram: 'https://www.linkedin.com/in/francesco-iannuzzi-085778237/',

    getImage(path) {
        return this.api_url + 'storage/' + path;
    }
});