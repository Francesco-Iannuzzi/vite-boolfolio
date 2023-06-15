import { reactive } from 'vue'

export const store = reactive({
    searchText: "",
    loading: true,
    api_url: 'http://127.0.0.1:8000/',
    projects_path: 'api/projects/',
    projects: [],
    error: null,

    getImage(path) {
        return this.api_url + 'storage/' + path;
    }
});