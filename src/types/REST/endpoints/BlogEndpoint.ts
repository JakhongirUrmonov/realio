import {BlogApi, Configuration} from "../api/generated";
import {getApiURL} from "../ApiUrl";
import {AxiosApiInstance} from "../AxiosApiInstance";

const configuration = new Configuration({});

export const Blog = new BlogApi(configuration);
