import { reactive } from 'vue'
import views from "./assets/data/views";

export const store = reactive({
    searchText: "",
    loading: true,
    api_url: 'http://127.0.0.1:8000/',
    projects_path: 'api/projects/',
    projects: [],
    error: null,
    views,

    getImage(path) {
        return this.api_url + 'storage/' + path;
    }
});