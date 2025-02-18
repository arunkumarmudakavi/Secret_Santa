import axios from "axios"

const uploadFile = async (data) => {
    console.log("4: ",data)
    try {
        console.log("6: ",data?.name)
        return await axios.post(
            `${import.meta.env.VITE_API_URL}/upload-csv`, 
            data,
            Multipart/form-data
        )
    } catch (error) {
        return {
            ok: false
        }
    }
}

export {uploadFile}