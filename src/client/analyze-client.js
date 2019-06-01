import mainAxios from './mainAxios'

export async function analyze(file) {
    const formData = new FormData();
    formData.append("file", file);

    return await mainAxios.post("api/v1/analyze", formData, { headers: { 'Content-Type': 'multipart/form-data' } });
}
