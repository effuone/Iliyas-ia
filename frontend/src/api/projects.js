import { axiosApiInstance } from ".";

export const getAllProjects = async () => {
    const res = await axiosApiInstance.get(`/projects`)
    return res.data
};


export const createProject = async (title, description, image) => {
    try{
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("description", description);
        const res = await axiosApiInstance.post("projects/", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return res.data;
    }catch(e){
        console.log(e)
    }
};  